<template>
<div class="container single-post-page">
  <h1>Single Post Page</h1>
  <section class="post" :style="{background: 'url(' + loadedPost.thumbnail + ')'}">
    <h1>{{ loadedPost.title }}</h1>
    <div class="post-details">
      <div class="post-details">Last updated on {{ loadedPost.updatedDate }}</div>
      <div class="post-details">Written by {{ loadedPost.author }}</div>
    </div>
    <p class="post-content">{{ loadedPost.content }}</p>
  </section>
  <section class="post-feedback">
    <p>If you liked this post, please click <a>like!</a></p>
  </section>
</div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          title: 'Post Super One (ID: ' + context.params.id + ')',
          // context.params is same as $route.params outside of asyncData
          // context.route.params provides the same thing, or similar
          previewText: 'This is the first post',
          thumbnail: 'https://images.pexels.com/photos/953206/pexels-photo-953206.jpeg?auto=compress&cs=tinysrgb&h=350',
          author: 'Mike Peiman',
          updatedDate: new Date(),
          content: 'This is definitely some new text meow meow meow'
        }
      })
    }, 1000);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(100, 150, 50, 0.2);
}
.single-post-page {
  min-height: calc(100vh - 60px); 
   /* 100% height after subtracting fixed header height */
}
.post {
  margin: 1em;
  padding: 2em;
}
.title {
  justify-self: flex-start;
}

.post-content {}

.post-details {}
</style>
