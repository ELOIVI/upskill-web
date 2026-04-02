// i18n/routing.ts: configuració de localització per a next-intl
// Totes les locales porten prefix: /ca, /es, /en

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ca", "es", "en"],
  defaultLocale: "ca",
  localePrefix: "always",
});