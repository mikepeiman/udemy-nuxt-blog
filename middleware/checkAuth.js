export default function(context) {
  console.log('[middleware] checkAuth.js')
  context.store.dispatch('initAuth', context.req)
}