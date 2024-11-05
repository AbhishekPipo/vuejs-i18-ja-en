// src/i18n.js
import { createI18n } from 'vue-i18n';

import en from './locales/en.json';
import ja from './locales/ja.json';

const i18n = createI18n({
  locale: 'en', // Default language
  fallbackLocale: 'en', // Fallback language if a key is missing in the selected language
  messages: {
    en,
    ja,
  },
});

export default i18n;