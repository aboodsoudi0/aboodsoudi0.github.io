'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "971b8c3aca2a7d04d21a7b48031f195f",
"assets/assets/amman.jpg": "ea21b05a76ce6bb43dd54301cd00edef",
"assets/assets/car%20rental1.png": "990248b9c87d07f8ab3a6a62cf77f834",
"assets/assets/car%20rental2.jpg": "63faa836cfdee753dc080e7f8c8b6fea",
"assets/assets/car%2520rental1.png": "990248b9c87d07f8ab3a6a62cf77f834",
"assets/assets/car%2520rental2.jpg": "63faa836cfdee753dc080e7f8c8b6fea",
"assets/assets/car1.jpg": "f9813f284b90b2bfd7cd4c6425582350",
"assets/assets/car2.jpg": "dec8dfbab4752aacc2e24ad8f8678de4",
"assets/assets/edu/%25D9%2585%25D8%25AF%25D8%25A7%25D8%25B1%25D8%25B3%2520%25D9%2588%25D9%2585%25D8%25B1%25D8%25A7%25D9%2583%25D8%25B2%2520%25D8%25AA%25D8%25B9%25D9%2584%25D9%258A%25D9%2585%25D9%258A%25D8%25A9-1.jpg": "2aa7c6cfe548a063a0e96a18573f9beb",
"assets/assets/edudesktop.png": "d8a8b31c871cb7dd11c23e8622420ffb",
"assets/assets/eduphone.png": "7f2cc5857ed86f9b4f5af7adce998684",
"assets/assets/edutablet.png": "2e359f09349bfff98353cf97bcfbee8f",
"assets/assets/fonts/Cairo-Bold.ttf": "ef55322bc2031017175022b779940cb0",
"assets/assets/fonts/Cairo-Light.ttf": "ce6526395448171bce996359f9b41af7",
"assets/assets/fonts/Cairo-Regular.ttf": "374ef4fe60ef13426296c292bba5e237",
"assets/assets/health/%25D9%2585%25D8%25B1%25D8%25A7%25D9%2583%25D8%25B2%2520%25D8%25A7%25D9%2584%25D8%25AA%25D8%25AC%25D9%2585%25D9%258A%25D9%2584-1.jpg": "1f7a06b7fa5092e609ad49eb4f2db01d",
"assets/assets/health/%25D9%2585%25D8%25B1%25D8%25A7%25D9%2583%25D8%25B2%2520%25D8%25A7%25D9%2584%25D8%25AC%25D9%258A%25D9%2585-1.jpg": "7a74fa968adcfc995a18fd74b16572f4",
"assets/assets/healthdesktop.png": "62a8a1065f3ee991e1b377d4b8c6285a",
"assets/assets/healthphone.png": "90f1b330c845789f525b1f7748874056",
"assets/assets/healthtablet.png": "59401e3cc6b17dbbfa05d50a1ab219c5",
"assets/assets/logo.jpg": "4b229d2faab1c08b242f23a31a50ca30",
"assets/assets/logo2.png": "d956b8d9d7154185c2a30aac3fe60a28",
"assets/assets/medical/%25D8%25A7%25D8%25B4%25D8%25B9%25D8%25A9%2520%25D9%2588%25D9%2585%25D8%25AE%25D8%25AA%25D8%25A8%25D8%25B1%25D8%25A7%25D8%25AA-1.jpg": "01e4f23a610e8e6c789e008225f09f45",
"assets/assets/medical/%25D8%25A7%25D8%25B4%25D8%25B9%25D8%25A9%2520%25D9%2588%25D9%2585%25D8%25AE%25D8%25AA%25D8%25A8%25D8%25B1%25D8%25A7%25D8%25AA-2.jpg": "e338ff2e457ced4518095867d7818081",
"assets/assets/medical/%25D8%25AC%25D9%2585%25D9%258A%25D8%25B9%2520%25D8%25A7%25D9%2584%25D8%25AA%25D8%25AE%25D8%25B5%25D8%25B5%25D8%25A7%25D8%25AA-1.jpg": "843c05c56560f0145d94bbdd7eca82d4",
"assets/assets/medical/%25D8%25AC%25D9%2585%25D9%258A%25D8%25B9%2520%25D8%25A7%25D9%2584%25D8%25AA%25D8%25AE%25D8%25B5%25D8%25B5%25D8%25A7%25D8%25AA-2.jpg": "80463bd73dbef630429cc53184e3c769",
"assets/assets/medical/%25D8%25AC%25D9%2585%25D9%258A%25D8%25B9%2520%25D8%25A7%25D9%2584%25D8%25AA%25D8%25AE%25D8%25B5%25D8%25B5%25D8%25A7%25D8%25AA-3.jpg": "7911efbb51e05f38389531fb87d749b4",
"assets/assets/medical/%25D8%25AC%25D9%2585%25D9%258A%25D8%25B9%2520%25D8%25A7%25D9%2584%25D8%25AA%25D8%25AE%25D8%25B5%25D8%25B5%25D8%25A7%25D8%25AA-4.jpg": "57e76d82e40dc8d650959f9c4d1cfcab",
"assets/assets/medical/%25D8%25AC%25D9%2585%25D9%258A%25D8%25B9%2520%25D8%25A7%25D9%2584%25D8%25AA%25D8%25AE%25D8%25B5%25D8%25B5%25D8%25A7%25D8%25AA-5.jpg": "adede592dbae1234d46bd02a9405d0f9",
"assets/assets/medical/%25D8%25AC%25D9%2585%25D9%258A%25D8%25B9%2520%25D8%25A7%25D9%2584%25D8%25AA%25D8%25AE%25D8%25B5%25D8%25B5%25D8%25A7%25D8%25AA-6.jpg": "1a96b6e401d1bb36b3158a6d5e342ca0",
"assets/assets/medical/%25D8%25AC%25D9%2585%25D9%258A%25D8%25B9%2520%25D8%25A7%25D9%2584%25D8%25AA%25D8%25AE%25D8%25B5%25D8%25B5%25D8%25A7%25D8%25AA-7.jpg": "46d36b7ad73e52a60a1fee5f39f7a996",
"assets/assets/medical/%25D8%25B5%25D9%258A%25D8%25AF%25D9%2584%25D9%258A%25D8%25A7%25D8%25AA%2520%25D9%2588%25D8%25AE%25D8%25AF%25D9%2585%25D8%25A7%25D8%25AA%2520%25D8%25B7%25D8%25A8%25D9%258A%25D8%25A9-1.jpg": "28c6aacb76b23c5727322dbe346d928d",
"assets/assets/medical/%25D8%25B9%25D9%258A%25D8%25A7%25D8%25AF%25D8%25A7%25D8%25AA%2520%25D8%25A7%25D9%2584%25D8%25AA%25D8%25AC%25D9%2585%25D9%258A%25D9%2584-1.jpg": "1b3ed4199c65507077aa554d4842e845",
"assets/assets/medical/%25D9%2585%25D8%25B3%25D8%25AA%25D8%25B4%25D9%2581%25D9%258A%25D8%25A7%25D8%25AA%2520%25D9%2588%25D9%2585%25D8%25B1%25D8%25A7%25D9%2583%25D8%25B2%2520%25D8%25B7%25D8%25A8%25D9%258A%25D8%25A9-1.jpg": "ada15e7adf9354f8042d0e3fba9a6211",
"assets/assets/medical/%25D9%2585%25D8%25B3%25D8%25AA%25D8%25B4%25D9%2581%25D9%258A%25D8%25A7%25D8%25AA%2520%25D9%2588%25D9%2585%25D8%25B1%25D8%25A7%25D9%2583%25D8%25B2%2520%25D8%25B7%25D8%25A8%25D9%258A%25D8%25A9-2.jpg": "f66ad96cbd383df3bfbcc4cda5d7fe26",
"assets/assets/medicaldesktop.png": "843c667249ee295027ff55bdf5c4888f",
"assets/assets/medicalphone.png": "8aa29932380862df45b75067256e2a8e",
"assets/assets/medicaltablet.png": "a58df13239cb3c34852fd3f686be17aa",
"assets/assets/misc/%25D9%2585%25D8%25AA%25D9%2586%25D9%2588%25D8%25B9-1.jpg": "09af5ef17f9100d798420434ec779ecd",
"assets/assets/tourism/%25D8%25AA%25D8%25A3%25D8%25AC%25D9%258A%25D8%25B1%2520%25D8%25A7%25D9%2584%25D8%25B3%25D9%258A%25D8%25A7%25D8%25B1%25D8%25A7%25D8%25AA-1.jpg": "3eb52f184c27f2ed9a66f4ee5068fddd",
"assets/assets/tourism/%25D8%25B4%25D8%25A7%25D9%2584%25D9%258A%25D9%2587%25D8%25A7%25D8%25AA%2520%25D9%2588%25D9%2585%25D8%25B2%25D8%25A7%25D8%25B1%25D8%25B9-1.jpg": "072ec083b79a0d514023fc97bf45327f",
"assets/assets/tourism/%25D9%2581%25D9%2586%25D8%25A7%25D8%25AF%25D9%2582%2520%25D9%2588%25D8%25A7%25D8%25AC%25D9%2586%25D8%25AD%25D9%2587%2520%25D9%2581%25D9%2586%25D8%25AF%25D9%2582%25D9%258A%25D8%25A9-1.jpg": "345d7408bd263029c555165c174e3999",
"assets/assets/tourismdesktop.png": "6e7c498a107fd70c3c542f27983a1d65",
"assets/assets/tourismphone.png": "eefd4df33dbf8b4716ed2dd5ae0cf1e3",
"assets/assets/tourismtablet.png": "274be88fd2098d431c89e1ef1f738937",
"assets/FontManifest.json": "5697a6277031c26f521ca06194080f83",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a546d1c1bf2c6ea900cfc1ce80744074",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c0f1d239822ca0f4396a8cfe59be8f28",
"/": "c0f1d239822ca0f4396a8cfe59be8f28",
"main.dart.js": "47ecf9b3ae9d6d635d3bd8a0eb6739e0",
"manifest.json": "d0b8a20a4a339d8a61d930da8da1b7aa",
"version.json": "cd0f7e881ebe51b4640fd4406aa7a546"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
