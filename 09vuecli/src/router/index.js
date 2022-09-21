import Vue from 'vue'
import VueRouter from 'vue-router'

import Form from '@/components/Form'

Vue.use(VueRouter)

const routes = [
  { path: '/form', component: Form }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
