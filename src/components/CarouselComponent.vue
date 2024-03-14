<script setup>
import { ref } from 'vue'

import Icon1 from '../assets/icons/technologies/1.svg'
import Icon2 from '../assets/icons/technologies/2.svg'
import Icon3 from '../assets/icons/technologies/3.svg'
import Icon4 from '../assets/icons/technologies/4.svg'

const dataMenu = [
  {
    icon: Icon1,
    title: 'Javascript'
  },
  {
    icon: Icon2,
    title: 'Firebase'
  },
  {
    icon: Icon3,
    title: 'Vue3.js'
  },
  {
    icon: Icon4,
    title: 'Node.js'
  }
]
</script>

<template>
  <el-carousel
    :interval="3000"
    indicator-position="none"
    type="card"
    height="140px"
    class="mt-12 z-10"
  >
    <el-carousel-item v-for="item in dataMenu" :key="item" class="">
      <div class="h-full flex flex-wrap items-center justify-center">
        <div class="w-18">
          <img class="w-18 flex items-center" :src="item.icon" alt="" />
          <h3 class="text-center mt-2 text-lg">{{ item.title }}</h3>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped></style>
