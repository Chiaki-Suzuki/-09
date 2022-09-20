import Vue from 'vue'
import VueRouter from 'vue-router'

import News from '@/components/PostNews'

Vue.use(VueRouter)

const routes = [
  { path: '/news', component: News }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
