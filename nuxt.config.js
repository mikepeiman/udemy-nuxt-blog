const pkg = require('./package')
const bodyParser = require('body-parser')
const axios = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Mike's Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Charmonman|Montserrat'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3399ff', height: '10px', duration: 2500 },
  loadingIndicator: {
    name: 'circle',
    color: '#3399ff'
  },

  /*
  ** Global CSS
  */
  css: ['@/assets/styles/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/core-components.js',
    '@/plugins/date-filter.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL || 'https://udemy-nuxt-blog-3c87b.firebaseio.com'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },
  env: {
    baseUrl:
      process.env.BASE_URL || 'https://udemy-nuxt-blog-3c87b.firebaseio.com',
    fbAPIkey: 'AIzaSyDw8bm__eqkygCYkpUT6XG-PpbmAc-n-Ac'
  },
  // generate: {

  // },
  // rootDir: '/',
  // router: {

  // },
  // srcDir: 'client-app/' (for layouts, pages, components)
  // transition: page,
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  router: {
    middleware: 'log'
  },
  generate: {
    // to customize the SSG generator functionality. Requires a function that returns an array of routes. This can be a promise.
    routes: function() {
      return axios.get('https://udemy-nuxt-blog-3c87b.firebaseio.com/posts.json')
      .then(res => {
        console.log('res from config generate: ', res)
        const routes = []
        for (let key in res.data) {
          console.log('key (in nuxt.config.js generate): ', key)
          // console.log('res.data: ', res.data)
          // simple version, push string to array:
          // routes.push('/posts/' + key)
          
          // more complex version to limit HTTP requests - get all post data now
          routes.push({
            route: '/posts/' + key, 
            payload: {postData: res.data[key]}
        })
        console.log('key at end of for loop iteration: ', key)
        }
        return routes
      })
      // return [
      //   '/posts/-LQKJmzGk0BDFCkjQQHa'
      // ]
    }
  }
}
