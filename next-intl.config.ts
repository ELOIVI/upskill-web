// next-intl.config.ts: Configuració global de next-intl
// Apunta al routing.ts i defineix els paràmetres de traducció

import { routing } from "./i18n/routing";

export default {
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
  localePrefix: routing.localePrefix,
};
