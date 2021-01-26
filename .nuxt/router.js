import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _86dd3e58 = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _a30b802e = () => interopDefault(import('../pages/newsletter.vue' /* webpackChunkName: "pages/newsletter" */))
const _7c933025 = () => interopDefault(import('../pages/thankyou.vue' /* webpackChunkName: "pages/thankyou" */))
const _7f60c652 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _7daa250a = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blogs",
    component: _86dd3e58,
    name: "blogs"
  }, {
    path: "/newsletter",
    component: _a30b802e,
    name: "newsletter"
  }, {
    path: "/thankyou",
    component: _7c933025,
    name: "thankyou"
  }, {
    path: "/",
    component: _7f60c652,
    name: "index"
  }, {
    path: "/:slug",
    component: _7daa250a,
    name: "slug"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
