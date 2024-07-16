<script setup lang="ts">
const fn = () => {
  console.log('注册')
}
</script>

<template>
  <div class="login-page">
    <cp-nav-bar @click-right="fn" title="登录" right-text="注册"></cp-nav-bar>
  </div>
</template>

<style scoped lang="scss"></style>
