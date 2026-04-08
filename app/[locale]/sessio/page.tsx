import { getTranslationsSync, getNestedValue } from "@/lib/translations";
import FormulariSessio from "@/components/sections/FormulariSessio";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function SessioPage({ params }: Props) {
  const { locale } = await params;
  const i18n = getTranslationsSync(locale as "ca" | "es" | "en");
  const t = (key: string) => getNestedValue(i18n, key) || key;

  return (
    <main className="min-h-screen bg-us-cream px-8 py-16">
      <div className="mx-auto max-w-2xl">
        <FormulariSessio
          locale={locale}
          titol={t("formSessio.title")}
          subtitol={t("formSessio.subtitle")}
          labels={{
            nom: t("formSessio.nom"),
            grau: t("formSessio.grau"),
            curs: t("formSessio.curs"),
            assistencia: t("formSessio.assistencia"),
            membre: t("formSessio.membre"),
            contacte: t("formSessio.contacte"),
            enviar: t("formSessio.enviar"),
            exit: t("formSessio.exit"),
            error: t("formSessio.error"),
          }}
          opcions={{
            assistencia: [
              { value: "si", label: t("formSessio.assistencia_si") },
              { value: "potser", label: t("formSessio.assistencia_potser") },
              { value: "no", label: t("formSessio.assistencia_no") },
            ],
            curs: ["1r", "2n", "3r", "4t", "5é+"],
            membre: [
              { value: "si", label: t("formSessio.membre_si") },
              { value: "potser", label: t("formSessio.membre_potser") },
              { value: "no", label: t("formSessio.membre_no") },
            ],
          }}
        />
      </div>
    </main>
  );
}