import Image from "next/image";
import Link from "next/link";
import { getMembre, membres } from "@/lib/equip";
import { notFound } from "next/navigation";


// Metadata dinàmica: cada perfil té el seu propi títol i descripció per a SEO i OG tags
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const membre = getMembre(slug);

  if (!membre) return {};

  return {
    title: `${membre.nom} ${membre.cognom}`,
    description: membre.bio || `${membre.nom} ${membre.cognom}, ${membre.rol} a UpSkill — Students' Career LAB`,
    openGraph: {
      title: `${membre.nom} ${membre.cognom} | UpSkill`,
      description: membre.bio || `${membre.nom} ${membre.cognom}, ${membre.rol} a UpSkill`,
      images: [{ url: membre.foto, width: 400, height: 400 }],
    },
  };
}


// Generem les rutes estàtiques per a cada membre
export function generateStaticParams() {
  return membres.map((m) => ({ slug: m.slug }));
}

export default async function PaginaMembre({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const membre = getMembre(slug);

  // Si el slug no existeix, mostrem 404
  if (!membre) notFound();

  return (
    <main className="min-h-screen bg-us-cream px-8 py-16 max-w-2xl mx-auto">

      {/* Botó de tornar */}
      <Link
        href="/#equip"
        className="inline-flex items-center gap-2 text-[13px] text-us-dark opacity-50 hover:opacity-100 transition-opacity mb-12"
      >
        ← Tornar a l'equip
      </Link>

      {/* Capçalera del perfil */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12">

        <div className="w-36 h-36 rounded-full overflow-hidden border-[1.5px] border-us-dark/10 shrink-0">
          <Image
            src={membre.foto}
            alt={`${membre.nom} ${membre.cognom}`}
            width={144}
            height={144}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="text-center sm:text-left">
          <p className="text-[11px] font-semibold tracking-widest uppercase opacity-40 text-us-dark mb-1">
            {membre.rol}
          </p>
          <h1 className="text-[40px] font-extrabold tracking-tight text-us-dark leading-tight mb-1">
            {membre.nom} {membre.cognom}
          </h1>
          <p className="text-[15px] text-us-dark opacity-55">
            {membre.estudis} · {membre.universitat}
          </p>
        </div>

      </div>

      {/* Bio */}
      <div className="border-t-[1.5px] border-us-dark/10 pt-10 mb-10">
        {membre.bio ? (
          <p className="text-[16px] text-us-dark leading-relaxed opacity-75">
            {membre.bio}
          </p>
        ) : (
          // TODO: substituir quan la bio estigui disponible
          <p className="text-[15px] text-us-dark opacity-30 italic">
            Biografia pròximament.
          </p>
        )}
      </div>

      {/* Links de contacte: només es mostren si estan omplerts */}
      <div className="flex flex-wrap gap-3">
        {membre.linkedin && (
          <Link
            href={membre.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-us-dark text-us-cream text-[13px] font-semibold px-5 py-2 rounded-full hover:opacity-80 transition-opacity"
          >
            LinkedIn
          </Link>
        )}
        {membre.instagram && (
          <Link
            href={membre.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="border-[1.5px] border-us-dark text-us-dark text-[13px] font-semibold px-5 py-2 rounded-full hover:bg-us-dark hover:text-us-cream transition-colors"
          >
            Instagram
          </Link>
        )}
        {membre.email && (
          <Link
            href={`mailto:${membre.email}`}
            className="border-[1.5px] border-us-dark text-us-dark text-[13px] font-semibold px-5 py-2 rounded-full hover:bg-us-dark hover:text-us-cream transition-colors"
          >
            Email
          </Link>
        )}
      </div>

    </main>
  );
}