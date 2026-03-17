import Link from "next/link";
import AnimacioEntrada from "@/components/ui/AnimacioEntrada";

// Secció "Esdeveniments": calendari de sessions i activitats
// Afegir nous esdeveniments a l'array per actualitzar la secció
export default function Esdeveniments() {
  const esdeveniments = [
    {
      data: "18 mar",
      dia: "Dimecres",
      hora: "17:00 – 19:00",
      titol: "Primera sessió UpSkill",
      descripcio: "LinkedIn, networking i com moure't al món professional sent estudiant.",
      lloc: "Aula 418 · Campus Catalunya · URV",
      inscripcio: "https://docs.google.com/forms/d/e/1FAIpQLSeQEjyt27Ao8fuZPbd48ZDIXhZ0QcInh4-h34YAFiXmSSYIxg/viewform",
      actiu: true,
    },
  ];

  return (
    <section id="esdeveniments" className="px-8 py-16 border-t-[1.5px] border-us-dark bg-us-cream scroll-mt-20">

      {/* Capçalera de secció */}
      <AnimacioEntrada>
        <p className="text-[10px] font-semibold tracking-widest uppercase opacity-40 text-us-dark mb-2">
          Esdeveniments
        </p>
        <h2 className="text-[38px] font-extrabold tracking-tight text-us-dark mb-3">
          Properes activitats
        </h2>
        <p className="text-[16px] text-us-dark opacity-55 max-w-lg leading-relaxed mb-10">
          Sessions, tallers i trobades per continuar creixent junts.
        </p>
      </AnimacioEntrada>

      {/* Llista d'esdeveniments */}
      <div className="flex flex-col gap-4 max-w-2xl">
        {esdeveniments.map((e, i) => (
          <AnimacioEntrada key={e.titol} retard={i * 100}>
          <div
            className={`border-[1.5px] rounded-xl p-6 flex flex-col sm:flex-row gap-6 ${
              e.actiu
                ? "border-us-purple bg-us-purple/5"
                : "border-us-dark/20"
            }`}
          >
            {/* Data: columna esquerra */}
            <div className="flex flex-col items-center justify-center min-w-16 text-center">
              <span className="text-[28px] font-extrabold text-us-dark leading-none">{e.data.split(" ")[0]}</span>
              <span className="text-[13px] font-semibold text-us-dark uppercase opacity-50">{e.data.split(" ")[1]}</span>
            </div>

            {/* Separador vertical */}
            <div className="hidden sm:block w-[1.5px] bg-us-dark/10 self-stretch" />

            {/* Contingut: columna dreta */}
            <div className="flex flex-col gap-1 flex-1">

              {/* Pill "Avui" si és l'event actiu */}
              {e.actiu && (
                <span className="inline-block self-start bg-us-purple text-us-cream text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider mb-1">
                  Pròximament
                </span>
              )}

              <h3 className="text-[17px] font-bold text-us-dark">{e.titol}</h3>
              <p className="text-[13px] text-us-dark opacity-60 leading-relaxed">{e.descripcio}</p>

              {/* Metadades: hora i lloc */}
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="text-[12px] text-us-dark opacity-50 font-medium">
                  {e.dia} · {e.hora}
                </span>
                <span className="text-[12px] text-us-dark opacity-50 font-medium">
                  {e.lloc}
                </span>
              </div>

              {/* Botó d'inscripció */}
              {e.inscripcio && (
                <Link
                  href={e.inscripcio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start mt-3 bg-us-dark text-us-cream text-[12px] font-semibold px-5 py-2 rounded-full hover:opacity-80 transition-opacity"
                >
                  Inscriu-te →
                </Link>
              )}

            </div>
          </div>
          </AnimacioEntrada>
        ))}
      </div>

    </section>
  );
}