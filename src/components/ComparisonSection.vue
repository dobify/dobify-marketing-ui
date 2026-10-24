<template>
  <v-sheet
    id="comparison"
    aria-labelledby="comparison-title"
    class="comparison-section"
    color="surface"
    tag="section"
  >
    <v-container max-width="1100">
      <div class="comparison-intro text-center">
        <v-chip color="primary" prepend-icon="mdi-cellphone-nfc" size="small" variant="tonal">
          {{ $t('comparison.badge') }}
        </v-chip>

        <h2 id="comparison-title" class="comparison-title">{{ $t('comparison.title') }}</h2>
        <p class="comparison-subtitle text-medium-emphasis">{{ $t('comparison.subtitle') }}</p>
      </div>

      <v-card class="comparison-card" elevation="0" rounded="lg">
        <div aria-hidden="true" class="comparison-header">
          <div class="comparison-category-heading">{{ $t('comparison.setup') }}</div>

          <div class="comparison-option comparison-option--before">
            <v-avatar color="surface-variant" size="40">
              <v-icon icon="mdi-credit-card-wireless-outline" size="22" />
            </v-avatar>

            <div>
              <div class="comparison-option-title">{{ $t('comparison.without.title') }}</div>
              <div class="comparison-option-note text-medium-emphasis">{{ $t('comparison.without.subtitle') }}</div>
            </div>
          </div>

          <div class="comparison-option comparison-option--after">
            <v-avatar color="primary" size="40" variant="tonal">
              <v-icon icon="mdi-cellphone-check" size="22" />
            </v-avatar>

            <div>
              <div class="comparison-option-title text-primary">{{ $t('comparison.with.title') }}</div>
              <div class="comparison-option-note text-medium-emphasis">{{ $t('comparison.with.subtitle') }}</div>
            </div>
          </div>
        </div>

        <dl class="comparison-rows">
          <div v-for="(item, index) in items" :key="item.key" class="comparison-row">
            <dt class="comparison-category">
              <v-icon color="primary" :icon="item.icon" size="20" />
              <span>{{ $t(`comparison.categories.${item.key}`) }}</span>
            </dt>

            <dd class="comparison-value comparison-value--before">
              <span class="comparison-value-label">{{ $t('comparison.without.title') }}</span>

              <div class="comparison-detail">
                <v-icon color="error" icon="mdi-minus-circle-outline" size="18" />
                <span>{{ $t(`comparison.without.item${index + 1}`) }}</span>
              </div>
            </dd>

            <dd class="comparison-value comparison-value--after">
              <span class="comparison-value-label">{{ $t('comparison.with.title') }}</span>

              <div class="comparison-detail">
                <v-icon color="success" icon="mdi-check-circle" size="18" />
                <span>{{ $t(`comparison.with.item${index + 1}`) }}</span>
              </div>
            </dd>
          </div>
        </dl>
      </v-card>

      <div class="comparison-bottom">
        <div class="comparison-savings">
          <v-avatar color="primary" size="44" variant="tonal">
            <v-icon icon="mdi-piggy-bank-outline" size="24" />
          </v-avatar>

          <div>
            <p class="comparison-savings-title">{{ $t('hero.savings') }}</p>
            <p class="comparison-savings-note text-medium-emphasis">{{ $t('comparison.savingsNote') }}</p>
          </div>
        </div>

        <v-btn
          class="comparison-cta text-none"
          color="primary"
          href="#download"
          size="large"
          variant="flat"
        >
          {{ $t('comparison.cta') }}
          <v-icon end icon="mdi-arrow-right" size="18" />
        </v-btn>
      </div>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
  const items = [
    { key: 'payments', icon: 'mdi-contactless-payment' },
    { key: 'receipts', icon: 'mdi-receipt-text-outline' },
    { key: 'runningCosts', icon: 'mdi-cash-multiple' },
    { key: 'connections', icon: 'mdi-bluetooth-connect' },
    { key: 'equipment', icon: 'mdi-bag-personal-outline' },
  ]
</script>

<style scoped>
.comparison-section {
  padding-block: 64px;
  scroll-margin-top: 88px;
}

.comparison-intro {
  max-width: 780px;
  margin: 0 auto 36px;
}

.comparison-title {
  margin: 20px 0 16px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.025em;
  text-wrap: balance;
}

.comparison-subtitle {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
}

.comparison-card {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 24px;
  overflow: hidden;
}

.comparison-header,
.comparison-row {
  display: grid;
  grid-template-columns: minmax(160px, 0.8fr) repeat(2, minmax(0, 1.4fr));
}

.comparison-category-heading,
.comparison-option,
.comparison-category,
.comparison-value {
  padding: 22px 24px;
  min-width: 0;
}

.comparison-category-heading,
.comparison-category {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  font-weight: 600;
}

.comparison-header {
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}

.comparison-option {
  display: flex;
  align-items: center;
  gap: 12px;
}

.comparison-option-title {
  font-size: 1rem;
  font-weight: 700;
}

.comparison-option-note {
  margin-top: 4px;
  font-size: 0.75rem;
  line-height: 1.5;
}

.comparison-option--after,
.comparison-value--after {
  background: rgba(var(--v-theme-primary), 0.045);
  border-left: 1px solid rgba(var(--v-theme-primary), 0.12);
}

.comparison-rows,
.comparison-value {
  margin: 0;
}

.comparison-row + .comparison-row {
  border-top: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}

.comparison-value {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.6;
}

.comparison-value-label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.comparison-detail {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.comparison-detail .v-icon {
  margin-top: 2px;
}

.comparison-bottom,
.comparison-savings {
  display: flex;
  align-items: center;
  gap: 16px;
}

.comparison-bottom {
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 24px;
  padding: 24px;
  border-radius: 20px;
  background: rgb(var(--v-theme-surface-variant));
}

.comparison-savings {
  flex: 1 1 360px;
  min-width: 0;
}

.comparison-savings-title {
  margin: 0 0 4px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
}

.comparison-savings-note {
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.6;
}

.comparison-cta {
  flex: 0 0 auto;
}

@media (max-width: 959px) {
  .comparison-header {
    display: none;
  }

  .comparison-row {
    grid-template-columns: 1fr 1fr;
  }

  .comparison-category {
    grid-column: 1 / -1;
    padding: 16px 20px 12px;
  }

  .comparison-value {
    display: block;
    padding: 16px 20px 20px;
  }

  .comparison-value-label {
    position: static;
    display: block;
    width: auto;
    height: auto;
    margin-bottom: 8px;
    clip-path: none;
    white-space: normal;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .comparison-value--after .comparison-value-label {
    color: rgb(var(--v-theme-primary));
  }
}

@media (max-width: 599px) {
  .comparison-section {
    padding-block: 48px;
  }

  .comparison-row {
    grid-template-columns: 1fr;
  }

  .comparison-value--after {
    border-left: 0;
  }

  .comparison-bottom {
    padding: 20px;
  }

  .comparison-cta {
    width: 100%;
  }
}
</style>
