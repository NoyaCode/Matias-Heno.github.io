'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "20e6a8ef7340c6450138b55db72fe340",
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
".git/index": "53d3473221d48f026a5aefca7c272c76",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2d9ea0b26f2c1267322ac16208dcc7fa",
".git/logs/refs/heads/main": "2d9ea0b26f2c1267322ac16208dcc7fa",
".git/logs/refs/remotes/origin/HEAD": "d4fb5b21009a012d6f3b85bae7089345",
".git/logs/refs/remotes/origin/main": "ead47975fbc1628fdd5f355764188143",
".git/objects/00/0575d428935b3655b59688e7f2ded67555bdd3": "720e47799992cb89ba675bbd459f0053",
".git/objects/00/7b140b7d9ec8515a767b1240c3f26547bf2be4": "9f567f00c6a1e0cc6f3fefc87eec8926",
".git/objects/01/129d54989acf88fbc3c29a424f5e4aa9914374": "cba542b8e7925c897ab90a74020f55bd",
".git/objects/07/5eed725c6adfb47d03c4d6a16add7ad747215f": "d2308f560d52fc7632364b38579d338a",
".git/objects/0d/8cbfeb68219b3b244e8ebc2cc7e6fe3f2e35e2": "61a21d380a3b088152b07333d3db99f1",
".git/objects/0f/8b2caa4a8adefd1274f2ed4440c0d0301e60ff": "115c37e4a3072a120cb25e8ab505da4d",
".git/objects/11/1aac12dd74536d330a1f167f943104c716a68a": "c2e88ba854eba4212114192308bba69a",
".git/objects/13/0f76d158db6099f956d45d8b91aa740a74e5ed": "576889bc358246879fc30f25a8a199ae",
".git/objects/13/1ceaf6195df9ec786307281e74da0e8bdd1412": "07aba6ce781343c354848201f192792a",
".git/objects/19/2270ea3f98a29eb476f524cdb0b3fe65baff80": "b275c27824a02e2a7f5fa7048c6afe19",
".git/objects/1a/4a33ef2e6e9f16eba5e99ddfffb3c78ba353b9": "09b266f73da0a4ad3aafce5947647cd1",
".git/objects/21/1fddd203955948c54f63de9bb6b971e5da0b37": "e051ab78331332ed28387b44ae780a0c",
".git/objects/23/656865ff9de556059d5184b72abb114e60be13": "48dd1f9ab4c30e48f3657b8e37ae65ba",
".git/objects/23/729da1377840682787dd9434e1d30ca349db5c": "4ee6fb127c96e6e33869411131f823f4",
".git/objects/23/fbc9a462deacf79dd974379f74c3c7d02fa0ab": "cf29da1f7b9bed40e6d445614a566650",
".git/objects/24/7fd08931042e9d7fabe6ec4fdfd7087b70c1d5": "8d748176aae76b1bfba6fe05359f3d60",
".git/objects/26/8df511fffb9ad7550b652a2ebc165834c702b6": "349361940fbcb2922832d37f5e8c99ac",
".git/objects/29/04aba135a7bde5d04e410772eb84f3895eeabc": "3a64278528045466010c03a84a399342",
".git/objects/29/3a5ac679aa2e6e48dbf8c6440946402ace6f1e": "bd263661e1f1dcf3c36627469540db6d",
".git/objects/2f/a5edbd8388f59d2f44a0467e73decf06925d43": "5ab2f28f557ffb9f750877d59745c1c2",
".git/objects/32/81690516e59084ee876b3e4a1352c4db31a861": "a6a76082c18694b992cff843f8ace8df",
".git/objects/36/57a84bab51c47152ead5afe79d1794dea436f8": "955ec86eddd1354d94caa4bc115605d8",
".git/objects/3a/6bec38dfcc43dc593a24a584ddf03059bd27a4": "684c2eda2b828f64d6fb869eeddbd561",
".git/objects/3e/684cd64025010d73552fe96dcf74096634a02f": "1515d62669d6509bc1c6eb27c657627a",
".git/objects/41/e36887a0996f27f5efb5ab360081b86bebf195": "ea014d9846c10bbdac9e109306dfe82f",
".git/objects/41/f6511db6039506b52705498e526a6192c4dbbb": "5785423a0336156ca4f64d59667d7692",
".git/objects/46/cf049764c0f89a72dcaa0f6630a77a3b3f4652": "d3d572ce931a3ea9d72cba0ca8544d58",
".git/objects/49/07514949ec2dc74ed385a75b9cbc0be8aa65fd": "7f3b3eb4d7747589460cc6ef8851fc22",
".git/objects/4d/f78ab67c02439c38c25cb98027ee1b79e81596": "0812dad281c67f2dd22c073104aad029",
".git/objects/50/dc08f53aa868c3bab5b8623053f7cce5db08fb": "903e7b57cfdb28bf4ab1f53751ff3639",
".git/objects/5b/eb8129dee5e153d61913bf7514d0e6af98a63d": "d25aea27287c73a69480236ea2d6d97d",
".git/objects/5d/07694a98a996068ae5e54ea3bae97990bb6b0c": "c97aa545e91a62a4d4919ff15a00b140",
".git/objects/60/e57a7a4b21746942acacbfaf3046f208006fb2": "3c3408e991e386db72794ab3e9f5eef6",
".git/objects/61/1767a3568832ad691d084659c6dbb7a65a0e5b": "b2c5200a1c83399604d1784aea73ef6d",
".git/objects/65/43011822fad2775ff0df62aab6f918114e8891": "7693db64777092cd028d6be2c4a25d09",
".git/objects/6a/48db1384b2aec021b2f5232f8221114d241cd9": "03a3a580006d20b4fa2429e7a3d3b4d8",
".git/objects/76/84266053728f23d54bd011c533266abe83be66": "a1d912b1836caed9fc6ba89b7fd39ded",
".git/objects/78/79677554143ca7ebc8878f4e731c07d9f57b6c": "a1299cb46f0af73499a495a1f1bb6b4f",
".git/objects/7b/085cfd032ff5e9f0be5c9aaeeb86aa83324948": "cd60d429b289e8a073c551462f723eed",
".git/objects/7c/c6219ea34c0b2d3be4fefe6e0888cb3bed1440": "4c94fb859ba2414656aca923d1ecaa00",
".git/objects/89/f1b80c58ad6d9c126aa5158926fd6d5fd8b4ef": "5d7d63ee1293831ae43133e99d8f9056",
".git/objects/8a/516c3c18075304000190dfb037472344e085e2": "e8c945951610b0f0cb82f4a42499cfa4",
".git/objects/8f/b3e12ecc5b52a3a41a31bb3aeb514959d751b7": "b8768ddeadbb63bb13396c0690a39a9e",
".git/objects/90/b36c777dafebaa010d52ccb769c5e82a88eefc": "d518e627312aed20725ca2a1538f12f9",
".git/objects/93/9c8f2977d922f7f821f7b4714d1ee6c55143df": "5974801f566862b015609f743dc5d535",
".git/objects/99/2db97497d55915f48ab8c212988ec4a6936a7b": "763e69df9961d147bd92d225e756db13",
".git/objects/9b/1f28031ddb44a7d2730ed8ae841e9bdd4ed903": "c6ca053ad9dfc67b7a2d585030c6c568",
".git/objects/9f/78c74a2395dce66f139b39d0a7ebb0f92eb39a": "d13ce4d34363d47372541ecd61037f8c",
".git/objects/a0/c4991cbd6f752783a8b6490c6c785df62b0730": "04730baba1ef01c787d50ef336465f5b",
".git/objects/a4/699ace530fa2a7221d381a92b1e10aee79aa46": "13d0f0d862f99239549ae7d752834e04",
".git/objects/a8/e6578ce0df1ba0d2ee9957b3d90fa86247fc7d": "3b61e47694e16262ed33d654c8090dc7",
".git/objects/ac/bbb669985afb654f11475af2f22ea17ba81398": "a8f7d89eed642c7e7d674fb985983f5b",
".git/objects/ae/d97f8a4f6b6eee4f49db3937c363850feadbd4": "69fe2862b6640f423f15e74bfbc83720",
".git/objects/b1/76a7ac0cea4f0ba6005aa57404d3e816963de9": "68e26d8eb193f21d1f9d7f4304f22b37",
".git/objects/b6/200b0cb21982a5c1b8ffaa5fd38ca2a6e7279d": "d4a649b3e4dcf8a532ff9a922270655f",
".git/objects/bf/409609d6c9121d6f329a6fd391a0bc796cdb3d": "af402e807ed4aecf5b3d51736c2c71db",
".git/objects/c0/49d376c437c5771a7155b610efb344a64a2b9a": "6a11ab742cfab995dc56cb1b9dcbede6",
".git/objects/c2/f48f42ace3280cec8caaed2c0bc588d71c5e64": "c8f6a72aac07420e0c479089a9f44ad0",
".git/objects/ca/a5c4ba769bd8d61cba6c714b67b0c53889991a": "256e1f965e5d9da4764b6216dc927573",
".git/objects/d2/96c6711639103cf4b333197b00189754a9fe55": "11da58d4dbef1ccbad0352d0c000c90f",
".git/objects/d6/4d989493ffc0a7f87b06fef53adc71aef9331a": "37b4f106123eeff37213db07abb3098b",
".git/objects/d6/fad8f572ad9d98b8482b91009a1e2564691edf": "347d3f9a82f32f5ccb53b0d8ff190f74",
".git/objects/d7/9ccc62ad9eb3149944d50a974a66aee6d38381": "a7e7aeb4523fa4af5792a314049a1833",
".git/objects/e0/59baaeb5237a9ff5a423fc782f75ef69c15814": "e771252fcca190b4e246631f545cee8c",
".git/objects/e2/18342e4ae73a9904f4f31fbaa88cfd37e1d06e": "68748311b5605ff1ac0cccb4ba7c0734",
".git/objects/e5/b02c4a2f276b22d6e30ff08734b6bd81b27114": "9c0dea426833242680a9fbbf34628b1a",
".git/objects/e6/d48b7821fe0c7f1905361593fe8ea1cf4be61e": "2b20ec4ecf5b888b07dc1e68b817e14c",
".git/objects/e7/14dd56a8c5466e1a805b47caa18682f879da22": "181e1cf1f447448f8728f1f3e6b2bf0a",
".git/objects/e9/2f862aa015af5c119718a3dc59f82099f8ec83": "e597ac2561de29541033e121a40ec4ea",
".git/objects/ed/4c59af97fe9bd7132b7ed91e31781449214196": "89be4d4198093758af930d631e49139d",
".git/objects/ee/b9063446f77f11c8e6b56544c49c8ade9e1bd7": "fd92f25d99432b89351a6250fe6c524e",
".git/objects/ef/d7d8b118a9ee6956c27ab7888a9c895dcc5130": "67d4812a6dc6a7109d6ffb0ad0df2500",
".git/objects/pack/pack-bc8f6106e0af00de5e4eb590eefa0577adf4b4fb.idx": "021195fcd29e77a7332f976fc77ae64e",
".git/objects/pack/pack-bc8f6106e0af00de5e4eb590eefa0577adf4b4fb.pack": "2a199850d587712834a4d21123773e47",
".git/packed-refs": "bcb32583d1bbbc2c6e4f74d9bb731175",
".git/refs/heads/main": "6c0bab9614f690c489dede6ee56ab5c0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6c0bab9614f690c489dede6ee56ab5c0",
"assets/AssetManifest.bin": "e77e6d3a46aeb859d5d0244859f3f858",
"assets/AssetManifest.json": "c8d39c2947e348155db2cfca11dc8374",
"assets/assets/DwarfBanner.jpg": "499398954615be4cccf26dbfce43fa4d",
"assets/assets/DwarfGif.webp": "a19cad48d5826cc6b58b526bbb9e0f84",
"assets/assets/DwarfImage.jpg": "f12a24e5d2afac505932dc2c0390e84a",
"assets/assets/GeoBanner.jpg": "3c274762b7e691bd627449dea66007a7",
"assets/assets/GeoGif.webp": "2c254fb36953be096e09d02ccc3662a0",
"assets/assets/GeoImage.jpg": "c6a01468752ce998cf8717b9ca791bfa",
"assets/assets/Home1.jpg": "d36bc99d665c0f0b76f52a3105ce787b",
"assets/assets/Home2.jpg": "f43a7de192b41ec0d4e2e5ecd8828dd6",
"assets/assets/Home3.jpg": "58c90ab7cf0520798b784f1977a89163",
"assets/assets/LostBanner.jpg": "548af44e27614c45e6bf9aba04e929ba",
"assets/assets/LostGif.gif": "1a09538d7f616d579383366202e7d8b5",
"assets/assets/LostImage.jpg": "e305bbd02136ed64ad3496a099227a27",
"assets/assets/NoyaCode.png": "6851d8745dcf557bc883466770ea56c6",
"assets/assets/RaylibLogo.png": "064275b70671243d7cfe2facc543069d",
"assets/assets/RocketBanner.jpg": "d264d68d3a9b4f179b609ab3aab9e067",
"assets/assets/RocketGif.webp": "8b301cbe25d19a6dd7c14c39e1bbc9ee",
"assets/assets/RocketImage.jpg": "4ec7fd9fa19236fb7f454aa45901b7fc",
"assets/assets/SupaBanner.jpg": "47c565dbcc9ea1e4c59898c247be26b2",
"assets/assets/SupaFlipGif.webp": "34262f33498abe206ddb0d3b125ddd1d",
"assets/assets/SupaImage.jpg": "920d170d51218ad971d6cd7358bcffac",
"assets/assets/UnityLogo.png": "be18d377962762ad5d151611abe2fd3a",
"assets/assets/UnrealLogo.png": "6bb05b55599d3e019c7e7561c521301f",
"assets/assets/WhimBanner.jpg": "5b445920ae242b0ae8c0791cdfbabbdd",
"assets/assets/WhimGif.gif": "61540de9f1a20ef4fbe45e93c7d56611",
"assets/assets/WhimImage.jpg": "1883bdd57b87bc55f6ea88e39ce8f65d",
"assets/FontManifest.json": "5e5d7e32d0d73f5c8fbbf4af165b3b31",
"assets/fonts/Avenir-Light.ttf": "978153ba4ed98075bbd3e0ef32e4d887",
"assets/fonts/MaterialIcons-Regular.otf": "2881cc082446e5ee9f6830661ac51d12",
"assets/NOTICES": "1734edadd78963b17ffa9958720ccf4a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0694916c8bb69ac850e24da716a6eb48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "99d45f98c5ac98517eb5cba57d3fabc0",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "3e7c7e90ff8e206f4023c12e31b0d058",
"canvaskit/canvaskit.wasm": "663e2d8dc95b3eb6e813db7288f90115",
"canvaskit/chromium/canvaskit.js": "f39c7fbb70c7d277f537a7c366d75533",
"canvaskit/chromium/canvaskit.wasm": "b5bbefa86d22f7a1e94cda2a490b58bf",
"canvaskit/skwasm.js": "569eed0f1ca775eb9a112f5821ad278b",
"canvaskit/skwasm.wasm": "e5af8ff2312130582de5a1d858b06c25",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a836d02ef79ad4d7f5c58124a775dc2",
"/": "4a836d02ef79ad4d7f5c58124a775dc2",
"main.dart.js": "846096f387ff2576ca0d34e72245a5b8",
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
