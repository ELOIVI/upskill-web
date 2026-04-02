"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

// Commutador de llengua: detecta el locale actual i genera links per als altres
export default function LangSwitcher() {
  const pathname = usePathname();

  // Amb localePrefix: "always" totes les URLs comencen amb /{locale}
  const currentLocale = routing.locales.find((l) =>
    pathname.startsWith(`/${l}`)
  ) || "ca";

  // Substitueix el prefix de locale a la URL actual
  const getLocaleUrl = (locale: string): string => {
    const withoutPrefix = pathname.replace(/^\/(ca|es|en)/, "") || "/";
    return `/${locale}${withoutPrefix}`;
  };

  return (
    <div className="hidden md:flex gap-2 items-center">
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={getLocaleUrl(locale)}
          className={`text-[12px] font-semibold px-3 py-1.5 rounded-full transition-all duration-200 uppercase tracking-wider ${
            currentLocale === locale
              ? "bg-us-dark text-us-cream"
              : "border-[1px] border-us-dark/30 text-us-dark/60 hover:border-us-dark/60 hover:text-us-dark"
          }`}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}