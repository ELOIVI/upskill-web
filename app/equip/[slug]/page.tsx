import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMembre, membres } from "@/lib/equip";

interface EquipMembrePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return membres.map((membre) => ({ slug: membre.slug }));
}

export default async function EquipMembrePage({ params }: EquipMembrePageProps) {
  const { slug } = await params;
  const membre = getMembre(slug);

  if (!membre) {
    notFound();
  }

  return (
    <main className="bg-us-cream min-h-[calc(100vh-90px)] px-8 py-14">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href="/#equip"
          className="inline-flex items-center text-[13px] font-semibold text-us-dark opacity-75 hover:opacity-100 transition-opacity"
        >
          ← Tornar a l'equip
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
              <p className="text-[11px] uppercase tracking-[0.16em] text-us-dark/45 font-semibold">Membre de l'equip</p>
              <h1 className="text-[34px] md:text-[42px] leading-tight font-extrabold text-us-dark mt-2">
                {membre.nom} {membre.cognom}
              </h1>
              <p className="text-[15px] font-semibold text-us-purple mt-2">{membre.rol}</p>

              <div className="mt-6 space-y-2 text-[15px] text-us-dark/85">
                <p>
                  <span className="font-semibold text-us-dark">Estudis:</span> {membre.estudis}
                </p>
                <p>
                  <span className="font-semibold text-us-dark">Universitat:</span> {membre.universitat}
                </p>
              </div>

              {membre.bio?.trim() ? (
                <div className="mt-6 flex flex-col gap-4">
                  {membre.bio.split("\n").map((paragraf, i) => (
                    <p key={i} className="text-[16px] leading-relaxed text-us-dark/80">
                      {paragraf}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="mt-6 text-[16px] leading-relaxed text-us-dark/80">
                  Estem acabant de preparar aquest perfil. Ben aviat hi trobaràs més informació personal i professional.
                </p>
              )}
              
              {/* Links de contacte: només es mostren si estan omplerts */}
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
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                      </svg>
                      Instagram
                    </Link>
                  )}

                  {membre.email && (
                    <Link
                      href={`mailto:${membre.email}`}
                      className="flex items-center gap-2 border-[1.5px] border-us-dark text-us-dark text-[13px] font-semibold px-5 py-2 rounded-full hover:bg-us-dark hover:text-us-cream transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
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