<template>
  <DocumentLayout
    :intro="$t('privacy.intro')"
    :sections="documentSections"
    :title="$t('privacy.title')"
    :updated="$t('privacy.lastUpdated')"
  >
    <section v-for="section in sections" :id="`privacy-${section.key}`" :key="section.key" class="mb-10">
      <h2 class="text-h6 font-weight-bold mb-4">
        {{ section.number }}. {{ $t(`privacy.${section.key}.title`) }}
      </h2>

      <p v-if="section.hasIntro" class="text-body-1 mb-4">
        {{ $t(`privacy.${section.key}.intro`) }}
      </p>

      <ul v-if="section.hasItems" class="mb-4">
        <li v-for="i in section.itemCount" :key="i" class="text-body-1 mb-2">
          <strong>{{ $t(`privacy.${section.key}.item${i}.label`) }}</strong>
          {{ $t(`privacy.${section.key}.item${i}.text`) }}
        </li>
      </ul>

      <p v-if="section.hasText" class="text-body-1">
        {{ $t(`privacy.${section.key}.text`) }}
      </p>

      <div v-if="section.hasSubsections">
        <div v-for="sub in section.subsections" :key="sub" class="mb-4">
          <p class="text-body-1 mb-1">
            <strong>{{ $t(`privacy.${section.key}.${sub}.label`) }}</strong>
          </p>

          <p class="text-body-1 text-medium-emphasis">
            {{ $t(`privacy.${section.key}.${sub}.text`) }}
          </p>
        </div>
      </div>
    </section>

    <v-divider class="my-8" />

    <section id="privacy-contact" class="mb-8">
      <h2 class="text-h6 font-weight-bold mb-4">
        6. {{ $t('privacy.contact.title') }}
      </h2>

      <p class="text-body-1">
        {{ $t('privacy.contact.text') }}
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
    { key: 'section1', number: 1, hasIntro: true, hasItems: true, itemCount: 3 },
    { key: 'section2', number: 2, hasIntro: true, hasItems: true, itemCount: 3 },
    { key: 'section3', number: 3, hasIntro: true, hasItems: true, itemCount: 3 },
    { key: 'section4', number: 4, hasIntro: true, hasSubsections: true, subsections: ['howTo', 'whatHappens'] },
    { key: 'section5', number: 5, hasText: true },
  ]
  const documentSections = computed(() => [
    ...sections.map(section => ({ id: `privacy-${section.key}`, title: t(`privacy.${section.key}.title`) })),
    { id: 'privacy-contact', title: t('privacy.contact.title') },
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
