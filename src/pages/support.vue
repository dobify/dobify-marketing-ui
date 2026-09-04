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
        {{ $t('support.title') }}
      </h1>

      <p class="text-body-1 text-medium-emphasis mb-8">
        {{ $t('support.subtitle') }}
      </p>

      <v-divider class="mb-8" />

      <v-row class="mb-10">
        <v-col
          v-for="channel in channels"
          :key="channel.key"
          cols="12"
          md="4"
        >
          <v-card
            class="pa-6 h-100 text-center"
            :href="channel.href"
            variant="outlined"
          >
            <v-icon
              class="mb-4"
              :color="channel.color"
              :icon="channel.icon"
              size="48"
            />

            <h3 class="text-h6 font-weight-bold mb-2">
              {{ $t(`support.${channel.key}.title`) }}
            </h3>

            <p class="text-body-2 text-medium-emphasis mb-0">
              {{ $t(`support.${channel.key}.text`) }}
            </p>
          </v-card>
        </v-col>
      </v-row>

      <section class="mb-10">
        <h2 class="text-h5 font-weight-bold mb-6">
          {{ $t('support.faq.title') }}
        </h2>

        <v-expansion-panels variant="accordion">
          <v-expansion-panel
            v-for="i in 5"
            :key="i"
            class="mb-2"
            elevation="0"
            rounded="lg"
            :text="$t(`support.faq.q${i}.answer`)"
            :title="$t(`support.faq.q${i}.question`)"
          />
        </v-expansion-panels>
      </section>

      <v-divider class="mb-8" />

      <section class="mb-8">
        <h2 class="text-h5 font-weight-bold mb-4">
          {{ $t('support.hours.title') }}
        </h2>

        <v-table density="comfortable">
          <tbody>
            <tr>
              <td class="font-weight-medium">{{ $t('support.hours.weekdays') }}</td>
              <td>9:00 AM - 6:00 PM (CST)</td>
            </tr>

            <tr>
              <td class="font-weight-medium">{{ $t('support.hours.saturday') }}</td>
              <td>10:00 AM - 2:00 PM (CST)</td>
            </tr>

            <tr>
              <td class="font-weight-medium">{{ $t('support.hours.sunday') }}</td>
              <td>{{ $t('support.hours.closed') }}</td>
            </tr>
          </tbody>
        </v-table>

        <p class="text-body-2 text-medium-emphasis mt-4">
          {{ $t('support.hours.note') }}
        </p>
      </section>
    </v-container>
  </v-sheet>
</template>

<script lang="ts" setup>
  const channels = [
    { key: 'email', icon: 'mdi-email-outline', color: 'primary', href: 'mailto:support@dobify.com' },
    { key: 'chat', icon: 'mdi-message-text-outline', color: 'secondary', href: '#' },
    { key: 'docs', icon: 'mdi-book-open-outline', color: 'accent', href: '#' },
  ]
</script>
