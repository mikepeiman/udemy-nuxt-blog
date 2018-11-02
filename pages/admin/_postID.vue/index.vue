<template>
  <div class="admin-post-page">
    <section class="post-update-form">
      <BlogPostForm :post="loadedPost" />
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
  asyncData(context) {
    return axios.get('https://udemy-nuxt-blog-3c87b.firebaseio.com/posts/' + context.params.postID + '.json')
    .then(res => {
      console.log('context.params.postID: ', context.params.postID)
      console.log('loadedPost: ', res.data)
      return {
        loadedPost: res.data
        
      }
    })
    .catch(e => context.error(e))
  }
}
</script>

