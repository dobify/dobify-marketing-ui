<template>
  <div class="store-badges">
    <a :aria-label="$t('download.appStore')" :href="appStoreUrl" rel="noopener noreferrer" target="_blank">
      <img :alt="$t('download.appStore')" height="48" src="/app-store-badge.svg" width="144">
    </a>

    <a :aria-label="$t('download.googlePlay')" :href="playStoreUrl" rel="noopener noreferrer" target="_blank">
      <img :alt="$t('download.googlePlay')" height="48" src="/google-play-badge.svg" width="162">
    </a>
  </div>
</template>

<script lang="ts" setup>
  import { appStoreUrl, playStoreUrl } from '@/constants/links'
</script>

<style scoped>
.store-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.store-badges a {
  display: inline-flex;
  flex: 0 0 auto;
  border-radius: 8px;
  transition: transform 160ms ease;
}

.store-badges a:hover {
  transform: translateY(-2px);
}

.store-badges img {
  display: block;
  max-width: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .store-badges a {
    transition: none;
  }
}
</style>
