// Define o nome da cache desta versão da PWA.
const CACHE_NAME = "atl-extractor-v1-3";

// Lista ficheiros locais guardados em cache.
const LOCAL_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg"
];

// Instala o service worker e guarda ficheiros locais.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(LOCAL_ASSETS);
    })
  );
});

// Activa o service worker e remove caches antigas.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// Intercepta pedidos e usa cache quando possível.
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Devolve resposta em cache se existir.
      if (cachedResponse) {
        return cachedResponse;
      }

      // Caso contrário, usa a rede.
      return fetch(event.request);
    })
  );
});
