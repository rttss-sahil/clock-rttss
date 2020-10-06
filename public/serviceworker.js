const CACHE_NAME = "v1.0.0",
  urlToCache = ["index.html"];
// INSTALL
this.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened Cache");
      return cache.addAll(urlToCache);
    })
  );
});

//LISTEN
this.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch((err) => caches.match("index.html"));
    })
  );
});

//ACTIVATE
this.addEventListener("activate", (e) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) =>
            !cacheWhiteList.includes(cacheName)
              ? caches.delete(CACHE_NAME)
              : false
          )
        )
      )
  );
});
