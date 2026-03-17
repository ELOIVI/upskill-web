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

              <p className="mt-6 text-[16px] leading-relaxed text-us-dark/80">
                {membre.bio?.trim()
                  ? membre.bio
                  : "Estem acabant de preparar aquest perfil. Ben aviat hi trobaràs més informació personal i professional."}
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}