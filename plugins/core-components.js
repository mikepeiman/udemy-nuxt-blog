import Vue from 'vue'

import BlogPostForm from '@/components/Admin/BlogPostForm'
import PostsList from '@/components/Posts/PostsList'
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'

Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostsList', PostsList)
Vue.component('BlogPostForm', BlogPostForm)
