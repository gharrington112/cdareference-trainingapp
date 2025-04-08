const CACHE_NAME = "pwa-cache-v4";
const urlsToCache = [
  "./",
  "./index.html",
  "./assets/assets/images/centurydentallogo2.c056615264d9c4515d1c93cb0b91ccae.png",
  "./assets/assets/images/labimage.9fd6fd3fa46784f058f9b48003faf550.png",
  "./assets/assets/images/Placeholder.d1d6991d96aef40fcd08882bb8cde1d5.png",
  "./assets/assets/fonts/SpaceMono-Regular.49a79d66bdea2debf1832bf4d7aca127.ttf",
  "./assets/assets/images/dental_tray.9e729a2388ea30c5c62386ac98ce399c.jpg",
  "./assets/assets/images/resources.270e72c49588b44802de4d8d7af21d93.png",
  "https://fonts.googleapis.com/css?family=Material+Icons",
  "./favicon.ico",
  "/centurydental_test/metadata.json",
];

// Install event: Cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event: Serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
        .then((networkResponse) => {
          // Cache new pages visited dynamically
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
    }).catch(() => {
      // If offline and URL isn't cached, show fallback page
      return caches.match("./index.html");
    })
  );
});

// Activate event: Delete old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});