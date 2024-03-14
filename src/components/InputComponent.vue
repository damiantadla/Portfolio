<script setup>
defineProps({
  placeholder: {
    type: String,
    required: true
  }
})
</script>

<template>
  <input
    type="text"
    :placeholder="placeholder"
    class="w-[270px] border-2 placeholder-black my-2 py-3 pl-3 text-black rounded-xl"
  />
</template>

<style scoped></style>
