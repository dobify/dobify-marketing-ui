<template>
  <DocumentLayout
    :intro="$t('cookies.intro')"
    :sections="documentSections"
    :title="$t('cookies.title')"
    :updated="$t('cookies.lastUpdated')"
  >
    <section v-for="section in sections" :id="`cookies-${section.key}`" :key="section.key" class="mb-10">
      <h2 class="text-h6 font-weight-bold mb-4">
        {{ section.number }}. {{ $t(`cookies.${section.key}.title`) }}
      </h2>

      <p v-if="section.hasText" class="text-body-1 mb-4">
        {{ $t(`cookies.${section.key}.text`) }}
      </p>

      <ul v-if="section.hasItems" class="mb-4">
        <li v-for="i in section.itemCount" :key="i" class="text-body-1 mb-2">
          <strong>{{ $t(`cookies.${section.key}.item${i}.name`) }}</strong>
          — {{ $t(`cookies.${section.key}.item${i}.desc`) }}
        </li>
      </ul>
    </section>

    <v-divider class="my-8" />

    <section id="cookies-contact" class="mb-8">
      <h2 class="text-h6 font-weight-bold mb-4">
        5. {{ $t('cookies.contact.title') }}
      </h2>

      <p class="text-body-1">
        {{ $t('cookies.contact.text') }}
        <a class="text-primary" href="mailto:privacy@dobify.com">privacy@dobify.com</a>
      </p>
    </section>
  </DocumentLayout>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import DocumentLayout from '@/components/DocumentLayout.vue'

  const { t } = useI18n()
  const sections = [
    { key: 'section1', number: 1, hasText: true },
    { key: 'section2', number: 2, hasText: true, hasItems: true, itemCount: 3 },
    { key: 'section3', number: 3, hasText: true },
    { key: 'section4', number: 4, hasText: true },
  ]
  const documentSections = computed(() => [
    ...sections.map(section => ({ id: `cookies-${section.key}`, title: t(`cookies.${section.key}.title`) })),
    { id: 'cookies-contact', title: t('cookies.contact.title') },
  ])
</script>

<style scoped>
ul {
  padding-left: 1.5rem;
}

li {
  list-style-type: disc;
}
</style>
