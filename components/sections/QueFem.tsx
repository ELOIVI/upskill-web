// Secció "Què fem": cards amb els serveis principals de l'associació
import AnimacioEntrada from "@/components/ui/AnimacioEntrada";

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
      iconBg: "bg-us-blue/10 border border-us-blue/25",
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
      iconBg: "bg-us-purple/10 border border-us-purple/25",
      titol: "Networking real",
      descripcio: "Connecta amb professionals i estudiants que comparteixen les teves ambicions.",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2" strokeLinecap="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
        </svg>
      ),
      iconBg: "bg-us-amber/20 border border-us-amber/60",
      titol: "Sortides laborals",
      descripcio: "Coneix el mercat laboral real i decideix el teu camí amb informació de primera mà.",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#63B5F1" strokeWidth="2" strokeLinecap="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      iconBg: "bg-us-blue/10 border border-us-blue/25",
      titol: "Parlar en públic",
      descripcio: "Perd la por a comunicar i aprèn a defensar les teves idees amb confiança.",
    },
  ];

  return (
    <section id="que-fem" className="px-8 py-16 border-t-[1.5px] border-us-dark bg-us-cream">

    <AnimacioEntrada>
      <p className="text-[10px] font-semibold tracking-widest uppercase opacity-40 text-us-dark mb-2">
        Què fem
      </p>
      <h2 className="text-[38px] font-extrabold tracking-tight text-us-dark mb-2">
        Tot el que necessites<br />per destacar
      </h2>
      <p className="text-[16px] text-us-dark opacity-55 max-w-lg leading-relaxed mb-10">
        Formació pràctica per a estudiants de tots els graus de la URV que volen fer el salt al món professional amb avantatge.
      </p>
    </AnimacioEntrada>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {serveis.map((s, i) => (
        <AnimacioEntrada key={s.titol} retard={i * 100}>
          <div className="border-[1.5px] border-us-dark/20 rounded-xl p-5 h-full">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${s.iconBg}`}>
              {s.icon}
            </div>
            <h3 className="text-[14px] font-bold text-us-dark mb-1">{s.titol}</h3>
            <p className="text-[12px] text-us-dark opacity-60 leading-relaxed">{s.descripcio}</p>
          </div>
        </AnimacioEntrada>
      ))}
    </div>

  </section>
);
}