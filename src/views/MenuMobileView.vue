<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/authStore.js'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import ButtonComponent from '../components/ButtonComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'

const emit = defineEmits(['changeVisible'])
const store = useAuthStore()
const router = useRouter()
const changeVisibleFunction = () => {
  emit('changeVisible')
}

const show = ref(true)
const visibleLogin = ref(false)

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

const showLogin = () => {
  if (!store.isLoggedIn) {
    visibleLogin.value = !visibleLogin.value
  } else {
    router.push('/admin')
  }
}
</script>

<template>
  <div class="fixed z-140 h-screen w-screen bg-yellowColor">
    <div class="w-screen flex justify-end mt-6 pr-6">
      <font-awesome-icon @click="changeVisibleFunction" :icon="['fas', 'xmark']" class="text-7xl" />
    </div>
    <div class="flex flex-wrap justify-center text-center">
      <router-link
        v-for="item in dataMenu"
        :key="item.id"
        :to="item.link"
        class="w-80 h-16 border-b-4 border-b-white my-8 text-5xl"
        @click="changeVisibleFunction"
        >{{ item.title }}</router-link
      >
      <Transition name="fade">
        <LoginComponent v-if="visibleLogin" />
      </Transition>
      <ButtonComponent @click="showLogin" text="Login" bg="white" class="mt-10" />
      <div class="flex 10">
        <img
          class="w-[45px] mx-6 mt-14"
          src="../assets/icons/socialmedia/facebook.svg"
          alt="facebook"
        />
        <img
          class="w-[45px] mx-6 mt-14"
          src="../assets/icons/socialmedia/linkedin.svg"
          alt="linkedin"
        />
        <img
          class="w-[45px] mx-6 mt-14"
          src="../assets/icons/socialmedia/github.svg"
          alt="github"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
