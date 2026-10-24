<template>
  <v-sheet
    id="pricing"
    aria-labelledby="pricing-title"
    class="pricing-section py-8"
    color="background"
    tag="section"
  >
    <v-container max-width="1200">
      <div class="text-center mb-5">
        <div class="text-overline text-primary font-weight-bold mb-2">{{ t('pricing.sectionTitle') }}</div>
        <h2 id="pricing-title" class="pricing-heading font-weight-bold mb-2">{{ t('pricing.title') }}</h2>
        <p class="text-body-1 text-medium-emphasis">{{ t('pricing.subtitle') }}</p>
      </div>

      <div :aria-busy="loading" aria-live="polite">
        <template v-if="loading">
          <p class="text-center text-medium-emphasis mb-4" role="status">{{ t('pricing.loading') }}</p>

          <v-row aria-hidden="true">
            <v-col
              v-for="i in 4"
              :key="i"
              cols="12"
              lg="3"
              sm="6"
            >
              <v-skeleton-loader class="rounded-xl" type="heading, paragraph, divider, paragraph, actions" />
            </v-col>
          </v-row>
        </template>

        <v-alert
          v-else-if="failed"
          class="mx-auto"
          max-width="640"
          rounded="xl"
          type="warning"
          variant="tonal"
        >
          <div class="font-weight-bold mb-2">{{ t('pricing.errorTitle') }}</div>
          <p class="mb-4">{{ t('pricing.errorText') }}</p>

          <v-btn
            class="text-none"
            color="primary"
            prepend-icon="mdi-refresh"
            variant="flat"
            @click="loadPrices"
          >
            {{ t('pricing.retry') }}
          </v-btn>
        </v-alert>

        <template v-else>
          <v-row align="stretch" justify="center">
            <v-col
              v-for="plan in plans"
              :key="plan.key"
              cols="12"
              lg="3"
              sm="6"
            >
              <v-card
                :aria-labelledby="`plan-${plan.key}`"
                class="pricing-card pa-3 d-flex flex-column h-100"
                :class="{ 'pricing-card--featured': plan.key === 'pro' }"
                :elevation="plan.key === 'pro' ? 3 : 0"
                rounded="lg"
                tag="article"
              >
                <div class="plan-badge mb-2">
                  <v-chip
                    v-if="plan.key === 'pro'"
                    color="primary"
                    prepend-icon="mdi-star-four-points"
                    size="small"
                    variant="flat"
                  >
                    {{ t('pricing.mostPopular') }}
                  </v-chip>
                </div>

                <h3 :id="`plan-${plan.key}`" class="text-h6 font-weight-bold">{{ plan.name }}</h3>
                <p class="plan-target text-body-2 text-medium-emphasis mt-1 mb-3">{{ t(`pricing.${plan.key}.target`) }}</p>

                <div class="d-flex align-baseline flex-wrap ga-1">
                  <span class="plan-price font-weight-bold">{{ money(plan.price_mxn) }}</span>
                  <span class="text-body-2 text-medium-emphasis">{{ t('pricing.perMonth') }}</span>
                </div>

                <div class="text-caption text-medium-emphasis mb-2">MXN</div>

                <div class="fee-panel pa-2 rounded-lg mb-3">
                  <span class="font-weight-bold text-primary">{{ percent(plan.transaction_fee_percent) }}</span>
                  <span class="text-caption ml-1">{{ t('pricing.transactionFee') }}</span>
                </div>

                <v-btn
                  block
                  class="plan-cta text-none mb-3"
                  color="primary"
                  :href="plan.key === 'enterprise' ? '/support' : '#download'"
                  rounded="lg"
                  size="large"
                  :variant="plan.key === 'pro' ? 'flat' : 'outlined'"
                >
                  {{ t(plan.key === 'free' ? 'pricing.free.cta' : plan.key === 'enterprise' ? 'pricing.enterprise.cta' : 'pricing.downloadCta') }}
                </v-btn>

                <div class="text-caption font-weight-bold text-uppercase mb-1">{{ t('pricing.planLimits') }}</div>

                <dl class="plan-limits text-body-2">
                  <div v-for="limit in limitKeys" :key="limit" class="d-flex justify-space-between ga-1 py-1">
                    <dt class="text-medium-emphasis">{{ t(`pricing.limits.${limit}`) }}</dt>
                    <dd class="font-weight-medium text-end">{{ limitValue(plan, limit) }}</dd>
                  </div>
                </dl>

                <v-divider class="my-3" />
                <div class="text-caption font-weight-bold text-uppercase mb-2">{{ t('pricing.included') }}</div>

                <ul class="plan-features flex-grow-1">
                  <li v-if="commonFeatures.length > 0" class="d-flex align-start ga-1 mb-1 text-body-2">
                    <v-icon color="success" icon="mdi-check-circle-outline" size="18" />
                    <span>{{ t('pricing.coreIncluded') }}</span>
                  </li>

                  <li v-for="feature in planFeatures(plan)" :key="feature" class="d-flex align-start ga-1 mb-1 text-body-2">
                    <v-icon color="success" icon="mdi-check-circle-outline" size="18" />
                    <span>{{ t(`pricing.features.${feature}`) }}</span>
                  </li>
                </ul>

                <p v-if="plan.features.single_session" class="text-caption text-medium-emphasis mt-2 mb-0">
                  {{ t('pricing.singleSession') }}
                </p>
              </v-card>
            </v-col>
          </v-row>

          <div v-if="commonFeatures.length > 0" class="text-center mt-4">
            <p class="text-body-2 font-weight-medium mb-2">{{ t('pricing.allPlans') }}</p>

            <div class="d-flex flex-wrap justify-center ga-1">
              <v-chip
                v-for="feature in commonFeatures"
                :key="feature"
                color="primary"
                prepend-icon="mdi-check"
                variant="tonal"
              >
                {{ t(`pricing.features.${feature}`) }}
              </v-chip>
            </div>
          </div>
        </template>
      </div>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
  import type { Features, Limits, PricingPlan } from '@/types/Plans'
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { getPrices } from '@/services/prices'

  const { t, locale } = useI18n()
  const plans = ref<PricingPlan[]>([])
  const loading = ref(true)
  const failed = ref(false)
  let controller: AbortController | undefined

  const limitKeys: (keyof Limits)[] = [
    'monthly_sales_amount', 'products', 'users', 'locations',
    'analytics_history_days', 'transactions_per_month',
  ]
  const featureKeys: (keyof Features)[] = [
    'pos', 'sync', 'tap_to_pay', 'digital_receipts', 'simple_stock',
    'reports', 'inventory', 'expenses', 'shift_audits', 'multi_user',
    'multi_location', 'advanced_inventory', 'api_access',
  ]
  const commonFeatures = computed(() => featureKeys.filter(feature =>
    plans.value.length > 0 && plans.value.every(plan => plan.features[feature]),
  ))
  const formatLocale = computed(() => locale.value.startsWith('es') ? 'es-MX' : 'en-US')
  const currencyFormatter = computed(() => new Intl.NumberFormat(formatLocale.value, {
    style: 'currency', currency: 'MXN', currencyDisplay: 'narrowSymbol', maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }))
  const numberFormatter = computed(() => new Intl.NumberFormat(formatLocale.value))
  const percentFormatter = computed(() => new Intl.NumberFormat(formatLocale.value, {
    style: 'percent', maximumFractionDigits: 2,
  }))

  function money (value: number) {
    return currencyFormatter.value.format(value)
  }

  function percent (value: number) {
    return percentFormatter.value.format(value / 100)
  }

  function limitValue (plan: PricingPlan, key: keyof Limits) {
    const value = plan.limits[key]
    if (value === null) return t('pricing.unlimited')
    if (key === 'monthly_sales_amount') return `${money(value / 100)} MXN`
    if (key === 'analytics_history_days') return t('pricing.days', { count: numberFormatter.value.format(value) })
    return numberFormatter.value.format(value)
  }

  function planFeatures (plan: PricingPlan) {
    return featureKeys.filter(feature => plan.features[feature] && !commonFeatures.value.includes(feature))
  }

  async function loadPrices () {
    controller?.abort()
    const request = new AbortController()
    controller = request
    loading.value = true
    failed.value = false
    try {
      plans.value = await getPrices(request.signal)
    } catch {
      if (!request.signal.aborted) failed.value = true
    } finally {
      if (!request.signal.aborted) loading.value = false
    }
  }

  onMounted(loadPrices)
  onBeforeUnmount(() => controller?.abort())
