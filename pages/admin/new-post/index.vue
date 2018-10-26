<template>
<div class="admin-new-post container">
  <h1>New Post Page</h1>
  <section class="new-post-form">
    <BlogPostForm />
  </section>

</div>
</template>

<script>
import BlogPostForm from '@/components/Admin/BlogPostForm'


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
