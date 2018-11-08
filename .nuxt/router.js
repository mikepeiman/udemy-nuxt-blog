import Vue from 'vue'
import Router from 'vue-router'

const _5099f931 = () => import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages_posts_index" */).then(m => m.default || m)
const _1dc4262a = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _e957a796 = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _23d3327e = () => import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */).then(m => m.default || m)
const _69adbc28 = () => import('..\\pages\\admin\\new-post\\index.vue' /* webpackChunkName: "pages_admin_new-post_index" */).then(m => m.default || m)
const _5b59d5cd = () => import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages_admin_auth_index" */).then(m => m.default || m)
const _f90f2106 = () => import('..\\pages\\admin\\_postID.vue' /* webpackChunkName: "pages_admin__postID" */).then(m => m.default || m)
const _065bf74d = () => import('..\\pages\\admin\\_postID.vue\\index.vue' /* webpackChunkName: "pages_admin__postID.vue_index" */).then(m => m.default || m)
const _622f6a89 = () => import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages_posts__id_index" */).then(m => m.default || m)
const _10d5c7b0 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/posts",
			component: _5099f931,
			name: "posts"
		},
		{
			path: "/about",
			component: _1dc4262a,
			name: "about"
		},
		{
			path: "/admin",
			component: _e957a796,
			name: "admin"
		},
		{
			path: "/contact",
			component: _23d3327e,
			name: "contact"
		},
		{
			path: "/admin/new-post",
			component: _69adbc28,
			name: "admin-new-post"
		},
		{
			path: "/admin/auth",
			component: _5b59d5cd,
			name: "admin-auth"
		},
		{
			path: "/admin/:postID",
			component: _f90f2106,
			name: "admin-postID"
		},
		{
			path: "/admin/:postID.vue",
			component: _065bf74d,
			name: "admin-postID.vue"
		},
		{
			path: "/posts/:id",
			component: _622f6a89,
			name: "posts-id"
		},
		{
			path: "/",
			component: _10d5c7b0,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
