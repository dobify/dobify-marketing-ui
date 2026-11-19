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

router.afterEach((to, _from, failure) => {
  if (failure) {
    return
  }

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  const route = to.matched.at(-1)
  if (!route) {
    canonical?.remove()
    return
  }

  // Use the route definition so query strings, hashes, and trailing slashes
  // all point to the same URL listed in the sitemap.
  const url = new URL(route.path, 'https://dobify.mx').href
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.append(canonical)
  }
  canonical.href = url

  document.head.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute('content', url)
  document.head.querySelector<HTMLMetaElement>('meta[name="twitter:url"]')?.setAttribute('content', url)
})

export default router
