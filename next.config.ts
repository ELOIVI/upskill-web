import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Export estàtic: genera HTML/CSS/JS purs sense necessitat de Node.js en producció
  output: "export",

  // Desactiva l'optimització d'imatges: no compatible amb export estàtic
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);