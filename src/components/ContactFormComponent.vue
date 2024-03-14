<script setup>
import { ref, reactive } from 'vue'
import { sendMessage } from '../services/messengerServices.js'
import { toast } from 'vue3-toastify'
import ButtonComponent from '../components/ButtonComponent.vue'

const data = reactive({
  email: '',
  title: '',
  message: ''
})

const loading = ref(false)

const send = async () => {
  try {
    loading.value = true
    if (data.email && data.title && data.message) {
      await sendMessage(data.email, data.title, data.message)
      toast.success('Wysłano wiadomość')
      data.email = ''
      data.title = ''
      data.message = ''
    } else {
      toast.error('Wypełnij wszystkie pola')
    }
  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex items-center justify-center" v-loading="loading">
    <div class="flex items-center max-w-[400px] h-[540px] bg-lightGray mt-20">
      <form class="flex flex-wrap justify-center text-black" @submit.prevent="send">
        <input
          v-model="data.email"
          class="w-80 h-14 mt-8 pl-4 border-b-4 border-black placeholder-black"
          placeholder="Twój email"
          type="text"
        />
        <input
          v-model="data.title"
          class="w-80 h-14 mt-8 pl-4 border-b-4 border-black placeholder-black"
          placeholder="Tytuł"
          type="text"
        />
        <textarea
          v-model="data.message"
          class="w-80 h-50 mt-8 pl-4 py-4 border-b-4 border-black placeholder-black"
          placeholder="W czym mogę pomóc?"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <ButtonComponent type="submit" class="mt-8" text="Wyślij" />
      </form>
    </div>
  </div>
</template>

<style scoped></style>
