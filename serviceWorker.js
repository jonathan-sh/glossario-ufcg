(function() {
  'use-strict';

  // https://developers.google.com/web/tools/workbox
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
  );

  if (!workbox) return;

  workbox.setConfig({ debug: false });

  // Image Cache
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  );

  // Default cache
  workbox.routing.registerRoute(/.*/, new workbox.strategies.NetworkFirst());
})();
