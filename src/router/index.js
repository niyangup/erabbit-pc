import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/home'
import TopCategory from '@/views/category/index'
import SubCategory from '@/views/category/sub'
import Goods from '@/views/goods'

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
