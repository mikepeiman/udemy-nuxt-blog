import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      loadedPosts: [],
      token: null
    }),
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
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        console.log('store/index.js nuxtServerInit actions hook fired')
        return axios.get(
          process.env.baseUrl + '/posts.json'
        )
        .then(res => {
          console.log('store/index.js, inside of nuxtServerInit, axios.get.then promise returned')
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
        return axios.post(process.env.baseUrl + '/posts.json?auth=' + vuexContext.state.token, createdPost)
        .then(res => {
          vuexContext.commit('addPost', {...createdPost, id: res.data.name})
        })
        .catch(error => console.log(error))
      },
      editPost(vuexContext, editedPost) {
        return axios
        .put(
          process.env.baseUrl + '/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token, 
          editedPost)
        .then(res => {
          vuexContext.commit('editPost', editedPost)
        })
        .catch(e => console.log('error: ', e))
      },
      authenticateUser(vuexContext, authData) {
        let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.fbAPIkey
        if (!authData.isLogin) {
          authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + process.env.fbAPIkey
        }
        return this.$axios.$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            console.log('Result idToken: ', result.idToken)
            vuexContext.commit('setToken', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem('tokenExpiration', new Date().getTime() + +(result.expiresIn * 1000))
            // adding + immediately preceding a variable, converts to number, same as Number.parseInt(var)
            Cookie.set('jwt', result.idToken)
            Cookie.set('expirationDate', new Date().getTime() + +(result.expiresIn * 1000))
            vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
          })
          .catch(e => console.log('Error: ', e))
  
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration);
      },
      initAuth(vuexContext, req) {
        let token
        let expirationDate
        if (req) {
          console.log('initAuth: if(req) true, req: ', req)
          if (!req.headers.cookie) {
            return
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='))
            if (!jwtCookie) {
              return
            }
            token = jwtCookie.split('=')[1]
            console.log('store/index.js => initAuth, req.headers.cookie: ', req.headers.cookie)
            expirationDate = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else {
          console.log('initAuth: if(req) not true')
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        }
        console.log('debug initAuth: ', new Date().getTime(), expirationDate)
        if (new Date().getTime() > +expirationDate || !token) {
          console.log('no token or invalid token')
          vuexContext.commit('clearToken')
          return
        }

        vuexContext.dispatch('setLogoutTimer', +expirationDate - new Date().getTime())
        vuexContext.commit('setToken', token)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