</script>

<style scoped>
.pricing-section {
  scroll-margin-top: 88px;
  background-image: radial-gradient(ellipse at top, rgba(var(--v-theme-primary), 0.06), transparent 65%);
}

.pricing-heading,
.plan-price {
  font-family: 'Space Grotesk', sans-serif;
}

.pricing-heading {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  line-height: 1.2;
}

.pricing-card {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 24px;
}

.pricing-card--featured {
  border: 2px solid rgb(var(--v-theme-primary));
  background-image: linear-gradient(180deg, rgba(var(--v-theme-primary), 0.06), transparent 260px);
}

.plan-badge {
  height: 28px;
}

.pricing-card h3 {
  margin: 0;
}

.plan-target {
  min-height: 44px;
  font-size: 0.875rem;
}

.plan-cta {
  flex: 0 0 auto;
}

.plan-price {
  font-size: clamp(2rem, 3vw, 2.5rem);
  line-height: 1.2;
  letter-spacing: -0.04em;
}

.fee-panel {
  background: rgba(var(--v-theme-primary), 0.06);
}

.plan-limits > div + div {
  border-top: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}

.plan-limits {
  margin: 0;
}

.plan-limits > div:first-child {
  min-height: 56px;
  align-items: center;
}

.plan-limits dd {
  margin: 0;
  max-width: 55%;
  overflow-wrap: anywhere;
}

.plan-limits dt {
  min-width: 0;
  overflow-wrap: anywhere;
}

.plan-limits,
.plan-features li {
  font-size: 0.875rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
