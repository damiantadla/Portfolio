<script setup>
import {ref} from "vue"

import InputComponent from "@/components/InputComponent.vue"



const visibleButton = ref(false)
const visibleMessenger = ref(true)

setTimeout(function(){
  visibleButton.value = true
}, 2000)

function showMessenger(){
  visibleMessenger.value = !visibleMessenger.value

}



</script>

<template>
  <div v-if="visibleMessenger" class="fixed text-center w-[300px] h-[480px] bg-white bottom-30 right-5 rounded-xl border-2 border-l-4 border-l-amber-400 " :class="{'animate-startAnim': visibleMessenger , 'animate-exitAnim': !visibleMessenger }">
    <div class="w-full h-30 bg-amber-400 rounded-t-xl border-2 border-l-amber-400 border-t-amber-400 border-r-amber-400">
  <p class="my-4 mx-8 text-lg font-bold">Wypełnij formularz, a ja odezwę się tak szybko jak to możliwe...</p>
    </div>
    <InputComponent placeholder="Tytuł"/>
    <InputComponent placeholder="Adres e-mail"/>
    <textarea placeholder="Wiadomość" class="w-[270px] h-32 border-2 placeholder-black my-2 p-4 text-black resize-none"></textarea>
    <button class="w-[270px] h-12 rounded-xl bg-amber-400 text-lg font-medium">Wyślij</button>
  </div>
  <button v-if="visibleButton" @click="showMessenger" class="fixed bottom-10 right-5 h-16 w-16 rounded-full bg-lightYellow">
    <font-awesome-icon v-if="!visibleMessenger" :icon="['fas', 'comments']" class="text-floralWhite text-3xl animate-startAnim" />
    <font-awesome-icon v-if="visibleMessenger" :icon="['fas', 'xmark']" class="text-floralWhite text-5xl animate-startAnim" />
  </button>
</template>

<style scoped>

</style>