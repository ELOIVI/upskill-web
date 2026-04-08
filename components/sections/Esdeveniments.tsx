"use client";

import Link from "next/link";
import AnimacioEntrada from "@/components/ui/AnimacioEntrada";

interface EventimentiProps {
  label: string;
  title: string;
  description: string;
  upcoming: string;
  past: string;
  register: string;
  closed: string;
  locale: string;
}

// Secció "Esdeveniments": calendari de sessions i activitats
// Afegir nous esdevenimentsarr a l'array per actualitzar la secció
export default function Esdeveniments({ label, title, description, upcoming, past, register, closed, locale  }: EventimentiProps) {
  const esdeveniments = [
    {
      data: "18 mar",
      dia: "Dimecres",
      hora: "17:00 – 19:00",
      titol: "Primera sessió UpSkill",
      descripcio: "LinkedIn, networking i com moure't al món professional sent estudiant.",
      lloc: "Aula 418 · Campus Catalunya · URV",
      inscripcio: "https://docs.google.com/forms/d/e/1FAIpQLSeQEjyt27Ao8fuZPbd48ZDIXhZ0QcInh4-h34YAFiXmSSYIxg/viewform",
      actiu: false,
      passat: true,
    },
    {
      data: "8 abr",
      dia: "Dimecres",
      hora: "15:30 – 17:00",
      titol: "Marca personal i LinkedIn",
      descripcio: "Com construir la teva marca personal com a estudiant, com i què publicar, i com posicionar-te. Vine amb el perfil de LinkedIn creat!",
      lloc: "Aula 418 · Campus Catalunya · URV",
      inscripcio: `/${locale}/sessio`,
      actiu: true,
      passat: false,
    },
  ];

  return (
    <section id="esdeveniments" className="px-8 py-16 border-t-[1.5px] border-us-dark bg-us-cream scroll-mt-20">

      {/* Capçalera de secció */}
      <AnimacioEntrada>
        <p className="text-[10px] font-semibold tracking-widest uppercase text-us-dark/80 mb-2">
          {label}
        </p>
        <h2 className="text-[38px] font-extrabold tracking-tight text-us-dark mb-3">
          {title}
        </h2>
        <p className="text-[16px] text-us-dark/80 max-w-lg leading-relaxed mb-10">
          {description}
        </p>
      </AnimacioEntrada>

      {/* Llista d'esdeveniments */}
      <div className="flex flex-row gap-4 overflow-x-auto pb-2">
        {esdeveniments.map((e, i) => (
          <AnimacioEntrada key={e.titol} retard={i * 100}>
            <div
              className={`border-[1.5px] rounded-xl p-6 flex flex-col sm:flex-row gap-6 w-[600px] shrink-0 ${
                e.actiu
                  ? "border-us-purple bg-us-purple/5"
                  : e.passat
                  ? "border-us-dark/15 opacity-70"
                  : "border-us-dark/20"
              }`}
            >
              {/* Data: columna esquerra */}
              <div className="flex flex-col items-center justify-center min-w-16 text-center">
                <span className="text-[28px] font-extrabold text-us-dark leading-none">{e.data.split(" ")[0]}</span>
                <span className="text-[13px] font-semibold text-us-dark uppercase">{e.data.split(" ")[1]}</span>
                <span className="text-[12px] text-us-dark font-medium">{e.data.split(" ")[2]}</span>
              </div>

              {/* Separador vertical */}
              <div className="hidden sm:block w-[1.5px] bg-us-dark/10 self-stretch" />

              {/* Contingut: columna dreta */}
              <div className="flex flex-col gap-1 flex-1">
                {e.actiu && (
                  <span className="inline-block self-start bg-us-purple text-us-cream text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider mb-1">
                    {upcoming}
                  </span>
                )}
                {e.passat && (
                  <span className="inline-block self-start bg-us-amber/30 text-us-dark text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider mb-1">
                    {past}
                  </span>
                )}
                <h3 className="text-[17px] font-bold text-us-dark">{e.titol}</h3>
                <p className="text-[13px] text-us-dark opacity-60 leading-relaxed">{e.descripcio}</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="text-[12px] text-us-dark font-medium">{e.dia} · {e.hora}</span>
                  <span className="text-[12px] text-us-dark font-medium">{e.lloc}</span>
                </div>
                {e.inscripcio && !e.passat && (
                  <Link
                    href={e.inscripcio}
                    
                    className="self-start mt-3 bg-us-dark text-us-cream text-[12px] font-semibold px-5 py-2 rounded-full hover:opacity-80 transition-opacity"
                  >
                    {register} →
                  </Link>
                )}
                {e.passat && (
                  <span className="self-start mt-3 bg-us-dark/20 text-us-dark text-[12px] font-semibold px-5 py-2 rounded-full cursor-not-allowed">
                    {closed}
                  </span>
                )}
              </div>
            </div>
          </AnimacioEntrada>
        ))}
      </div>

    </section>
  );
}
