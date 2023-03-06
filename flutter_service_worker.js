'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e5c54a94cf30ec7c3425894e2d702bd5",
".git/config": "1e013f5d5521b39d4e2ea9bfbbfaa078",
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
".git/index": "a0be5d77fbf2d41f332cad27bd072761",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ea0824e061cc88d397988ccf37790fec",
".git/logs/refs/heads/main": "ea0824e061cc88d397988ccf37790fec",
".git/logs/refs/remotes/origin/HEAD": "dcb15e1058e9fabc55b2fc9f10f2ebb7",
".git/logs/refs/remotes/origin/main": "c162ddeb9f3fe06d4c267c5d518aba03",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/2480a7612292fc2f6260a843d2b0bbf02594db": "1e7b9abcd224ceb78a12c68518406116",
".git/objects/07/3471c6e95f657135028913eb2ec650af9dc952": "ad946bd687f44134ef00a5cc7176f8bc",
".git/objects/09/9f76b193b76ad3fd9bb6e6afdcec3038d9d6c3": "c762c8ae69c306de372ddd756b8a2591",
".git/objects/0e/9abf0e5600320e4323fd884ebaf4e5f864e1c4": "48a0c0405ba5e1ca593a03164b56da10",
".git/objects/0f/aa25395deee847d7c2bfbe8ce4916d92948f2b": "599d489ff6e147dfd6c8de988701e340",
".git/objects/11/20c0932104eadc5cda62e392860bb302e31116": "69393efa7f911471b27dd4685d42a549",
".git/objects/14/4dcc0679621afb1cf3b7fa78cd76542263ee22": "c29609c898672f013b1e29ba24ef24a3",
".git/objects/14/bab1d997e8d7a9485c7dc18557ba68fa89dcee": "67c517424a1e468b76f562f93966bdda",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/22/e14989837591f5770dd5a3c54476e51b36ee0b": "438890fefe490d6ded6a4346d713e81c",
".git/objects/22/fb915e9e9b6fa92d613772449daf911f8a7cf6": "a1e8cd48f0acfd7609f7ac0160bb4c5e",
".git/objects/24/c8571eb5415f07dd6e971d12ea7a61fd5229a5": "339d5409d3d57598558c6a00d369889e",
".git/objects/27/fed0f4c4d2703fb2ea80719797a5dd26cf7b27": "82aeeef853a16849b716d8f7fc60d9a3",
".git/objects/28/23f661cc3d5c6cb7370dd6c48dd45962ac148f": "b2d5d3836267d331ac5d98209552df7f",
".git/objects/39/8725ee2e74e7514d4c681228af81ea9f49dc67": "60bb598c20bf0d2380d10f5e12f82049",
".git/objects/3b/fb538e7cbe9689000bc5cb08ddd47b9690500a": "cf0e953f080aeca932f8d03b0184f053",
".git/objects/3f/2d6a905467f36246253ba0ba039f95c1d0ce13": "5fdea31edc855eae6880007562bbb863",
".git/objects/42/9e882203db6a97fce8308d18611a618b7dbce6": "b3a114f89d3318063bd944430a8fe8b5",
".git/objects/44/08868b050362b99af1c2a657a2ce748d7da71a": "12285fb7e2e6136d610aa3c6162b2fdd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/907f21cf1ba722e71aacc2b703fde438855adc": "db82f631e66ab396099b68a4aaa27720",
".git/objects/47/2cc24922d0fb337a3e938c34d528fa13d506e7": "d034b9e3cc582133a07a1c8f9c8c407f",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/4a/f1b7aa48cddfa0a3187306976ce54d8eef03c2": "8fe7deefcdd7a6fb28e150364da71f20",
".git/objects/4d/edb960cdc961c45dd09e23bbfcddcf8c78418a": "8cda926991686bed587917e04ceeb197",
".git/objects/4f/0c8ea69eee08c5de4901dd3797b8393d0f4acf": "73a913db27e9d8e17d5f693a684844df",
".git/objects/4f/8267906b7706e6a7fc3eb8d9d0646a624b1598": "8d930c4b6ec82d382e7f17521ca3b9c1",
".git/objects/50/3b100699f46eb89d9469f22fc408b9db074107": "f63f7e168672c4b25625aad923b61cf1",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/54/6bd57de0b800868dc9b0e63a091248a16f05cc": "0eef7ed0babbdbfe77089087c25ecef7",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/63f7b693d82249b65df79681e64dc1084c72de": "c18fbb8bd35af1888c3cf8070989bf36",
".git/objects/5f/591fa3f54e9e4be6596f7cd7de51f9f55fdef1": "10e1d0030f6ae6442d54230417fcc4c0",
".git/objects/65/5de51b9e20f7d82221bc2efec54fbbce06d11c": "c4d2fd3171f15c53763e3ae793aa562b",
".git/objects/67/19f1b7478694a748eea3afca43e99bdd5adcb7": "70ba06470f2d7e7ca2a6407ed9bb25e6",
".git/objects/67/f57ea2bbda6a43199409fd3bdd3502e7a6f70e": "df9a53a7e85d25760d6fbc76154a19a0",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/7a/01f9000a46f68c1fedaff7f9d070c1b3f7d649": "b9e5dd9f6114a7ebb6e22d0612787a6a",
".git/objects/7e/f59c93edc26b7a234a65ad2f71ab32b9e2ab7f": "5f411ec155789694a624a4380f036a44",
".git/objects/82/888a82274fba068df4684b29b3a289d0822e3d": "38c430f41bbb20f8cfc9efa22adad794",
".git/objects/84/c280d13f98d5efcf8c539112438d90cc3862f5": "1ca59589a6696f1acc3a1e0ee7a19278",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6e288640aeeffca000520578f873def12b8344": "2fa35f63da38621bc8560f8a6ce10f19",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/94/55970e67f136c83edb234d63ae0ab7bbaaeba8": "00a65bda333c98c0745e102edc985ce8",
".git/objects/96/d07e560777fc2d44c8cbc712d267e023a95ec1": "63e79260f877edda68da7eef4d1fd08d",
".git/objects/97/2d6a4c338b04612b9768938051d32a815d5867": "55abad5370b53a9866b29a4dcfe43950",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a3/d6c650bbe25aaa2603b0df439b4df4d02853e7": "08b82833858184f51b1866e1b5932adc",
".git/objects/a3/f9a749f04fd75b117632c65dc2a9725328323e": "1fd8d9f445b1702621e227ba2a8d3471",
".git/objects/a5/9efb56ebf6e8d454a8eef82959e3569f9e35fe": "924bb82d3850a0d920ebf09c9f5edb11",
".git/objects/aa/f0807e0db375ee0672309d5c9f9af8ad468d19": "cd86ec8c71b8242e1983be8b604c2060",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/c7e934905b2b48c19fc12d2a8d5583a3cb9b2b": "b36390e1683fcbd525458089fa020b30",
".git/objects/b1/341d4fad9358cd5c14ffdfb9c7c2299711c44b": "ce3a4825ce246ec5f2d645391b92c76b",
".git/objects/b1/34c48fee7984fce72e73276ddc3f84adcbef17": "fdad9da300969847c5cea8b9dc176993",
".git/objects/b4/25823a90b7adc28d7242e5e90cf56d586e8e1f": "bc951b80f39bed57fe65003be32e0674",
".git/objects/b5/ecc31d55ba27e4366448c3aa4928a832fa5ae7": "263e330edb172e884ef9d4698a19a250",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/8264859b4e2d68f321d8f38487d83d759c03dc": "d45a49326302708b148957d6e52ef935",
".git/objects/be/f0e79d3eaf94808d8017e9eb6d2e72c73e17f1": "b8cc8b1ac4ce49cdde91a64e19ada949",
".git/objects/c2/758649e96d4af01f6ce4804c9090575cc11ae1": "dfa48fc33fc4dc84659b40bfaa7a5a29",
".git/objects/c4/c8d2e4900d648fa38d3df7124c26b0b2393f3e": "176d24faf43f44798bb58a2f2b7d529f",
".git/objects/c5/62917d2a66a8fc66a8a502f8ee0391d6b8bac3": "89ca82b896aa6892f813ec3fc73129c7",
".git/objects/c8/3e9d4078d944cc6c3940cc22dbc82b241d50fe": "d53ec3ca84550f6408f1da5e95b0b667",
".git/objects/c8/905df37c81684e4451fd262e645da7783f5f0f": "9e1a4bddffd27697530cfddc6c366774",
".git/objects/cc/4694cae9e8b96eb59ad37062c8ac0b5b7b260a": "37d1fa331e4922a44a805eff8d3e07d5",
".git/objects/cf/8dc5b3634de5f86120a664c9c0937b0454e807": "d184e7a6f25d5c667870c00d0d321365",
".git/objects/d0/e5f91904c2cd8d8d7952c3871ddb546aa2e4c1": "108de7f8503c2a440a4143c1ddecab64",
".git/objects/d3/333b3ea60e8f33ba581936cd6969199722329e": "be273796820d5d66553ede63db4879b9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/a6da50cfe8d9673638272e815badcc95fe4850": "c212e3664e1000c90eaca6faea6d1647",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/7387b07c55a74c294a4f9cbfc2a85530376c4c": "6875e4adf89e596730988828c420629a",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/dc/88292daca5e411c14ce0a4ecd5096fa3d7d375": "ba75c758eb7ba66c9ad79b3b181e5a03",
".git/objects/dc/d98c9f8becfbff2c82b24d81db7dee79543676": "856425a3ebfcd29ea3d30cc2e63a3f5a",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/df/eca6b0d642ccf080580e5b757486156741eb9a": "70d3020bbc97e1bd650393430e91dcfe",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e3/f32fceaa75d61dde7f6fd68bc79a46f9eb65e3": "61c8085ebb397cf5f84ac22bef6cbf6b",
".git/objects/e7/3df1fa4b88cccba37af75ab93d7903b2e8b1d1": "e35ead77b48fb7e4a6ad035cff754878",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/ea/f0e3fa48e4105592f34dc250d48613bb9f067f": "f8091a0a1d41c18640abd4022b883fd6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/cadb3e0f3a78632f77affffcd3f7af29c9c4bf": "d8406b4827244589be07d90761ef453c",
".git/objects/f6/447b6074334a0af6f980ef40cbe628440b07b7": "bd8a7b29360e99c633f0450d51c9cddb",
".git/objects/f6/c43a8ba29b561ea230542ea8b6d2217f0a286d": "1f7d325d409d07882ca8f9918cfb51a8",
".git/objects/f7/318560f03ae8149d9bfe30a33fe038b8b33363": "b6b8912c38563c6214413e7735cc3c01",
".git/objects/fa/4658d48b9a49922fa162eb9c9af3b7c1c7dcba": "22cbb48b3bfa95604d45bc31b2e9aecb",
".git/objects/fc/11e87008682d9c6e23bba7aef31ccfd227bd87": "adc5b9c6eeb12a8ab2079eb02c942ade",
".git/objects/pack/pack-753d9124aeba8d7accc331107b9433f3ccf5769f.idx": "5d23a8fe2bbc13f92a873bf02e98acca",
".git/objects/pack/pack-753d9124aeba8d7accc331107b9433f3ccf5769f.pack": "07ad8a0c63189c33e8ae9157fe94e5f7",
".git/packed-refs": "3de2ac9158dc9323cd5c64f25537172d",
".git/refs/heads/main": "8a5b3c36a654dbfd95deaa83f69d7182",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "8a5b3c36a654dbfd95deaa83f69d7182",
"assets/AssetManifest.bin": "11ada13330ed58c3d0fb479aabf0db3e",
"assets/AssetManifest.json": "e414de6e5fe2085e49ecd3e8bb4a4e6e",
"assets/assets/GeoBanner.jpg": "7feffcfc27caea1703e2afad57ac5b1c",
"assets/assets/GeoGif.gif": "6800072f19bdf053a63989417de1c572",
"assets/assets/GeoImage.jpg": "e753d35182ea1e7ad52052161a55edcc",
"assets/assets/RaylibLogo.png": "70ab30636e72ab1220d21e2f752da240",
"assets/assets/RocketBanner.png": "9972bff553ce8107c2a4c20e11023d7d",
"assets/assets/RocketGif.gif": "50b3acf7ac597485802506cefee8068a",
"assets/assets/RocketImage.jpg": "7607762daac5851b70d9736f81d61e4a",
"assets/assets/screenPogU.jpg": "40fa9d68bdb52e4e625bda2eb5b4b7b5",
"assets/assets/SupaBanner.png": "8007a1bdb283906ccb054537816f6171",
"assets/assets/SupaFlipGif.gif": "faea29f592d48cdaa968d2929131478f",
"assets/assets/SupaImage.png": "21b72d0ae8f5aebca287576118c66fde",
"assets/assets/UnityLogo.png": "106112d1735fa0b571cd03e2fbb11bf2",
"assets/assets/UnrealLogo.png": "19f31861f8f980e334f1346a9212d141",
"assets/FontManifest.json": "5e5d7e32d0d73f5c8fbbf4af165b3b31",
"assets/fonts/Avenir-Light.ttf": "978153ba4ed98075bbd3e0ef32e4d887",
"assets/fonts/MaterialIcons-Regular.otf": "2881cc082446e5ee9f6830661ac51d12",
"assets/NOTICES": "44f867f3491a41b3652a057d2b73fa3b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0694916c8bb69ac850e24da716a6eb48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "99d45f98c5ac98517eb5cba57d3fabc0",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "3e7c7e90ff8e206f4023c12e31b0d058",
"canvaskit/canvaskit.wasm": "35222aaf0d06f6dfba5b13782f7ff32e",
"canvaskit/chromium/canvaskit.js": "c5ff0f8767a7ea0962b15d1f1832002d",
"canvaskit/chromium/canvaskit.wasm": "7e8555fa0fbf19a88ba6ea83d02eda6d",
"canvaskit/skwasm.js": "3dbd05be6db4a4154ce733ff194dcae7",
"canvaskit/skwasm.wasm": "c0e1e265faeb6428fdeb9bc37be480f9",
"canvaskit/skwasm.worker.js": "23be0fdafa5ddef67734292a576f8fe3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ff770f353fa00bc4b268f1a4d18b6ae9",
"/": "ff770f353fa00bc4b268f1a4d18b6ae9",
"main.dart.js": "6fc48b7eaab722e7bc8ec1d153f93e0b",
"manifest.json": "07f66434d604ccac1b4d5244f35598aa",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c"};
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
