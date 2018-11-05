<template>
  <div class="admin-page container">
    <h1>Admin Page</h1>
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostsList :posts="loadedPosts" isAdmin />
    </section>
  </div>
</template>

<script>
import PostsList from '@/components/Posts/PostsList'
import AppButton from '@/components/UI/AppButton'
export default {
  layout: 'admin',
  middleware: ['checkAuth', 'auth'],
  components: {
    PostsList,
    AppButton
  },
    computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding: 2em;
  background: rgba(100,150,250,0.5);
}
</style>
