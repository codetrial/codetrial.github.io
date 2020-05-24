/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1ecb9a9d78af52f486c8fd98652ee26e"
  },
  {
    "url": "antd-pro/index.html",
    "revision": "630e02e69c42239fc0bbf5c125335af2"
  },
  {
    "url": "assets/css/0.styles.25a19db8.css",
    "revision": "c2939741286a8047c95c7a63b07f34b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8592d631.js",
    "revision": "02e52a8f69a0fba22057e62a3ba7989a"
  },
  {
    "url": "assets/js/11.f3914cff.js",
    "revision": "c35eb8130ed0a74b0e69b25b6e3540fa"
  },
  {
    "url": "assets/js/12.5779ca7d.js",
    "revision": "492cc6e3f387920e92e4fe154aff0ac6"
  },
  {
    "url": "assets/js/13.14237679.js",
    "revision": "79078f3bcb9ae3c63d1019a29d80e50c"
  },
  {
    "url": "assets/js/14.f87f6e17.js",
    "revision": "29c5152dab22ad41cdd527045854e21a"
  },
  {
    "url": "assets/js/15.c1e279a2.js",
    "revision": "8b4405ae846ad0cf5857afbfa074dd0d"
  },
  {
    "url": "assets/js/16.9b681a3f.js",
    "revision": "1a7d1435d7b267095f32d9d168e090ec"
  },
  {
    "url": "assets/js/17.32a8db7d.js",
    "revision": "fa5751665aa0ed3d0641fe7ed53ae3ce"
  },
  {
    "url": "assets/js/18.9f283422.js",
    "revision": "71acbd0efc395cf948273f5dc889acfe"
  },
  {
    "url": "assets/js/19.d65d1264.js",
    "revision": "196d81bc8e7c60cb6f0cf6fe42758c7c"
  },
  {
    "url": "assets/js/20.a699d921.js",
    "revision": "778c2fd811c5014d60e17f72504d1b13"
  },
  {
    "url": "assets/js/21.4348454a.js",
    "revision": "70679cff9a04033900c5e2ee23de8f72"
  },
  {
    "url": "assets/js/22.7983bbb5.js",
    "revision": "e2b83d237e081bfd0e7582b114161aa0"
  },
  {
    "url": "assets/js/23.34865231.js",
    "revision": "16c35524f0c83f0b422748a2f0fb1eb8"
  },
  {
    "url": "assets/js/24.a777064d.js",
    "revision": "79a9c5ae8752f3ad9310e67bdd6788d5"
  },
  {
    "url": "assets/js/25.def07cba.js",
    "revision": "14bb1d4002383181dd408c53b38cb8ae"
  },
  {
    "url": "assets/js/26.82131356.js",
    "revision": "2c386e0ebe8bf123c61a1e535df56381"
  },
  {
    "url": "assets/js/27.2e5123d5.js",
    "revision": "f21fc6bd175f4ba1161a162fbbdb95ef"
  },
  {
    "url": "assets/js/28.4b0fe011.js",
    "revision": "76bbeb87ece07d6cab403b69e9bab19f"
  },
  {
    "url": "assets/js/29.53a3f67b.js",
    "revision": "86fbc48d53d12b0a45abacc5c7d723c3"
  },
  {
    "url": "assets/js/3.9439ee4d.js",
    "revision": "dcdabb6949202551ef2c77d8c3d46414"
  },
  {
    "url": "assets/js/30.57b1d29f.js",
    "revision": "03e9933e1869a2b3c4dae193b3129e26"
  },
  {
    "url": "assets/js/31.9aed76e2.js",
    "revision": "8f37b82a14029fcba91c00286adc2e67"
  },
  {
    "url": "assets/js/32.f6c13dfd.js",
    "revision": "76d31bf307ec39a887ad99b886f1ee70"
  },
  {
    "url": "assets/js/4.3a202793.js",
    "revision": "5826be78ff7746368f34ffa1a5eb232f"
  },
  {
    "url": "assets/js/5.78f997ba.js",
    "revision": "77f2677ac534055bd0bcf43aaff571f2"
  },
  {
    "url": "assets/js/6.8ac54e21.js",
    "revision": "92993249a3cd58a72379ae8c8123c840"
  },
  {
    "url": "assets/js/7.d32245a6.js",
    "revision": "5da6e0634051befca68bb2e8037c81d1"
  },
  {
    "url": "assets/js/8.c8aee36a.js",
    "revision": "fa77f772c248da5e4117d2b7f9c04dbc"
  },
  {
    "url": "assets/js/9.783bfd8b.js",
    "revision": "e03b97929e2429bb40d1fefd6910dcbe"
  },
  {
    "url": "assets/js/app.ce9406c5.js",
    "revision": "87a124c2e8c10b4e06e5dc4d8927ea32"
  },
  {
    "url": "assets/js/vendors~notification.950601c6.js",
    "revision": "f2813c6a11af5c396c4e1ec0f3197d44"
  },
  {
    "url": "egg-token/index.html",
    "revision": "dddc7ceec19d6bf0457a8f5189ce9da5"
  },
  {
    "url": "element-admin/index.html",
    "revision": "9b3cf644dd5426c597a439a797b5c751"
  },
  {
    "url": "en/antd-pro/index.html",
    "revision": "e57e821f6a8a3c53a21ef4d4f6423742"
  },
  {
    "url": "en/egg-token/index.html",
    "revision": "9a029930dcb51137ad1b0dd5832b69af"
  },
  {
    "url": "en/element-admin/index.html",
    "revision": "385d244c89393fe6c2c4ff4d55c017ba"
  },
  {
    "url": "en/gotauth/index.html",
    "revision": "1ba8edfd807d8f224faa0a5d132f11d0"
  },
  {
    "url": "en/guide/index.html",
    "revision": "3eb867eb75a9ea4c7e54f3478d61cac0"
  },
  {
    "url": "en/index.html",
    "revision": "025995716094f499d1172d1f0db1ec1d"
  },
  {
    "url": "en/wishtodo/index.html",
    "revision": "8b158193009f2a834b2e560c994f7190"
  },
  {
    "url": "gotauth/api-app.html",
    "revision": "384ab7a50e2af535344af18d3069d765"
  },
  {
    "url": "gotauth/api-group.html",
    "revision": "511b5b443ea62e6872661f81c982e31e"
  },
  {
    "url": "gotauth/api-resource.html",
    "revision": "8999185674427f6a7bbfa0529d9af137"
  },
  {
    "url": "gotauth/api-role.html",
    "revision": "9026769b6e84b32d2032f8794863fcc8"
  },
  {
    "url": "gotauth/api-user.html",
    "revision": "ee4553634cd9dd942bf0c8099469e97d"
  },
  {
    "url": "gotauth/deploy.html",
    "revision": "0c6e9552b07d5dee76006f11341ef8bb"
  },
  {
    "url": "gotauth/dev.html",
    "revision": "8ce9fb943d8cd284708747c9a2b9e28f"
  },
  {
    "url": "gotauth/filter.html",
    "revision": "b24427cbd59232f29146d068a57689a5"
  },
  {
    "url": "gotauth/graphql.html",
    "revision": "f11d2b35648081bf030cad5fd65a0663"
  },
  {
    "url": "gotauth/index.html",
    "revision": "3c3a5c344d5aa92459dd9312aa956f03"
  },
  {
    "url": "guide/index.html",
    "revision": "b1a98dd3326542446adb2e2d92ce883d"
  },
  {
    "url": "hero.png",
    "revision": "dca9fb7022ccd0aa90bac1cea591e4cb"
  },
  {
    "url": "i18n/index.html",
    "revision": "f5268069fba2463757363af82e64157c"
  },
  {
    "url": "index.html",
    "revision": "f1472d83faea8401d861543a843bee95"
  },
  {
    "url": "logo.png",
    "revision": "a645e1341bce8f6fedc9ba399461dc1f"
  },
  {
    "url": "wishtodo/api.html",
    "revision": "6620866173c2b120461e825eb160ea06"
  },
  {
    "url": "wishtodo/graphql.html",
    "revision": "1300f010f3ee96e85bcb8aa218a62ae6"
  },
  {
    "url": "wishtodo/index.html",
    "revision": "8555a5d1b54fd2cbc441fc89cce38e50"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
