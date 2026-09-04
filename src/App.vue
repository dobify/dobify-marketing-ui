<template>
  <v-app>
    <v-app-bar border="b" color="surface" elevation="0" height="72">
      <v-container class="d-flex align-center" max-width="1200">
        <v-img
          alt="Dobify"
          class="mr-3 flex-0-0 cursor-pointer"
          height="36"
          rounded="lg"
          src="@/assets/logo.svg"
          width="36"
          @click="$router.push({ name: 'Home' })"
        />

        <v-app-bar-title
          class="text-h6 font-weight-bold flex-0-1-auto cursor-pointer d-none d-sm-flex"
          style="font-family: 'Space Grotesk', sans-serif;"
          @click="$router.push({ name: 'Home' })"
        >
          Dobify
        </v-app-bar-title>

        <v-spacer />

        <v-slide-group class="d-none d-md-flex mr-4">
          <v-slide-group-item v-for="link in navLinks" :key="link.href">
            <v-btn class="text-none" :href="link.href" variant="text">{{ link.label }}</v-btn>
          </v-slide-group-item>
        </v-slide-group>

        <v-btn class="text-none" color="primary" href="#download" variant="flat">
          {{ $t('nav.download') }}
        </v-btn>

        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props" class="ml-2" icon variant="text">
              <v-icon icon="mdi-translate" />
            </v-btn>
          </template>

          <v-list density="compact">
            <v-list-item :active="locale === 'en'" @click="setLocale('en')">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>

            <v-list-item :active="locale === 'es'" @click="setLocale('es')">
              <v-list-item-title>Español</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn class="d-md-none ml-2" icon variant="text" @click="drawer = !drawer">
          <v-icon icon="mdi-menu" />
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list nav>
        <v-list-item
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          :prepend-icon="link.icon"
          :title="link.label"
          @click="drawer = false"
        />
      </v-list>

      <template #append>
        <div class="pa-4">
          <v-btn
            block
            class="text-none"
            color="primary"
            href="#download"
            variant="flat"
          >
            {{ $t('nav.download') }}
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer border="t" class="flex-column pa-0" color="surface">
      <v-container class="py-12" max-width="1200">
        <v-row>
          <v-col cols="12" md="4">
            <div class="d-flex align-center mb-4">
              <v-img
                alt="Dobify"
                class="mr-2 flex-0-0"
                height="32"
                rounded="md"
                src="@/assets/logo.svg"
                width="32"
              />

              <span class="text-h5 font-weight-bold" style="font-family: 'Space Grotesk', sans-serif;">Dobify</span>
            </div>

            <p class="text-body-2 text-medium-emphasis mb-4" style="max-width: 280px;">
              {{ $t('footer.tagline') }}
            </p>

            <div class="d-flex ga-2">
              <v-btn color="primary" density="comfortable" icon="mdi-twitter" variant="tonal" />
              <v-btn color="primary" density="comfortable" icon="mdi-linkedin" variant="tonal" />
              <v-btn color="primary" density="comfortable" icon="mdi-github" variant="tonal" />
            </div>
          </v-col>

          <v-col cols="6" md="2" sm="4">
            <div class="text-overline text-medium-emphasis mb-3">{{ $t('footer.product') }}</div>

            <v-list bg-color="transparent" class="mx-n4" density="compact" nav>
              <v-list-item href="#features" :title="$t('nav.features')" />
              <v-list-item href="#pricing" :title="$t('nav.pricing')" />
              <v-list-item href="#how-it-works" :title="$t('nav.howItWorks')" />
            </v-list>
          </v-col>

          <v-col cols="6" md="2" sm="4">
            <div class="text-overline text-medium-emphasis mb-3">{{ $t('footer.platforms') }}</div>

            <v-list bg-color="transparent" class="mx-n4" density="compact" nav>
              <v-list-item prepend-icon="mdi-android" :title="$t('platforms.android')" />
              <v-list-item prepend-icon="mdi-apple" :title="$t('platforms.ios')" />
              <v-list-item prepend-icon="mdi-web" :title="$t('platforms.web')" />
              <v-list-item prepend-icon="mdi-desktop-classic" :title="$t('platforms.desktop')" />
            </v-list>
          </v-col>

          <v-col cols="12" md="4" sm="4">
            <div class="text-overline text-medium-emphasis mb-3">{{ $t('footer.stayUpdated') }}</div>
            <p class="text-body-2 text-medium-emphasis mb-3">{{ $t('footer.stayUpdatedText') }}</p>

            <v-text-field
              bg-color="surface-variant"
              density="compact"
              hide-details
              placeholder="you@business.com"
              rounded="pill"
              variant="outlined"
            >
              <template #append-inner>
                <v-btn class="text-none" color="secondary" size="small" variant="flat">{{ $t('footer.subscribe') }}</v-btn>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-divider />

      <v-container class="d-flex flex-wrap align-center justify-space-between py-4" max-width="1200">
        <span class="text-caption text-medium-emphasis">{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</span>

        <div class="d-flex ga-4">
          <router-link class="text-caption text-medium-emphasis text-decoration-none" to="/privacy">{{ $t('footer.privacy') }}</router-link>
          <router-link class="text-caption text-medium-emphasis text-decoration-none" to="/terms">{{ $t('footer.terms') }}</router-link>
          <router-link class="text-caption text-medium-emphasis text-decoration-none" to="/cookies">{{ $t('footer.cookies') }}</router-link>
          <router-link class="text-caption text-medium-emphasis text-decoration-none" to="/support">{{ $t('footer.support') }}</router-link>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import router from './router'

  const { t, locale } = useI18n()
  const drawer = ref(false)

  function setLocale (lang: string) {
    locale.value = lang
  }

  const navLinks = computed(() => [
    { label: t('nav.features'), href: '#features', icon: 'mdi-star-outline' },
    { label: t('nav.howItWorks'), href: '#how-it-works', icon: 'mdi-play-circle-outline' },
    { label: t('nav.pricing'), href: '#pricing', icon: 'mdi-tag-outline' },
  ])
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
