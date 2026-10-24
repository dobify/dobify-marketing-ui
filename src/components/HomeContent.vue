<template>
  <div>
    <HeroSection />
    <ComparisonSection />

    <v-sheet
      id="features"
      aria-labelledby="features-title"
      class="site-section"
      color="background"
      tag="section"
    >
      <v-container max-width="1200">
        <div class="section-intro text-center">
          <div class="section-eyebrow">{{ $t('features.sectionTitle') }}</div>
          <h2 id="features-title" class="site-heading">{{ $t('features.title') }}</h2>
          <p class="section-description">{{ $t('features.subtitle') }}</p>
        </div>

        <div class="feature-grid">
          <v-card
            v-for="feature in features"
            :key="feature.key"
            class="site-card feature-card"
            elevation="0"
            tag="article"
          >
            <v-avatar :color="feature.color" size="48" variant="tonal">
              <v-icon :icon="feature.icon" size="24" />
            </v-avatar>

            <h3>{{ $t(`features.${feature.key}.title`) }}</h3>
            <p>{{ $t(`features.${feature.key}.text`) }}</p>
          </v-card>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet
      id="how-it-works"
      aria-labelledby="steps-title"
      class="site-section"
      color="surface"
      tag="section"
    >
      <v-container max-width="1200">
        <div class="section-intro text-center">
          <div class="section-eyebrow">{{ $t('howItWorks.sectionTitle') }}</div>
          <h2 id="steps-title" class="site-heading">{{ $t('howItWorks.title') }}</h2>
          <p class="section-description">{{ $t('howItWorks.subtitle') }}</p>
        </div>

        <ol class="steps-grid">
          <li v-for="(icon, index) in stepIcons" :key="icon" class="site-card step-card">
            <div class="step-top">
              <span class="step-number">{{ String(index + 1).padStart(2, '0') }}</span>
              <v-icon color="primary" :icon="icon" size="28" />
            </div>

            <h3>{{ $t(`howItWorks.step${index + 1}.title`) }}</h3>
            <p>{{ $t(`howItWorks.step${index + 1}.text`) }}</p>
          </li>
        </ol>

        <div class="section-action">
          <v-btn
            class="text-none"
            color="primary"
            href="#download"
            size="large"
            variant="outlined"
          >
            {{ $t('pricing.downloadCta') }}
            <v-icon end icon="mdi-arrow-right" size="18" />
          </v-btn>
        </div>
      </v-container>
    </v-sheet>

    <PricingSection />

    <v-sheet
      id="faq"
      aria-labelledby="faq-title"
      class="site-section"
      color="surface"
      tag="section"
    >
      <v-container max-width="1200">
        <div class="faq-grid">
          <div class="faq-intro">
            <div class="section-eyebrow">{{ $t('faq.sectionTitle') }}</div>
            <h2 id="faq-title" class="site-heading">{{ $t('faq.title') }}</h2>
            <p class="section-description">{{ $t('faq.subtitle') }}</p>

            <v-btn
              class="text-none"
              color="primary"
              prepend-icon="mdi-message-text-outline"
              to="/support"
              variant="outlined"
            >
              {{ $t('faq.contactCta') }}
            </v-btn>
          </div>

          <v-expansion-panels class="site-faq" variant="accordion">
            <v-expansion-panel
              v-for="i in 5"
              :key="i"
              elevation="0"
              :text="$t(`faq.q${i}.answer`)"
              :title="$t(`faq.q${i}.question`)"
            />
          </v-expansion-panels>
        </div>
      </v-container>
    </v-sheet>

    <v-sheet
      id="download"
      aria-labelledby="download-title"
      class="site-section download-section"
      color="background"
      tag="section"
    >
      <v-container max-width="1200">
        <v-card class="download-card" color="primary" elevation="0">
          <v-avatar class="download-icon" color="white" size="56" variant="tonal">
            <v-icon icon="mdi-cellphone-nfc" size="28" />
          </v-avatar>

          <h2 id="download-title" class="site-heading">{{ $t('download.title') }}</h2>
          <p class="download-subtitle">{{ $t('download.subtitle') }}</p>
          <StoreBadges />
          <p class="download-note">{{ $t('download.note') }}</p>
        </v-card>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  import ComparisonSection from '@/components/ComparisonSection.vue'
  import HeroSection from '@/components/HeroSection.vue'
  import PricingSection from '@/components/PricingSection.vue'
  import StoreBadges from '@/components/StoreBadges.vue'

  const features = [
    { key: 'checkout', icon: 'mdi-cash-register', color: 'primary' },
    { key: 'inventory', icon: 'mdi-package-variant-closed', color: 'success' },
    { key: 'offline', icon: 'mdi-cloud-sync-outline', color: 'primary' },
    { key: 'multiLocation', icon: 'mdi-map-marker-multiple-outline', color: 'success' },
    { key: 'team', icon: 'mdi-account-group-outline', color: 'primary' },
    { key: 'reports', icon: 'mdi-chart-line', color: 'success' },
  ]
  const stepIcons = ['mdi-account-plus-outline', 'mdi-package-variant-closed', 'mdi-contactless-payment']
</script>
