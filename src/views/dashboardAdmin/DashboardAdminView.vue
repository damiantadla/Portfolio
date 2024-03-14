<script setup>
import { ref, onMounted } from 'vue'

import { logout } from '../../services/authServices.js'

import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore.js'

import ItemMessengerComponent from '../../components/ItemMessengerComponent.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'

const router = useRouter()
const authStore = useAuthStore()
const toast = useToast()

const data = ref([])
const logoutFunction = async () => {
  try {
    await logout()
    authStore.logout()
    toast.success('Wylogowano')
    router.push('/')
  } catch {
    toast.error('Błąd wylogowania')
  }
}
</script>

<template>
  <div class="min-h-screen w-screen bg-floralWhite pb-14">
    <div class="bg-yellowColor w-screen py-5 px-6 flex justify-end items-center">
      <router-link to="/admin"
        ><p class="text-4xl mr-6">Cześć, {{ authStore.firstName || 'User' }}</p>
      </router-link>
      <font-awesome-icon
        @click="logoutFunction"
        :icon="['fas', 'right-from-bracket']"
        class="text-6xl"
      />
    </div>
    <div class="flex flex-wrap my-10 justify-center">
      <router-link to="/admin/messenger">
        <ButtonComponent text="Messenger" size="xl" class="mt-6" />
      </router-link>

      <router-link to="/admin/portfolio">
        <ButtonComponent text="Portfolio" size="xl" class="mt-6" />
      </router-link>

      <router-link to="/admin/projects">
        <ButtonComponent text="Projects" size="xl" class="mt-6" />
      </router-link>
    </div>

    <RouterView />
  </div>
</template>

<style scoped></style>
