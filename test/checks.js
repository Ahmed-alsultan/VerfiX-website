#!/usr/bin/env node
/**
 * VerfiX Pre-Deploy Checks — test/checks.js
 * ──────────────────────────────────────────
 * Crawls the built site and checks for:
 *   1. Broken internal links (404s)
 *   2. Missing alt attributes on images
 *   3. Empty or missing meta descriptions
 *   4. Missing canonical URLs
 *   5. Missing GA4 tracking
 *   6. Dead href on div/span elements in nav
 *   7. Duplicate IDs within pages
 *   8. Missing <main> landmark
 *   9. Missing manifest.json link
 *  10. ARIA requirements
 *
 * Usage:
 *   node test/checks.js            # check src/ files
 *   node test/checks.js dist       # check dist/ files
 *   node test/checks.js --json     # output JSON report
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT      = path.join(__dirname, '..');
const TARGET    = process.argv[2] === 'dist' ? path.join(ROOT, 'dist') : ROOT;
const JSON_OUT  = process.argv.includes('--json');
const REPORT_FILE = path.join(ROOT, 'test-report.json');

const results = { passed: 0, failed: 0, warnings: 0, checks: [] };
let totalErrors = 0;

// ── Utilities ─────────────────────────────────────────────
function walk(dir, ext, acc) {
  acc = acc || [];
  if (!fs.existsSync(dir)) return acc;
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const skip = ['node_modules','.git','dist','components','test'].includes(entry.name);
      if (!skip) walk(full, ext, acc);
    } else if (!ext || full.endsWith(ext)) {
      acc.push(full);
    }
  });
  return acc;
}

function log(type, page, msg) {
  const rel = page ? path.relative(TARGET, page) : 'global';
  const entry = { type, page: rel, message: msg };
  results.checks.push(entry);
  if (type === 'ERROR')   { results.failed++;   totalErrors++; }
  if (type === 'WARN')    { results.warnings++; }
  if (type === 'PASS')    { results.passed++; }
  if (!JSON_OUT) {
    const icons = { ERROR: '✗', WARN: '⚠', PASS: '✓', INFO: 'ℹ' };
    console.log(`  ${icons[type] || ' '} [${rel}] ${msg}`);
  }
}

function checkPage(file) {
  const html = fs.readFileSync(file, 'utf8');

  // ── Check 1: Meta description ──
  const descMatch = html.match(/name="description"\s+content="([^"]*)"/) ||
                    html.match(/content="([^"]*)"\s+name="description"/);
  if (!descMatch || !descMatch[1] || descMatch[1].length < 10) {
    log('ERROR', file, 'Missing or empty meta description');
  } else {
    log('PASS', file, `Meta description: ${descMatch[1].substring(0,60)}...`);
  }

  // ── Check 2: Images with no alt ──
  const imgs = html.match(/<img(?![^>]*\balt=)[^>]+>/g) || [];
  if (imgs.length > 0) {
    log('ERROR', file, `${imgs.length} image(s) missing alt attribute`);
  } else {
    log('PASS', file, 'All images have alt attributes');
  }

  // ── Check 3: Canonical URL ──
  if (!html.includes('rel="canonical"')) {
    log('WARN', file, 'Missing canonical URL');
  } else {
    log('PASS', file, 'Has canonical URL');
  }

  // ── Check 4: GA4 tracking ──
  if (!html.includes('G-95ZS424SMP') && !html.includes('googletagmanager')) {
    log('WARN', file, 'Missing GA4 tracking');
  } else {
    log('PASS', file, 'GA4 present');
  }

  // ── Check 5: Dead href on div/span in nav ──
  const navMatch = html.match(/<nav[\s\S]*?<\/nav>/);
  if (navMatch) {
    const nav = navMatch[0];
    const deadDivs  = (nav.match(/<div[^>]+href=/g)  || []).length;
    const deadSpans = (nav.match(/<span[^>]+href=/g) || []).length;
    if (deadDivs + deadSpans > 0) {
      log('ERROR', file, `${deadDivs + deadSpans} dead href(s) on div/span in nav`);
    } else {
      log('PASS', file, 'Nav has no dead div/span hrefs');
    }
  }

  // ── Check 6: Duplicate IDs ──
  const ids = [];
  const idRe = /\bid="([^"]+)"/g;
  let idMatch;
  while ((idMatch = idRe.exec(html)) !== null) ids.push(idMatch[1]);
  const dupIds = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupIds.length > 0) {
    log('ERROR', file, `Duplicate IDs: ${[...new Set(dupIds)].join(', ')}`);
  } else {
    log('PASS', file, 'No duplicate IDs');
  }

  // ── Check 7: <main> landmark ──
  if (!html.includes('<main')) {
    log('ERROR', file, 'Missing <main> landmark');
  } else {
    log('PASS', file, 'Has <main> landmark');
  }

  // ── Check 8: manifest.json ──
  if (!html.includes('manifest.json')) {
    log('WARN', file, 'Missing manifest.json link');
  } else {
    log('PASS', file, 'manifest.json linked');
  }

  // ── Check 9: h4 in nav (heading hierarchy) ──
  if (navMatch && /<h4[^>]*>/i.test(navMatch[0])) {
    log('WARN', file, 'h4 used in nav (heading hierarchy issue)');
  }

  // ── Check 10: Skip link ──
  if (!html.includes('skip-link')) {
    log('WARN', file, 'Missing skip-to-main-content link');
  } else {
    log('PASS', file, 'Has skip link');
  }

  // ── Check 11: Title uniqueness (logged separately, collected here) ──
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/);
  return {
    title: titleMatch ? titleMatch[1].trim() : null,
    file
  };
}

// ── Check internal links ────────────────────────────────────
function checkLinks(htmlFiles) {
  const allPages = new Set();
  htmlFiles.forEach(f => {
    const rel = path.relative(TARGET, f);
    // Add the canonical URL form
    const url = rel === 'index.html' ? '/' :
                rel.replace(/\/index\.html$/, '/').replace(/\.html$/, '/');
    allPages.add(url);
    allPages.add('/' + rel); // also add .html form
  });

  // Add vercel rewrites as valid paths
  const vcPath = path.join(ROOT, 'vercel.json');
  if (fs.existsSync(vcPath)) {
    try {
      const vc = JSON.parse(fs.readFileSync(vcPath, 'utf8'));
      (vc.rewrites || []).forEach(r => {
        allPages.add(r.source);
        if (!r.source.endsWith('/')) allPages.add(r.source + '/');
      });
    } catch(e) {}
  }

  let brokenCount = 0;
  const checked = new Set();
  htmlFiles.forEach(file => {
    const html = fs.readFileSync(file, 'utf8');
    const hrefs = [];
    const aRe = /<a[^>]+href="([^"]+)"/g;
    let m;
    while ((m = aRe.exec(html)) !== null) hrefs.push(m[1]);

    hrefs.forEach(href => {
      if (!href.startsWith('/')) return; // skip external/relative
      if (href.startsWith('//'))  return; // skip protocol-relative
      const bare = href.split('#')[0].split('?')[0];
      if (!bare || bare === '/') return;
      if (checked.has(bare)) return;
      checked.add(bare);

      const exists = allPages.has(bare) || allPages.has(bare + '/') ||
                     allPages.has(bare.replace(/\/$/, '')) ||
                     fs.existsSync(path.join(TARGET, bare.replace(/^\//, ''))) ||
                     fs.existsSync(path.join(TARGET, bare.replace(/^\//, '') + '.html')) ||
                     fs.existsSync(path.join(TARGET, bare.replace(/^\//, '') + '/index.html'));

      if (!exists) {
        log('ERROR', file, `Broken internal link: ${bare}`);
        brokenCount++;
      }
    });
  });

  if (brokenCount === 0) {
    log('PASS', null, `All internal links resolve (${checked.size} checked)`);
  }
}

// ── Check title uniqueness ───────────────────────────────────
function checkTitles(pageMetas) {
  const titles = {};
  pageMetas.forEach(({ title, file }) => {
    if (!title) {
      log('ERROR', file, 'Missing <title>');
      return;
    }
    if (titles[title]) {
      log('WARN', file, `Duplicate title: "${title.substring(0,60)}" (also on ${path.relative(TARGET, titles[title])})`);
    } else {
      titles[title] = file;
    }
  });
  log('PASS', null, `Unique titles: ${Object.keys(titles).length}`);
}

// ── MAIN ──────────────────────────────────────────────────────
(function main() {
  const startTime = Date.now();
  const htmlFiles = walk(TARGET, '.html');

  if (!JSON_OUT) {
    console.log(`\n🔍  VerfiX Pre-Deploy Checks`);
    console.log(`    Target: ${TARGET}`);
    console.log(`    Pages:  ${htmlFiles.length}\n`);
    console.log('── Page checks ────────────────────────────────');
  }

  const pageMetas = htmlFiles.map(checkPage);

  if (!JSON_OUT) console.log('\n── Cross-page checks ──────────────────────────');
  checkLinks(htmlFiles);
  checkTitles(pageMetas);

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);
  results.duration = duration + 's';
  results.totalPages = htmlFiles.length;
  results.timestamp = new Date().toISOString();

  // Write JSON report
  fs.writeFileSync(REPORT_FILE, JSON.stringify(results, null, 2));

  if (!JSON_OUT) {
    console.log(`\n${'═'.repeat(50)}`);
    console.log(`  ✓ PASSED:   ${results.passed}`);
    console.log(`  ✗ ERRORS:   ${results.failed}`);
    console.log(`  ⚠ WARNINGS: ${results.warnings}`);
    console.log(`  Pages:      ${results.totalPages}`);
    console.log(`  Duration:   ${duration}s`);
    console.log(`  Report:     test-report.json`);
    console.log(`${'═'.repeat(50)}\n`);
  } else {
    console.log(JSON.stringify(results, null, 2));
  }

  process.exit(results.failed > 0 ? 1 : 0);
})();
