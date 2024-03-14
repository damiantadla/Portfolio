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
// Przywróć stan Pinii przy uruchamianiu aplikacji

onBeforeMount(() => {
  authStore.restoreState()
})

// Zapisz stan Pinii przed zniszczeniem aplikacji
window.onbeforeunload = () => {
  authStore.saveState()
}
</script>

<style scoped></style>
