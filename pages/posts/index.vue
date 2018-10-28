<template>
<div class="container">
  <h1>Posts Page</h1>
  <PostsList :posts="loadedPosts" />
</div>
</template>

<script>
import PostsList from '@/components/Posts/PostsList'
export default {
  components: {
    PostsList
  },
  asyncData(context, callback) {
    console.log('asyncData executed in /posts')
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: 'Post One',
            previewText: 'This is the first post',
            thumbnail: 'https://images.pexels.com/photos/953206/pexels-photo-953206.jpeg?auto=compress&cs=tinysrgb&h=350'
          },
          {
            id: '2',
            title: 'Post Two',
            previewText: 'This is the second post',
            thumbnail: 'https://images.pexels.com/photos/1124092/pexels-photo-1124092.jpeg?cs=srgb&dl=abstract-art-background-1124092.jpg&fm=jpg'
          }
        ]
      })
    }, 1500)
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
