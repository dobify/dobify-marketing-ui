/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Dobify brand theme - colors from logo
export default createVuetify({
  defaults: {
    VBtn: {
      rounded: 'pill',
    },
    VCard: {
      rounded: 'xl',
    },
    VChip: {
      rounded: 'pill',
    },
    VTextField: {
      rounded: 'pill',
      variant: 'outlined',
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          'primary': '#534AB7',
          'secondary': '#5DCAA5',
          'accent': '#EF9F27',
          'tertiary': '#AFA9EC',
          'background': '#FAFAFA',
          'surface': '#FFFFFF',
          'surface-variant': '#F5F4FB',
          'on-surface-variant': '#1A1A2E',
          'on-surface': '#1A1A2E',
          'on-background': '#1A1A2E',
          'success': '#1D9E75',
          'warning': '#EF9F27',
          'error': '#E53935',
          'info': '#534AB7',
        },
      },
      dark: {
        dark: true,
        colors: {
          'primary': '#AFA9EC',
          'secondary': '#5DCAA5',
          'accent': '#EF9F27',
          'tertiary': '#534AB7',
          'background': '#121218',
          'surface': '#1E1E2A',
          'surface-variant': '#2A2A3C',
          'on-surface-variant': '#F5F4FB',
          'on-surface': '#F5F4FB',
          'on-background': '#F5F4FB',
          'success': '#5DCAA5',
          'warning': '#EF9F27',
          'error': '#EF5350',
          'info': '#AFA9EC',
        },
      },
    },
  },
})
