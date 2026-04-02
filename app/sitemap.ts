import { membres } from "@/lib/equip";
import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Sitemap: ajuda Google a indexar totes les pàgines de la web en totes les locales
// Genera totes les variants de locale per a cada ruta disponible
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // URLs de la pàgina principal per a cada locale
  const homeUrls = routing.locales.map((locale) => {
    const url = locale === "ca" ? baseUrl : `${baseUrl}/${locale}`;
    return {
      url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    };
  });

  // URLs de membres de l'equip per a cada locale
  const memberUrls = routing.locales.flatMap((locale) =>
    membres.map((m) => ({
      url: locale === "ca" 
        ? `${baseUrl}/equip/${m.slug}`
        : `${baseUrl}/${locale}/equip/${m.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...homeUrls, ...memberUrls];
}
