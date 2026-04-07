import { getTranslations } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import QuiSom from "@/components/sections/QuiSom";
import QueFem from "@/components/sections/QueFem";
import Equip from "@/components/sections/Equip";
import Esdeveniments from "@/components/sections/Esdeveniments";
import CtaFinal from "@/components/sections/CtaFinal";
import { Users, Monitor, Mic } from "lucide-react";
import { getTranslationsSync } from "@/lib/translations";
import { getNestedValue } from "@/lib/translations";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

// Icona LinkedIn: SVG inline
const IconoLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// Pàgina principal: les seccions s'afegeixen aquí en ordre
export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  
  // Try to get translations sync for static export
  const i18n = getTranslationsSync(locale as "ca" | "es" | "en");
  const t = (key: string) => getNestedValue(i18n, key) || key;
  const tRaw = (key: string) => {
    const value = getNestedValue(i18n, key);
    return Array.isArray(value) ? value : [];
  };

  // Construeix l'array de serveis per a QueFem amb les traduccions ja incloses
  const services = [
    {
      key: "linkedin",
      icon: <IconoLinkedin />,
      iconBg: "bg-us-blue/10 border border-us-blue/25",
      title: t("whatWeDo.services.linkedin.title"),
      description: t("whatWeDo.services.linkedin.description"),
    },
    {
      key: "networking",
      icon: <Users size={18} className="text-us-purple" />,
      iconBg: "bg-us-purple/10 border border-us-purple/25",
      title: t("whatWeDo.services.networking.title"),
      description: t("whatWeDo.services.networking.description"),
    },
    {
      key: "careers",
      icon: <Monitor size={18} style={{ color: "#b8860b" }} />,
      iconBg: "bg-us-amber/20 border border-us-amber/60",
      title: t("whatWeDo.services.careers.title"),
      description: t("whatWeDo.services.careers.description"),
    },
    {
      key: "speaking",
      icon: <Mic size={18} className="text-us-blue" />,
      iconBg: "bg-us-blue/10 border border-us-blue/25",
      title: t("whatWeDo.services.speaking.title"),
      description: t("whatWeDo.services.speaking.description"),
    },
  ];

  return (
    <main>
      <Hero
        pill={t("hero.pill")}
        title={t("hero.title")}
        titleHighlight={t("hero.titleHighlight")}
        subtitle={t("hero.subtitle")}
        ctaPrimary={t("hero.ctaPrimary")}
        ctaSecondary={t("hero.ctaSecondary")}
      />
      <QuiSom
        label={t("whyUs.label")}
        title={t("whyUs.title")}
        description={t("whyUs.description")}
        questions={tRaw("whyUs.questions")}
        statsUniversityValue={t("whyUs.stats.universityValue")}
        statsUniversityLabel={t("whyUs.stats.university")}
        statsFreeValue={t("whyUs.stats.freeValue")}
        statsFreeLabelabel={t("whyUs.stats.free")}
        statsGradesValue={t("whyUs.stats.gradesValue")}
        statsGradesLabel={t("whyUs.stats.grades")}
      />
      <QueFem
        label={t("whatWeDo.label")}
        title={t("whatWeDo.title")}
        description={t("whatWeDo.description")}
        services={services}
      />
      <Equip
        label={t("team.label")}
        title={t("team.title")}
        description={t("team.description")}
        viewProfile={t("team.viewProfile")}
        currentLocale={locale}
      />
      <Esdeveniments
        label={t("events.label")}
        title={t("events.title")}
        description={t("events.description")}
        upcoming={t("events.upcoming")}
        past={t("events.past")}
        register={t("events.register")}
        closed={t("events.closed")}
      />
      <CtaFinal
        title={t("cta.title")}
        description={t("cta.description")}
        primary={t("cta.primary")}
        secondary={t("cta.secondary")}
        microcopy={t("cta.microcopy")}
        locale={locale}
      />
    </main>
  );
}
