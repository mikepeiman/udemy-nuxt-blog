<template>
<section class="featured-posts">
  <PostPreview id="1" :is-admin="isAdmin" thumbnail="https://images.pexels.com/photos/953206/pexels-photo-953206.jpeg?auto=compress&cs=tinysrgb&h=350" title="Hello there!" previewText="This is my first post!" />
  <PostPreview id="2" :is-admin="isAdmin" thumbnail="https://images.pexels.com/photos/953206/pexels-photo-953206.jpeg?auto=compress&cs=tinysrgb&h=350" title="Hello there!" previewText="This is my first post!" />
  <PostPreview id="3" :is-admin="isAdmin" thumbnail="https://images.pexels.com/photos/953206/pexels-photo-953206.jpeg?auto=compress&cs=tinysrgb&h=350" title="Hello there!" previewText="This is my first post!" />
</section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
    type: Boolean,
    default: false
  }}
}
</script>
