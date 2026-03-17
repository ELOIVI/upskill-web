import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

// Metadata global: s'aplica a totes les pàgines
// Les pàgines individuals poden sobreescriure camps concrets
export const metadata: Metadata = {
  title: {
    default: "UpSkill — Students' Career LAB",
    // Pàgines internes: "Grecia o Lucia | UpSkill"
    template: "%s | UpSkill",
  },
  description: "La comunitat que impulsa la teva carrera professional des de la universitat. Networking, LinkedIn, pràctiques i molt més.",
  keywords: ["upskill", "carrera professional", "estudiants", "URV", "networking", "linkedin", "pràctiques"],
  authors: [{ name: "UpSkill — Students' Career LAB" }],
  creator: "UpSkill",

  // OG tags: previsualització quan es comparteix el link
  openGraph: {
    type: "website",
    locale: "ca_ES",
    url: "https://upskill.cat", // TODO: canviar pel domini real quan estigui disponible
    siteName: "UpSkill — Students' Career LAB",
    title: "UpSkill — Students' Career LAB",
    description: "La comunitat que impulsa la teva carrera professional des de la universitat.",
    images: [
      {
        url: "/images/brand/og-image.png", // TODO: crear imatge OG de 1200x630px
        width: 1200,
        height: 630,
        alt: "UpSkill — Students' Career LAB",
      },
    ],
  },

  // Twitter/X cards
  twitter: {
    card: "summary_large_image",
    title: "UpSkill — Students' Career LAB",
    description: "La comunitat que impulsa la teva carrera professional des de la universitat.",
    images: ["/images/brand/og-image.png"], // TODO: mateix que OG
  },

  // Icona de la pestanya
  icons: {
    icon: "icon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-[family-name:var(--font-jakarta)] antialiased bg-us-cream`}>
        <Navbar />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}