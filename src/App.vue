<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'
import { request } from './utils/request'
import type { User } from './types/user'

const store = useUserStore()

const getUser = () => {
  // axios.request({ url: '/patient/myUser' })
  request('/patient/myUser', 'get', { test: 1 })
}

// 测试登录
const login = () => {
  // axios
  //   .request({
  //     url: '/login/password',
  //     method: 'POST',
  //     data: { mobile: '13211112222', password: 'abc12345' }
  //   })
  //   .then((res) => {
  //     console.log('成功', res)
  //   })
  //   .catch((err) => {
  //     console.log('失败：', err)
  //   })

  // 判断响应数据的类型是否正确？如果不正确怎么去设置类型
  request<User>('/login/password', 'POST', {
    mobile: '13211112222',
    password: 'abc12345'
  })
    .then((res) => {
      console.log('成功', res)
    })
    .catch((err) => {
      console.log('失败：', err)
    })
}
</script>

<template>
  <div>
    App {{ store.user }}
    <van-button
      type="primary"
      @click="
        store.setUser({
          id: '1',
          avatar: '1',
          token: '1',
          mobile: '1',
          account: '1'
        })
      "
      >登录</van-button
    >
    <van-button type="primary" @click="store.delUser()">退出</van-button>
    <van-button @click="getUser">获取用户信息</van-button>
    <van-button @click="login">接口登录</van-button>
  </div>
</template>
