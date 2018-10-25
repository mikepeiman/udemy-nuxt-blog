<template>
<section class="home-page">
  <section class="intro">
    <section class="container">
      <h1 class="title">Live a Life Examined</h1>

    </section>
    <section class="featured-posts">
      <PostPreview 
        id="1"
        thumbnail="https://images.pexels.com/photos/953206/pexels-photo-953206.jpeg?auto=compress&cs=tinysrgb&h=350"
        title="Hello there!"
        previewText="This is my first post!"/>
      <PostPreview />
      <PostPreview />
    </section>
  </section>

</section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  }
},
methods: {
  
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

  background: url('~static/papers.co-mn32-forest-wood-fog-flare-nature-green-1600-900-at8.jpg');
  background-size: cover;
}
.container {
  background: rgba(255,255,255,.5);
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
  border-bottom: 5px solid rgba(50,100,150,.5);
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
