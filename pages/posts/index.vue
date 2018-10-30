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
  // data() {
  //   return {
  //     loadedPosts: [{
  //         id: '1',
  //         title: 'Post One',
  //         previewText: 'This is the first post',
  //         thumbnail: 'https://images.pexels.com/photos/953206/pexels-photo-953206.jpeg?auto=compress&cs=tinysrgb&h=350'
  //       },
  //       {
  //         id: '2',
  //         title: 'Post Two',
  //         previewText: 'This is the second post',
  //         thumbnail: 'https://images.pexels.com/photos/1124092/pexels-photo-1124092.jpeg?cs=srgb&dl=abstract-art-background-1124092.jpg&fm=jpg'
  //       }
  //     ]
  //   }
  // },
 asyncData(context) {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
       resolve({
          loadedPosts: [
            {
              id: "1",
              title: "First Post",
              previewText: "This is our first post!",
              thumbnail:
                "https://images.pexels.com/photos/953206/pexels-photo-953206.jpeg?auto=compress&cs=tinysrgb&h=350"
            },
            {
              id: "2",
              title: "Second Post",
              previewText: "This is our second post!",
              thumbnail:
                "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
            }
          ]
        });
      // }, 1000);
      // reject(new Error())
    })
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(e);
    });
  }
  // created() {
  //   this.$store.dispatch('setPosts', this.loadedPosts)
  //   // console.log(this.$store)
  //   // console.log(this.$store.getters)
  //   // console.log(this.$store.getters.loadedPosts)
  //   // this.loadedPosts.forEach(post => {
  //   //   console.log('Post ID: ' + post.id, post)
  //   }
};
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
