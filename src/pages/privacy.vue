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
        {{ $t('privacy.title') }}
      </h1>

      <p class="text-body-2 text-medium-emphasis mb-8">
        {{ $t('privacy.lastUpdated') }}
      </p>

      <v-divider class="mb-8" />

      <p class="text-body-1 mb-8">
        {{ $t('privacy.intro') }}
      </p>

      <section v-for="section in sections" :key="section.key" class="mb-10">
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

      <section class="mb-8">
        <h2 class="text-h6 font-weight-bold mb-4">
          6. {{ $t('privacy.contact.title') }}
        </h2>

        <p class="text-body-1">
          {{ $t('privacy.contact.text') }}
          <a class="text-primary" href="mailto:privacy@dobify.com">privacy@dobify.com</a>
        </p>
      </section>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
  const sections = [
    { key: 'section1', number: 1, hasIntro: true, hasItems: true, itemCount: 3 },
    { key: 'section2', number: 2, hasIntro: true, hasItems: true, itemCount: 3 },
    { key: 'section3', number: 3, hasIntro: true, hasItems: true, itemCount: 3 },
    { key: 'section4', number: 4, hasIntro: true, hasSubsections: true, subsections: ['howTo', 'whatHappens'] },
    { key: 'section5', number: 5, hasText: true },
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
