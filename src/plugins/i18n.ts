import { createI18n, type I18nOptions } from 'vue-i18n'

import en from '../locales/en.json'
import es from '../locales/es.json'

export type MessageSchema = typeof en

const options: I18nOptions = {
  legacy: false,
  locale: navigator.language.startsWith('es') ? 'es' : 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
}

export const i18n = createI18n<false, typeof options>(options)

export default i18n
