<template>
  <div class="container single-post-page">
    <h1>Single Post Page</h1>
    <section class="post">
      <h1>Title of the Post</h1>
      <div class="post-details">
        <div class="post-details">Last updated on xx:xx:xx</div>
        <div class="post-details">Written by {name}</div>
      </div>
      <p class="post-content">Main body of post</p>
    </section>
    <section class="post-feedback">
      <p>If you liked this post, please click <a>like!</a></p>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(100,150,50,0.2);
}

.post-content {

}

.post-details {
  
}
</style>
