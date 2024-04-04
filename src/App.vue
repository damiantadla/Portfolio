<template>
  <RouterView />
  <FooterView />
</template>

<script setup>
import FooterView from '../src/views/FooterView.vue'
import { useAuthStore } from './stores/authStore.js'
import { onBeforeMount } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const authStore = useAuthStore()

onBeforeMount(() => {
  authStore.restoreState()
})

window.onbeforeunload = () => {
  authStore.saveState()
}
</script>

<style scoped></style>
