<script setup lang="ts">
const fn = () => {
  console.log('注册')
}

// typeof 作用：从js变量中取出对应的类型
// const obj = {
//   name: '张三',
//   age: 18
// }
// type Obj = typeof obj
</script>

<template>
  <div class="login-page">
    <cp-nav-bar @click-right="fn" title="登录" right-text="注册"></cp-nav-bar>
  </div>
</template>

<style scoped lang="scss"></style>
