<script setup lang="ts">
import { Button as VanButton } from 'vant'
</script>

<template>
  <div>App <van-button type="primary">按钮</van-button></div>
  <div class="main">main</div>
  <div class="footer">footer</div>
</template>

<style lang="scss" scoped>
.main {
  color: var(--cp-primary);
}
.footer {
  color: var(--footer-color);
}
</style>
