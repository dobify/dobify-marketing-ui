<template>
  <v-sheet class="document-page" color="background">
    <v-container max-width="1100">
      <v-btn
        class="document-back text-none"
        color="primary"
        prepend-icon="mdi-arrow-left"
        to="/"
        variant="text"
      >
        {{ $t('legal.backToHome') }}
      </v-btn>

      <header class="document-header">
        <div class="section-eyebrow">{{ $t('legal.navigation') }}</div>
        <h1 class="site-heading">{{ title }}</h1>

        <p class="document-updated">
          <v-icon icon="mdi-calendar-outline" size="18" />
          {{ updated }}
        </p>
      </header>

      <div class="document-grid">
        <nav :aria-label="$t('legal.contents')" class="document-contents site-card">
          <h2>{{ $t('legal.contents') }}</h2>

          <ol>
            <li v-for="section in sections" :key="section.id">
              <a :href="`#${section.id}`">{{ section.title }}</a>
            </li>
          </ol>
        </nav>

        <article :aria-label="title" class="document-content site-card">
          <p class="document-intro">{{ intro }}</p>
          <slot />
        </article>
      </div>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
  defineProps<{
    title: string
    updated: string
    intro: string
    sections: { id: string, title: string }[]
  }>()
</script>

<style scoped>
.document-page {
  padding-block: 40px 64px;
}

.document-back {
  margin-bottom: 28px;
}

.document-header {
  margin-bottom: 36px;
}

.document-header .site-heading {
  font-size: clamp(2rem, 4vw, 3rem);
}

.document-updated {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: rgba(var(--v-theme-on-surface), 0.6);
  font-size: 0.875rem;
}

.document-grid {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  align-items: start;
  gap: 28px;
}

.document-contents {
  position: sticky;
  top: 100px;
  padding: 24px;
}

.document-contents h2 {
  margin: 0 0 16px;
  font-size: 0.875rem;
}

.document-contents ol {
  margin: 0;
  padding-left: 18px;
}

.document-contents li {
  padding-left: 4px;
  margin-bottom: 12px;
  color: rgba(var(--v-theme-on-surface), 0.6);
  font-size: 0.8125rem;
  line-height: 1.6;
}

.document-contents li:last-child {
  margin-bottom: 0;
}

.document-contents a {
  color: inherit;
  text-decoration: none;
}

.document-contents a:hover {
  color: rgb(var(--v-theme-primary));
  text-decoration: underline;
}

.document-content {
  padding: 36px;
  overflow-wrap: anywhere;
}

.document-intro {
  margin: 0 0 32px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.1);
  color: rgba(var(--v-theme-on-surface), 0.7);
  font-size: 1rem;
  line-height: 1.9;
}

.document-content :deep(section) {
  margin-bottom: 32px;
  scroll-margin-top: 100px;
}

.document-content :deep(section:last-child) {
  margin-bottom: 0;
}

.document-content :deep(h2) {
  margin: 0 0 16px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5;
}

.document-content :deep(p),
.document-content :deep(li) {
  margin: 0 0 12px;
  color: rgba(var(--v-theme-on-surface), 0.75);
  font-size: 0.9375rem;
  line-height: 1.9;
}

.document-content :deep(ul) {
  padding-left: 22px;
  margin: 0 0 20px;
}

.document-content :deep(.v-divider) {
  margin-block: 28px;
}

@media (max-width: 959px) {
  .document-grid {
    grid-template-columns: 1fr;
  }

  .document-contents {
    position: static;
  }

  .document-contents ol {
    columns: 2;
    column-gap: 32px;
  }

  .document-contents li {
    break-inside: avoid;
  }
}

@media (max-width: 599px) {
  .document-page {
    padding-block: 24px 40px;
  }

  .document-content {
    padding: 24px;
  }

  .document-contents ol {
    columns: 1;
  }
}
</style>
