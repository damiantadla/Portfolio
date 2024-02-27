<script setup>
import {ref, onBeforeMount} from "vue"
import HeaderView from '@/views/HeaderView.vue'
import MainView from '@/views/MainView.vue'

const isActive = ref(false)
const isMounted = ref(false)
onBeforeMount(() => {
  window.addEventListener("scroll", function() {
    window.scrollY ? isActive.value = true : isActive.value = false
  })
})

</script>

<template>
  <div class="fixed z-50 pt-12" :class="{'active': isActive , 'noActive': !isActive }">
    <div class="flex w-screen justify-between z-50 ">
      <img src="./assets/Logo.png" alt="Logo" class="h-[45px] ml-5">
      <font-awesome-icon :icon="['fas', 'bars']" class="text-yellow-500 text-5xl mr-5"/>
    </div>
  </div>
  <HeaderView class="absolute z-10"/>

</template>

<style scoped>
.active{
  animation-name: startAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.noActive{
  animation-name: closeAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes startAnimation {
  0% {
  }
  50%{
    padding: 1rem 0;

  }
  100% {
    padding: 1rem 0;
    background-color: rgb(28, 29, 32);
  }
}

@keyframes closeAnimation{

  0%{
    padding: 1rem 0;
    background-color: rgb(28, 29, 32);
  }
  50%{

  }
  100%{

  }
}

</style>