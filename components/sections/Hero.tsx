import Image from "next/image";
import Link from "next/link";
import AnimacioEntrada from "@/components/ui/AnimacioEntrada";


// Hero: primera secció visible, per sobre del fold
// Conté: barres decoratives de marca, títol principal, subtítol i botons CTA
export default function Hero() {
  return (
    <section className="px-8 py-20 bg-[#FCF6EC]">

      {/* Barres decoratives — reprodueixen el símbol del logo */}
      <AnimacioEntrada>
        <div className="flex items-end gap-1.5 mb-5">
          <div className="w-3.5 h-7 bg-[#63B5F1] rounded-t" />
          <div className="w-3.5 h-11 bg-[#7A42E1] rounded-t" />
          <div className="w-3.5 h-16 bg-[#FFBD59] rounded-t" />
        </div>
      </AnimacioEntrada>

      {/* Pill de categoria */}
      <AnimacioEntrada retard={100}>
        <span className="inline-block bg-[#2E1707] text-[#FCF6EC] text-[11px] font-semibold px-4 py-1 rounded-full uppercase tracking-widest mb-5">
          Students' Career LAB · URV
        </span>
      </AnimacioEntrada>

      {/* Títol principal */}
      <AnimacioEntrada retard={200}>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#2E1707] max-w-3xl mb-5">
          Estudiants que volen{" "}
          <em className="not-italic text-[#7A42E1]">més</em>
        </h1>
      </AnimacioEntrada>

      {/* Subtítol */}
      <AnimacioEntrada retard={300}>
        <p className="text-[18px] text-[#5a3520] max-w-lg leading-relaxed mb-10">
          La comunitat que impulsa la teva carrera professional des de la universitat. Networking, LinkedIn, pràctiques i molt més.
        </p>
      </AnimacioEntrada>

      {/* Botons CTA */}
      <AnimacioEntrada retard={400}>
        <div className="flex gap-3 flex-wrap justify-center sm:justify-start">          <Link
            href="#uneix-te"
            className="bg-[#2E1707] text-[#FCF6EC] text-[14px] font-semibold px-8 py-3 rounded-full hover:opacity-80 transition-opacity"
          >
            Uneix-te a UpSkill
          </Link>
          <Link
            href="#qui-som"
            className="border-[1.5px] border-[#2E1707] text-[#2E1707] text-[14px] font-semibold px-8 py-3 rounded-full hover:bg-[#2E1707] hover:text-[#FCF6EC] transition-colors"
          >
            Saber-ne més
          </Link>
        </div>
      </AnimacioEntrada>

    </section>
  );
}