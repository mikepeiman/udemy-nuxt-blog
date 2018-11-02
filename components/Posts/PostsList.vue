<template>
<section class="featured-posts">
  <PostPreview v-for="post in posts" :key="post.id" :id="post.id" :is-admin="isAdmin" :thumbnail="post.thumbnail" :title="post.title" :author="post.author" :previewText="post.previewText" />
</section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.featured-posts {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;

}

@media screen and (min-width: 640px) {
    .featured-posts {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width: 960px) {
    .featured-posts {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* .featured-posts {
  padding: .5vw;
  font-size: 0;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  -ms-flex-direction: column;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  display: -webkit-box;
  display: flex;
  background: rgba(100, 150, 50, 0.2);
}

.featured-posts .post-preview {
  -webkit-box-flex: auto;
  -ms-flex: auto;
  flex: auto;
  min-width: 200px;
  margin: .5vw;
}

.featured-posts .post-preview article {
  height: 500px;
} */
/* .featured-posts a article div {
  width: 100%;
  height: auto;
} */
</style>
