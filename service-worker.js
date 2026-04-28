const CACHE_NAME = "monstock-v2"; // On change la version

const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js" // Ajouté au cache
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});