<template>
  <div class="admin-post-page">
    <section class="post-update-form">
      <BlogPostForm :post="loadedPost" />
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
      loadedPost: {
        author: 'Mike Peiman',
        title: 'My Witty Words',
        content: 'This is amazing, you are a champion!',
        thumbnailLink: 'https://images.pexels.com/photos/953206/pexels-photo-953206.jpeg?auto=compress&cs=tinysrgb&h=350'
      }
    }
  }
}
</script>

