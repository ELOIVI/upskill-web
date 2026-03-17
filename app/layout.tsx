import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";

// Font principal: Plus Jakarta Sans
// Carreguem els pesos que farem servir: 400 (cos), 500 (mitjà), 700 (negreta), 800 (títols)
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "UpSkill - Students' Career LAB",
  description: "La comunitat que impulsa la teva carrera professional des de la universitat.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-[family-name:var(--font-jakarta)] antialiased bg-[#FCF6EC]`}>
        <Navbar />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}