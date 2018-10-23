<template>
<section class="home-page">
  <section class="">
    <section class="intro container">
      <h1 class="title">Live a Life Examined</h1>

    </section>
    <section class="featured-posts">
      <nuxt-link :to="'/posts/' + 1" class="post-preview container">
        <article>
          <div class="post-thumbnail" style="background-image: url('https://images.pexels.com/photos/953206/pexels-photo-953206.jpeg?auto=compress&cs=tinysrgb&h=350')"></div>
          <div class="post-content">
            <h1 class="post-title">Post title</h1>
            <p class="post-snippet">Preview text</p>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link :to="'/posts/' + 2" class="post-preview container">
        <article class="post-preview">
          <div class="post-thumbnail" style="background-image: url('https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg?auto=compress&cs=tinysrgb&h=350')"></div>
          <div class="post-content">
            <h1 class="post-title">Post title</h1>
            <p class="post-snippet">Preview text</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </section>

</section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {

    }
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

  background: url('~static/papers.co-mn32-forest-wood-fog-flare-nature-green-1600-900-at8.jpg');
  background-size: cover;
}
.container {
  background: rgba(255,255,255,.5);
  padding: 2em;
  border: 2px solid white;
  margin-bottom: 2em;
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  border:  none;
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
.post-preview {
  display: flex;
  flex-direction: column;
  /* border: 1px solid white; */
  padding: 0;
}
.post-snippet {
  padding: 1em;
  margin-bottom: 1em;
}
.post-content {
  color: #222;
}
.post-title {
    font-family: 'Montserrat', 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3em;
  border-bottom: 1px solid #eee;
  /* margin-bottom: 1em; */
  padding-bottom: 10px;
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
