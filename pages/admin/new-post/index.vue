<template>
<div class="admin-new-post container">
  <h1>New Post Page</h1>
  <section class="new-post-form">
    <BlogPostForm @submit="onSubmitted"/>
  </section>

</div>
</template>

<script>
import BlogPostForm from '@/components/Admin/BlogPostForm'
import axios from 'axios'

export default {
  layout: 'admin',
  components: {
    BlogPostForm
  },
  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: ''
      }
    }
  },
  methods: {
    onSave() {
      // save the post
      console.log(this.editedPost)
    },
    onCancel() {
      // navigate back
      this.$router.push('/admin')
    },
    onSubmitted(postData) {
      axios.post('https://udemy-nuxt-blog-3c87b.firebaseio.com/posts.json', postData)
      .then(result => console.log(result))
      .catch(error => console.log(error))
    }
  }
}
</script> 

<style scoped>
.container {
  text-align: center;
  padding: 2em;
  background: rgba(100, 150, 250, 0.5);
}
</style>
