import { createWebHistory, createRouter } from "vue-router";

const HomePage = () => import('@/pages/HomePage.vue')
const ThongTinPage = () => import('@/pages/ThongTinPage.vue')
const QuanTriPage = () => import('@/pages/QuanTriPage.vue')
const LoginPage = () => import('@/pages/LoginPage.vue')

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