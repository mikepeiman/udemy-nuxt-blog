export default function(context) {
  console.log('[middleware] auth.js')
  if(!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}