let coreAssets = [
  "/static/js/main.138b24ce.chunk.js",
  "/static/js/2.197f85c8.chunk.js",
  //'https://accounts.google.com/gsi/client',
  "/metabase/api/session/properties",
  "/metabase/app/dist/f1405bd8a987c2ea8a67.woff2",
  "/metabase/app/dist/f33015cf2124b2046860.woff2",
  "/metabase/app/dist/65e877e527022735c1a1.woff2",
  "/static/media/Azadi_Ka_Amrit_Mahotsav.e2e8a504.png",
  "/metabase/app/assets/geojson/us-states.json",
  "/logo192.png",
  "/metabase/app/dist/vendor.bundle.js?e2b8edc8744226cbc71f",
  "/metabase/app/dist/app-embed.bundle.js?6776fb65c4754db3dd9b",
  "/metabase/app/dist/styles.css?dc3bcf19333206e19491",
  "/metabase/app/dist/app-embed.css?95adcbb57b543a2c7671",
  "/metabase/app/dist/runtime.bundle.js?8440c6eb23722b8ccf1d",
  "/metabase/app/dist/styles.bundle.js?9547240b125d157904aa",
  "/metabase/app/dist/runtime.bundle.js?8440c6eb23722b8ccf1d",
];

self.addEventListener("install", function (event) {
  console.log("SW Installed");
  event.waitUntil(
    caches.open("app").then(function (cache) {
      for (let asset of coreAssets) {
        cache.add(new Request(asset));
      }
      console.log("Assets Added");
      return cache;
    })
  );
});

self.addEventListener("fetch", function (event) {
  let request = event.request;

  if (
    event.request.cache === "only-if-cached" &&
    event.request.mode !== "same-origin"
  )
    return;

  if (request.headers.get("Accept").includes("text/html")) {
    return;
  }

  // CSS & JavaScript
  // Offline-first
  if (coreAssets.some((v) => request.url.includes(v))) {
    console.log("Matched Asset", request.url);
    event.respondWith(
      caches
        .match(request, {
          ignoreSearch: true,
        })
        .then(function (response) {
          return (
            response ||
            fetch(request).then(function (response) {
              return response;
            })
          );
        })
    );
  }

  // Offline-first
  if (request.headers.get("Accept").includes("image")) {
    // Handle images...
  }
});
