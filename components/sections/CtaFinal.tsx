import Link from "next/link";
import AnimacioEntrada from "@/components/ui/AnimacioEntrada";

// Secció CTA final: crida a l'acció principal abans del footer
export default function CtaFinal() {
  return (
    <section id="uneix-te" className="px-8 py-20 bg-us-dark text-center">

      <AnimacioEntrada>
        <h2 className="text-[40px] font-extrabold tracking-tight text-us-cream mb-4">
          Vols anar un pas per davant?
        </h2>
        <p className="text-[16px] text-us-cream opacity-50 mb-10">
          Uneix-te a UpSkill i comença a construir el teu futur professional des d'ara.
        </p>
      </AnimacioEntrada>

      {/* Botons CTA */}
      <AnimacioEntrada retard={150}>
      <div className="flex gap-3 justify-center flex-wrap">
        <Link
          href="https://lnkd.in/eGJrXYYZ"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-us-cream text-us-dark text-[14px] font-bold px-8 py-3 rounded-full hover:opacity-85 transition-opacity"
        >
          Uneix-te ara
        </Link>
        <Link
          href="https://instagram.com/upskill.careerlab"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1.5px] border-us-cream/30 text-us-cream text-[13px] font-semibold px-6 py-3 rounded-full hover:border-us-cream/70 transition-colors"
        >
          Instagram @upskill.careerlab
        </Link>
      </div>
      </AnimacioEntrada>

    </section>
  );
}