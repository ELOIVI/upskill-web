import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UpSkill — Students' Career LAB",
  description: "La comunitat que impulsa la teva carrera professional des de la universitat.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased bg-[#FCF6EC]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}