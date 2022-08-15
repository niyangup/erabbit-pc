import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/home'
import TopCategory from '@/views/category/index'
import SubCategory from '@/views/category/sub'
import Goods from '@/views/goods'
import Login from '@/views/login'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'home',
        path: '/',
        component: Home
      },
      {
        path: '/category/:id',
        component: TopCategory
      },
      {
        path: '/category/sub/:id',
        component: SubCategory
      },
      {
        path: '/product/:id',
        component: Goods
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router
