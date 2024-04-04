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
      requiresAuth: true \
    },
    children: [
      {
        path: '',
        name: 'DefaultView',
        component: () => import('../views/dashboardAdmin/DefaultView.vue') 
      },
      {
        path: 'messenger',
        name: 'Messenger',
        component: Page404View
      },
      {
        path: 'portfolio', 
        name: 'Portfolio',
        component: Page404View 
      },
      {
        path: 'projects', 
        name: 'Projects',
        component: Page404View 
      }
    ]
  },
  {
    path: '/:catchAll(.*)', 
    component: Page404View 
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
