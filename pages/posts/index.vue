<template>
<div class="container">
  <h1>Posts Page</h1>
  <PostsList />
</div>
</template>

<script>
import PostsList from '@/components/Posts/PostsList'
export default {
  components: {
    PostsList
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(100, 150, 50, 0.2);
}
</style>
