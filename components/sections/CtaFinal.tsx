import Link from "next/link";

// Secció CTA final: crida a l'acció principal abans del footer
export default function CtaFinal() {
  return (
    <section id="uneix-te" className="px-8 py-20 bg-[#2E1707] text-center">

      <h2 className="text-[34px] font-extrabold tracking-tight text-[#FCF6EC] mb-3">
        Vols anar un pas per davant?
      </h2>
      <p className="text-[14px] text-[#FCF6EC] opacity-50 mb-8">
        Uneix-te a UpSkill i comença a construir el teu futur professional des d'ara.
      </p>

      {/* Botons CTA */}
      <div className="flex gap-3 justify-center flex-wrap">
        <Link
          href="https://lnkd.in/eGJrXYYZ"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FCF6EC] text-[#2E1707] text-[14px] font-bold px-8 py-3 rounded-full hover:opacity-85 transition-opacity"
        >
          Uneix-te ara
        </Link>
        <Link
          href="https://instagram.com/upskill.careerlab"
          target="_blank"
          rel="noopener noreferrer"
          className="border-[1.5px] border-[#FCF6EC]/30 text-[#FCF6EC] text-[13px] font-semibold px-6 py-3 rounded-full hover:border-[#FCF6EC]/70 transition-colors"
        >
          Instagram @upskill.careerlab
        </Link>
      </div>

    </section>
  );
}