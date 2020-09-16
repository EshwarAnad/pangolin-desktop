'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "439728b8f91d45cf2c8a1c2c04100522",
"main.dart.js": "0cb6b8ce204405468c64061af5f1e2ce",
"assets/NOTICES": "293979f565afcda175c3725a49f83275",
"assets/FontManifest.json": "aa27ae11eb5e69d6fbff03ffbf634d42",
"assets/lib/localization/languages/en.json": "18f50b7e9ac55033fe427c4ff3f6e334",
"assets/lib/localization/languages/de.json": "44276b5369cefaccd0a7e9115c8aea95",
"assets/lib/localization/languages/fr.json": "346ab8ac49cf0a550497c6585f2cde26",
"assets/lib/localization/languages/nl.json": "b6b85796b913416b9a899a9ebf5f9f3c",
"assets/lib/localization/languages/hr.json": "a4f4a4c5cf1caa2d98f190292c3bfe15",
"assets/lib/localization/languages/id.json": "fa99f073eaf3ffab79f1bc779d6c27d3",
"assets/lib/localization/languages/pl.json": "747184bb81dd7bb45b0ccb7db222e52c",
"assets/lib/localization/languages/pt.json": "e1d87b859bf61e72f1837bf4d31ee980",
"assets/lib/localization/languages/es.json": "e6c9d63ede584416768d1e9d93f7e96f",
"assets/lib/images/def.jpg": "24bc69b19e663f4c8174bb27b88bee87",
"assets/lib/images/calc.png": "be34c099a9a4c15b40692c0610873d3f",
"assets/lib/images/notes.svg": "bfc3be24a1be5e6bfebe8631e5b5ea59",
"assets/lib/images/test.jpg": "57020cf201710a061e4a67ef79bc3ebe",
"assets/lib/images/people/subspace.png": "0951d9906bf56e0c894cdb8a6af132f6",
"assets/lib/images/people/vanzh.png": "b010c6f5739d6582e4dd0222ceb82d99",
"assets/lib/images/people/camden.jpeg": "b2deaec16dec8fed29fb9b9ce34ff028",
"assets/lib/images/people/fristover.png": "d77e781c46f9030f9fce4905c851f320",
"assets/lib/images/people/funeoz.jpeg": "d522359a4cebc56c1b010d045841842e",
"assets/lib/images/people/lars.jpeg": "9f6e9c8f4065e27be8610c33cddfaacc",
"assets/lib/images/people/horus.png": "0954704c21a5dd4b9e1c1d3002731d93",
"assets/lib/images/people/haru.jpeg": "8b9b2dc7e5860d2ed1dcbc6caf91e4f8",
"assets/lib/images/people/x7.jpeg": "0a7fb010e70ddeb807a6b0cd45ed89c1",
"assets/lib/images/people/hexa.png": "b1f67aa3920e9932326b941488c389e4",
"assets/lib/images/people/noah.jpeg": "c548542b5b181616bd48d4076e664b58",
"assets/lib/images/people/bleonard.png": "7a774ad7d57b711273cba62eeefb0b5e",
"assets/lib/images/people/faust.png": "85391c85d4fb7379905cd045ab1d5606",
"assets/lib/images/people/nobody.png": "8ac80de1e2063e5db0fdc2f682635a40",
"assets/lib/images/minimize.svg": "02136894edcb5f8ffff640ddda3d0c10",
"assets/lib/images/DahliaLogo.png": "dfa12e46cca782f0723ccfdd80f4a08b",
"assets/lib/images/logo-color.png": "6748a20704842170e7a87088d98d2f22",
"assets/lib/images/dahlia.png": "a588898d0b4be5e5234723478478badc",
"assets/lib/images/google_logo.png": "9b224c9884c2bb081d4ac92b23675c2e",
"assets/lib/images/menu.png": "e824461dd4c3e943b4b1da1817290f73",
"assets/lib/images/notes.png": "50ce947efebd3bf7d0d87d2de28286cf",
"assets/lib/images/settings.png": "ff6396d14363cf9951455a79b36ae35b",
"assets/lib/images/def.png": "4a9154fbf35a6772da8fe15819d76881",
"assets/lib/images/wallpaper.png": "5d490931a734ec44fd88bdc9b947d9ab",
"assets/lib/images/gallery.png": "5259483d1365c9b825bd6947cd85c016",
"assets/lib/images/Desktop/Cityscapes/stairs.png": "d4b0a0eaad1f0017fcc9d73e3a922994",
"assets/lib/images/Desktop/Dahlia/dahlia_material_background-1.jpg": "db3112225aaa7aa16dfe2dc5b060465f",
"assets/lib/images/Desktop/Dahlia/forest.jpg": "bb9971fadf446779b9f29204180bcf72",
"assets/lib/images/Desktop/Dahlia/Sunset.png": "0c90e0b1fd118334e32f7f186813567b",
"assets/lib/images/Desktop/Dahlia/dahlia_material_background.jpg": "eb83b6fae9d42765e4c4446c675d4c11",
"assets/lib/images/Desktop/Dahlia/mountain.jpg": "7fca0b04f5582bd15144f8ede952aa17",
"assets/lib/images/Desktop/Dahlia/Brick-Wall.jpg": "0b04e08e5ea10b738aa73291c38b24c9",
"assets/lib/images/phone.png": "de209128b7b3241f65b8b5c117c10190",
"assets/lib/images/preferences-activities.svg": "15717bcbc9d293352bb05ad3bae48cb8",
"assets/lib/images/close.svg": "7ef4ba2fef8ceac03c3960499de3f8bc",
"assets/lib/images/zucc.jpg": "80fca56b8121335ef576b10238bdd7eb",
"assets/lib/images/music.png": "545d9a70d4d7c5f525610b8e1c84801c",
"assets/lib/images/maximize.svg": "ba29473f37ab194a01c241d5daf7d550",
"assets/lib/images/icons/v2/compiled/social.png": "e0f4fcf882cc23ed646290fbfc859986",
"assets/lib/images/icons/v2/compiled/twitter.png": "60240fc14b7a7282a59050308aeeebed",
"assets/lib/images/icons/v2/compiled/debian.png": "527552dd24e4cd27bfb4be63b2c454c4",
"assets/lib/images/icons/v2/compiled/photos.png": "9b2ee870807ea18761ff4bf308897394",
"assets/lib/images/icons/v2/compiled/task.png": "548e313c465c5caf31cad9d574119016",
"assets/lib/images/icons/v2/compiled/software.png": "960cdf38b0daacbf2d3316355c3f78f1",
"assets/lib/images/icons/v2/compiled/reddit.png": "55c518a20a303e09e31c370190a62728",
"assets/lib/images/icons/v2/compiled/telegram.png": "36218d3af50dbc1d0240879a5f966fc4",
"assets/lib/images/icons/v2/compiled/android.png": "27a703eacba2bbfed57346b32b7af9b1",
"assets/lib/images/icons/v2/compiled/disks.png": "b8c23e9bf62238d900b958540be4f236",
"assets/lib/images/icons/v2/compiled/logs.png": "e312999c04f678ff5941d66718ef6cbf",
"assets/lib/images/icons/v2/compiled/software-shared.png": "868fe8e3d80b189e934220391a09dfaa",
"assets/lib/images/icons/v2/compiled/discord.png": "103e593c79206b9cd16fef562cc7ac32",
"assets/lib/images/icons/v2/compiled/terminal.png": "524019d8d97ea6c4ccd3db664375e4da",
"assets/lib/images/icons/v2/compiled/notes.png": "5644e3fe7f2f7601a6afdba1f1e17b73",
"assets/lib/images/icons/v2/compiled/ubuntu.png": "dc5596b1ded46cc5b61f74b860e98964",
"assets/lib/images/icons/v2/compiled/grey-drag.png": "af96264233287efd9efbf4ee2954fc67",
"assets/lib/images/icons/v2/compiled/fuchsia.png": "687e3a9bac810885c97028229adf3ac2",
"assets/lib/images/icons/v2/compiled/settings.png": "d5be1c564f8564d8c0a6f86057b01f2a",
"assets/lib/images/icons/v2/compiled/credits.png": "8eb3c439b19df88fb7643c395bc983b2",
"assets/lib/images/icons/v2/compiled/note_mobile.png": "5bc75d1575688657c59eeab91631d473",
"assets/lib/images/icons/v2/compiled/root.png": "edb147b20b24112a578f11f4fbdd24f3",
"assets/lib/images/icons/v2/compiled/messages.png": "004c87d98d7fb5ed52f8d79898d88ae6",
"assets/lib/images/icons/v2/compiled/containers.png": "62d3d4953dc39c773e43fe24dd89c65a",
"assets/lib/images/icons/v2/compiled/facebook.png": "d54e509f31d051140eca9e8d7b34ec40",
"assets/lib/images/icons/v2/compiled/macos.png": "2799296e4d4831c96c2b1b205d0ae796",
"assets/lib/images/icons/v2/compiled/files.png": "6c5019286c21611abebc9e9b1086be03",
"assets/lib/images/icons/v2/compiled/instagram.png": "167d43e215d131aee95b797a0bc8578e",
"assets/lib/images/icons/v2/compiled/help.png": "149ba5f0862946faea4d5744619ba607",
"assets/lib/images/icons/v2/compiled/calculator.png": "b5d2f4da128fd5a0eed0ed52a5ac9147",
"assets/lib/images/icons/v2/compiled/welcome-info.png": "cf9e894cfddbcd39a5efaf9f29186ba9",
"assets/lib/images/icons/v2/compiled/music.png": "91e7695e656f380f48df79ef8616b205",
"assets/lib/images/icons/v2/compiled/web.png": "a26b78a08fe2da40a81e3c837a60cede",
"assets/lib/images/icons/v2/compiled/discord.svg": "f8389ca1a741a115313bede9ac02e2c0",
"assets/lib/images/icons/v2/compiled/developer.png": "14f413a0c0ba35af4fe5bcc04ebf2820",
"assets/lib/images/icons/v2/compiled/github.png": "bd64ef0f18cf6b627dc8390a96aed2bd",
"assets/lib/images/icons/v2/compiled/theme.png": "1b065d813d384c82002793b1b92b0b85",
"assets/lib/images/icons/v2/compiled/clock.png": "81ca934d721ad96518209fd99b627908",
"assets/lib/images/icons/v2/notes.svg": "766b05b07affbf7a09079e4023a99823",
"assets/lib/images/clock.png": "d947514d9e25f18c4fbd72e9ad833195",
"assets/lib/images/Gmail-icon.png": "dfcbd586c56f73e343b25b3af12491c1",
"assets/lib/application.json": "d77a88179cab3c0105595fdc9dbef771",
"assets/fonts/Source_Code_Pro/SourceCodePro-BlackItalic.ttf": "fb68d27992feaf97dab1e5640a6f5812",
"assets/fonts/Source_Code_Pro/SourceCodePro-Medium.ttf": "f621c504d70317ff13774e27d643ba21",
"assets/fonts/Source_Code_Pro/SourceCodePro-BoldItalic.ttf": "c8066b7adaa839e5f0590da2d34723be",
"assets/fonts/Source_Code_Pro/SourceCodePro-LightItalic.ttf": "ac76390ae8518be5c0a0bd1f3b088b4b",
"assets/fonts/Source_Code_Pro/SourceCodePro-ExtraLight.ttf": "cba7ccef6b4071f76245cc0c5e659aa9",
"assets/fonts/Source_Code_Pro/SourceCodePro-Black.ttf": "efa63de0d44af1e7de9e01a4467dd423",
"assets/fonts/Source_Code_Pro/SourceCodePro-MediumItalic.ttf": "0b54cce890a75c2227718eaf473068ba",
"assets/fonts/Source_Code_Pro/SourceCodePro-Bold.ttf": "03c11f6b0c0f707075d6483a78824c60",
"assets/fonts/Source_Code_Pro/SourceCodePro-SemiBoldItalic.ttf": "6406c55397f0f20723d6b2c2f6515348",
"assets/fonts/Source_Code_Pro/SourceCodePro-Italic.ttf": "c088801620ae4d69924da74e879170a9",
"assets/fonts/Source_Code_Pro/SourceCodePro-ExtraLightItalic.ttf": "b98dab96118c3500d0e8c3f887fcfb26",
"assets/fonts/Source_Code_Pro/SourceCodePro-SemiBold.ttf": "420d3580f5b6e63ba1eabb8555b5f6cf",
"assets/fonts/Source_Code_Pro/SourceCodePro-Light.ttf": "a8d6f8bb989fc3c860ad2eeac21f9daa",
"assets/fonts/Source_Code_Pro/SourceCodePro-Regular.ttf": "b484b32fcec981a533e3b9694953103b",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/Roboto/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/fonts/Roboto/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/fonts/Roboto/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8",
"assets/fonts/Roboto/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/fonts/Roboto/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/fonts/Cousine/Cousine-Regular.ttf": "64a889644e439ac4806c8e41bc9d1c83",
"assets/fonts/Cousine/Cousine-BoldItalic.ttf": "1038b5579146b28e9e4dc98c8fc5d1d9",
"assets/fonts/Cousine/Cousine-Italic.ttf": "177a3d2157da07498e805683e8cdaa8d",
"assets/fonts/Cousine/Cousine-Bold.ttf": "06dae6a1a3247bd76125cfe3b3480557",
"assets/fonts/SulphurPoint/SulphurPoint-Light.ttf": "45985fd198cf37666bb19a61e15f429c",
"assets/fonts/SulphurPoint/SulphurPoint-Bold.ttf": "f7c4253323e6d736b886bd813230a5f1",
"assets/fonts/SulphurPoint/SulphurPoint-Regular.ttf": "fe32d30b047837c9d2af053e9f6539f9",
"assets/AssetManifest.json": "5af75957638bd735bec2b5ce16138147",
"favicon.png": "0bbb275c3be676f24451e7680147c8a2",
"index.html": "054182f7d348366f7c747110aee72199",
"/": "054182f7d348366f7c747110aee72199",
"manifest.json": "8ff5fe849411d088c5084cdf099d07cf",
"icons/Icon-512.png": "0bbb275c3be676f24451e7680147c8a2",
"icons/Icon-192.png": "0bbb275c3be676f24451e7680147c8a2"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
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
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
