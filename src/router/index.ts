/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: () => import('@/pages/privacy.vue'),
    },
    {
      path: '/terms',
      name: 'Terms',
      component: () => import('@/pages/terms.vue'),
    },
    {
      path: '/support',
      name: 'Support',
      component: () => import('@/pages/support.vue'),
    },
    {
      path: '/cookies',
      name: 'Cookies',
      component: () => import('@/pages/cookies.vue'),
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        top: 88,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
