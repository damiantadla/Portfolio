<script setup>
import { ref } from 'vue'

import InputComponent from '@/components/InputComponent.vue'

const visibleButton = ref(false)
const visibleMessenger = ref(false)

setTimeout(function () {
  visibleButton.value = true
}, 2000)

const showMessenger = () => {
  visibleMessenger.value = !visibleMessenger.value
}
</script>

<template>
  <div ref="componentMessenger" class="relative z-100">
    <div
      v-if="visibleMessenger"
      class="bgBlur fixed z-100 text-center w-[300px] h-[480px] bottom-22 right-5 rounded-xl"
      :class="{ 'animate-startAnim': visibleMessenger, 'animate-exitAnim': !visibleMessenger }"
    >
      <div class="w-full h-30">
        <p class="my-4 mx-8 text-lg font-bold">
          Wypełnij formularz, a ja odezwę się tak szybko jak to możliwe...
        </p>
      </div>
      <InputComponent placeholder="Tytuł" />
      <InputComponent placeholder="Adres e-mail" />
      <textarea
        placeholder="Wiadomość"
        class="w-[270px] h-32 border-2 placeholder-black my-2 p-4 text-black resize-none rounded-xl"
      ></textarea>
      <button class="w-[270px] h-12 rounded-xl bg-amber-400 text-lg font-medium">Wyślij</button>
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
