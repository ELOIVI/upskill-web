// Secció "Què fem": cards amb els serveis principals de l'associació
export default function QuesFem() {
  // Llista de serveis: afegir o modificar aquí per actualitzar les cards
  const serveis = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#63B5F1" strokeWidth="2" strokeLinecap="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      iconBg: "bg-[#63B5F1]/10 border border-[#63B5F1]/25",
      titol: "LinkedIn & Portfolio",
      descripcio: "Construeix una presència professional que obri portes abans de graduar-te.",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7A42E1" strokeWidth="2" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      iconBg: "bg-[#7A42E1]/10 border border-[#7A42E1]/25",
      titol: "Networking real",
      descripcio: "Connecta amb professionals i estudiants que comparteixen les teves ambicions.",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2" strokeLinecap="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
        </svg>
      ),
      iconBg: "bg-[#FFBD59]/20 border border-[#FFBD59]/60",
      titol: "Sortides laborals",
      descripcio: "Coneix el mercat laboral real i decideix el teu camí amb informació de primera mà.",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#63B5F1" strokeWidth="2" strokeLinecap="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      iconBg: "bg-[#63B5F1]/10 border border-[#63B5F1]/25",
      titol: "Parlar en públic",
      descripcio: "Perd la por a comunicar i aprèn a defensar les teves idees amb confiança.",
    },
  ];

  return (
    <section id="que-fem" className="px-8 py-16 border-t-[1.5px] border-[#2E1707] bg-[#FCF6EC]">

      {/* Capçalera de secció */}
      <p className="text-[10px] font-semibold tracking-widest uppercase opacity-40 text-[#2E1707] mb-2">
        Què fem
      </p>
      <h2 className="text-[32px] font-extrabold tracking-tight text-[#2E1707] mb-2">
        Tot el que necessites<br />per destacar
      </h2>
      <p className="text-[15px] text-[#2E1707] opacity-55 max-w-lg leading-relaxed mb-10">
        Formació pràctica per a estudiants de tots els graus de la URV que volen fer el salt al món professional amb avantatge.
      </p>

      {/* Grid de serveis */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {serveis.map((s) => (
          <div key={s.titol} className="border-[1.5px] border-[#2E1707]/20 rounded-xl p-5">

            {/* Icona */}
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${s.iconBg}`}>
              {s.icon}
            </div>

            <h3 className="text-[14px] font-bold text-[#2E1707] mb-1">{s.titol}</h3>
            <p className="text-[12px] text-[#2E1707] opacity-60 leading-relaxed">{s.descripcio}</p>

          </div>
        ))}
      </div>

    </section>
  );
}