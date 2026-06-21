/**
 * VerfiX Service Worker — v2.0.0
 * Cache strategy:
 *   - Static assets (CSS/JS/fonts/images): Cache-First, 1-year TTL
 *   - HTML pages: Network-First with cache fallback
 *   - Offline: serve /offline.html
 */

const CACHE_NAME     = 'verfix-v2';
const STATIC_CACHE   = 'verfix-static-v2';
const OFFLINE_URL    = '/offline.html';

const PRECACHE_ASSETS = [
  '/',
  '/css/main.css',
  '/js/main.js',
  '/assets/images/verfix-logo.webp',
  '/assets/images/verfix-logo.png',
  '/offline.html',
];

// ── Install ──────────────────────────────────────────────────
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(function(cache) {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// ── Activate ─────────────────────────────────────────────────
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) {
          return k !== CACHE_NAME && k !== STATIC_CACHE;
        }).map(function(k) {
          return caches.delete(k);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// ── Fetch ─────────────────────────────────────────────────────
self.addEventListener('fetch', function(event) {
  var url = new URL(event.request.url);

  // Skip non-GET, non-same-origin, browser-extension requests
  if (event.request.method !== 'GET') return;
  if (url.origin !== location.origin) return;
  if (url.protocol === 'chrome-extension:') return;

  var isStaticAsset = /\.(css|js|webp|png|jpg|jpeg|svg|woff2?|ico)(\?.*)?$/.test(url.pathname);
  var isHTML        = url.pathname.endsWith('.html') || !url.pathname.includes('.');

  if (isStaticAsset) {
    // Cache-First for static assets
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        if (cached) return cached;
        return fetch(event.request).then(function(response) {
          if (!response || response.status !== 200) return response;
          var clone = response.clone();
          caches.open(STATIC_CACHE).then(function(cache) {
            cache.put(event.request, clone);
          });
          return response;
        });
      })
    );
  } else if (isHTML) {
    // Network-First for HTML pages
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
          return response;
        })
        .catch(function() {
          return caches.match(event.request)
            .then(function(cached) {
              return cached || caches.match(OFFLINE_URL);
            });
        })
    );
  }
});
