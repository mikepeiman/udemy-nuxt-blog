import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        console.log('store/index.js actions hook fired')
        return axios.get(
          'https://udemy-nuxt-blog-3c87b.firebaseio.com/posts.json'
        )
        .then(res => {
          console.log('axios.get promise returned')
          const postsArray = []
          for (let key in res.data) {
            postsArray.push({ ...res.data[key], id: key})
          }
          vuexContext.commit('setPosts', postsArray)
        })
        .catch(e => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
