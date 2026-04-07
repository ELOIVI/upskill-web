import Link from "next/link";
import { headers } from "next/headers";

import { getTranslationsSync, getNestedValue } from "@/lib/translations";


// Pàgina 404: es mostra quan l'usuari visita una ruta que no existeix
// Nota: next-intl automàticament està dins del layout de [locale]
export default async function NotFound() {
  // Detecta el locale de la URL actual via headers
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || headersList.get("referer") || "";

  // Detecta el locale de la pathname
  const locale = (["es", "en"] as const).find((l) => pathname.includes(`/${l}`)) || "ca";

  const i18n = getTranslationsSync(locale);
  const t = (key: string) => getNestedValue(i18n, key) || key;

  return (
    <main className="min-h-screen bg-us-cream flex flex-col items-center justify-center px-8 text-center">

      {/* Logo */}
      <Link href="/" className="mb-12">
        <img
          src="/images/brand/7_StudentsCareerLab_Rectangular_2.svg"
          alt="UpSkill: Students' Career LAB"
          width={180}
          height={48}
          className="h-10 w-auto opacity-60"
        />
      </Link>

      {/* Codi d'error */}
      <p className="text-[11px] font-semibold tracking-widest uppercase text-us-dark opacity-35 mb-4">
        {t("notFound.error")}
      </p>

      {/* Missatge principal */}
      <h1 className="text-[56px] font-extrabold tracking-tight text-us-dark leading-tight mb-4">
        {t("notFound.title")}
      </h1>
      <p className="text-[16px] text-us-dark opacity-55 max-w-md leading-relaxed mb-10">
        {t("notFound.description")}
      </p>

      {/* Botons */}
      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          href="/"
          className="bg-us-dark text-us-cream text-[14px] font-semibold px-8 py-3 rounded-full hover:opacity-80 transition-opacity"
        >
          {t("notFound.home")}
        </Link>
        <Link
          href="/#esdeveniments"
          className="border-[1.5px] border-us-dark text-us-dark text-[14px] font-semibold px-8 py-3 rounded-full hover:bg-us-dark hover:text-us-cream transition-colors"
        >
          {t("notFound.events")}
        </Link>
      </div>

      {/* Barres decoratives de marca */}
      <svg
        width="80"
        height="140"
        viewBox="-1 65 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-16 opacity-20"
      >
        {/* Barra blava amb chevron */}
        <polygon points="8,70 16,82 12,82 8,76 4,82 0,82" fill="#63B5F1" />
        <rect x="0" y="85" width="16" height="55" fill="#63B5F1" />

        {/* Barra morada */}
        <rect x="24" y="66" width="16" height="74" fill="#7A42E1" />

        {/* Barra ambre */}
        <rect x="48" y="46" width="16" height="94" fill="#FFBD59" />
      </svg>
    </main>
  );
}
