import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";
import { getTranslationsSync } from "@/lib/translations";
import { getNestedValue } from "@/lib/translations";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// URL base per a metadades canòniques
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Mapa de configuració per a cada locale: títols, descripcions i locales alternatives
const localeConfig: Record <
  string,
  {
    title: string;
    description: string;
    ogLocale: string;
    alternateLocales: Array<{ locale: string; url: string }>;
  }
> = {
  ca: {
    title: "UpSkill — Students' Career LAB",
    description: "La comunitat que impulsa la teva carrera professional des de la universitat. Networking, LinkedIn, pràctiques i molt més.",
    ogLocale: "ca_ES",
    alternateLocales: [
      { locale: "es", url: "/es" },
      { locale: "en", url: "/en" },
    ],
  },
  es: {
    title: "UpSkill — Students' Career LAB",
    description: "La comunidad que impulsa tu carrera profesional desde la universidad. Networking, LinkedIn, prácticas y mucho más.",
    ogLocale: "es_ES",
    alternateLocales: [
      { locale: "ca", url: "/" },
      { locale: "en", url: "/en" },
    ],
  },
  en: {
    title: "UpSkill — Students' Career LAB",
    description: "The community that drives your professional career from university. Networking, LinkedIn, internships and much more.",
    ogLocale: "en_US",
    alternateLocales: [
      { locale: "ca", url: "/" },
      { locale: "es", url: "/es" },
    ],
  },
};
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const config = localeConfig[locale] || localeConfig.ca;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: config.title,
      template: `%s | UpSkill`,
    },
    description: config.description,
    openGraph: {
      type: "website",
      locale: config.ogLocale,
      siteName: "UpSkill — Students' Career LAB",
      title: config.title,
      description: config.description,
      images: [{ url: "/images/brand/og_image.png", width: 1200, height: 630 }],
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "ca" }, { locale: "es" }, { locale: "en" }];
}
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  
  const i18n = getTranslationsSync(locale as "ca" | "es" | "en");
  const t = (key: string) => getNestedValue(i18n, key) || key;

  const navLinks = [
    { href: "#qui-som", label: t("navbar.links.whyUs") },
    { href: "#que-fem", label: t("navbar.links.whatWeDo") },
    { href: "#equip", label: t("navbar.links.team") },
    { href: "#esdeveniments", label: t("navbar.links.events") },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "UpSkill — Students' Career LAB",
            "url": baseUrl,
          })
        }}
      />
      <Banner
        session={t("banner.session")}
        date={t("banner.date")}
        location={t("banner.location")}
        cta={t("banner.cta")}
        ctaUrl={`/${locale}/sessio`}
      />
      <Navbar links={navLinks} ctaLabel={t("navbar.cta")} locale={locale} />
      {children}
      <Footer
        copyright={t("footer.copyright")}
        instagram={t("footer.instagram")}
        linkedin={t("footer.linkedin")}
      />
    </>
  );
}

