"use client";

import Link from "next/link";

interface BannerProps {
  session: string;
  date: string;
  location: string;
  cta: string;
  ctaUrl: string;
}

// Banner: avís temporal per a la propera sessió
// Mostra informació localitzada rebuda com a props
export default function Banner({ session, date, location, cta, ctaUrl }: BannerProps) {
  return (
    <div className="bg-us-amber px-8 py-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
      {/* Informació de l'event */}
      <p className="text-us-dark text-[13px] font-bold">
        {session} - {date}
      </p>
      <p className="text-us-dark text-[13px] opacity-75">
        {location}
      </p>

      {/* Enllaç d'inscripció, en mòbil alineat a l'esquerra, en escriptori a la dreta */}
      <Link
        href={ctaUrl}
        className="sm:ml-auto text-us-dark text-[13px] font-bold underline hover:opacity-70 transition-opacity"
      >
        {cta} →
      </Link>
    </div>
  );
}