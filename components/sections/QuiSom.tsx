"use client";

import AnimacioEntrada from "@/components/ui/AnimacioEntrada";

interface QuiSomProps {
  label: string;
  title: string;
  description: string;
  questions: string[];
  statsUniversityValue: string;
  statsUniversityLabel: string;
  statsFreeValue: string;
  statsFreeLabelabel: string;
  statsGradesValue: string;
  statsGradesLabel: string;
}

// Secció "Qui som": presentació de l'associació sobre fons fosc
// Les preguntes provenen del copy real del LinkedIn d'UpSkill
export default function QuiSom({
  label,
  title,
  description,
  questions,
  statsUniversityValue,
  statsUniversityLabel,
  statsFreeValue,
  statsFreeLabelabel,
  statsGradesValue,
  statsGradesLabel,
}: QuiSomProps) {

  return (
    <section id="qui-som" className="px-8 py-16 bg-us-dark scroll-mt-20">

      {/* Capçalera de secció */}
      <AnimacioEntrada>
        <p className="text-[10px] font-semibold tracking-widest uppercase text-us-cream/60 mb-2">
          {label}
        </p>
        <h2 className="text-[38px] font-extrabold tracking-tight text-us-cream leading-tight mb-5 max-w-md">
          {title}
        </h2>
        <p className="text-[16px] text-us-cream/70 max-w-lg leading-relaxed mb-10">
          {description}
        </p>
      </AnimacioEntrada>

      {/* Preguntes retòriques: fil conductor de la marca */}
      <div className="flex flex-col gap-4 mb-12">
        {questions.map((p: string, i: number) => (
          <AnimacioEntrada key={p} retard={i * 100}>
            <div className="border-l-[3px] border-us-purple pl-5">
              <h3 className="text-[15px] text-us-cream/75 leading-relaxed font-medium">{p}</h3>
            </div>
          </AnimacioEntrada>
        ))}
      </div>

      {/* Stats */}
      <AnimacioEntrada retard={400}>
        <div className="grid grid-cols-3 gap-4 max-w-xs">
          <div className="text-center">
            <p className="text-[36px] font-extrabold text-us-blue leading-none mb-1">{statsUniversityValue}</p>
            <p className="text-[11px] text-us-cream/60">{statsUniversityLabel}</p>
          </div>
          <div className="text-center">
            <p className="text-[36px] font-extrabold text-[#9966ff] leading-none mb-1">{statsFreeValue}</p>
            <p className="text-[11px] text-us-cream/60">{statsFreeLabelabel}</p>
          </div>
          <div className="text-center">
            <p className="text-[36px] font-extrabold text-us-amber leading-none mb-1">{statsGradesValue}</p>
            <p className="text-[11px] text-us-cream/60">{statsGradesLabel}</p>
          </div>
        </div>
      </AnimacioEntrada>

    </section>
  );
}