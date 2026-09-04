<template>
  <v-sheet color="background" min-height="100vh">
    <v-container class="py-12" max-width="720">
      <v-btn
        class="mb-8 text-none"
        color="primary"
        prepend-icon="mdi-arrow-left"
        to="/"
        variant="text"
      >
        {{ $t('legal.backToHome') }}
      </v-btn>

      <h1
        class="text-h4 text-md-h3 font-weight-bold mb-2"
        style="font-family: 'Space Grotesk', sans-serif"
      >
        {{ $t('terms.title') }}
      </h1>

      <p class="text-body-2 text-medium-emphasis mb-8">
        {{ $t('terms.lastUpdated') }}
      </p>

      <v-divider class="mb-8" />

      <p class="text-body-1 mb-8">
        {{ $t('terms.intro') }}
      </p>

      <section v-for="section in sections" :key="section.key" class="mb-10">
        <h2 class="text-h6 font-weight-bold mb-4">
          {{ section.number }}. {{ $t(`terms.${section.key}.title`) }}
        </h2>

        <p v-if="section.hasText" class="text-body-1 mb-4">
          {{ $t(`terms.${section.key}.text`) }}
        </p>

        <ul v-if="section.hasItems" class="mb-4">
          <li v-for="i in section.itemCount" :key="i" class="text-body-1 mb-2">
            {{ $t(`terms.${section.key}.item${i}`) }}
          </li>
        </ul>

        <div v-if="section.hasIntegrations">
          <ul class="mb-3">
            <li v-for="i in section.integrationCount" :key="i" class="text-body-1 mb-2">
              <strong>{{ $t(`terms.${section.key}.integration${i}.name`) }}</strong>
              {{ $t(`terms.${section.key}.integration${i}.desc`) }}
            </li>
          </ul>

          <p class="text-body-2 text-medium-emphasis">
            {{ $t(`terms.${section.key}.note`) }}
          </p>
        </div>
      </section>

      <v-divider class="my-8" />

      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-4">
          13. {{ $t('terms.contact.title') }}
        </h2>

        <p class="text-body-1">
          {{ $t('terms.contact.text') }}
          <a class="text-primary" href="mailto:legal@dobify.com">legal@dobify.com</a>
        </p>
      </section>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
  const sections = [
    { key: 'section1', number: 1, hasText: true },
    { key: 'section2', number: 2, hasText: true, hasItems: true, itemCount: 5 },
    { key: 'section3', number: 3, hasItems: true, itemCount: 4 },
    { key: 'section4', number: 4, hasItems: true, itemCount: 4 },
    { key: 'section5', number: 5, hasItems: true, itemCount: 4 },
    { key: 'section6', number: 6, hasItems: true, itemCount: 3 },
    { key: 'section7', number: 7, hasItems: true, itemCount: 3 },
    { key: 'section8', number: 8, hasIntegrations: true, integrationCount: 2 },
    { key: 'section9', number: 9, hasItems: true, itemCount: 3 },
    { key: 'section10', number: 10, hasText: true },
    { key: 'section11', number: 11, hasText: true },
    { key: 'section12', number: 12, hasText: true },
  ]
</script>

<style scoped>
ul {
  padding-left: 1.5rem;
}

li {
  list-style-type: disc;
}
</style>
