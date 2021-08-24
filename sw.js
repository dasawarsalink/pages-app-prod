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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-043cd834c70bb64ff6ef.js"
  },
  {
    "url": "framework-c54b01a45b8ef1cd9fda.js"
  },
  {
    "url": "styles.464d0525ef61054227b8.css"
  },
  {
    "url": "app-fb8ab6f7fbe20e3cfef7.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b48b468048bfcf307796ba3ec3bb86ee"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-159248dac574f90588a6.js"
  },
  {
    "url": "polyfill-8cf4308b18b7c7581685.js"
  },
  {
    "url": "component---src-pages-index-jsx-a9c45ea988bb9e803612.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "80c69b8b079bd9ba34654a318851024e"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "f2dfbd170c71c1c502f51d9428a80606"
  },
  {
    "url": "ddbf9d3ca4891f1501d7eb1fefcb417246f1c675-94cf17844247f1126cca.js"
  },
  {
    "url": "63c2313e5bc567f00ef5be9a75b40068f17bfb1e-1599100a827b7e641a2e.js"
  },
  {
    "url": "583e8741b2a58e44dea3f539523d5860cb3d7f24-ec731808d57ddf7b9e73.js"
  },
  {
    "url": "23abfe04aa0bab0df6795401bddbc3319bede31c-1d4b6d340f3582f3b769.js"
  },
  {
    "url": "be7f0ff88c7f4f2ff212679f40661c4b38a29df3-2f570542c6da5f29f32b.js"
  },
  {
    "url": "component---src-pages-user-login-jsx-f9f3bad069c176957887.js"
  },
  {
    "url": "page-data/user/login/page-data.json",
    "revision": "64ee9ecafbfb2b4d0a640cc08f022efb"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9beb095dadfebaf0298407f20af2a74d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-fb8ab6f7fbe20e3cfef7.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
