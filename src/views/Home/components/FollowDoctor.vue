<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DoctorCard from './DoctorCard.vue'
import { useWindowSize } from '@vueuse/core'
import type { DoctorList } from '@/types/consult'
import { getDoctorPage } from '@/services/consult'

const { width } = useWindowSize()

// 组件初始化获取设备宽度，页面尺寸发生变化改变获取设备的宽度
// const width = ref(0)
// const setWidth = () => {
//   width.value = window.innerWidth
// }
// onMounted(() => {
//   setWidth()
//   window.addEventListener('resize', setWidth)
// })
// onUnmounted(() => {
//   window.removeEventListener('resize', setWidth)
// })

const list = ref<DoctorList>([])
const loadData = async () => {
  const res = await getDoctorPage({ current: 1, pageSize: 5 })
  list.value = res.data.rows
}
onMounted(() => {
  loadData()
})
</script>

<template>
  <div class="follow-doctor">
    <div className="head">
      <p>推荐关注</p>
      <a href="javascript:;"> 查看更多<i class="van-icon van-icon-arrow" /></a>
    </div>
    <div class="body">
      <!-- swipe 组件 -->
      <van-swipe
        :width="(150 / 375) * width"
        :show-indicators="false"
        :loop="false"
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item v-for="item in list" :key="item.id">
          <doctor-card :item="item"></doctor-card>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.follow-doctor {
  background-color: var(--cp-bg);
  height: 250px;
  .head {
    display: flex;
    justify-content: space-between;
    height: 45px;
    align-items: center;
    padding: 0 15px;
    font-size: 13px;
    > a {
      color: var(--cp-tip);
    }
  }
  .body {
    width: 100%;
    overflow: hidden;
  }
}
</style>
