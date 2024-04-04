// authStore.js

import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    firstName: '',
    isLoggedIn: false
  }),
  actions: {
    login(firstName) {
      this.isLoggedIn = true
      this.firstName = firstName
    },
    logout() {
      this.isLoggedIn = false
    },
    saveState() {

      localStorage.setItem('pinia-state', JSON.stringify(this.$state))
    },
    restoreState() {
      const savedState = localStorage.getItem('pinia-state')

      this.$state = JSON.parse(savedState)
    }
  }
})
