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
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        console.log('editPost mutation called')
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        console.log('store/index.js actions hook fired')
        return axios.get(
          process.env.baseUrl + '/posts.json'
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
      },
      addPost(vuexContext, postData) {
        const createdPost = {
          ...postData, 
          updatedDate: new Date()
          }
        return axios.post(process.env.baseUrl + '/posts.json', createdPost)
        .then(res => {
          vuexContext.commit('addPost', {...createdPost, id: res.data.name})
        })
        .catch(error => console.log(error))
      },
      editPost(vuexContext, editedPost) {
        return axios
        .put(
          process.env.baseUrl + '/posts/' + editedPost.id + '.json', 
          editedPost)
        .then(res => {
          vuexContext.commit('editPost', editedPost)
        })
        .catch(e => console.log('error: ', e))
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
