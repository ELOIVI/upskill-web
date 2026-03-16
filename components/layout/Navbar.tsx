import Link from "next/link";
import Image from "next/image";

// Navbar: component global, es renderitza des de app/layout.tsx
// Estructura: logo | links de navegació (ocults en mòbil) | botó CTA
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b-[1.5px] border-[#2E1707] bg-[#FCF6EC]">

      {/* Logo — versió horitzontal sobre fons clar */}
      <Link href="/">
      {/* TODO: substituir PNG per SVG quan estigui disponible */}
        <Image
          src="/images/brand/7_StudentsCareerLab_Rectangular_2.png"
          alt="UpSkill — Students' Career LAB"
          width={180}
          height={48}
          priority
          className="h-15 w-auto"
        />
      </Link>

      {/* Links de navegació — ocults en mòbil (md:flex) */}
      <div className="hidden md:flex gap-6 text-[13px] font-medium">
        <Link href="#qui-som" className="text-[#2E1707] opacity-65 hover:opacity-100 transition-opacity">Qui som</Link>
        <Link href="#que-fem" className="text-[#2E1707] opacity-65 hover:opacity-100 transition-opacity">Què fem</Link>
        <Link href="#equip" className="text-[#2E1707] opacity-65 hover:opacity-100 transition-opacity">Equip</Link>
        <Link href="#esdeveniments" className="text-[#2E1707] opacity-65 hover:opacity-100 transition-opacity">Esdeveniments</Link>
      </div>

      {/* CTA principal — apunta a la secció d'inscripció */}
      <Link
        href="#uneix-te"
        className="bg-[#2E1707] text-[#FCF6EC] text-[13px] font-semibold px-5 py-2 rounded-full hover:opacity-80 transition-opacity"
      >
        Uneix-te
      </Link>

    </nav>
  );
}