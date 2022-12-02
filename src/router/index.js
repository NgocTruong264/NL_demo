import { createWebHistory, createRouter } from "vue-router";

// const HomePage = () => import('@/views/HomePage.vue')
const ThongTinPage = () => import('@/views/ThongTinPage.vue')
const QuanTriPage = () => import('@/views/QuanTriPage.vue')
const LoginForm = () => import('@/components/Authenticate/LoginForm.vue')
const LoginPage = () => import('@/views/LoginPage.vue')
// const App = () => import('@/App.vue')
const AppLayout = () => import('@/views/AppLayout.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppLayout,
    children: [
      {
        path: 'thong-tin',
        name: 'ThongTin',
        component: ThongTinPage
      },
      {
        path: 'quan-tri',
        name: 'QuanTri',
        component: QuanTriPage
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    children: [
      {
        path: '',
        component: LoginForm
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router