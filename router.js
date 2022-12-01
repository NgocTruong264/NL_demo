import { createWebHistory, createRouter } from "vue-router";
import ThongTinPage from './src/components/pages/ThongTinPage.vue'
import HomePage from './src/components/pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/thong-tin',
    name: 'ThongTin',
    component: ThongTinPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router