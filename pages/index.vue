<template>
<section class="home-page">
  <section class="intro">
    <section class="container">
      <h1 class="title">Live a Life Examined</h1>
    </section>
  </section>
  <PostsList :posts="loadedPosts" />
</section>
</template>

<script>
import PostsList from '@/components/Posts/PostsList'
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  components: {
    PostsList
  },
  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * Math.floor(max)) + min;
    }
  },
  mounted() {
    this.numPosts = this.getRandomInt(3, 3)
    console.log('Mounted hook fired', this.numPosts)

  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  /* background: url('~static/papers.co-mn32-forest-wood-fog-flare-nature-green-1600-900-at8.jpg'); */
  /* background-size: cover; */
}

.container {
  background: rgba(255, 255, 255, .5);
  padding: 2em;
  border: 2px solid white;
  margin-bottom: 2em;
}

.title {
  font-family: 'Montserrat', 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3em;
  color: #35495e;
  border-bottom: 5px solid rgba(50, 100, 150, .5);
  margin-bottom: 1em;
  /* letter-spacing: 1px; */
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.home-page {
  /* background: url('~static/dark-flight-launch-73872.jpg');
   C:\Users\Mike\Desktop\udemy-nuxtjs\nuxt-blog\static\papers.co-mn32-forest-wood-fog-flare-nature-green-1600-900-at8.jpg */

}
</style>
