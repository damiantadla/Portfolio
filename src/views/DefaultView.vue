<script setup>
import { ref, onBeforeMount } from 'vue'
import HeaderView from '../views/HeaderView.vue'
import MainView from '../views/MainView.vue'
import MenuMobileView from '../views/MenuMobileView.vue'
import MessengerComponent from '../components/MessengerComponent.vue'

const isActive = ref(false)
const visibleMenuMobile = ref(false)

onBeforeMount(() => {
  window.addEventListener('scroll', function () {
    window.scrollY ? (isActive.value = true) : (isActive.value = false)
  })
})

const showMenu = () => {
  visibleMenuMobile.value = !visibleMenuMobile.value
}

if (isActive.value) isActive.value = true
const dataMenu = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    title: 'About',
    link: '/about'
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '/portfolio'
  },
  {
    id: 4,
    title: 'Contact',
    link: '/contact'
  }
]

import { useAuthStore } from '../stores/authStore.js'
const store = useAuthStore()
</script>

<template>
  <Transition name="fade">
    <MenuMobileView v-if="visibleMenuMobile" @change-visible="showMenu" />
  </Transition>
  <MessengerComponent class="opacity-0 animate-startAnim" />

  <div class="fixed z-100 pt-12" :class="{ active: isActive, noActive: !isActive }">
    <div class="flex justify-between items-center w-screen z-50">
      <img
        src="@/assets/icons/logo/Logo.png"
        alt="Logo"
        class="h-[45px] sm:h-[60px] ml-5 sm:ml-10"
      />
      <font-awesome-icon
        @click="showMenu"
        :icon="['fas', 'bars']"
        class="lg:hidden text-yellow-500 text-5xl sm:text-6xl mr-5 sm:mr-10"
      />
      <div class="hidden lg:block mr-10 mt-3 text-xl">
        <div class="flex">
          <router-link
            v-for="item in dataMenu"
            :key="item.id"
            :to="item.link"
            class="w-[100px] ml-5"
            >{{ item.title }}</router-link
          >
          <font-awesome-icon
            :icon="['fas', 'right-to-bracket']"
            class="text-yellowColor text-4xl ml-8"
          />
        </div>
      </div>
    </div>
  </div>
  <div>
    <HeaderView class="absolute z-10" />
    <MainView />
    <div class="w-screen h-[130px] bg-white"></div>
  </div>
</template>

<style scoped>
.router-link-active {
  color: #eab308;
}

.active {
  animation-name: startAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.noActive {
  animation-name: closeAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes startAnimation {
  0% {
  }
  50% {
    padding: 1rem 0;
  }
  100% {
    padding: 1rem 0;
    background-color: rgb(28, 29, 32);
  }
}

@keyframes closeAnimation {
  0% {
    padding: 1rem 0;
    background-color: rgb(28, 29, 32);
  }
  50% {
  }
  100% {
  }
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(250px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(250px);
}
</style>
