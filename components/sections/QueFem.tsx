"use client";

import AnimacioEntrada from "@/components/ui/AnimacioEntrada";
import { Users, Monitor, Mic } from "lucide-react";

interface Service {
  key: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

interface QueFemProps {
  label: string;
  title: string;
  description: string;
  services: Service[];
}

// Icona LinkedIn: SVG inline perquè Lucide ha deprecat les icones de marques :(
const IconoLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// Secció "Què fem": cards amb els serveis principals de l'associació
export default function QueFem({ label, title, description, services }: QueFemProps) {

  return (
    <section id="que-fem" className="px-8 py-16 border-t-[1.5px] border-us-dark bg-us-cream scroll-mt-20">

      <AnimacioEntrada>
        <p className="text-[10px] font-semibold tracking-widest uppercase text-us-dark/60 mb-2">
          {label}
        </p>
        <h2 className="text-[38px] font-extrabold tracking-tight text-us-dark mb-2">
          {title}
        </h2>
        <p className="text-[16px] text-us-dark/70 max-w-lg leading-relaxed mb-10">
          {description}
        </p>
      </AnimacioEntrada>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <AnimacioEntrada key={s.key} retard={i * 100}>
            <div className="border-[1.5px] border-us-dark/20 rounded-xl p-5 h-full">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 text-us-blue ${s.iconBg}`}>
                {s.icon}
              </div>
              <h3 className="text-[14px] font-bold text-us-dark mb-1">
                {s.title}
              </h3>
              <p className="text-[12px] text-us-dark/70 leading-relaxed">
                {s.description}
              </p>
            </div>
          </AnimacioEntrada>
        ))}
      </div>

    </section>
  );
}