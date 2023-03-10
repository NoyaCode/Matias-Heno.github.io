'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6de58fba84d5a3ceaf85ed9a2a2eaae7",
".git/config": "891b076a047e4c4d8048d3226137d1e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c87dd10c33e2c92445df4fc4bbeaef36",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d9e406a4f36b0ee859b9170cfc779715",
".git/logs/refs/heads/main": "d9e406a4f36b0ee859b9170cfc779715",
".git/logs/refs/remotes/origin/HEAD": "d4fb5b21009a012d6f3b85bae7089345",
".git/logs/refs/remotes/origin/main": "c7b43fff3c40277d362c0cbb3cfacdc6",
".git/objects/00/0575d428935b3655b59688e7f2ded67555bdd3": "720e47799992cb89ba675bbd459f0053",
".git/objects/00/7b140b7d9ec8515a767b1240c3f26547bf2be4": "9f567f00c6a1e0cc6f3fefc87eec8926",
".git/objects/01/129d54989acf88fbc3c29a424f5e4aa9914374": "cba542b8e7925c897ab90a74020f55bd",
".git/objects/07/5eed725c6adfb47d03c4d6a16add7ad747215f": "d2308f560d52fc7632364b38579d338a",
".git/objects/19/2270ea3f98a29eb476f524cdb0b3fe65baff80": "b275c27824a02e2a7f5fa7048c6afe19",
".git/objects/1a/4a33ef2e6e9f16eba5e99ddfffb3c78ba353b9": "09b266f73da0a4ad3aafce5947647cd1",
".git/objects/29/04aba135a7bde5d04e410772eb84f3895eeabc": "3a64278528045466010c03a84a399342",
".git/objects/2f/a5edbd8388f59d2f44a0467e73decf06925d43": "5ab2f28f557ffb9f750877d59745c1c2",
".git/objects/3a/6bec38dfcc43dc593a24a584ddf03059bd27a4": "684c2eda2b828f64d6fb869eeddbd561",
".git/objects/5d/07694a98a996068ae5e54ea3bae97990bb6b0c": "c97aa545e91a62a4d4919ff15a00b140",
".git/objects/78/79677554143ca7ebc8878f4e731c07d9f57b6c": "a1299cb46f0af73499a495a1f1bb6b4f",
".git/objects/7b/085cfd032ff5e9f0be5c9aaeeb86aa83324948": "cd60d429b289e8a073c551462f723eed",
".git/objects/7c/c6219ea34c0b2d3be4fefe6e0888cb3bed1440": "4c94fb859ba2414656aca923d1ecaa00",
".git/objects/a0/c4991cbd6f752783a8b6490c6c785df62b0730": "04730baba1ef01c787d50ef336465f5b",
".git/objects/a8/e6578ce0df1ba0d2ee9957b3d90fa86247fc7d": "3b61e47694e16262ed33d654c8090dc7",
".git/objects/b1/76a7ac0cea4f0ba6005aa57404d3e816963de9": "68e26d8eb193f21d1f9d7f4304f22b37",
".git/objects/d7/9ccc62ad9eb3149944d50a974a66aee6d38381": "a7e7aeb4523fa4af5792a314049a1833",
".git/objects/e5/b02c4a2f276b22d6e30ff08734b6bd81b27114": "9c0dea426833242680a9fbbf34628b1a",
".git/objects/e6/d48b7821fe0c7f1905361593fe8ea1cf4be61e": "2b20ec4ecf5b888b07dc1e68b817e14c",
".git/objects/pack/pack-bc8f6106e0af00de5e4eb590eefa0577adf4b4fb.idx": "021195fcd29e77a7332f976fc77ae64e",
".git/objects/pack/pack-bc8f6106e0af00de5e4eb590eefa0577adf4b4fb.pack": "2a199850d587712834a4d21123773e47",
".git/packed-refs": "bcb32583d1bbbc2c6e4f74d9bb731175",
".git/refs/heads/main": "097a23050e2e3dfe19f9e339d8666700",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "097a23050e2e3dfe19f9e339d8666700",
"assets/AssetManifest.bin": "8f03dfbdb78cb31f824dcd23335dd783",
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
"index.html": "fdf944fcd68a78144e97a811b41969d5",
"/": "fdf944fcd68a78144e97a811b41969d5",
"main.dart.js": "a1a4f8b9db935b3f2c41daf6aa935fc7",
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
