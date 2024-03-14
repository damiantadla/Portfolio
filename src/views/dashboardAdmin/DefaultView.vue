<script setup>
import { ref, onMounted } from 'vue'
import ItemMessengerComponent from '@/components/ItemMessengerComponent.vue'
import { getMessages } from '@/services/messengerServices.js'

import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore.js'

const router = useRouter()
const authStore = useAuthStore()
const toast = useToast()

const data = ref([])
const getMessagesFun = async () => {
  try {
    const res = await getMessages()
    data.value.push(...res.data)
    data.value.reverse()
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getMessagesFun()
})
</script>

<template>
  <h1 class="text-black text-5xl font-semibold text-center">New messages</h1>
  <div class="flex flex-wrap mt-10 justify-center">
    <ItemMessengerComponent
      v-for="item in data.slice(0, 3)"
      :key="item._id"
      :title="item.title"
      :email="item.email"
      :message="item.message"
    />
  </div>
</template>

<style scoped></style>
