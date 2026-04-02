import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Sitemap generation happens at the root level (app/sitemap.ts)
// This dynamic route should not generate route-specific sitemaps
export default function sitemap(): MetadataRoute.Sitemap {
  // Return empty array - actual sitemap is at app/sitemap.ts
  return [];
}
