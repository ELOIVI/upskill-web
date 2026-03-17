// Secció "Equip": membres actuals de l'associació
// Afegir nous membres a l'array quan l'equip creixi
export default function Equip() {
  const membres = [
    {
      nom: "Grecia Martínez",
      rol: "Co-fundadora",
      inicials: "GM",
      color: "bg-[#7A42E1]",
    },
    {
      nom: "Lucia Guerrero",
      rol: "Co-fundadora",
      inicials: "LG",
      color: "bg-[#63B5F1]",
    },
  ];

  return (
    <section id="equip" className="px-8 py-16 border-t-[1.5px] border-[#2E1707] bg-[#FCF6EC]">

      {/* Capçalera de secció */}
      <p className="text-[10px] font-semibold tracking-widest uppercase opacity-40 text-[#2E1707] mb-2">
        L'equip
      </p>
      <h2 className="text-[32px] font-extrabold tracking-tight text-[#2E1707] mb-2">
        Les persones del darrere
      </h2>
      <p className="text-[15px] text-[#2E1707] opacity-55 max-w-lg leading-relaxed mb-10">
        Estudiants com tu, amb ganes de fer les coses d'una altra manera.
      </p>

      {/* Grid de membres */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-lg">
        {membres.map((m) => (
          <div key={m.nom} className="border-[1.5px] border-[#2E1707]/15 rounded-xl p-6 text-center">

            {/* TODO: substituir inicials per foto quan estigui disponible */}
            <div className={`w-14 h-14 rounded-full ${m.color} flex items-center justify-center mx-auto mb-3`}>
              <span className="text-[#FCF6EC] text-[18px] font-extrabold">{m.inicials}</span>
            </div>

            <h4 className="text-[14px] font-bold text-[#2E1707] mb-1">{m.nom}</h4>
            <p className="text-[12px] text-[#2E1707] opacity-50">{m.rol}</p>

          </div>
        ))}
      </div>

    </section>
  );
}