<script setup>
import {ref} from "vue"

const showDiv = ref(true)

const toggleDiv = () => {
    showDiv.value =!showDiv.value
}
</script>

<template>
  <div class="h-screen bg-white flex items-center  justify-center">
    <div v-if="showDiv" class="box"></div>
    <button @click="toggleDiv">Click</button>
  </div>

</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: appear;
  animation-duration: 3s;
}

@keyframes appear{
  0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>