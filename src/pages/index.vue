<template>
  <div>
    <!-- Hero -->
    <v-sheet class="hero-section" color="primary">
      <v-container class="py-12" max-width="1200" style="min-height: 600px">
        <v-row align="center" class="fill-height">
          <v-col class="text-center text-md-start" cols="12" md="6">
            <v-chip
              class="mb-6"
              color="accent"
              prepend-icon="mdi-cellphone-nfc"
              size="large"
              variant="flat"
            >
              {{ $t('hero.badge') }}
            </v-chip>

            <h1
              class="text-h2 text-md-h1 font-weight-bold text-white mb-6"
              style="font-family: 'Space Grotesk', sans-serif; line-height: 1.1"
            >
              {{ $t('hero.title') }}
            </h1>

            <p
              class="text-h6 text-white mb-8"
              style="opacity: 0.9; font-weight: 400; max-width: 500px"
            >
              {{ $t('hero.subtitle') }}
            </p>

            <div class="d-flex flex-wrap ga-3 mb-6 justify-center justify-md-start">
              <v-btn
                class="pa-0 store-badge-primary"
                height="52"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                variant="text"
              >
                <v-img
                  alt="Download on the App Store"
                  height="52"
                  src="/app-store-badge.svg"
                  width="156"
                />
              </v-btn>

              <v-btn
                class="pa-0 store-badge-primary"
                height="52"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                variant="text"
              >
                <v-img
                  alt="Get it on Google Play"
                  height="52"
                  src="/google-play-badge.svg"
                  width="175"
                />
              </v-btn>
            </div>

            <div class="d-flex flex-wrap align-center ga-6 justify-center justify-md-start">
              <v-btn
                class="text-none"
                color="white"
                href="#how-it-works"
                size="large"
                variant="text"
              >
                <v-icon icon="mdi-play-circle-outline" start />
                {{ $t('hero.ctaSecondary') }}
              </v-btn>
            </div>
          </v-col>

          <v-col
            class="d-flex justify-center align-center py-8"
            cols="12"
            md="6"
          >
            <v-card
              class="pa-8 text-center hero-card"
              color="surface"
              elevation="16"
              min-width="320"
              rounded="xl"
            >
              <v-img
                alt="Dobify"
                class="mx-auto mb-4"
                height="100"
                src="@/assets/logo.svg"
                width="100"
              />

              <div
                class="text-h4 font-weight-bold mb-2"
                style="font-family: 'Space Grotesk', sans-serif"
              >
                <span class="text-success">do</span>

                <span class="text-primary">bi</span>

                <span class="text-accent">fy</span>
              </div>

              <p class="text-body-2 text-medium-emphasis mb-4">
                {{ $t('hero.tagline') }}
              </p>

              <div class="d-flex justify-center ga-4">
                <v-chip color="success" size="small" variant="tonal">{{
                  $t('hero.chipSales')
                }}</v-chip>

                <v-chip color="primary" size="small" variant="tonal">{{
                  $t('hero.chipInventory')
                }}</v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Comparison Section -->
    <v-sheet id="comparison" class="py-12" color="surface">
      <v-container max-width="1000">
        <div class="text-center mb-10">
          <h2
            class="text-h4 text-md-h3 font-weight-bold mb-4"
            style="font-family: 'Space Grotesk', sans-serif"
          >
            {{ $t('comparison.title') }}
          </h2>
        </div>

        <v-row>
          <!-- Without Dobify -->
          <v-col cols="12" md="6">
            <v-card
              class="pa-6 h-100"
              color="error"
              variant="tonal"
              style="border-left: 4px solid rgb(var(--v-theme-error))"
            >
              <div class="d-flex align-center mb-4">
                <v-icon class="mr-3" color="error" icon="mdi-close-circle" size="28" />
                <span class="text-h6 font-weight-bold">{{ $t('comparison.without.title') }}</span>
              </div>

              <v-list bg-color="transparent" density="compact" lines="false" slim>
                <v-list-item
                  v-for="i in 5"
                  :key="i"
                  class="px-0 mb-1"
                  density="compact"
                  lines="false"
                  :prepend-gap="8"
                  slim
                >
                  <template #prepend>
                    <v-icon color="error" icon="mdi-minus" size="18" />
                  </template>
                  <v-list-item-title class="text-body-2 text-wrap">
                    {{ $t('comparison.without.item' + i) }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>

          <!-- With Dobify -->
          <v-col cols="12" md="6">
            <v-card
              class="pa-6 h-100"
              color="success"
              variant="tonal"
              style="border-left: 4px solid rgb(var(--v-theme-success))"
            >
              <div class="d-flex align-center mb-4">
                <v-icon class="mr-3" color="success" icon="mdi-check-circle" size="28" />
                <span class="text-h6 font-weight-bold">{{ $t('comparison.with.title') }}</span>
              </div>

              <v-list bg-color="transparent" density="compact" lines="false" slim>
                <v-list-item
                  v-for="i in 5"
                  :key="i"
                  class="px-0 mb-1"
                  density="compact"
                  lines="false"
                  :prepend-gap="8"
                  slim
                >
                  <template #prepend>
                    <v-icon color="success" icon="mdi-check" size="18" />
                  </template>
                  <v-list-item-title class="text-body-2 text-wrap">
                    {{ $t('comparison.with.item' + i) }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-center mt-8">
          <v-chip color="accent" prepend-icon="mdi-piggy-bank" size="large" variant="flat">
            {{ $t('hero.savings') }}
          </v-chip>
        </div>
      </v-container>
    </v-sheet>

    <!-- Features -->
    <v-sheet id="features" class="py-12" color="background">
      <v-container max-width="1200">
        <div class="text-center mb-12">
          <h2
            class="text-h3 font-weight-bold mb-4"
            style="font-family: 'Space Grotesk', sans-serif"
          >
            {{ $t('features.title') }}
          </h2>

          <p
            class="text-body-1 text-medium-emphasis mx-auto"
            style="max-width: 500px"
          >
            {{ $t('features.subtitle') }}
          </p>
        </div>

        <v-row>
          <v-col
            v-for="feature in featuresList"
            :key="feature.key"
            cols="12"
            md="4"
            sm="6"
          >
            <v-card
              class="pa-6 h-100"
              color="surface-variant"
              variant="flat"
            >
              <v-avatar
                class="mb-4"
                color="primary"
                size="48"
                variant="tonal"
              >
                <v-icon :icon="feature.icon" size="24" />
              </v-avatar>

              <div class="text-h6 font-weight-bold mb-2 text-high-emphasis">
                {{ $t('features.' + feature.key + '.title') }}
              </div>

              <p class="text-body-2 text-medium-emphasis mb-0">
                {{ $t('features.' + feature.key + '.text') }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- How it works -->
    <v-sheet id="how-it-works" border="y" class="py-12" color="surface">
      <v-container max-width="1000">
        <div class="text-center mb-12">
          <h2
            class="text-h3 font-weight-bold mb-4"
            style="font-family: 'Space Grotesk', sans-serif"
          >
            {{ $t('howItWorks.title') }}
          </h2>
        </div>

        <v-row class="steps-row" justify="center">
          <v-col
            v-for="(step, i) in stepsList"
            :key="step.key"
            class="step-col"
            cols="12"
            md="4"
          >
            <div class="text-center px-4">
              <v-avatar
                class="mb-4 step-number"
                color="secondary"
                size="56"
              >
                <span class="text-h5 font-weight-bold">{{ i + 1 }}</span>
              </v-avatar>

              <div class="text-h6 font-weight-bold mb-2 text-high-emphasis">
                {{ $t('howItWorks.' + step.key + '.title') }}
              </div>

              <p class="text-body-2 text-medium-emphasis mb-0">
                {{ $t('howItWorks.' + step.key + '.text') }}
              </p>
            </div>

            <v-divider v-if="i < stepsList.length - 1" class="d-md-none my-6" />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Pricing -->
    <v-sheet id="pricing" class="py-12" color="background">
      <v-container max-width="1200">
        <div class="text-center mb-12">
          <h2
            class="text-h3 font-weight-bold mb-4"
            style="font-family: 'Space Grotesk', sans-serif"
          >
            {{ $t('pricing.title') }}
          </h2>

          <p class="text-body-1 text-medium-emphasis">
            {{ $t('pricing.subtitle') }}
          </p>
        </div>

        <v-row justify="center" align="stretch">
          <v-col
            v-for="plan in plansList"
            :key="plan.key"
            cols="12"
            lg="3"
            md="6"
            sm="6"
          >
            <v-card
              :border="plan.highlight ? 'accent md' : 'sm'"
              class="pa-5 d-flex flex-column h-100"
              :elevation="plan.highlight ? 12 : 1"
              hover
              :hover-elevation="plan.highlight ? 16 : 4"
            >
              <v-chip
                v-if="plan.highlight"
                class="mb-2 align-self-start"
                color="accent"
                size="small"
                variant="flat"
              >
                {{ $t('pricing.mostPopular') }}
              </v-chip>
              <div v-else class="mb-2" style="height: 24px" />

              <div class="text-overline font-weight-medium text-medium-emphasis">
                {{ $t('pricing.' + plan.key + '.name') }}
              </div>

              <div class="mb-1">
                <span
                  class="text-h4 font-weight-bold"
                  style="font-family: 'Space Grotesk', sans-serif"
                >{{ $t('pricing.' + plan.key + '.price') }}</span>
                <span class="text-body-2 text-medium-emphasis">
                  {{ $t('pricing.' + plan.key + '.period') }}
                </span>
              </div>

              <p class="text-caption text-medium-emphasis mb-0" style="min-height: 40px">
                {{ $t('pricing.' + plan.key + '.target') }}
              </p>

              <v-divider class="my-4" />

              <v-list bg-color="transparent" class="pa-0 flex-grow-1" density="compact" lines="false" slim>
                <v-list-item
                  v-for="i in 6"
                  :key="i"
                  class="px-0 mb-1"
                  density="compact"
                  lines="false"
                  :prepend-gap="8"
                  slim
                >
                  <template #prepend>
                    <v-icon :color="plan.highlight ? 'accent' : 'success'" icon="mdi-check" size="16" />
                  </template>
                  <v-list-item-title class="text-body-2 text-wrap">
                    {{ $t('pricing.' + plan.key + '.item' + i) }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>

              <v-btn
                class="text-none mt-auto w-100"
                :color="plan.highlight ? 'accent' : 'primary'"
                :href="plan.key === 'enterprise' ? '#contact' : '#download'"
                rounded="lg"
                :variant="plan.highlight ? 'flat' : 'outlined'"
              >
                {{ $t('pricing.' + plan.key + '.cta') }}
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- FAQ -->
    <v-sheet class="py-12" color="background">
      <v-container max-width="800">
        <div class="text-center mb-10">
          <h2
            class="text-h3 font-weight-bold"
            style="font-family: 'Space Grotesk', sans-serif"
          >
            {{ $t('faq.title') }}
          </h2>
        </div>

        <v-expansion-panels class="faq-panels" variant="accordion">
          <v-expansion-panel
            v-for="faq in faqsList"
            :key="faq.key"
            class="mb-3"
            elevation="0"
            rounded="xl"
            :text="$t('faq.' + faq.key + '.answer')"
            :title="$t('faq.' + faq.key + '.question')"
          />
        </v-expansion-panels>
      </v-container>
    </v-sheet>

    <!-- Download CTA -->
    <v-sheet id="download" class="py-12" color="primary">
      <v-container max-width="700">
        <div class="text-center">
          <h2
            class="text-h3 text-md-h2 font-weight-bold text-white mb-4"
            style="font-family: 'Space Grotesk', sans-serif"
          >
            {{ $t('download.title') }}
          </h2>

          <p class="text-h6 text-white mb-8" style="opacity: 0.9">
            {{ $t('download.subtitle') }}
          </p>

          <div class="d-flex flex-wrap ga-4 justify-center">
            <v-btn
              class="pa-0 store-badge-primary"
              height="56"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              variant="text"
            >
              <v-img
                alt="Download on the App Store"
                height="56"
                src="/app-store-badge.svg"
                width="168"
              />
            </v-btn>

            <v-btn
              class="pa-0 store-badge-primary"
              height="56"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              variant="text"
            >
              <v-img
                alt="Get it on Google Play"
                height="56"
                src="/google-play-badge.svg"
                width="188"
              />
            </v-btn>
          </div>

          <p class="text-body-2 text-white mt-6 mb-0" style="opacity: 0.7">
            {{ $t('download.note') }}
          </p>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
  const featuresList = [
    { key: 'checkout', icon: 'mdi-cash-register' },
    { key: 'inventory', icon: 'mdi-package-variant-closed' },
    { key: 'offline', icon: 'mdi-cloud-sync-outline' },
    { key: 'multiLocation', icon: 'mdi-map-marker-multiple-outline' },
    { key: 'team', icon: 'mdi-account-group-outline' },
    { key: 'reports', icon: 'mdi-chart-line' },
  ]

  const stepsList = [{ key: 'step1' }, { key: 'step2' }, { key: 'step3' }]

  const plansList = [
    { key: 'free', highlight: false },
    { key: 'starter', highlight: false },
    { key: 'pro', highlight: true },
    { key: 'enterprise', highlight: false },
  ]

  const testimonialsList = [
    { key: 'quote1', initials: 'SC' },
    { key: 'quote2', initials: 'MJ' },
    { key: 'quote3', initials: 'ER' },
  ]

  const faqsList = [
    { key: 'q1' },
    { key: 'q2' },
    { key: 'q3' },
    { key: 'q4' },
    { key: 'q5' },
  ]
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 200%;
  background: radial-gradient(
    ellipse,
    rgba(93, 202, 165, 0.15) 0%,
    transparent 60%
  );
  pointer-events: none;
}

.faq-panels :deep(.v-expansion-panel) {
  background: rgb(var(--v-theme-surface));
  margin-bottom: 8px;
}

.faq-panels :deep(.v-expansion-panel-title) {
  font-weight: 600;
}

.store-badge-primary {
  min-width: auto !important;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.store-badge-primary:hover {
  transform: scale(1.03);
}

@media (min-width: 960px) {
  .steps-row {
    position: relative;
  }

  .step-col:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 28px;
    left: calc(33.33% + 40px);
    width: calc(33.33% - 80px);
    height: 2px;
    background: rgb(var(--v-theme-secondary));
    opacity: 0.4;
  }

  .step-col:nth-child(2)::after {
    left: calc(66.66% + 40px);
  }
}

</style>
