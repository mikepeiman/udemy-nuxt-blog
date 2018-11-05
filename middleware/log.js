export default function (context) {
  // if running async code, must return promise
  // if synchronous code, no need to return anything
  if (process.client) {
    console.log('[Middleware] log.js middleware is running on client')
  } 
  if (process.server) {
    console.log('[Middleware] log.js middleware is running on server')
  }
  
}