<template>
<div class="container">
  <section class="page-header">
    <h1 class="page-title">Blog</h1>
  </section>

  <PostsList :posts="loadedPosts" />
</div>
</template>

<script>
import PostsList from '@/components/Posts/PostsList'
import axios from 'axios'

export default {
  components: {
    PostsList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  created() {
    console.log('Store: ', this.$store);
  },
  nuxtServerInit(vuexContext, context) {
    return axios.get(
        'https://udemy-nuxt-blog-3c87b.firebaseio.com/posts.json'
      )
      .then(res => {
        console.log('axios.get promise returned')
        const postsArray = []
        for (let key in res.data) {
          postsArray.push({ ...res.data[key],
            id: key
          })
        }
        vuexContext.commit('setPosts', postsArray)
      })
      .catch(e => context.error(e))
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 90vw; */
  margin: 0 5vw;
}

.page-header {
  min-height: 15vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  /* background-image: url('https://images.pexels.com/photos/256807/pexels-photo-256807.jpeg?auto=compress&cs=tinysrgb&h=350'); */
  background: #115599;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: 0% 0%; */
  border-radius: 10%;
  margin: 5vh 0;
  color: white;
}

.page-title {
  font-family: 'Montserrat', 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  color: #fff;
  font-weight: 400;
  font-size: 2em;
  background: rgba(0,0,0,0.5);
  padding: 2.5vh;
  width: 95%;
  text-align: center;
  border-radius: 10%;
}
</style>
