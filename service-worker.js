var cacheName = 'pwadedoduro+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        

        './assents/img/AppImage/16.png',
        './assents/img/AppImage/20.png',
        './assents/img/AppImage/29.png',
        './assents/img/AppImage/32.png',
        './assents/img/AppImage/40.png',
        './assents/img/AppImage/50.png',
        './assents/img/AppImage/57.png',
        './assents/img/AppImage/58.png',
        './assents/img/AppImage/60.png',
        './assents/img/AppImage/64.png',
        './assents/img/AppImage/72.png',
        './assents/img/AppImage/76.png',
        './assents/img/AppImage/80.png',
        './assents/img/AppImage/100.png',
        './assents/img/AppImage/114.png',
        './assents/img/AppImage/120.png',
        './assents/img/AppImage/128.png',
        './assents/img/AppImage/144.png',
        './assents/img/AppImage/152.png',
        './assents/img/AppImage/167.png',
        './assents/img/AppImage/180.png',
        './assents/img/AppImage/192.png',
        './assents/img/AppImage/256.png',
        './assents/img/AppImage/512.png',
        './assents/img/AppImage/1024.png',
        
        



    

       
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});
    