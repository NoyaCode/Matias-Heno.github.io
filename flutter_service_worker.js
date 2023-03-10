'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8f03dfbdb78cb31f824dcd23335dd783",
"assets/AssetManifest.json": "39e88580371f2c16cbd840a222e005d8",
"assets/assets/DwarfGif.webp": "a19cad48d5826cc6b58b526bbb9e0f84",
"assets/assets/GeoBanner.jpg": "df39acaa6356f1c2cccf1cfcb58d7fc9",
"assets/assets/GeoGif.webp": "2c254fb36953be096e09d02ccc3662a0",
"assets/assets/GeoImage.jpg": "c6a01468752ce998cf8717b9ca791bfa",
"assets/assets/Home1.jpg": "a56b940781739166ffd9b57c1eaf2738",
"assets/assets/Home2.jpg": "fdedd6408fb129e048c8cd4cf29dc577",
"assets/assets/Home3.jpg": "d89e6ad75e37c8a2d370a94383e8ccd2",
"assets/assets/LostBanner.jpg": "548af44e27614c45e6bf9aba04e929ba",
"assets/assets/LostGif.gif": "1a09538d7f616d579383366202e7d8b5",
"assets/assets/LostImage.jpg": "35497fea9a8a6efd2ab3a041d2ab6eab",
"assets/assets/NoyaCode.png": "6851d8745dcf557bc883466770ea56c6",
"assets/assets/RaylibLogo.png": "70ab30636e72ab1220d21e2f752da240",
"assets/assets/RocketBanner.jpg": "d264d68d3a9b4f179b609ab3aab9e067",
"assets/assets/RocketGif.webp": "536292dd5e776fdd57d585bdacdfd054",
"assets/assets/RocketImage.jpg": "4ec7fd9fa19236fb7f454aa45901b7fc",
"assets/assets/screenPogU.jpg": "40fa9d68bdb52e4e625bda2eb5b4b7b5",
"assets/assets/SupaBanner.jpg": "b235a62a5db2c16c5efe6e9365d7f862",
"assets/assets/SupaFlipGif.gif": "14796db49a8698a43fcc384bee1d8f52",
"assets/assets/SupaImage.jpg": "b8958af113cc2bffcdaceb81fd7a0f20",
"assets/assets/UnityLogo.png": "106112d1735fa0b571cd03e2fbb11bf2",
"assets/assets/UnrealLogo.png": "19f31861f8f980e334f1346a9212d141",
"assets/assets/WhimBanner.jpg": "2a6fb1563fc7e5fb8437f6b136515b5c",
"assets/assets/WhimGif.gif": "61540de9f1a20ef4fbe45e93c7d56611",
"assets/assets/WhimImage.jpg": "1883bdd57b87bc55f6ea88e39ce8f65d",
"assets/FontManifest.json": "5e5d7e32d0d73f5c8fbbf4af165b3b31",
"assets/fonts/Avenir-Light.ttf": "978153ba4ed98075bbd3e0ef32e4d887",
"assets/fonts/MaterialIcons-Regular.otf": "2881cc082446e5ee9f6830661ac51d12",
"assets/NOTICES": "e9d28510bc73a5e02c5beca9f1c9566a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0694916c8bb69ac850e24da716a6eb48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "99d45f98c5ac98517eb5cba57d3fabc0",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "3e7c7e90ff8e206f4023c12e31b0d058",
"canvaskit/canvaskit.wasm": "de9c084356c9a5267d2ffe1b383df0de",
"canvaskit/chromium/canvaskit.js": "f39c7fbb70c7d277f537a7c366d75533",
"canvaskit/chromium/canvaskit.wasm": "d350dfcd976d04bcf280f00d63a87de8",
"canvaskit/skwasm.js": "569eed0f1ca775eb9a112f5821ad278b",
"canvaskit/skwasm.wasm": "6484604a7be7b899af27bdd2341a9168",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9b7fd48affc3137a15dd701283a7d35c",
"/": "9b7fd48affc3137a15dd701283a7d35c",
"main.dart.js": "287330d25ff61c601bf5b965d6f7ef90",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
