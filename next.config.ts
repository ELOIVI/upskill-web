import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // output: "export" - no necessari a Vercel
  images: {
    unoptimized: false, // Vercel optimitza les imatges automàticament
  },
};

export default withNextIntl(nextConfig);