<script setup>
import { ref, reactive } from 'vue'
import { sendMessage } from '../services/messengerServices.js'
import { toast } from 'vue3-toastify'

const visibleButton = ref(false)
const visibleMessenger = ref(false)
const loading = ref(false)

setTimeout(function () {
  visibleButton.value = true
}, 2000)

const showMessenger = () => {
  visibleMessenger.value = !visibleMessenger.value
  messengerData.title = ''
  messengerData.message = ''
  messengerData.email = ''
}

const messengerData = reactive({
  email: '',
  title: '',
  message: ''
})

const send = async () => {
  try {
    loading.value = true
    if (messengerData.email && messengerData.title && messengerData.message) {
      await sendMessage(messengerData.email, messengerData.title, messengerData.message)
      toast.success('Wysłano wiadomość')
      messengerData.email = ''
      messengerData.title = ''
      messengerData.message = ''
    } else {
      toast.info('Wypełnij wszystkie pola')
    }
  } catch (error) {
    toast.error(`${error.response.data.message}`)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div ref="componentMessenger" class="relative z-100">
    <div
      v-loading="loading"
      v-if="visibleMessenger"
      class="bgBlur fixed z-100 text-center w-[300px] h-[480px] bottom-22 right-5 rounded-xl"
      :class="{ 'animate-startAnim': visibleMessenger, 'animate-exitAnim': !visibleMessenger }"
    >
      <div class="w-full h-30">
        <p class="my-4 mx-8 text-lg font-bold">
          Wypełnij formularz, a ja odezwę się tak szybko jak to możliwe...
        </p>
      </div>
      <form @submit.prevent="send">
        <input
          v-model="messengerData.email"
          type="text"
          placeholder="Email"
          class="w-[270px] border-2 placeholder-black my-2 py-3 pl-3 text-black rounded-xl"
        />
        <input
          v-model="messengerData.title"
          type="text"
          placeholder="Tytuł"
          class="w-[270px] border-2 placeholder-black my-2 py-3 pl-3 text-black rounded-xl"
        />
        <textarea
          v-model="messengerData.message"
          placeholder="Wiadomość"
          class="w-[270px] h-32 border-2 placeholder-black my-2 p-4 text-black resize-none rounded-xl"
        ></textarea>
        <button type="submit" class="w-[270px] h-12 rounded-xl bg-amber-400 text-lg font-medium">
          Wyślij
        </button>
      </form>
    </div>
    <!--Button Messenger-->
    <button
      v-if="visibleButton"
      @click="showMessenger"
      class="bgBlur fixed z-100 bottom-3 right-3 h-16 w-16 rounded-full"
    >
      <font-awesome-icon
        v-if="!visibleMessenger"
        :icon="['fas', 'comments']"
        class="text-floralWhite text-3xl animate-startAnim"
      />
      <font-awesome-icon
        v-if="visibleMessenger"
        :icon="['fas', 'xmark']"
        class="text-floralWhite text-5xl animate-startAnim"
      />
    </button>
  </div>
</template>

<style scoped>
.bgBlur {
  background: rgba(234, 179, 8, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);

  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
