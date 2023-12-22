import { createRouter, createWebHistory } from 'vue-router'
import PageIndex from '@/pages/index.vue'
import PageCallback from '@/pages/callback.vue'


const routes = [
  { path: '/',  component: PageIndex },
  { path: '/callback', component: PageCallback }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
