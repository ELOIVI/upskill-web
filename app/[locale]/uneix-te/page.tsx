import { getTranslationsSync, getNestedValue } from "@/lib/translations";
import FormulariInscripcio from "@/components/sections/FormulariInscripcio";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function UneixTePage({ params }: Props) {
  const { locale } = await params;
  const i18n = getTranslationsSync(locale as "ca" | "es" | "en");
  const t = (key: string) => getNestedValue(i18n, key) || key;

  return (
    <main className="min-h-screen bg-us-cream px-8 py-16">
      <div className="mx-auto max-w-2xl">
        <FormulariInscripcio
          locale={locale}
          titol={t("form.title")}
          subtitol={t("form.subtitle")}
          labels={{
            nom: t("form.nom"),
            grau: t("form.grau"),
            curs: t("form.curs"),
            assistencia: t("form.assistencia"),
            comoHaTrobat: t("form.comoHaTrobat"),
            motivacio: t("form.motivacio"),
            contacte: t("form.contacte"),
            enviar: t("form.enviar"),
            exit: t("form.exit"),
            error: t("form.error"),
          }}
          opcions={{
            assistencia: [
              { value: "si", label: t("form.assistencia_si") },
              { value: "potser", label: t("form.assistencia_potser") },
              { value: "no", label: t("form.assistencia_no") },
            ],
            curs: ["1r", "2n", "3r", "4t", "5é+"],
            comoHaTrobat: [
              t("form.trobat_amics"),
              t("form.trobat_instagram"),
              t("form.trobat_linkedin"),
              t("form.trobat_posters"),
            ],
          }}
        />
      </div>
    </main>
  );
}