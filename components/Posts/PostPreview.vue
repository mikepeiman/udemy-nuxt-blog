<template>
<nuxt-link :to="postLink" class="post-preview container">
  <article>
    <div class="post-thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
    <div class="post-content">
      <h1 class="post-title">{{ title }}</h1>
      <h3 class="post-author">{{ author }}</h3>
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
    isAdmin: {
      type: Boolean,
      required: true
    },
    author: {
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
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
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
  /* width: 100%; */
  min-height: 200px;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  border: none;
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
  color: #fff;
  font-weight: 300;
  font-size: 2em;
  border-bottom: 1px solid #555;
  padding: 1vh;
  background: #555;
}

.post-author {
  font-size: 1em;
  justify-self: center;
  align-self: center;
  border-bottom: 1px solid #555;
  margin: 1vh;
  padding-bottom: 10px;
  color: #555;
  
}
</style>
