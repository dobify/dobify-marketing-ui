<template>
  <v-app class="site-app">
    <a class="skip-link" href="#main-content">{{ t('nav.skipContent') }}</a>

    <v-app-bar
      border="b"
      class="site-header"
      color="surface"
      elevation="0"
      height="72"
    >
      <v-container class="header-inner" max-width="1200">
        <router-link aria-label="Dobify" class="brand-link" to="/">
          <img alt="" height="34" src="@/assets/logo.svg" width="34">
          <span class="header-brand-name">Dobify</span>
        </router-link>

        <nav :aria-label="t('nav.mainNavigation')" class="desktop-nav">
          <v-btn
            v-for="link in navLinks"
            :key="link.to"
            :active="route.fullPath === link.to"
            class="text-none"
            :to="link.to"
            variant="text"
          >
            {{ link.label }}
          </v-btn>
        </nav>

        <div class="header-actions">
          <v-btn
            :active="false"
            class="header-download text-none"
            color="primary"
            to="/#download"
            variant="flat"
          >
            {{ t('nav.download') }}
          </v-btn>

          <v-menu location="bottom end">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                :aria-label="t('nav.language')"
                icon
                size="small"
                variant="text"
              >
                <v-icon icon="mdi-translate" size="22" />
              </v-btn>
            </template>

            <v-list :aria-label="t('nav.language')" density="compact">
              <v-list-item :active="locale === 'en'" title="English" @click="setLocale('en')" />
              <v-list-item :active="locale === 'es'" title="Español" @click="setLocale('es')" />
            </v-list>
          </v-menu>

          <v-btn
            :aria-expanded="drawer"
            :aria-label="t('nav.openMenu')"
            class="mobile-menu-toggle"
            icon
            size="small"
            variant="text"
            @click="drawer = !drawer"
          >
            <v-icon icon="mdi-menu" size="24" />
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :aria-label="t('nav.mainNavigation')"
      location="end"
      temporary
      width="280"
    >
      <div class="drawer-header">
        <span class="brand-name">Dobify</span>

        <v-btn
          :aria-label="t('nav.closeMenu')"
          icon="mdi-close"
          size="small"
          variant="text"
          @click="drawer = false"
        />
      </div>

      <v-list nav>
        <v-list-item
          v-for="link in navLinks"
          :key="link.to"
          :active="route.fullPath === link.to"
          :prepend-icon="link.icon"
          :title="link.label"
          :to="link.to"
          @click="drawer = false"
        />
      </v-list>

      <template #append>
        <div class="drawer-download">
          <v-btn
            block
            class="text-none"
            color="primary"
            to="/#download"
            variant="flat"
            @click="drawer = false"
          >
            {{ t('nav.download') }}
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main id="main-content" tabindex="-1">
      <router-view />
    </v-main>

    <v-footer border="t" class="site-footer" color="surface">
      <v-container max-width="1200">
        <div class="footer-grid">
          <div class="footer-brand">
            <router-link aria-label="Dobify" class="brand-link" to="/">
              <img alt="" height="36" src="@/assets/logo.svg" width="36">
              <span>Dobify</span>
            </router-link>

            <p>{{ t('footer.tagline') }}</p>

            <a class="footer-contact" href="mailto:support@dobify.com">
              <v-icon icon="mdi-email-outline" size="18" />
              support@dobify.com
            </a>
          </div>

          <nav :aria-label="t('footer.product')" class="footer-nav">
            <h2>{{ t('footer.product') }}</h2>
            <router-link v-for="link in navLinks.slice(0, 3)" :key="link.to" :to="link.to">{{ link.label }}</router-link>
            <router-link to="/#faq">{{ t('faq.sectionTitle') }}</router-link>
          </nav>

          <nav :aria-label="t('footer.platforms')" class="footer-nav">
            <h2>{{ t('footer.platforms') }}</h2>

            <a :href="playStoreUrl" rel="noopener noreferrer" target="_blank">
              <v-icon icon="mdi-android" size="18" />
              Google Play
            </a>

            <a :href="appStoreUrl" rel="noopener noreferrer" target="_blank">
              <v-icon icon="mdi-apple" size="18" />
              App Store
            </a>
          </nav>

          <div class="footer-help">
            <v-icon color="primary" icon="mdi-message-text-outline" size="28" />
            <h2>{{ t('footer.helpTitle') }}</h2>
            <p>{{ t('footer.helpText') }}</p>

            <v-btn class="text-none" color="primary" to="/support" variant="outlined">
              {{ t('footer.support') }}
              <v-icon end icon="mdi-arrow-right" size="18" />
            </v-btn>
          </div>
        </div>

        <div class="footer-bottom">
          <span>{{ t('footer.copyright', { year: new Date().getFullYear() }) }}</span>

          <nav :aria-label="t('legal.navigation')" class="footer-legal">
            <router-link v-for="page in ['privacy', 'terms', 'cookies']" :key="page" :to="`/${page}`">{{ t(`footer.${page}`) }}</router-link>
          </nav>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  import { computed, ref, watch, watchEffect } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRoute } from 'vue-router'
  import { appStoreUrl, playStoreUrl } from '@/constants/links'

  const { t, locale } = useI18n()
  const route = useRoute()
  const drawer = ref(false)

  function setLocale (language: string) {
    locale.value = language
  }

  const navLinks = computed(() => [
    { label: t('nav.features'), to: '/#features', icon: 'mdi-star-outline' },
    { label: t('nav.howItWorks'), to: '/#how-it-works', icon: 'mdi-play-circle-outline' },
    { label: t('nav.pricing'), to: '/#pricing', icon: 'mdi-tag-outline' },
    { label: t('footer.support'), to: '/support', icon: 'mdi-message-text-outline' },
  ])

  watch(() => route.fullPath, () => {
    drawer.value = false
  })

  watchEffect(() => {
    document.documentElement.lang = locale.value.startsWith('es') ? 'es-MX' : 'en-US'
    const titleKey = route.path === '/' ? 'hero.title' : `${route.path.slice(1)}.title`
    document.title = `${t(titleKey)} | Dobify`
  })
</script>
