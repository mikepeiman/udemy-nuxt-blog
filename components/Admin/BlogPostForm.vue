<template>
<form @submit.prevent="onSave">
  <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
  <AppControlInput v-model="editedPost.title">Title</AppControlInput>
  <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
  <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
  <AppControlInput control-type="textarea" v-model="editedPost.previewText">Preview Text</AppControlInput>
  <AppButton type="submit">Save</AppButton>
  <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel</AppButton>
</form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post ? { ...this.post
      } : {
        author: '',
        title: '',
        thumbnail: '',
        content: '',
        previewText: ''
      }
    }
  },
  methods: {
    onSave() {
      // save the post
      this.$emit('submit', this.editedPost)
      // let inputs = document.querySelectorAll('input')
      // inputs.forEach(input => {
      //   input.value = ''
      // });
      // let textareas = document.querySelectorAll('textarea')
      // textareas.forEach(textarea => {
      //   textarea.value = ''
      // });
    },
    onCancel() {
      // navigate back
      this.$router.push('/admin')
    }
  }
}

</script>

<style scoped>
form {
  width: 80vw;
  margin: 5vh auto;
}
</style>

