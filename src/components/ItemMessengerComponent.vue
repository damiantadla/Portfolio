<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="w-[320px] h-[200px] bg-yellowColor my-4 rounded-xl p-4 shadow-2xl">
    <h1><span class="text-black text-lg">From: </span> {{ props.email }}</h1>
    <h2><span class="text-black text-lg">Title: </span> {{ props.title }}</h2>
    <p class="overflow-y-auto max-h-[120px]">
      <span class="text-black text-lg">Message: </span> {{ props.message }}
    </p>
  </div>
</template>
