import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locale/en';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en,
  },
  fallbackLng: 'en',
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: true,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});

export default i18n;
