// Define o nome da cache desta versão da PWA.
const CACHE_NAME = "atl-extractor-v1";

// Lista os ficheiros locais que devem ficar em cache.
const LOCAL_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg"
];

// Instala o service worker e guarda ficheiros locais em cache.
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

// Intercepta pedidos e tenta responder primeiro pela cache.
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Devolve a resposta em cache quando existir.
      if (cachedResponse) {
        return cachedResponse;
      }

      // Caso contrário, faz o pedido normal à rede.
      return fetch(event.request);
    })
  );
});
