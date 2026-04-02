import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Robots generation happens at the root level (app/robots.ts)
// This dynamic route should not generate route-specific robots.txt
export default function robots(): MetadataRoute.Robots {
  // Return empty rules - actual robots.txt is at app/robots.ts
  return {
    rules: [],
  };
}
