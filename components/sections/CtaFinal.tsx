"use client";

import Link from "next/link";
import AnimacioEntrada from "@/components/ui/AnimacioEntrada";

interface CtaFinalProps {
  title: string;
  description: string;
  primary: string;
  secondary: string;
  microcopy: string;
  locale: string;
}

// Secció CTA final: crida a l'acció principal abans del footer
export default function CtaFinal({
  title,
  description,
  primary,
  secondary,
  microcopy,
  locale,
}: CtaFinalProps) {
  return (
    <section id="uneix-te" className="px-8 py-20 bg-us-dark text-center scroll-mt-20">

      <AnimacioEntrada>
        <h2 className="text-[40px] font-extrabold tracking-tight text-us-cream mb-4">
          {title}
        </h2>
        <p className="text-[16px] text-us-cream opacity-50 mb-10">
          {description}
        </p>
      </AnimacioEntrada>

      {/* Botons CTA */}
      <AnimacioEntrada retard={150}>
      <div className="flex gap-3 justify-center flex-wrap">
        <Link
          href={`/${locale}/uneix-te`}
          rel="noopener noreferrer"
          className="bg-us-cream text-us-dark text-[14px] font-bold px-8 py-3 rounded-full hover:opacity-85 transition-opacity"
        >
          {primary}
        </Link>
        <Link
          href="https://instagram.com/upskill.careerlab"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1.5px] border-us-cream/30 text-us-cream text-[13px] font-semibold px-6 py-3 rounded-full hover:border-us-cream/70 transition-colors"
        >
          {secondary}
        </Link>
      </div>
      </AnimacioEntrada>

      {/* Micro-copy: elimina objeccions i genera confiança */}
      <AnimacioEntrada retard={300}>
        <p className="text-[12px] text-us-cream/50 mt-8">
          {microcopy}
        </p>
      </AnimacioEntrada>
    </section>
  );
}