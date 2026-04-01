import { membres } from "@/lib/equip";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";


// Sitemap: ajuda Google a indexar totes les pàgines de la web
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const paginosMembres = membres.map((m) => ({
    url: `${baseUrl}/equip/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...paginosMembres,
  ];
}