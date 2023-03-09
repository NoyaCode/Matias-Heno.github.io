'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "57049540c1ba1e0ef66503a2d2ad6d67",
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
".git/index": "06e794987f4a7b555bb56a1ebb965b83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d769c4efb8b6738177e88a1ccfc7623a",
".git/logs/refs/heads/main": "d769c4efb8b6738177e88a1ccfc7623a",
".git/logs/refs/remotes/origin/HEAD": "a67fcf6fc9c2289ab09ae8bdd17cfba0",
".git/logs/refs/remotes/origin/main": "10041b16205a3b1bb4cf2818b911ff2f",
".git/objects/05/6420f94c9cb1e71e9d0f7bb19eada1aff10186": "c2552c2fe953e1caf32d9013db04576c",
".git/objects/0c/c860cf1b3a89eeaf35b73a5e90ea2a8773544f": "032c2529445248c3d9e2aac8d95a02f8",
".git/objects/12/16f91398d70ba710b16f9e4e6b5c00a2a206ce": "17c0bfc7b9e8569ee1e2d8c957287174",
".git/objects/16/a44e374af37900f42718e9db354a128c4d5bbd": "def7f7c3636b07a3f1c13ce98b894563",
".git/objects/17/a911fd16712d3923fbdd2e25aadf3b14f2b5d0": "145c5b2a2071365eea4d639fe440e467",
".git/objects/1a/6011a865acdacb9d1c73d3b5e8df900f0bab60": "3f38864cc7bfad506ddaae1361222d3a",
".git/objects/1c/10755d7c280086aba3a8fa5a5c17de71546526": "25832dc32aba63df8505ae49d0bc7204",
".git/objects/1c/c7a79fe67fba8bce84c67dfa7f966bd372dbff": "9f569dbfe48b35698f5bf74585a98add",
".git/objects/29/f148965bfc1612ae4c1e787b1aad90ba518436": "9834b075a64d2fb5e3f266556ef5d356",
".git/objects/2b/02df948596c22b6958ea605fd79d87b25bc556": "e14d2eb9c18f36a8824776e369c0e0eb",
".git/objects/32/0ff00f00cdf5904bb28dba35b9bfb88be0d0f6": "540661f1a0e72ee7d78e7a8c1afe143e",
".git/objects/35/94a59b3b43e231677f299dca59e2daa14dee0b": "02bb907bc87a1ec45bade7b6e5057930",
".git/objects/37/19dc7507c012b46da807a05467fa4cfe9a3278": "4305c7581d6ac2a7ca7c8de856386c29",
".git/objects/39/a4acf08e2437dbb0d9d0f4319507581b9657b0": "486eda7b20e26e0c812a8649e3c51b58",
".git/objects/48/5b9621132e20068cc368172d4546fb2cbe777e": "dec0c1982b46d12404dd7366df1799ba",
".git/objects/48/6dc001c6266210ed71329526589095749e7591": "ab7b7793186024629d2adcf2e8bcd318",
".git/objects/4f/102cf29ed0177878a9fc52def06cfe2073e881": "7d5fc03d0ef59d25138c042e19527bdf",
".git/objects/60/c804dc9c4bd617f67f182e6fd4c8d04347fca8": "4bd2d7519b95fe5e9a2fe0b70064a0d6",
".git/objects/67/16545a8f6de9d255ba5a95c1f4237e29e6678b": "58f2852da0acfca16536d9c4e4229958",
".git/objects/67/8056810e1eae22ad06d10016dbe678f1767d83": "b77bb3f593eafca079ecc4784cb49ae7",
".git/objects/7b/b494b051cfe6a3ff0f7df829425a66b4042b15": "6690b60b95c85beef206e3d1e0f7c978",
".git/objects/7d/8e6e42b48ad6f3a78707e9d9aa5abf90898369": "e8bec899ce5dea04a59c300401db3548",
".git/objects/83/ce6b8eb1c10cb86aa22b3324acd75a61b08616": "87cd02e4053d245677c72562980c1a5a",
".git/objects/a1/9425604747fbe73f0728ad6c652e9c44b01874": "1cb76dc3378b773387e0d2ad1f6b143e",
".git/objects/a5/ca7f6f955970962212e45e0ec142b76b6df9ba": "3d6d3d6aaefba170065109f683e50581",
".git/objects/b5/83c61fb29e1ec3396a5776a9fedfb109f01bd7": "7903a8377d56668afbf078fdc870b4ec",
".git/objects/c1/99c750d144e5f3663ccdf56bb247ee153068ea": "a5e0c61af622716964a6bb8ffd92b9bd",
".git/objects/c3/9b571b4d9ec589989312ee4c625429d5ad5f5c": "6ebf5ec160565793e48275377f02f07e",
".git/objects/cb/b95f88c0c0734092dda4c6b1102117f96128e9": "b2abe21588da186609fee6e7bdd373e5",
".git/objects/ce/0ef5d35ce992361aa3cefddf6027ce590c9095": "dfbb5ec34bf8ca7d5c9367a3e066f3fa",
".git/objects/d0/3779dfa97bd7d346302d922bd69fc604f06601": "203a0dbd41f9724ae216afc8e0e01496",
".git/objects/d2/b73c02a16562abbd5f9f22cc59a60b0d156994": "c25bda4b99782fa01c03975b26b6d4cf",
".git/objects/df/e0cdd9e05b7fb539c4cd8de610a685bedce1e2": "01e5b863fe149f3cd59c64cfbc8a68d3",
".git/objects/e1/a314017df6b5d2ca7e605a8146a7e156014fd1": "56820d1bb92c6cc7c2bb922aa31c5810",
".git/objects/eb/7f93f70a48987208cabebc593aa1d4746f6fe8": "124132d963492806b8f6649910509be1",
".git/objects/ec/4e2f0251ac8a886a76d4b706a1b26b248e10f8": "bf11a9cea483caf173071421bf24bc89",
".git/objects/pack/pack-bf76c95df47ba00a605eea0e26701e1ba858c56a.idx": "c8038d67695d83906fb72dac2848beba",
".git/objects/pack/pack-bf76c95df47ba00a605eea0e26701e1ba858c56a.pack": "14ec3a76c723e2cdcf1036e01d2b3a5e",
".git/packed-refs": "dcd0532f44ae79cf16e9821d770cdf73",
".git/refs/heads/main": "0373ca656c62c9fbabcfcd94b189c3ea",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "0373ca656c62c9fbabcfcd94b189c3ea",
"assets/AssetManifest.bin": "3a22c8df2b5316e69a0a060a16147c2d",
"assets/AssetManifest.json": "4820abddb5dc0831d8d10b81afd38c9d",
"assets/assets/DwarfGif.webp": "a08e29beda6a81bbbf7975eec5a5f033",
"assets/assets/GeoBanner.jpg": "df39acaa6356f1c2cccf1cfcb58d7fc9",
"assets/assets/GeoGif.webp": "b7a8c05038c8e8d678da356fef5b7c7a",
"assets/assets/GeoImage.jpg": "c6a01468752ce998cf8717b9ca791bfa",
"assets/assets/LostBanner.jpg": "548af44e27614c45e6bf9aba04e929ba",
"assets/assets/LostGif.webp": "01bf566ab201b28bb311c9565318fb19",
"assets/assets/LostImage.jpg": "35497fea9a8a6efd2ab3a041d2ab6eab",
"assets/assets/RaylibLogo.png": "70ab30636e72ab1220d21e2f752da240",
"assets/assets/RocketBanner.jpg": "d264d68d3a9b4f179b609ab3aab9e067",
"assets/assets/RocketGif.webp": "681df7d4406f4608901251aa963a7869",
"assets/assets/RocketImage.jpg": "4ec7fd9fa19236fb7f454aa45901b7fc",
"assets/assets/screenPogU.jpg": "40fa9d68bdb52e4e625bda2eb5b4b7b5",
"assets/assets/SupaBanner.jpg": "b235a62a5db2c16c5efe6e9365d7f862",
"assets/assets/SupaFlipGif.webp": "1d93c6c672992cddfbaf1c1041821bfd",
"assets/assets/SupaImage.jpg": "b8958af113cc2bffcdaceb81fd7a0f20",
"assets/assets/UnityLogo.png": "106112d1735fa0b571cd03e2fbb11bf2",
"assets/assets/UnrealLogo.png": "19f31861f8f980e334f1346a9212d141",
"assets/assets/WhimBanner.jpg": "2a6fb1563fc7e5fb8437f6b136515b5c",
"assets/assets/WhimGif.webp": "0d6d182de70d324c33889d5c9a15872a",
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
"index.html": "ef8bb337ab57b7efd3639094564bba3b",
"/": "ef8bb337ab57b7efd3639094564bba3b",
"main.dart.js": "0d3bc492057d974fae309ef125083a14",
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
