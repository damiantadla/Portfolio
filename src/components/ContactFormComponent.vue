<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="flex items-center max-w-[400px] h-[540px] bg-lightGray mt-20">
      <div class="flex flex-wrap justify-center">
        <input
          class="w-80 h-14 mt-8 pl-4 border-b-4 border-black placeholder-black"
          placeholder="Twój email"
          type="text"
        />
        <input
          class="w-80 h-14 mt-8 pl-4 border-b-4 border-black placeholder-black"
          placeholder="Tytuł"
          type="text"
        />
        <textarea
          class="w-80 h-50 mt-8 pl-4 py-4 border-b-4 border-black placeholder-black"
          placeholder="W czyn mogę pomóc?"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <ButtonComponent class="mt-8" text="Wyślij" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
