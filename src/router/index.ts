import { createRouter, createWebHistory } from 'vue-router'

// 如何得到路由示例 createRouter()
// 如何设置路由模式 history
// history 模式 createWebHistory()
// hash 模式 createWebHashHistory()
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  // 默认参数 '/' 路由的基础路径
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: '/article',
          component: () => import('@/views/Article/index.vue')
        },
        {
          path: '/notify',
          component: () => import('@/views/Notify/index.vue')
        },
        {
          path: '/user',
          component: () => import('@/views/User/index.vue')
        }
      ]
    }
  ]
})
// console.log(import.meta)

export default router
