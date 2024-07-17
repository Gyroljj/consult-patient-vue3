import { useUserStore } from '@/stores'
import { createRouter, createWebHistory } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

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
      component: () => import('@/views/Login/index.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/user/patient',
      component: () => import('@/views/User/PatientPage.vue'),
      meta: { title: '家庭档案' }
    },
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/index.vue'),
          meta: { title: '首页' }
        },
        {
          path: '/article',
          component: () => import('@/views/Article/index.vue'),
          meta: { title: '建康百科' }
        },
        {
          path: '/notify',
          component: () => import('@/views/Notify/index.vue'),
          meta: { title: '消息通知' }
        },
        {
          path: '/user',
          component: () => import('@/views/User/index.vue'),
          meta: { title: '个人中心' }
        }
      ]
    }
  ]
})
// console.log(import.meta)

// 全局的前置导航守卫
router.beforeEach((to) => {
  NProgress.start()
  // 获取 token 的
  const store = useUserStore()
  // 白名单页面
  const wihteList = ['/login']
  // 如果你没有token并且不再白名单页面，就重定向到登录页面
  if (!store.user?.token && !wihteList.includes(to.path)) {
    return '/login'
  }
})

// 全局的后置导航守卫
router.afterEach((to) => {
  document.title = `${to.meta.title || ''}-优医问诊`
  NProgress.done()
})

export default router
