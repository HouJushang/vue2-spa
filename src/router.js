import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './page/Index.vue'
import List from './page/List.vue'
import Detail from './page/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/index', component: Index},
  {path: '/list', component: List},
  {path: '/detail', component: Detail}
]

export const router = new VueRouter({
  routes
})
export const routeDeep = ['/index', '/list', '/detail']
