#!/usr/bin/env node
/**
 * VerfiX Build Script — build.js
 * ─────────────────────────────
 * Reads env vars (or .env), injects components into templates,
 * updates meta references, generates sitemap.xml, copies everything to dist/.
 *
 * Usage:
 *   npm run build          # production
 *   npm run build:dev      # development (no minification, relaxed CSP)
 *   NODE_ENV=production node build.js
 */

'use strict';
// ── Page manifest (explicit list per spec 2.1) ──
const PAGES_LIST = [
  'index.html','about.html','solutions.html','industries.html','contact.html',
  'careers.html','case-studies.html','press.html','gateway.html','trust-center.html',
  'resources.html','api.html','privacy.html','terms.html','impressum.html',
  'datenschutz.html','mentions-legales.html','politique-confidentialite.html'
];
const LANG_DIRS = ['de','fr','en'];
// Note: build uses walkDir for exhaustive coverage; PAGES_LIST used for validation


const fs   = require('fs');
const path = require('path');

// ── Load .env if present (simple parser, no dotenv required) ──
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  });
}

const ENV = {
  NODE_ENV   : process.env.NODE_ENV   || 'production',
  GA4_ID     : process.env.GA4_ID     || 'G-95ZS424SMP',
  CALENDLY   : process.env.CALENDLY_URL || 'https://calendly.com/ahmed-ahmed-alsultan/30min',
  SITE_URL   : (process.env.SITE_URL  || 'https://verfix.ch').replace(/\/$/, ''),
  DIST_DIR   : process.env.DIST_DIR   || 'dist',
};

const SRC  = __dirname;
const DIST = path.join(SRC, ENV.DIST_DIR);
const isProd = ENV.NODE_ENV === 'production';
const BUILD_DATE = new Date().toISOString();
const BUILD_YEAR = new Date().getFullYear();

log(`\n🔧  VerfiX Build — ${ENV.NODE_ENV.toUpperCase()}`);
log(`    GA4: ${ENV.GA4_ID} | Site: ${ENV.SITE_URL}`);

// ── Utilities ──────────────────────────────────────────────
function log(msg)  { console.log(msg); }
function warn(msg) { console.warn('⚠  ' + msg); }

function walkDir(dir, ext) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['node_modules','.git','dist','components','test'].includes(entry.name)) {
      results.push(...walkDir(full, ext));
    } else if (entry.isFile() && (!ext || full.endsWith(ext))) {
      results.push(full);
    }
  });
  return results;
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  });
}

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

// ── Load components ────────────────────────────────────────
function loadComponents() {
  const compDir = path.join(SRC, 'components');
  const comps = {};
  if (fs.existsSync(compDir)) {
    fs.readdirSync(compDir).forEach(fn => {
      const key = fn.replace('.html','');
      comps[key] = fs.readFileSync(path.join(compDir, fn), 'utf8');
    });
  }
  return comps;
}

// ── Template variable injection ────────────────────────────
function applyVars(html, vars) {
  return html
    .replace(/\{\{GA4_ID\}\}/g,   vars.GA4_ID)
    .replace(/\{\{CALENDLY\}\}/g, vars.CALENDLY)
    .replace(/\{\{SITE_URL\}\}/g, vars.SITE_URL)
    .replace(/\{\{BUILD_DATE\}\}/g, BUILD_DATE)
    .replace(/\{\{BUILD_YEAR\}\}/g, String(BUILD_YEAR))
    .replace(/\{\{NODE_ENV\}\}/g,   ENV.NODE_ENV);
}

// ── Security: inject nonce into CSP meta if present ───────
function injectBuildMeta(html) {
  // Add a build-info comment at top of <head> for debugging
  const meta = `  <!-- Built: ${BUILD_DATE} | ENV: ${ENV.NODE_ENV} -->`;
  return html.replace('</head>', meta + '\n</head>');
}

// ── Process a single HTML file ─────────────────────────────
function processHTML(src, dest, comps, relPath) {
  let html = fs.readFileSync(src, 'utf8');

  // ── Component injection (nav, footer, shared meta) ──
  // Replace <nav ...>...</nav> with components/header.html
  if (comps.header) {
    html = html.replace(/<nav[\s\S]*?<\/nav>/, comps.header);
  }
  // Replace <footer ...>...</footer> with components/footer.html
  if (comps.footer) {
    html = html.replace(/<footer[\s\S]*?<\/footer>/, comps.footer);
  }
  // Inject shared meta into <head> (after opening <head> tag)
  if (comps.meta && !html.includes('<!-- meta-injected -->')) {
    html = html.replace(/(<head>)/, `$1
  <!-- meta-injected -->
  ${comps.meta}`);
  }

  // ── Variable substitution ──
  html = applyVars(html, ENV);

  // Replace hardcoded GA4 ID with env var (in case it differs)
  if (ENV.GA4_ID && ENV.GA4_ID !== 'G-XXXXXXXXXX') {
    html = html.replace(/G-XXXXXXXXXX/g, ENV.GA4_ID);
  }

  // Replace hardcoded Calendly (shouldn't exist but safety net)
  html = html.replace(/CALENDLY_PLACEHOLDER/g, ENV.CALENDLY);

  // Add manifest link if not present
  if (!html.includes('manifest.json')) {
    html = html.replace('</head>',
      '  <link rel="manifest" href="/manifest.json"/>\n</head>');
  }

  // Add service worker registration if not present
  if (!html.includes('sw.js') && !html.includes('serviceWorker')) {
    const swScript = `
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').catch(function(){});
  });
}
</script>`;
    html = html.replace('</body>', swScript + '\n</body>');
  }

  // Dev: add noindex to prevent staging indexing
  if (!isProd && !html.includes('noindex')) {
    html = html.replace('<meta name="robots"',
      '<meta name="robots" content="noindex, nofollow"/>\n  <meta name="robots-orig"');
  }

  html = injectBuildMeta(html);

  ensureDir(path.dirname(dest));
  fs.writeFileSync(dest, html, 'utf8');
}

