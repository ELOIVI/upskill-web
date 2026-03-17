import AnimacioEntrada from "@/components/ui/AnimacioEntrada";

// Secció "Qui som": presentació de l'associació sobre fons fosc
// Les preguntes provenen del copy real del LinkedIn d'UpSkill
export default function QuiSom() {
  // Preguntes retòriques: extretes del LinkedIn oficial d'UpSkill
  const preguntes = [
    "Com fer servir LinkedIn quan encara ets estudiant?",
    "Com trencar la barrera entre universitat i empresa abans de graduar-te?",
    "Com fer networking sense que sigui incòmode?",
    "Com trobar pràctiques que realment t'aportin?",
  ];

  return (
    <section id="qui-som" className="px-8 py-16 bg-[#2E1707]">

      {/* Capçalera de secció */}
      <AnimacioEntrada>
        <p className="text-[10px] font-semibold tracking-widest uppercase opacity-40 text-[#FCF6EC] mb-2">
          Qui som
        </p>
        <h2 className="text-[38px] font-extrabold tracking-tight text-[#FCF6EC] leading-tight mb-5 max-w-md">
          Vam néixer per omplir el buit que la universitat no cobreix
        </h2>
        <p className="text-[16px] text-[#FCF6EC] opacity-55 max-w-lg leading-relaxed mb-10">
          UpSkill és una associació d'estudiants de la URV creada per i per a estudiants amb iniciativa. Un espai per compartir experiències, recursos i oportunitats, i construir comunitat.
        </p>
      </AnimacioEntrada>

      {/* Preguntes retòriques: fil conductor de la marca */}
      <div className="flex flex-col gap-4 mb-12">
        {preguntes.map((p, i) => (
          <AnimacioEntrada key={p} retard={i * 100}>
            <div className="border-l-[3px] border-[#7A42E1] pl-5">
              <p className="text-[15px] text-[#FCF6EC] opacity-75 leading-relaxed font-medium">{p}</p>
            </div>
          </AnimacioEntrada>
        ))}
      </div>

      {/* Stats */}
      <AnimacioEntrada retard={400}>
        <div className="grid grid-cols-3 gap-4 max-w-xs">
          <div className="text-center">
            <p className="text-[36px] font-extrabold text-[#FFBD59] leading-none mb-1">URV</p>
            <p className="text-[11px] text-[#FCF6EC] opacity-45">Universitat</p>
          </div>
          <div className="text-center">
            <p className="text-[36px] font-extrabold text-[#63B5F1] leading-none mb-1">0€</p>
            <p className="text-[11px] text-[#FCF6EC] opacity-45">Per unir-te</p>
          </div>
          <div className="text-center">
            <p className="text-[36px] font-extrabold text-[#7A42E1] leading-none mb-1">Tots</p>
            <p className="text-[11px] text-[#FCF6EC] opacity-45">Els graus</p>
          </div>
        </div>
      </AnimacioEntrada>

    </section>
  );
}