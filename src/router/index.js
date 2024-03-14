import { createRouter, createWebHistory } from 'vue-router'
import DefaultView from '../views/DefaultView.vue'
import Dashboard from '../views/dashboardAdmin/DashboardAdminView.vue'
import { useAuthStore } from '../stores/authStore.js'
import Page404View from '../views/Page404View.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultView
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true // Ta ścieżka wymaga autentykacji
    },
    children: [
      {
        path: '', // Usuń początkowy ukośnik
        name: 'DefaultView',
        component: () => import('../views/dashboardAdmin/DefaultView.vue') // Dodaj komponent DefaultView
      },
      {
        path: 'messenger', // Usuń początkowy ukośnik
        name: 'Messenger',
        component: Page404View // Dodaj komponent Page404View
      },
      {
        path: 'portfolio', // Usuń początkowy ukośnik
        name: 'Portfolio',
        component: Page404View // Dodaj komponent Page404View
      },
      {
        path: 'projects', // Usuń początkowy ukośnik
        name: 'Projects',
        component: Page404View // Dodaj komponent Page404View
      }
    ]
  },
  {
    path: '/:catchAll(.*)', // Obsługa 404
    component: Page404View // Ustawienie komponentu Page404View dla nieodnalezionych ścieżek
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  const store = useAuthStore()
  if (to.meta.requiresAuth && !store.isLoggedIn) {
    return {
      path: '/'
    }
  }
})

export default router
