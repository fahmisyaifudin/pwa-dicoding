importScripts('js/workbox-sw.js');
 
if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([
    { url: '/css/materialize.min.css', revision: '1' },
    { url: '/js/materialize.min.js', revision: '1' },
    { url: '/js/axios.min.js', revision: '1' },
    { url: '/js/database.js', revision: '1' },
    { url: '/js/idb.js', revision: '1' },
    { url: '/js/jquery-3.4.1.min.js', revision: '1' },
    { url: '/js/klasmen.js', revision: '1' },
    { url: '/js/jadwal.js', revision: '1' },
    { url: '/js/main.js', revision: '1' },
    { url: '/js/workbox-sw.js', revision: '1' },
    { url: '/images/icon.png', revision: '1' },
    { url: '/images/icon_192x192.png', revision: '1' },
    { url: '/js/materialize.min.js', revision: '1' },
    { url: '/database.html', revision: '1' },
    { url: '/index.html', revision: '1' },
    { url: '/jadwal.html', revision: '1' },
    { url: 'manifest.json', revision: '1' },
]);

workbox.routing.registerRoute(
  /\.(?:html)$/,
  workbox.strategies.staleWhileRevalidate({
      cacheName: 'pages'
  })
);

workbox.routing.registerRoute(
  /^https:\/\/api\.football-data\.org/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'football-api',
  })
);

  self.addEventListener('push', function(event) {
    var body;
    if (event.data) {
      body = event.data.text();
    } else {
      body = 'Push message no payload';
    }
    var options = {
      body: body,
      icon: 'images/icon.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });