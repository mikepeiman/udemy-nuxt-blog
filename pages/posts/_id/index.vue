<template>
<div class="container single-post-page">
  <section class="post">
    <div class="post-image" :style="{background: 'url(' + loadedPost.thumbnail + ') no-repeat 20% 20%'}">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
    </div>
    <div class="post-details">
      <div class="post-details">Last updated on {{ loadedPost.updatedDate | date }}</div>
      <div class="post-details">Written by {{ loadedPost.author }}</div>
    </div>
    <p class="post-content">{{ loadedPost.content }}</p>
  </section>
  <section class="post-feedback">
    <p>If you liked this post, please click <a><b>like!</b></a></p>
  </section>
</div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData(context) {
    return axios.get(process.env.baseUrl + '/posts/' + context.params.id + '.json')
    .then(res => {
      return {
        loadedPost: res.data
      }
    })
    .catch(e => context.error(e))
  },
    head: {
    title: ''
  }
}
</script>

<style scoped>
.single-post-page {
  min-height: calc(100vh - 60px); 
   /* 100% height after subtracting fixed header height */
     display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* margin-top: 10vh; */
}
.post-image {
  height: 40vh;
  width: 100%;
  background-size: cover;
  background-position: center center;
}
.post {
  margin: 1em;
  padding: 2em;
}
.post-title {
  font-size: 3em;
  text-align: center;
  padding: 5vh;
  color: white;
  background: rgba(0,0,0,0.45);
}

.post-content {
    margin-top: 5vh;
}

.post-details {
  margin-top: .5vh;
  font-size: .9em;
}

.post-feedback {
  color: #3399ff;
}
</style>
