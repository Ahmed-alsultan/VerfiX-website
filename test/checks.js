#!/usr/bin/env node
/**
 * test/checks.js – Automated pre-deploy quality checks
 * ──────────────────────────────────────────────────────
 * Usage:
 *   node test/checks.js           # checks ./dist
 *   node test/checks.js src       # checks source files
 *   node test/checks.js --json    # JSON output
 */
'use strict';

const fs   = require('fs');
const path = require('path');

const TARGET   = process.argv[2] === 'src' ? '.' :
                 process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : './dist';
const JSON_OUT = process.argv.includes('--json');
const REPORT   = path.join(__dirname, '..', 'test-report.json');

let errors   = 0;
let warnings = 0;
const results = [];

function log(type, file, msg) {
  const rel = path.relative(process.cwd(), file);
  results.push({ type, file: rel, message: msg });
  if (!JSON_OUT) {
    const icons = { ERROR: '\u274c', WARN: '\u26a0\ufe0f', PASS: '\u2713' };
    console[type === 'ERROR' ? 'error' : type === 'WARN' ? 'warn' : 'log'](
      `${icons[type] || ' '} ${rel}: ${msg}`
    );
  }
}

function checkFile(filePath) {
  let content;
  try { content = fs.readFileSync(filePath, 'utf8'); }
  catch(e) { log('ERROR', filePath, 'Cannot read file: ' + e.message); errors++; return; }

  // 1. Missing alt attributes on <img> tags
  const imgNoAlt = content.match(/<img(?![^>]*\balt=)[^>]+>/g) || [];
  if (imgNoAlt.length > 0) {
    log('WARN', filePath, `${imgNoAlt.length} image(s) missing alt attribute`);
    warnings += imgNoAlt.length;
  }

  // 2. Empty href attributes
  const emptyHref = content.match(/href=["']\s*["']/g) || [];
  if (emptyHref.length > 0) {
    log('ERROR', filePath, `${emptyHref.length} empty href attribute(s)`);
    errors += emptyHref.length;
  }

  // 3. Inline event handlers (informational — not errors)
  const inlineHandlers = (content.match(/\b(?:onclick|onmouseover|onkeydown|onload|onerror)=/g) || []).length;
  if (inlineHandlers > 10) {
    log('WARN', filePath, `${inlineHandlers} inline event handler(s) — consider moving to JS`);
  }

  // 4. Missing meta description
  if (!content.includes('<meta name="description"') && !content.includes("<meta name='description'")) {
    log('WARN', filePath, 'Missing meta description');
    warnings++;
  }

  // 5. Missing canonical URL
  if (!content.includes('rel="canonical"') && !content.includes("rel='canonical'")) {
    log('WARN', filePath, 'Missing canonical URL');
  }

  // 6. Missing <main> landmark
  if (!content.includes('<main')) {
    log('ERROR', filePath, 'Missing <main> landmark (accessibility)');
    errors++;
  }

  // 7. Duplicate IDs within a page
  const ids = [];
  const idRe = /\bid=["']([^"']+)["']/g;
  let m;
  while ((m = idRe.exec(content)) !== null) ids.push(m[1]);
  const dups = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dups.length > 0) {
    log('ERROR', filePath, `Duplicate IDs: ${[...new Set(dups)].join(', ')}`);
    errors += dups.length;
  }

  // 8. Dead href on div/span in nav
  const navMatch = content.match(/<nav[\s\S]*?<\/nav>/);
  if (navMatch) {
    const deadDivs  = (navMatch[0].match(/<div[^>]+href=/g)  || []).length;
    const deadSpans = (navMatch[0].match(/<span[^>]+href=/g) || []).length;
    if (deadDivs + deadSpans > 0) {
      log('ERROR', filePath, `${deadDivs + deadSpans} dead href(s) on <div>/<span> in nav`);
      errors += deadDivs + deadSpans;
    }
  }

  // 9. Skip link present
  if (content.includes('<nav') && !content.includes('skip-link')) {
    log('WARN', filePath, 'Missing skip-to-main-content link');
  }
}

// Files that are HTML fragments, not full pages — skip full-page checks
const FRAGMENT_DIRS = new Set(['components']);
const SKIP_DIRS     = new Set(['node_modules', '.git', 'test']);

function isFragment(filePath) {
  const parts = filePath.replace(/\\/g, '/').split('/');
  return parts.some(p => FRAGMENT_DIRS.has(p));
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`\u274c Target directory not found: ${dir}`);
    process.exit(1);
  }
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walkDir(full);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      if (!isFragment(full)) checkFile(full);
    }
  }
}

// ── Main ──────────────────────────────────────────────────
const startMs = Date.now();

if (!JSON_OUT) {
  console.log('\n\ud83d\udd0d  Running pre-deploy checks...');
  console.log(`    Target: ${path.resolve(TARGET)}\n`);
}

walkDir(TARGET);

const htmlCount = results.filter(r => r.file).length;
const duration  = ((Date.now() - startMs) / 1000).toFixed(2);

// Write JSON report
const report = { errors, warnings, duration: duration + 's', timestamp: new Date().toISOString(), checks: results };
try { fs.writeFileSync(REPORT, JSON.stringify(report, null, 2)); } catch(e) {}

if (JSON_OUT) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log('\n' + '\u2550'.repeat(48));
  console.log(`  \u274c ERRORS:   ${errors}`);
  console.log(`  \u26a0\ufe0f  WARNINGS: ${warnings}`);
  console.log(`  \u23f1  Duration: ${duration}s`);
  console.log(`  \ud83d\udcc4 Report:   test-report.json`);
  console.log('\u2550'.repeat(48) + '\n');
}

process.exit(errors > 0 ? 1 : 0);
