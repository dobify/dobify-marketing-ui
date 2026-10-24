<template>
  <v-sheet class="support-page" color="background">
    <v-container max-width="1100">
      <v-btn
        class="support-back text-none"
        color="primary"
        prepend-icon="mdi-arrow-left"
        to="/"
        variant="text"
      >
        {{ $t('legal.backToHome') }}
      </v-btn>

      <header class="section-intro text-center">
        <v-avatar color="primary" size="56" variant="tonal">
          <v-icon icon="mdi-lifebuoy" size="28" />
        </v-avatar>

        <h1 class="site-heading support-title">{{ $t('support.title') }}</h1>
        <p class="section-description">{{ $t('support.subtitle') }}</p>
      </header>

      <div class="support-channels">
        <v-card
          v-for="channel in channels"
          :key="channel.key"
          class="site-card support-channel"
          elevation="0"
          :href="channel.href"
          :to="channel.to"
        >
          <v-avatar color="primary" size="44" variant="tonal">
            <v-icon :icon="channel.icon" size="22" />
          </v-avatar>

          <h2>{{ $t(`support.channels.${channel.key}.title`) }}</h2>
          <p>{{ $t(`support.channels.${channel.key}.text`) }}</p>

          <span class="support-channel-action">
            {{ $t(`support.channels.${channel.key}.cta`) }}
            <v-icon icon="mdi-arrow-right" size="18" />
          </span>
        </v-card>
      </div>

      <div class="support-grid">
        <section id="support-faq" aria-labelledby="support-faq-title">
          <div class="section-eyebrow">{{ $t('faq.sectionTitle') }}</div>
          <h2 id="support-faq-title" class="support-heading">{{ $t('support.faq.title') }}</h2>

          <v-expansion-panels class="site-faq" variant="accordion">
            <v-expansion-panel
              v-for="i in 5"
              :key="i"
              elevation="0"
              :text="$t(`support.faq.q${i}.answer`)"
              :title="$t(`support.faq.q${i}.question`)"
            />
          </v-expansion-panels>
        </section>

        <aside :aria-label="$t('support.hours.title')" class="site-card support-hours">
          <v-icon color="primary" icon="mdi-clock-outline" size="28" />
          <h2 class="support-heading">{{ $t('support.hours.title') }}</h2>

          <dl>
            <div v-for="day in hours" :key="day.key">
              <dt>{{ $t(`support.hours.${day.key}`) }}</dt>
              <dd>{{ day.time || $t('support.hours.closed') }}</dd>
            </div>
          </dl>

          <p>{{ $t('support.hours.note') }}</p>
          <a class="support-email" href="mailto:support@dobify.com">support@dobify.com</a>
        </aside>
      </div>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
  const channels = [
    { key: 'email', icon: 'mdi-email-outline', href: 'mailto:support@dobify.com', to: undefined },
    { key: 'answers', icon: 'mdi-comment-question-outline', href: undefined, to: '/support#support-faq' },
    { key: 'plans', icon: 'mdi-tag-outline', href: undefined, to: '/#pricing' },
  ]
  const hours = [
    { key: 'weekdays', time: '9:00 AM – 6:00 PM' },
    { key: 'saturday', time: '10:00 AM – 2:00 PM' },
    { key: 'sunday', time: '' },
  ]
</script>

<style scoped>
.support-page {
  padding-block: 40px 72px;
}

.support-back {
  margin-bottom: 24px;
}

.support-title {
  margin-top: 20px;
  font-size: clamp(2rem, 4vw, 3rem);
}

.support-channels {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 48px;
}

.support-channel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.support-channel h2 {
  margin: 20px 0 12px;
  font-size: 1.125rem;
  font-weight: 700;
}

.support-channel p {
  margin: 0 0 24px;
  color: rgba(var(--v-theme-on-surface), 0.65);
  font-size: 0.875rem;
  line-height: 1.7;
}

.support-channel-action {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  color: rgb(var(--v-theme-primary));
  font-size: 0.8125rem;
  font-weight: 600;
}

.support-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  align-items: start;
  gap: 36px;
}

#support-faq {
  scroll-margin-top: 100px;
}

.support-heading {
  margin: 0 0 24px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.4;
}

.support-hours .support-heading {
  margin-top: 16px;
  font-size: 1.25rem;
}

.support-hours dl {
  margin: 0;
  font-size: 0.8125rem;
}

.support-hours dl > div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px 16px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.1);
}

.support-hours dd {
  margin: 0;
  color: rgba(var(--v-theme-on-surface), 0.65);
}

.support-hours p {
  margin: 20px 0;
  color: rgba(var(--v-theme-on-surface), 0.65);
  font-size: 0.8125rem;
  line-height: 1.8;
}

.support-email {
  color: rgb(var(--v-theme-primary));
  font-size: 0.875rem;
  overflow-wrap: anywhere;
}

@media (max-width: 959px) {
  .support-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 599px) {
  .support-page {
    padding-block: 24px 48px;
  }

  .support-channels {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
