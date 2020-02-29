import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'index',
      component: () => import('@/views/index.vue'),
      // meta: { title: 'Dashboard', icon: 'dashboard' }
    },
    {
      path: 'home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      // meta: { title: 'Dashboard', icon: 'dashboard' }
    },
    {
      path: 'about',
      name: 'about',
      component: () => import('@/views/About.vue'),
      // meta: { title: 'Dashboard', icon: 'dashboard' }
    },
    ]
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
