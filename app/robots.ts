import type { MetadataRoute } from "next";
export const dynamic = "force-static";


// Robots: indica als motors de cerca quines pàgines indexar
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
