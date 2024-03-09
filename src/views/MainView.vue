<script setup>
import { ref, onBeforeMount } from 'vue'
import TitleComponent from '@/components/TitleComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import PortfolioItemComponent from '@/components/PortfolioItemComponent.vue'
import ContactFormComponent from '@/components/ContactFormComponent.vue'

console.log(window.outerWidth)

const portfolioLength = ref(0)
const projectsLength = ref(0)

onBeforeMount(() => {
  if (window.outerWidth > 768) {
    portfolioLength.value = 4
    projectsLength.value = 4
  } else {
    portfolioLength.value = 3
    projectsLength.value = 2
  }
})

window.addEventListener('resize', () => {
  if (window.outerWidth > 768) {
    portfolioLength.value = 4
    projectsLength.value = 4
  } else {
    portfolioLength.value = 3
    projectsLength.value = 2
  }
})

// let portfolioLength = 0
// let projectsLength = 0
//
// if (window.outerWidth > 768) {
//   portfolioLength = 4
//   projectsLength = 4
// } else {
//   portfolioLength = 3
//   projectsLength = 2
</script>

<template>
  <!--About me-->
  <div class="pt-13 bg-white justify-center">
    <div class="md:flex md:justify-around sm:ml-40 md:ml-0">
      <div>
        <TitleComponent title="Kim jestem?" />
        <p class="max-w-[320px] text-black text-sm ml-10 mt-4">
          Jestem Damian Tadla, początkujący front-end developer specjalizujący się w nowoczesnych
          technologiach, takich jak Vue 3, Firebase i MongoDB JavaScript. Moja pasja do tworzenia
          interaktywnych interfejsów użytkownika oraz dynamicznych aplikacji webowych sprawia, że
          stale poszerzam swoją wiedzę i umiejętności w tych obszarach. W mojej pracy kładę duży
          nacisk na efektywne wykorzystanie narzędzi i frameworków, aby dostarczyć użytkownikom
          najlepsze doświadczenia online
        </p>
        <ButtonComponent text="Poznaj mnie" class="mt-20 ml-40" />
      </div>
      <div>
        <TitleComponent title="Czym się zajmuje?" />
        <p class="max-w-[320px] text-black text-sm ml-10 mt-4"></p>
        <ul class="max-w-[320px] text-black text-sm ml-10 mt-4 list-item">
          <li>Wizytówki firmowe</li>
          <li>Aplikacje webowe</li>
          <li>Tworzenie baz danych</li>
          <li>Aplikacje mobilne</li>
        </ul>
      </div>
    </div>
    <!--Technologies-->
    <div class="bg-image h-[300px] sm:h-[400px] md:h-[450px]">
      <div class="mt-20">
        <TitleComponent title="Technologie" textColor="white" />
      </div>
      <CarouselComponent class="sm:mt-20" />
    </div>
    <!--Portfolio-->
    <div class="sm:ml-20">
      <TitleComponent title="Portfolio" class="mt-8" />
      <p class="max-w-[320px] text-black text-sm ml-10 mt-4">
        Poniżej znajdziesz moje ostatnio wykonane projekty jeżeli jesteś zainteresowany współpracą,
        zaprojektowaniem aplikacji lub stworzeniem to zapraszam do kontaktu.
      </p>
    </div>
    <div class="flex flex-wrap justify-end">
      <div class="flex flex-wrap items-center justify-center mt-10">
        <PortfolioItemComponent v-for="item in portfolioLength" />
      </div>
      <ButtonComponent text="Zobacz więcej" class="mt-10 mr-10 md:mr-20" />
    </div>
    <!--Projects-->
    <div class="relative mt-16">
      <div class="absolute h-[520px] md:h-[560px] w-screen bg-blackGrey"></div>
      <div class="relative">
        <div class="sm:ml-20">
          <TitleComponent title="Projekty" textColor="white" />
          <p class="max-w-[320px] text-white text-sm ml-10 mt-4">
            Poniżej znajdziesz moje ostatnio wykonane projekty jeżeli jesteś zainteresowany
            współpracą, zaprojektowaniem aplikacji lub stworzeniem to zapraszam do kontaktu.
          </p>
        </div>
        <div class="flex flex-wrap justify-end mt-10">
          <div class="flex flex-wrap items-center justify-center mt-10">
            <PortfolioItemComponent v-for="item in projectsLength" />
          </div>
          <ButtonComponent text="Zobacz więcej" class="mt-10 mr-10 md:mr-20" />
        </div>
      </div>
    </div>
    <!--Contact-->
    <div class="md:flex mt-20 md:mt-30">
      <div class="md:w-1/2">
        <div class="sm:ml-20 sm:mr-20 mt-30">
          <TitleComponent title="Kontakt" class="" />
          <p class="max-w-[320px] text-black text-sm ml-10 mt-4">
            Możesz mnie znależć w paru miejscach w sieci, ale zapraszam także do kontaktu przez
            formularz.
          </p>
        </div>
        <div class="md:w-[200px] flex md:flex-wrap mt-20 md:ml-40">
          <div class="flex">
            <img
              class="w-[40px] md:w-[30px] mx-8 md:mx-0 md:mr-2"
              src="../assets/icons/socialmedia/gmail.svg"
              alt=""
            />
            <p class="hidden md:block text-gray-500 md:text-2xl">Gmail</p>
          </div>
          <div class="flex md:mt-10">
            <img
              class="w-[40px] md:w-[30px] mx-8 md:mx-0 md:mr-2"
              src="../assets/icons/socialmedia/messenger.svg"
              alt=""
            />
            <p class="hidden md:block text-gray-500 md:text-2xl">Messenger</p>
          </div>
        </div>
      </div>
      <ContactFormComponent />
    </div>
  </div>
</template>
<style scoped>
.bg-image {
  background-image: url('/src/assets/icons/technologies/bgcTech.png');
  background-size: cover;
  background-position: center;
}

ul.list-item li::before {
  content: '\2022'; /* kod Unicode dla kropki */
  color: #000; /* kolor kropki */
  display: inline-block;
  width: 1em; /* szerokość kropki */
  margin-left: -1em; /* ustawienie kropki przed tekstem */
}
</style>
