<template>
<div class="admin-post-page">
  <section class="post-update-form">
    <BlogPostForm :post="loadedPost" @submit="onSubmit" />
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
    return axios
      .get(process.env.baseUrl + '/posts/' + context.params.postID + '.json')
      .then(res => {
        console.log('context.params: ', context.params)
        console.log('loadedPost: ', res.data)
        return {
          loadedPost: { ...res.data,
            id: context.params.postID
          }

        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmit(editedPost) {
      this.$store.dispatch('editPost', editedPost)
        .then(() => {
          this.$router.push('/admin')
        })

    }
  }
}
</script>
