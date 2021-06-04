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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c9297a683ee6d3c4ce865f8fbfdf9ef6"
  },
  {
    "url": "assets/css/0.styles.3905bb84.css",
    "revision": "163de45f04f2e96b3390109ed72438bd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.42802e9b.js",
    "revision": "11e2a2baa01d7edf0472bc9a9fb8fb24"
  },
  {
    "url": "assets/js/11.4b478cf8.js",
    "revision": "dfe920051ad7fa2b2be91a2373765484"
  },
  {
    "url": "assets/js/12.a278e9cf.js",
    "revision": "8da03166b51db6b4f2527f4fdfd0966c"
  },
  {
    "url": "assets/js/13.eae8becb.js",
    "revision": "8f7d562b8805f8b69dc08511d1e51c41"
  },
  {
    "url": "assets/js/14.342c55c7.js",
    "revision": "20ee7223bc3eb29c175658309f9a9b42"
  },
  {
    "url": "assets/js/15.34377a3d.js",
    "revision": "dc6b21432b144c328dbe5f518f555150"
  },
  {
    "url": "assets/js/16.fa116caa.js",
    "revision": "25405cc1472ad89ba164cf5578b87fe3"
  },
  {
    "url": "assets/js/17.8fa9c245.js",
    "revision": "3f53edced3b723c9c6ff3f768fabcedf"
  },
  {
    "url": "assets/js/18.64ee7117.js",
    "revision": "c0546308c4d008330e0524958aa89982"
  },
  {
    "url": "assets/js/19.74950ce7.js",
    "revision": "f95122c5f39dd52c5f1fa9a10096ebd9"
  },
  {
    "url": "assets/js/20.194b3e1e.js",
    "revision": "baf9c4a038156e1beb581b49b1e29551"
  },
  {
    "url": "assets/js/21.ec116987.js",
    "revision": "c43fdc3ae0146d39b917f1b3003fbe6e"
  },
  {
    "url": "assets/js/22.052d7390.js",
    "revision": "5bd362397ab211ed4c478f2df6c5410b"
  },
  {
    "url": "assets/js/23.99552aad.js",
    "revision": "06dcadadb099a7cf850ce80ea22af93e"
  },
  {
    "url": "assets/js/24.c0cff419.js",
    "revision": "879de5d69056f342c28850c0e5e75556"
  },
  {
    "url": "assets/js/25.5a607701.js",
    "revision": "1af826ffddf0ae449a878ada19bdf068"
  },
  {
    "url": "assets/js/26.7c27baa4.js",
    "revision": "e5a5d1c801067d2f68473fe08a4c0df6"
  },
  {
    "url": "assets/js/27.1dc6cedd.js",
    "revision": "69d7baee4a0c334c43a582aba2f5b122"
  },
  {
    "url": "assets/js/28.96dcafc5.js",
    "revision": "ef7428db39bdd43dbeffcf431a930c7b"
  },
  {
    "url": "assets/js/29.fe7c288c.js",
    "revision": "5bccb6224b0ed339a0c899e5a5e3de11"
  },
  {
    "url": "assets/js/30.0ac7756f.js",
    "revision": "e8ee110fdb2b88fb69f7f0f15db0825b"
  },
  {
    "url": "assets/js/31.aae00530.js",
    "revision": "eb8c79fb492b4b800a0acb18e188f1a0"
  },
  {
    "url": "assets/js/32.2a51345b.js",
    "revision": "9448f1d84d96de8968ae5b9d40b22215"
  },
  {
    "url": "assets/js/33.8a4197db.js",
    "revision": "48a15382cc56a4ad5737e9e09413ebe6"
  },
  {
    "url": "assets/js/34.dc90371a.js",
    "revision": "22312a7f576f0546816c73551fcd4ae7"
  },
  {
    "url": "assets/js/35.68102b2b.js",
    "revision": "e7eb5156b4099698c0dea31cae04d03a"
  },
  {
    "url": "assets/js/36.986df6e8.js",
    "revision": "328d6d1f621fada570d406cad8fb591b"
  },
  {
    "url": "assets/js/37.de7b93f4.js",
    "revision": "346914d9628b7f2716150f3aa2d947e9"
  },
  {
    "url": "assets/js/38.7a69edb8.js",
    "revision": "278c1f52e2bd5ac7bcd366d5e6f9ed28"
  },
  {
    "url": "assets/js/4.4642e1c1.js",
    "revision": "929a1764b884c11ece4e4996e853a119"
  },
  {
    "url": "assets/js/5.a7e36e29.js",
    "revision": "85c32ceb809dec516e4d3400f99e8ed3"
  },
  {
    "url": "assets/js/6.e7f7f09d.js",
    "revision": "3dcc4bf9dc4efb3a596550586207aa4c"
  },
  {
    "url": "assets/js/7.046e5a1b.js",
    "revision": "a1a4eabe5f9f709c8fdb0f59c535f7e3"
  },
  {
    "url": "assets/js/8.77fb8967.js",
    "revision": "fe3132e4d77b75cf16882c0fcf84463c"
  },
  {
    "url": "assets/js/9.ebfa537e.js",
    "revision": "f8c46e4421227a74a3111727b37c7e7a"
  },
  {
    "url": "assets/js/app.a04e86d8.js",
    "revision": "2c891ad6281998f526df30d0a205789f"
  },
  {
    "url": "assets/js/vendors~flowchart.20a64d45.js",
    "revision": "716c82a5a8d7e7248817c9c543fbb778"
  },
  {
    "url": "assets/js/vendors~notification.ea176280.js",
    "revision": "4638db80765160e1766d4bf574a4457c"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "270b63026b84fdd06ac1f4b34ae3f3c2"
  },
  {
    "url": "javaee/index.html",
    "revision": "cdfb61edcf817d90f8f1410fb203b285"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "1925b292cb457dc626a046095632cda4"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "c4077c73d5714ef1799e25738afd2ec5"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "fa827f8670b67b84c6313cbb4355136b"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "1111441447aef95a7110d492d446f29c"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "dac1737cd2b77ec64b0dd672e565385b"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "4ff1151ef0741225053a16c98688d08d"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "84fececb3de8438a7cdb86d7859ef009"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "300364de88d7bc8ed9ba0495d6507ccd"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "21868a4f6195620c1ba4688b0c261812"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "22432afff934685f26ecd1b5c1499960"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "656727184f165b80b6f3696502867a0c"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "088955427d523e938e5cef4b59f968f7"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "8c32b7f82563bebbdcd7333631870cd3"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "a6c8f777d9cdc67d1bacf8234d0c4fd9"
  },
  {
    "url": "javatool/build/maven/sidebar.html",
    "revision": "234da494a2ef96bfb36ffd2a009fa078"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "67b5ff1ad04b7c5b04502ecc8eda70f9"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "b271399ca7aee05b8a9847bd321958e6"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "a0f28805dd9aae14449bcf3b9e6c2994"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "01eb1a7da6fddbfac8e921f36baa5068"
  },
  {
    "url": "javatool/index.html",
    "revision": "a7ca9d43c8bc95504596afb746580953"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "dac7e1dc6f486cc533f6237ad119a127"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "5cb8d4d8eb805b93e7a308080fe97385"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "fb46c0f422084bddb82520757d00fcb9"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "e9adc5e720717cd35fb75332bf50934d"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "e1dbe762f7574f36b884858cef4f1ef8"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "75f8fa7de261b296a9cc7b60d1b95b80"
  }
].concat(self.__precacheManifest || []);
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
