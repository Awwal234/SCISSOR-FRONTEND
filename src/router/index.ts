import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      //@ts-ignore
      component: () => import('../views/app/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      //@ts-ignore
      component: () => import('../views/app/SignUp.vue')
    },
    {
      path: '/app',
      name: 'app-home',
      //@ts-ignore
      component: () => import('../views/app/AppHome.vue')
    },
    {
      path: '/app/create_link',
      name: 'create_link',
      //@ts-ignore
      component: () => import('../views/app/CreateLink.vue')
    },
    {
      path: '/app/history',
      name: 'link history',
      //@ts-ignore
      component: () => import('../views/app/HistoryPage.vue')
    },
    {
      path: '/app/bit_qrcode',
      name: 'bitQrcode',
      //@ts-ignore
      component: () => import('../views/app/BitQrcode.vue')
    },
  ]
})

export default router
