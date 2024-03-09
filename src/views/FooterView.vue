<script setup>
import TitleComponent from '@/components/TitleComponent.vue'
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <div class="w-screen h-[470px] bg-yellowColor">
    <TitleComponent title="Dane kontaktowe" textColor="white" borderColor="white" />
    <div class="text-black text-sm ml-10 mt-4 leading-8">
      <p>Damian Tadla</p>
      <p>Rzeszów, woj. podkarpackie</p>
      <p>damiantadla@gmail.com</p>
      <p>+48 888 889 404</p>
    </div>
    <div class="h-[1px] w-80 bg-lightGrey mx-auto my-8"></div>
    <img class="w-[180px] ml-10" src="../assets/icons/logo/Logo-black.png" alt="" />
    <div class="flex ml-10">
      <img
        class="w-[45px] mr-2 my-5"
        src="../assets/icons/socialmedia/facebook.svg"
        alt="facebook"
      />
      <img
        class="w-[45px] mx-2 my-5"
        src="../assets/icons/socialmedia/linkedin.svg"
        alt="linkedin"
      />
      <img class="w-[45px] mx-2 my-5" src="../assets/icons/socialmedia/github.svg" alt="github" />
    </div>
    <p class="w-80 ml-10 text-sm text-black">
      Polityka prywatności © 2024 Damian Tadla. Wszelkie prawa zastrzeżone.
    </p>
  </div>
</template>

<style scoped></style>
