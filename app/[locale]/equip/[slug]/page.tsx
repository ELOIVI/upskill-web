import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMembre, membres } from "@/lib/equip";

interface EquipMembrePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Genera totes les combinacions de locale + slug per a export estàtic
export function generateStaticParams() {
  const locales = ["ca", "es", "en"];

  return locales.flatMap((locale) =>
    membres.map((membre) => ({
      locale,
      slug: membre.slug,
    }))
  );
}

export default async function EquipMembrePage({
  params,
}: EquipMembrePageProps) {
  const { slug, locale } = await params;
  const membre = getMembre(slug);

  if (!membre) {
    notFound();
  }

  // Determina la traducció del rol i bio
  const rol = membre.rol[locale as keyof typeof membre.rol] || membre.rol.ca;
  const bio =
    membre.bio?.[locale as keyof typeof membre.bio] ||
    membre.bio?.ca;

  // Textos dinàmics en funció de la locale
  const translations: Record<string, Record<string, string>> = {
    ca: {
      back: "← Tornar a l'equip",
      memberLabel: "Membre de l'equip",
      studies: "Estudis",
      university: "Universitat",
      bioPending: "Estem acabant de preparar aquest perfil. Ben aviat hi trobaràs més informació personal i professional.",
    },
    es: {
      back: "← Volver al equipo",
      memberLabel: "Miembro del equipo",
      studies: "Estudios",
      university: "Universidad",
      bioPending: "Estamos terminando de preparar este perfil. Pronto encontrarás más información personal y profesional.",
    },
    en: {
      back: "← Back to team",
      memberLabel: "Team member",
      studies: "Studies",
      university: "University",
      bioPending: "We're finishing preparing this profile. Soon you'll find more personal and professional information.",
    },
  };

  const t = translations[locale as keyof typeof translations] || translations.ca;

  return (
    <main className="bg-us-cream min-h-[calc(100vh-90px)] px-8 py-14">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href={locale === "ca" ? "/#equip" : `/${locale}/#equip`}
          className="inline-flex items-center text-[13px] font-semibold text-us-dark opacity-75 hover:opacity-100 transition-opacity"
        >
          {t.back}
        </Link>

        <article className="mt-6 rounded-2xl border-[1.5px] border-us-dark/15 bg-white p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="w-44 h-44 rounded-2xl overflow-hidden border-[1.5px] border-us-dark/10 shrink-0">
              <Image
                src={membre.foto}
                alt={`${membre.nom} ${membre.cognom}`}
                width={176}
                height={176}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <p className="text-[11px] uppercase tracking-[0.16em] text-us-dark/45 font-semibold">
                {t.memberLabel}
              </p>
              <h1 className="text-[34px] md:text-[42px] leading-tight font-extrabold text-us-dark mt-2">
                {membre.nom} {membre.cognom}
              </h1>
              <p className="text-[15px] font-semibold text-us-purple mt-2">
                {rol}
              </p>

              <div className="mt-6 space-y-2 text-[15px] text-us-dark/85">
                <p>
                  <span className="font-semibold text-us-dark">{t.studies}:</span> {membre.estudis}
                </p>
                <p>
                  <span className="font-semibold text-us-dark">{t.university}:</span> {membre.universitat}
                </p>
              </div>

              {bio?.trim() ? (
                <div className="mt-6 flex flex-col gap-4">
                  {bio.split("\n").map((paragraf, i) => (
                    <p key={i} className="text-[16px] leading-relaxed text-us-dark/80">
                      {paragraf}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="mt-6 text-[16px] leading-relaxed text-us-dark/80">
                  {t.bioPending}
                </p>
              )}

              {(membre.linkedin || membre.instagram || membre.email) && (
                <div className="flex flex-wrap gap-3 mt-8">
                  {membre.linkedin && (
                    <Link
                      href={membre.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#0A66C2] text-white text-[13px] font-semibold px-5 py-2 rounded-full hover:opacity-85 transition-opacity"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </Link>
                  )}
                  {membre.instagram && (
                    <Link
                      href={membre.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white text-[13px] font-semibold px-5 py-2 rounded-full hover:opacity-85 transition-opacity"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="3" fill="white" />
                        <circle cx="18.5" cy="5.5" r="1.5" fill="white" />
                      </svg>
                      Instagram
                    </Link>
                  )}
                  {membre.email && (
                    <Link
                      href={`mailto:${membre.email}`}
                      className="flex items-center gap-2 bg-us-dark text-white text-[13px] font-semibold px-5 py-2 rounded-full hover:opacity-85 transition-opacity"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      Email
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
