<template>
<nuxt-link :to="'/posts/' + id" class="post-preview container">
  <article>
    <div class="post-thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
    <div class="post-content">
      <h1 class="post-title">{{ title }}</h1>
      <p class="post-snippet">{{ previewText }}</p>
    </div>
  </article>
</nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  data() {
    return {

    }
  }
}
</script>


<style scoped>
.post-thumbnail {
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  border:  none;
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
</style>
