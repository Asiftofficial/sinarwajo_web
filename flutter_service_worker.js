'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "870ad78fffb23199bad75db0beee5dfd",
"index.html": "936a68b70dc8ef5e2cb4431682c28cc3",
"/": "936a68b70dc8ef5e2cb4431682c28cc3",
"main.dart.js": "c7e38ab64d934acb584fc41722d6b24f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "343a23de39fcb475e1d54d96d68e348f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1a6bb0ebf507b2729862936952618d4e",
".git/config": "f7d905f5121047424abdb9b2b4c6c2cd",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/0d/04985f894c858be0d3c77932a48aea0c839082": "1b93f4efda3abfc73e65529afd0eb9c1",
".git/objects/95/a9b13da8a43e85c64c06ff01bfbcf57ac88af3": "ec7f94565ec8a82aede5d4174223544d",
".git/objects/9e/4fc2699994f3c36b5fccb56ecd72ef768ca900": "135cefc44c2c7cd26397f8cac0f722d1",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/f78cbdf66b205f744ff824ed70911b2d814274": "6aa2ab08174feaaf5785a90dce51cf93",
".git/objects/34/a4f7595b6d2d913e7311371bc03b30fa92d9a2": "d746f71590c96d5f6b68ce923bb2619d",
".git/objects/05/227a13d3ea7b41dd6eb012a9d525125f5f31f9": "fbf4920f9ac0789561fe03c86e305b2c",
".git/objects/b2/bf0b458dd1299b72a5e0f004abacb6160d000f": "950faedf58fdc402bdbb46e48b532733",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/d076e38e112ab283de57d13c6d66b58f4bd7f8": "cf39d09a71d604918f46b1e8b8c7c124",
".git/objects/e2/130f3437a9c67bf90edb94c3cbc85811882098": "9904e5cebcbd0c748816556115b1e468",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/f3/d81ffe6150422f2568276fa71b070802d2a538": "febca650ed04c3eeaf610ba473933335",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/f5/b1769acd2e45b6379f1d47a2fb94b9556466e1": "a93a6fd98c2a1b61572bd64b886c10f3",
".git/objects/e4/7cd3ee4a0ece1d490678043d188d32116aa647": "eba6da175e87c016fd983d433909a7f3",
".git/objects/e4/c0bdd93824d7680d06911d7c6ae78166382d5a": "246ca1bb913994c3b655f4e297b245fe",
".git/objects/fb/1684767ff13afb7d6bdfcfd66808b1fdc6bc3b": "3cb9d8ebe21817f682319a0060275b6c",
".git/objects/c6/3b6401ac3f977b874ce0cbddfb0c87208dee72": "a1cc39ded0ad6265a034cda69d258a36",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7d/87eaa718c955c681a5ba1b6be7e765407c40be": "d354213f46172d17d0137ff261a0f1ac",
".git/objects/29/c4791735832784a1e50c8f3e4b9f1966867873": "effa28ed471ddaf796a85209022bd109",
".git/objects/16/d0c0544b5422ab796a39b8c8b81950bfc64f27": "be692fed8ca57b331f2a17f090d1c49d",
".git/objects/28/59afeee99c769732e4c4ae3444d9f463337ae2": "562bc71fc84fa83977fce97461d7cc2a",
".git/objects/10/64e55963d8fc66af9a0e65693a41bc6a632178": "e5ffff7a6d80b4bef97a8469c35414f1",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/d4b18ec8bc93e8360d881125dd420114221843": "ca545dde5b0e15d30466eb30f9410e76",
".git/objects/00/9110430db72f1973b10a2b361a6dfcbc7898a7": "fa120f4a350bb18affea51781f695511",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6d/158c3ec11527bcb3c3bc07658ca9d4af033b16": "c7c446ab93cc2fcd05ed71330229a1f5",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/0ff56ee17389046efd4a58b00a09a78440f557": "0a3d3759c0c9842f647c0585810e963a",
".git/objects/97/a1b40fc2b15c18cf03d01f2bb5bba6fe8acab0": "b3df8a71f9df48902caa785cd7cb4d7f",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0a/0592f234fefff0a5a5bdd639990b5eef3ce158": "87a7060ff636856e78dc7987be29b3ca",
".git/objects/90/4b6d807a5bdb1ba1646cefc4a9e16c5907aa92": "3684823ec41525fd17bf78a1ff6e971a",
".git/objects/d4/a1ee20a88c58637f1d51f8d47cad404df9ef30": "41b4828d1539b2683e3b39d9041fdb1f",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/af/901332cf971b2a371e9d79b8054d2c3e25ed79": "d708b1a9b79517ebb94ec11305ac6cb3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4512592f7da8eaf69cba35e95feaffc479d6f2": "79148485fd965182c8f8f548b72fdb8d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/5c93d2b1d103c98451d31a01c305f284754dd0": "c56740f5a5f016ecf88857b7f156c5a4",
".git/objects/c3/9ccc96bc70ef3f4f70664062772ab860eb9885": "44551389baf4e6188dbd77f504eafe79",
".git/objects/cc/7fe3c49f0a9071bad812fdbbe052c3ce7e3e93": "5faf1093859e999a3087f3a563e97894",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/cb/b5d2c3ec8e636966d3b6ea04f91e2d405e6c2f": "29b24452dd42090a139ff6b395bf1ee3",
".git/objects/1b/14326ad25f28758225e868ecbc750d94dd3525": "98d3dfa006e39d39c6afaa2fd5dc6cbf",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/81c2415ab2580f14be7822cda7c03569193f1e": "f4c3eff010434cd193a5b3a45d6c3654",
".git/objects/4a/bd399030d5817b312a4777c9a5a2e11890a4b1": "4d474bae1028967e30e7296955642d9d",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/40/664c9a9fae9fa7ec627d09aa33c48518a27899": "dff2f245a9094cb8e8b96390c059c196",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/78/6ee3adb06c07f07da5dec3e8cfbe4dd577eb2f": "64b71564e7454c7c7594ec6fbc4d24d4",
".git/objects/13/9e879bdb7535dd1d7bcb93d2fb910355cb9b74": "19adb172cc3e983ac5137a2444485b26",
".git/objects/22/9a2985c83f1d1a5897d5df2346826f3a1dce2b": "f1b94db87664d86412d7724b9e362d5e",
".git/objects/22/2363a808765ea110f8a6ba88f0fe69ec7aecca": "9ddad2982083a7186d17de1b773c01c6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "100f4bef3b7e11e9d0e3abcd1168c56e",
".git/logs/refs/heads/master": "100f4bef3b7e11e9d0e3abcd1168c56e",
".git/logs/refs/remotes/origin/master": "2940a691acbf34c4821f48810b58af8d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "9f2588c94abd3a931ddbdc063ab2ec75",
".git/refs/remotes/origin/master": "9f2588c94abd3a931ddbdc063ab2ec75",
".git/index": "fd68505e736db130da56f6381a8b2444",
".git/COMMIT_EDITMSG": "39dff5e0024c092bf7e279a5a8a86b00",
"assets/AssetManifest.json": "8753f4d843c25967981a84db89380f79",
"assets/certificates/certificates.pem": "4cc4164d48f5d472b1affa7fb4c7642e",
"assets/NOTICES": "6157ddae188a3863b13005af1de0c376",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/AssetManifest.bin.json": "f722e1ab1c6bc50070ab50bbdabbfd1e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/usb_device_web/assets/webusb.js": "9f25775d2712a26981f326f3321b929e",
"assets/packages/flutter_esc_pos_utils/resources/capabilities.json": "eef87d282ff8e3aac35c6080d66eae82",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "716154a6c6ef2c3406f20e501e9e9001",
"assets/fonts/MaterialIcons-Regular.otf": "7818b99065f563dd9230c187b2d9203e",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
