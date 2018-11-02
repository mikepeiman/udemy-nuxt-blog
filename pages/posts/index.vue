<template>
<div class="container">
  <h1>Posts Page</h1>
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

</style>
