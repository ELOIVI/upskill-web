import Image from "next/image";
import AnimacioEntrada from "@/components/ui/AnimacioEntrada";

// Secció "Equip": membres actuals de l'associació
// Afegir nous membres a l'array quan l'equip creixi
export default function Equip() {
  const membres = [
    {
      nom: "Grecia Martínez",
      rol: "Co-fundadora",
      foto: "/images/team/grecia_foto.jpg",
    },
    {
      nom: "Lucia Guerrero",
      rol: "Co-fundadora",
      foto: "/images/team/lucia_foto.jpg",
    },
  ];

  return (
    <section id="equip" className="px-8 py-16 border-t-[1.5px] border-[#2E1707] bg-[#FCF6EC]">

      {/* Capçalera de secció */}
      <AnimacioEntrada>
        <p className="text-[10px] font-semibold tracking-widest uppercase opacity-40 text-[#2E1707] mb-2">
          L'equip
        </p>
        <h2 className="text-[38px] font-extrabold tracking-tight text-[#2E1707] mb-3">
          Les persones del darrere
        </h2>
        <p className="text-[16px] text-[#2E1707] opacity-55 max-w-lg leading-relaxed mb-10">
          Estudiants com tu, amb ganes de fer les coses d'una altra manera.
        </p>
      </AnimacioEntrada>

      {/* Grid de membres: centrat amb flex quan hi ha pocs membres */}
      <div className="flex flex-wrap justify-center gap-6">
        {membres.map((m, i) => (
          <AnimacioEntrada key={m.nom} retard={i * 100}>
          <div className="border-[1.5px] border-[#2E1707]/25 rounded-xl p-8 text-center w-56 bg-white/80">
              {/* Foto de perfil circular */}
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-[1.5px] border-[#2E1707]/10">
                <Image
                  src={m.foto}
                  alt={m.nom}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>

              <h4 className="text-[15px] font-bold text-[#2E1707] mb-1">{m.nom}</h4>
              <p className="text-[13px] text-[#2E1707] opacity-50">{m.rol}</p>

            </div>
          </AnimacioEntrada>
        ))}
      </div>

    </section>
  );
}