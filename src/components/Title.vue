<script setup>
  defineProps({
    text: String,
  })
</script>
<template>

  <h1 class="text-lightningYellow text-2xl font-bold">{{text}}</h1>
</template>

<style scoped>
h1{
  text-align: center;
  outline: 0;
  height: 10px;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

h1:after {
  content: "";
  background-color: #f8f8f8;
  width: 160px;
  height: 3px;
  border-radius: 10px;
  z-index: -1;
  position: absolute;
  top: 26px;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.2s;
}

</style>