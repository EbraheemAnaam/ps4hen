const cacheName = 'ps4hen-v1';
const filesToCache = [
  '/ps4hen/',
  '/ps4hen/index.html',
  '/ps4hen/int64.js',
  '/ps4hen/rop.js',
  '/ps4hen/kexploit.js',
  '/ps4hen/webkit.js',
  '/ps4hen/bg.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
