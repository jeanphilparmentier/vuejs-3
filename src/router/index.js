import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Exercice1View from '../views/Pizza.vue'
import Explanations from '@/views/Explanations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/code',
      name: 'code',
      component: Exercice1View,
    },
    {
      path: '/features',
      name: 'features',
      component: Explanations,
    },
  ],
})

export default router
