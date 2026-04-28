const CACHE_NAME = "monstock-v16";
const urlsToCache = ["./", "./index.html", "./manifest.json", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"];
self.addEventListener("install", event => { self.skipWaiting(); event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(names => Promise.all(names.map(n => { if (n !== CACHE_NAME) return caches.delete(n); })))); });
self.addEventListener("fetch", event => { event.respondWith(caches.match(event.request).then(res => res || fetch(event.request))); });