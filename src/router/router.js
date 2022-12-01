import { createWebHistory, createRouter } from "vue-router";
import ThongTinPage from '@/pages/ThongTinPage.vue'
import HomePage from '@/pages/HomePage.vue'
import QuanTriPage from '@/pages/QuanTriPage.vue'
import LoginPage from '@/pages/LoginPage.vue'

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
  },
  {
    path: '/quan-tri',
    name: 'QuanTri',
    component: QuanTriPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router