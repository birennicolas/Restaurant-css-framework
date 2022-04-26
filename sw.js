const staticCacheName = "cache-v1";
const assets = ["/", "/index.html"];

// ajout de fichiers en cache
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});
