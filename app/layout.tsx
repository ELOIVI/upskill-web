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


// Les pàgines individuals poden sobreescriure camps concrets
// URL base: usa variable d'entorn o localhost per defecte en desenvolupament
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Metadata global: s'aplica a totes les pàgines
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "UpSkill — Students' Career LAB",
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
    siteName: "UpSkill — Students' Career LAB",
    title: "UpSkill — Students' Career LAB",
    description: "La comunitat que impulsa la teva carrera professional des de la universitat.",
    images: [
      {
        url: "/images/brand/og_image.png", 
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
    images: ["/images/brand/og_image.png"], // TODO: mateix que OG
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