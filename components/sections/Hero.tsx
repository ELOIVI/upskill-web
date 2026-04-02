"use client";

import AnimacioEntrada from "@/components/ui/AnimacioEntrada";

interface HeroProps {
  pill: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

// Hero: primera secció visible, per sobre del fold
// Conté: barres decoratives de marca, títol principal, subtítol i botons CTA
export default function Hero({
  pill,
  title,
  titleHighlight,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section className="px-8 pt-5 pb-16 bg-us-cream">

      {/* Símbol animat del logo */}
      <AnimacioEntrada>
        <svg
          aria-hidden="true"
          width="80"
          height="140"
          viewBox="-1 65 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-0"
        >
          <style>{`
            @keyframes pujaDeBaix {
              from { transform: translateY(50px); opacity: 0; }
              to   { transform: translateY(0);   opacity: 1; }
            }
            @keyframes vinDEsquerra {
              from { transform: translateX(-50px); opacity: 0; }
              to   { transform: translateX(0);     opacity: 1; }
            }
            @keyframes vinDeDreta {
              from { transform: translateX(50px); opacity: 0; }
              to   { transform: translateX(0);    opacity: 1; }
            }
            @keyframes creixDeBaix {
              from { transform: scaleY(0); opacity: 0; }
              to   { transform: scaleY(1); opacity: 1; }
            }
          `}</style>

          {/* Barra blava: Proporció exacta de 3.85cm + 0.2cm gap + 0.8cm chevron */}
          <g style={{ animation: "pujaDeBaix 1s cubic-bezier(0.34,1.56,0.64,1) 0.1s both" }}>
            {/* Chevron de 12px d'alçada. Punts recalculats per mantenir el gruix fi amb la nova alçada */}
            <polygon 
              points="8,70 16,82 12,82 8,76 4,82 0,82" 
              fill="#63B5F1" 
            />
            {/* Barra blava allargada a 55px (equivalent als teus 3.85cm), amb el gap exacte de 3px */}
            <rect x="0" y="85" width="16" height="55" fill="#63B5F1" />
          </g>

          {/* Barra morada: Proporció exacta de 5.15cm (74px) */}
          <rect
            x="24" y="66" width="16" height="74"
            fill="#7A42E1"
            style={{
              transformOrigin: "32px 140px",
              animation: "creixDeBaix 1s cubic-bezier(0.34,1.56,0.64,1) 0.25s both",
            }}
          />

          {/* Barra ambre: Proporció exacta de 6.55cm (94px) */}
          <rect
            x="48" y="46" width="16" height="94"
            fill="#FFBD59"
            style={{ animation: "vinDeDreta 1s cubic-bezier(0.34,1.56,0.64,1) 0.4s both" }}
          />

        </svg>
      </AnimacioEntrada>

      {/* Pill de categoria */}
      <AnimacioEntrada retard={100}>
        <span className="inline-block bg-us-dark text-us-cream text-[11px] font-semibold px-4 py-1 rounded-full uppercase tracking-widest mb-5">
          {pill}
        </span>
      </AnimacioEntrada>

      {/* Títol principal */}
      <AnimacioEntrada retard={200}>
        <h1 className="text-[56px] md:text-[68px] font-black tracking-tight text-us-dark leading-none mb-5">
          {title}{" "}
          <span className="text-us-purple">{titleHighlight}</span>
        </h1>
      </AnimacioEntrada>

      {/* Subtítol */}
      <AnimacioEntrada retard={300}>
        <p className="text-[18px] text-us-dark/75 max-w-xl leading-relaxed mb-10">
          {subtitle}
        </p>
      </AnimacioEntrada>

      {/* Botons CTA */}
      <AnimacioEntrada retard={400}>
        <div className="flex gap-4 flex-wrap mb-8">
          <a
            href="https://lnkd.in/eGJrXYYZ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-us-dark text-us-cream text-[14px] font-bold px-8 py-4 rounded-full hover:opacity-80 transition-opacity"
          >
            {ctaPrimary}
          </a>
          <a
            href="#qui-som"
            className="border-[1.5px] border-us-dark text-us-dark text-[14px] font-semibold px-8 py-4 rounded-full hover:bg-us-dark hover:text-us-cream transition-colors cursor-pointer"
          >
            {ctaSecondary}
          </a>
        </div>
      </AnimacioEntrada>

    </section>
  );
}