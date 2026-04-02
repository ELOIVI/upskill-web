import Image from "next/image";
import Link from "next/link";
import AnimacioEntrada from "@/components/ui/AnimacioEntrada";
import { membres } from "@/lib/equip";

// Secció "Equip": membres actuals de l'associació
// Les dades es gestionen a lib/equip.ts
export default function Equip() {
  return (
    <section id="equip" className="px-8 py-16 border-t-[1.5px] border-us-cream/20 bg-us-dark scroll-mt-20">

      {/* Capçalera de secció */}
      <AnimacioEntrada>
        <p className="text-[10px] font-semibold tracking-widest uppercase text-us-cream/60 mb-2">
          L'equip
        </p>
        <h2 className="text-[38px] font-extrabold tracking-tight text-us-cream mb-3">
          Les persones del darrere
        </h2>
        <p className="text-[16px] text-us-cream/70 max-w-lg leading-relaxed mb-10">
          Estudiants com tu, amb ganes de fer les coses d'una altra manera.
        </p>
      </AnimacioEntrada>

      {/* Grid de membres */}
      <div className="flex flex-wrap justify-center gap-6">
        {membres.map((m, i) => (
          <AnimacioEntrada key={m.slug} retard={i * 100}>

            {/* Card: clicable cap al perfil individual */}
            <Link href={`/equip/${m.slug}`}>
              <div className="border-[1.5px] border-us-cream/20 rounded-xl p-8 text-center w-56 bg-us-cream hover:border-us-purple transition-all duration-300 cursor-pointer">

                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-[1.5px] border-us-dark/10">
                  <Image
                    src={m.foto}
                    alt={`${m.nom} ${m.cognom}`}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="text-[15px] font-bold text-us-dark mb-1">{m.nom} {m.cognom}</h3>
                {/* Rol del membre */}
                <p className="text-[13px] text-us-dark/70 mb-3">{m.rol}</p>

                {/* Indicador visual que la card és clicable */}
                <span className="text-[11px] text-us-purple font-semibold">
                  Veure perfil →
                </span>

              </div>
            </Link>

          </AnimacioEntrada>
        ))}
      </div>

    </section>
  );
}