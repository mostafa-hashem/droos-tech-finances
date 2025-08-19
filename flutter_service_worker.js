'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1a9ab90f5ceaebbb8c2b97399faa0b8f",
".git/config": "722b9305568fe536559b4e722d3149a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cdb97cc0637165408881787c8651feaf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3e77e31d61a8a94f70442db426f70e5b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1385b8eb25aa63edc3c53e7becd209d3",
".git/logs/refs/heads/main": "1231f89c6751a99e4e8001d35400b925",
".git/logs/refs/remotes/origin/HEAD": "f9143461a3471f72e40ba79b71909d39",
".git/logs/refs/remotes/origin/main": "81381aa70616a7fc51dc320df676c49a",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/05/6dbd450b64f505367901a17c2b2922bde5f54e": "f14f631a6d3a9a213854e9d4e1401dda",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0d/ecf83126a2fa055d3388e4369914047743c65f": "2c353c3363d927f3100ef361484a6c54",
".git/objects/12/81ead68ae610a7fdec54e0f93f7d6dfe9b50f4": "3ed1d71d023db20cea050b4458cb311c",
".git/objects/19/5352f3c3ca998a399e52252b987cbfda9bcfd7": "5bc27ece32bc47da08ab78e916c7171c",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/22/885edbea2784f6eb45c8bcbf13a34faaca8b84": "aa540e20aa49f5095590cadcbcc602dc",
".git/objects/23/7b2537557c32d34fb7bed96d859718c04d54ce": "97f062c5f96e30533a54b10c65d77439",
".git/objects/27/7d6503e0118f1f659ac1acd4632c0a23b2a0ef": "3b69a16594f0aadd520cfec327d48d4c",
".git/objects/29/4582e92582f2311718979d94fa89f1ab82f36f": "6efc398ee434fa18de4e7ff8f327c9d7",
".git/objects/2a/0520cac588fcd52c3d0cdab689a3ec7593a151": "9a259c24b5ec0d6af8cfc0d0c94a7972",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/39/eff56560b695b3ace94ac605854cb99c6ad3ed": "d7ff5cf76d9f30a9929aad68cebd27e5",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/48/4571fb6f94794e446cdff2330dba06607a0a84": "fb469ba0f9f74bf33fb46000e91bb75d",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5f/d75f0a8d7aa892fb6587f798f2560f4bd25e03": "17b4b1a7955f7f304e3a6a9b14e456b6",
".git/objects/62/32b61d698eb43b0bf9d75a810ba7774d902cc1": "a20db3355ed0d54a771dbccf397d752b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/419952e1863904c8fa5f6a58ccbed93924cf58": "ee28a62c8f02c4c2a8da0b3b033d5faa",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/7e/ad937e1605a381529ac1664c80f70808519dda": "acbb83972b6913f87263891f0b568ad4",
".git/objects/82/3d182a321d942d3ec9cc5894c76cf546fdd562": "fd66bc97d14f0549089e3ee54f79ceb3",
".git/objects/83/189b8bbc1db8675067673bc0dc5e5a7552f836": "34dfb0e79b16725d4013e258ace7821c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/babb55d041b631faea42ffa694b7ba77322514": "337abe6d22a81bffafd86064062ba451",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/1e49d83ed20adc1af33b425020c15de9a70eba": "7c2b59506ad3f1a15e3e457559ca1585",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/ad/4fa9eb23997eb23c443713e4fd118d9c29a0ac": "0c4d1f827449c2e3add1193dccaf1422",
".git/objects/b2/9f3e81fda39da99abe79ac82babcf75f9ae7a0": "9eba824a6b1e17ee423d06b2d32ad6b2",
".git/objects/b7/0f6c358ac6259c7d355f9e8f2cd9812690a874": "73dabdc71b2edf27153446e86e2abd10",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/bf6f55e963184d702fef8a94e18c86686d623b": "bdda5a2218e2f504c56a8a4dbd2cfaae",
".git/objects/bb/85e6993fe5b36a97cbe4985e2efe271b8367ee": "1da3c2bc6c2c44b6ed7a7df2548ff4ab",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/c5/30bbd644eb1f1bfed75d8d7297bb17729d6ea3": "6ebd87f2f1bc82a45fd7b037e35a8c09",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/1d55b75d69a6787fad59f3ae6762f8858150c4": "1a771d923b0406344ee44510989a4edc",
".git/objects/d2/370f4cf2e61edfee4916325d40137722cb9aed": "6c57d7b44abdcf2b5b3d5cb3559c2180",
".git/objects/d2/5f5ae2c948a88ce03ace1781d52e8c2094fe18": "cb7fd05b520877c90ce842ff9a6dbae7",
".git/objects/d2/8f3ce88b53d7170987f626c7d289b686905340": "a75eeca17b54319d863420a9d8cfee4a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/197d902bd93180133dd7be2b6095f840f59765": "21c8ddd2631a88ba61b219cb3734f90d",
".git/objects/db/3e3c519429f543003e045cd9671af508c45660": "6ef8999c69a9313e6c3cae3a39e9044b",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/6a25db8ca40bd6d1d072914fb0b84887a5ac64": "89364b56e9df7f1143522da453c4186f",
".git/objects/e6/2933080427feb130a8baafbe4ef574bffd67db": "c7e9bb916fb1171e1c0320cbfc208b0f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/2622cc84eef2360387fc724c719b0450d54258": "3b0471bea7812b77c0361684860b956d",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/ef/2c42dbc5d1dab73729547e66165d0d2140e308": "19828d108add4afd0a1d7dcfc03d7df3",
".git/objects/ef/ca5f2c36e387451a4a2328f4a8d80c0f35ffee": "59125adf6b33b5dddd3d4a517d4c9021",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/9cb049e6f49643989379dda4f55b90d782f808": "0eae715c42c889d34290f7704db89e01",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/19caf549097555341f2764735d86122623add5": "3dbac8ea8a2814407dacf5765d84191f",
".git/objects/f7/929f49c6562154b0814fc5cb5a8105935fa068": "5dd6fb828ecb9d97348a56e5ec80bad9",
".git/objects/fc/ef0c4e2357b5902486269b939425aaf3257a4e": "7a06fcf1b008dd81e2f39e57be69500e",
".git/objects/fd/477abbe2012dc70a604edb5c3df5ca5936269c": "740d36895cb34c2936247497d07d89fe",
".git/refs/heads/main": "ff920810bdd0f215d51eb73b5087f27c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ff920810bdd0f215d51eb73b5087f27c",
"assets/AssetManifest.bin": "e02d2b41c874c2011e54397220c4ee64",
"assets/AssetManifest.bin.json": "bba17fed63893d9580d502fdbe35dd13",
"assets/AssetManifest.json": "c4954e80dd1e555c10b5454f7b1a95c3",
"assets/assets/fonts/cairo/Cairo-Bold.ttf": "2bbe2088a8d666fa99b80554fdc6effd",
"assets/assets/fonts/cairo/Cairo-Light.ttf": "fa2b785b431fa365329cfbf3955f1b88",
"assets/assets/fonts/cairo/Cairo-Medium.ttf": "cbf0e8f4625a63746797ef8709167c44",
"assets/assets/fonts/cairo/Cairo-Regular.ttf": "45aaa2b5f9de1d61c2d3fe1f40107ac8",
"assets/assets/fonts/cairo/Cairo-SemiBold.ttf": "d24823f3136e983e632a2d8e11c822b4",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/FontManifest.json": "1b204fb23bf1cd770cc641ef0f750453",
"assets/fonts/MaterialIcons-Regular.otf": "728ce60fdb921b9029cace0131cec3dd",
"assets/NOTICES": "d7f5435758ae2a7794e48c889b85f45c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.ico": "acf0a3384db9ce931bf218e52bbc9eeb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "5b6f31f518c2cb4765ecc9e30dec30fc",
"icons/apple-touch-icon.png": "006b2c6d2b953340fb65fdc4e350a9c3",
"icons/icon-192-maskable.png": "8fee21908505e599b113e772dce5b8b4",
"icons/icon-192.png": "6f1cee74288a61bf7c7030e523be48d8",
"icons/icon-512-maskable.png": "ba8c8aec68c73efffd4bf5efd925fb00",
"icons/icon-512.png": "4502799b5d082330306d1d8828c78b53",
"index.html": "44e15932ee4fd473871347d64a3789cf",
"/": "44e15932ee4fd473871347d64a3789cf",
"main.dart.js": "861dcbbfdbd4b621f5d01588492a9242",
"manifest.json": "8f667b016aab5745f8b40fa06a3080d1",
"version.json": "ac828eb000adc92226bda76e40cf15ff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