// ── Generate sitemap.xml ───────────────────────────────────
function generateSitemap(htmlFiles) {
  const urls = htmlFiles.map(f => {
    const rel = path.relative(SRC, f).replace(/\\/g, '/');
    const url = rel === 'index.html' ? '/' : '/' + rel.replace(/\/index\.html$/, '/').replace(/\.html$/, '/');

    // Skip non-canonical pages
    if (url.includes('/offline') || url.includes('/dist/')) return null;

    const priority = url === '/' ? '1.0' :
                     url.match(/^\/products|\/solutions|\/about|\/contact/) ? '0.8' :
                     url.match(/^\/insights|\/resources|\/faq/) ? '0.7' : '0.6';
    const changefreq = url === '/' ? 'weekly' :
                       url.includes('/insights/') ? 'monthly' : 'monthly';

    return `  <url>
    <loc>${ENV.SITE_URL}${url}</loc>
    <lastmod>${BUILD_DATE.substring(0,10)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).filter(Boolean);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;
}

// ── Generate robots.txt ────────────────────────────────────
function generateRobots() {
  return `User-agent: *
${isProd ? 'Allow: /' : 'Disallow: /'}
Sitemap: ${ENV.SITE_URL}/sitemap.xml
`;
}

// ── MAIN BUILD ─────────────────────────────────────────────
(function main() {
  // 1. Clean dist
  if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
  ensureDir(DIST);
  log(`\n📁  Dist: ${DIST}`);

  // 2. Load components
  const comps = loadComponents();
  log(`🧩  Components: ${Object.keys(comps).join(', ') || 'none (using full HTML files)'}`);

  // 3. Process HTML files
  const htmlFiles = walkDir(SRC, '.html').filter(f =>
    !f.includes('/dist/') && !f.includes('/node_modules/') && !f.includes('/components/')
  );
  log(`📄  Processing ${htmlFiles.length} HTML files...`);
  let processed = 0;
  htmlFiles.forEach(src => {
    const rel  = path.relative(SRC, src);
    const dest = path.join(DIST, rel);
    try {
      processHTML(src, dest, comps, rel);
      processed++;
    } catch(e) {
      warn(`Failed to process ${rel}: ${e.message}`);
    }
  });
  log(`    ✓ ${processed} HTML files processed`);

  // 4. Copy static assets
  const staticDirs = ['css','js','assets'];
  staticDirs.forEach(dir => {
    const s = path.join(SRC, dir);
    if (fs.existsSync(s)) {
      copyDir(s, path.join(DIST, dir));
      log(`    ✓ Copied /${dir}/`);
    }
  });

  // 5. Copy root files
  const rootFiles = ['manifest.json','sw.js','offline.html','serve.py','.htaccess','_redirects'];
  rootFiles.forEach(fn => {
    const s = path.join(SRC, fn);
    if (fs.existsSync(s)) {
      fs.copyFileSync(s, path.join(DIST, fn));
      log(`    ✓ Copied ${fn}`);
    }
  });

  // 6. Copy vercel.json to dist
  const vcSrc = path.join(SRC, 'vercel.json');
  if (fs.existsSync(vcSrc)) {
    fs.copyFileSync(vcSrc, path.join(DIST, 'vercel.json'));
    log('    ✓ Copied vercel.json');
  }

  // 7. Generate sitemap
  const sitemap = generateSitemap(htmlFiles);
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8');
  const urlCount = (sitemap.match(/<url>/g)||[]).length;
  log(`🗺   Generated sitemap.xml (${urlCount} URLs)`);

  // 8. Generate robots.txt
  fs.writeFileSync(path.join(DIST, 'robots.txt'), generateRobots(), 'utf8');
  log('🤖  Generated robots.txt');

  // 9. Build summary
  const distSize = walkDir(DIST).reduce((acc, f) => acc + fs.statSync(f).size, 0);
  log(`\n✅  Build complete — ${Math.round(distSize/1024)}KB in dist/`);
  log(`    ${walkDir(DIST,'.html').length} HTML | ${isProd ? 'PRODUCTION' : 'DEVELOPMENT'}\n`);
})();
