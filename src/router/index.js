import { createWebHistory, createRouter } from "vue-router";
// import store from "@/store";

// const HomePage = () => import('@/views/HomePage.vue')
const ThongTinPage = () => import('@/views/ThongTinPage.vue')
const QuanTriPage = () => import('@/views/QuanTriPage.vue')
const CanHoPage = () => import('@/views/CanHoPage.vue')
const HoSoPage = () => import('@/views/HoSoPage.vue')
const CuDanPage = () => import('@/views/CuDanPage.vue')
const HoaDonPage = () => import('@/views/HoaDonPage.vue')
const ThemCuDanPage = () => import('@/views/ThemCuDanPage.vue')

const LoginForm = () => import('@/components/Authenticate/LoginForm.vue')
const LoginPage = () => import('@/views/LoginPage.vue')
// const App = () => import('@/App.vue')
const AppLayout = () => import('@/views/AppLayout.vue')
const ChiTietTKPage = () => import('@/views/ChiTietTKPage.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppLayout,
    meta: {
      isAuth: true
    },
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
      },
      {
        path: 'quan-tri/:id',
        component: ChiTietTKPage
      },
      {
        path: 'can-ho',
        name: 'CanHo',
        component: CanHoPage
      },
      {
        path: 'ho-so',
        name: 'HoSo',
        component: HoSoPage
      },
      {
        path: 'cu-dan',
        name: 'CuDan',
        component: CuDanPage,
      },
      {
        path: 'cu-dan/them-cu-dan',
        name: 'ThemCuDan',
        component: ThemCuDanPage
      },
      {
        path: 'hoa-don',
        name: 'HoaDon',
        component: HoaDonPage
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
        component: LoginForm,
        meta: {
          isAuth: false
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//  const isLoggedIn = store.state.user.isAuthenticated
//  const isPublic = to.matched.some((record) => record.meta.isAuth)

//  if (!isLoggedIn && isPublic) {
//   return next({
//     path: '/login',
//     query: { redirect: to.fullPath }
//   })
//  }
//  if (isLoggedIn && !isPublic) {
//   return next({
//     path: '/',
//     query: { redirect: to.fullPath }
//   })
//  }

//  next()
// })
export default router
