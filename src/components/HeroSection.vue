<template>
  <v-sheet aria-labelledby="hero-title" class="hero-section" tag="section">
    <v-container max-width="1200">
      <div class="hero-grid">
        <div class="hero-copy">
          <v-chip color="primary" prepend-icon="mdi-cellphone-nfc" size="small" variant="tonal">
            {{ $t('hero.badge') }}
          </v-chip>

          <h1 id="hero-title">{{ $t('hero.title') }}</h1>
          <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
          <StoreBadges />

          <v-btn
            class="hero-how text-none"
            color="primary"
            href="#how-it-works"
            prepend-icon="mdi-play-circle-outline"
            variant="text"
          >
            {{ $t('hero.ctaSecondary') }}
          </v-btn>

          <ul class="hero-benefits">
            <li v-for="benefit in ['reader', 'receipts', 'business']" :key="benefit">
              <v-icon color="success" icon="mdi-check-circle-outline" size="18" />
              {{ $t(`hero.benefits.${benefit}`) }}
            </li>
          </ul>
        </div>

        <figure class="hero-visual">
          <div class="phone-preview">
            <div aria-hidden="true" class="phone-speaker" />

            <div class="preview-brand">
              <img alt="" height="32" src="@/assets/logo.svg" width="32">
              <span>Dobify</span>
            </div>

            <div class="preview-label">{{ $t('hero.preview.title') }}</div>
            <div class="preview-amount">$249<span> MXN</span></div>

            <div class="tap-illustration">
              <v-icon color="primary" icon="mdi-contactless-payment-circle-outline" size="80" />
            </div>

            <div class="preview-tap-title">{{ $t('hero.preview.tap') }}</div>
            <p class="preview-hint">{{ $t('hero.preview.hint') }}</p>

            <div class="preview-receipt">
              <v-icon color="success" icon="mdi-receipt-text-check-outline" size="24" />

              <div>
                <strong>{{ $t('hero.preview.receipt') }}</strong>
                <span>{{ $t('hero.preview.paperless') }}</span>
              </div>
            </div>

            <div aria-hidden="true" class="phone-home-bar" />
          </div>

          <div class="hero-floating-note">
            <v-avatar color="primary" size="40" variant="tonal">
              <v-icon icon="mdi-cellphone-check" size="22" />
            </v-avatar>

            <div>
              <strong>{{ $t('hero.preview.noReader') }}</strong>
              <span>{{ $t('hero.tagline') }}</span>
            </div>
          </div>

          <figcaption>{{ $t('hero.preview.disclaimer') }}</figcaption>
        </figure>
      </div>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
  import StoreBadges from '@/components/StoreBadges.vue'
</script>

<style scoped>
.hero-section {
  padding-block: 72px;
  background: radial-gradient(ellipse at 90% 20%, rgba(var(--v-theme-primary), 0.1), transparent 55%),
    linear-gradient(180deg, rgb(var(--v-theme-surface-variant)), rgb(var(--v-theme-surface)));
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  gap: 64px;
}

.hero-copy,
.hero-visual {
  min-width: 0;
}

.hero-copy h1 {
  margin: 24px 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.25rem, 4.5vw, 3.75rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.08;
  text-wrap: balance;
}

.hero-subtitle {
  max-width: 520px;
  margin: 0 0 28px;
  color: rgba(var(--v-theme-on-surface), 0.7);
  font-size: 1.125rem;
  line-height: 1.7;
}

.hero-how {
  margin: 16px 0;
  flex: 0 0 auto;
}

.hero-benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 0.8125rem;
}

.hero-benefits li {
  display: flex;
  align-items: center;
  gap: 6px;
}

.hero-visual {
  position: relative;
  margin: 0;
  padding: 16px 24px 0;
}

.phone-preview {
  position: relative;
  max-width: 310px;
  margin: 0 auto;
  padding: 22px;
  border: 7px solid #24213e;
  border-radius: 44px;
  background: rgb(var(--v-theme-surface));
  box-shadow: 0 24px 60px rgba(var(--v-theme-primary), 0.16);
  text-align: center;
}

.phone-speaker {
  width: 68px;
  height: 5px;
  margin: 0 auto 26px;
  background: #24213e;
  border-radius: 8px;
}

.preview-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 28px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
}

.preview-label,
.preview-hint {
  color: rgba(var(--v-theme-on-surface), 0.6);
  font-size: 0.8125rem;
}

.preview-amount {
  margin-top: 6px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.preview-amount span {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0;
}

.tap-illustration {
  display: grid;
  place-items: center;
  width: 138px;
  height: 138px;
  margin: 24px auto;
  background: rgba(var(--v-theme-primary), 0.07);
  border: 1px solid rgba(var(--v-theme-primary), 0.15);
  border-radius: 50%;
}

.preview-tap-title {
  font-size: 1rem;
  font-weight: 600;
}

.preview-hint {
  margin: 8px 0 24px;
  line-height: 1.6;
}

.preview-receipt {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border-radius: 16px;
  background: rgba(var(--v-theme-success), 0.06);
  text-align: left;
}

.preview-receipt strong,
.preview-receipt span {
  display: block;
  font-size: 0.75rem;
  line-height: 1.6;
}

.preview-receipt span {
  color: rgba(var(--v-theme-on-surface), 0.6);
}

.phone-home-bar {
  width: 80px;
  height: 4px;
  margin: 24px auto 0;
  border-radius: 8px;
  background: #24213e;
}

.hero-floating-note {
  position: absolute;
  right: 0;
  top: -14px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border: 1px solid rgba(var(--v-theme-primary), 0.12);
  border-radius: 18px;
  background: rgb(var(--v-theme-surface));
  box-shadow: 0 8px 32px rgba(var(--v-theme-primary), 0.1);
}

.hero-floating-note strong,
.hero-floating-note span {
  display: block;
  font-size: 0.8125rem;
}

.hero-floating-note span {
  margin-top: 4px;
  color: rgba(var(--v-theme-on-surface), 0.6);
  font-size: 0.75rem;
}

.hero-visual figcaption {
  max-width: 340px;
  margin: 24px auto 0;
  color: rgba(var(--v-theme-on-surface), 0.6);
  font-size: 0.6875rem;
  line-height: 1.6;
  text-align: center;
}

@media (max-width: 959px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero-copy {
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
  }

  .hero-subtitle {
    margin-inline: auto;
  }

  .hero-copy :deep(.store-badges),
  .hero-benefits {
    justify-content: center;
  }

  .hero-visual {
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
  }
}

@media (max-width: 599px) {
  .hero-section {
    padding-block: 44px;
  }

  .hero-visual {
    padding-inline: 0;
  }

  .hero-floating-note {
    position: static;
    justify-content: center;
    max-width: 310px;
    margin: 16px auto 0;
  }

  .phone-preview {
    padding-inline: 16px;
  }
}
</style>
