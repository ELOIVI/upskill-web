"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Navbar: component de client per gestionar l'estat del menú mòbil
// Estructura: logo | links (escriptori) | botó CTA (escriptori) | hamburguesa (mòbil)
export default function Navbar() {
  const [menuObert, setMenuObert] = useState(false);

  // Links de navegació: centralitzats aquí per no duplicar entre escriptori i mòbil
  const links = [
    { href: "#qui-som", label: "Qui som" },
    { href: "#que-fem", label: "Què fem" },
    { href: "#equip", label: "Equip" },
    { href: "#esdeveniments", label: "Esdeveniments" },
  ];

  return (
    <header className="bg-us-cream border-b-[1.5px] border-us-dark">
      <nav className="flex items-center justify-between px-8 py-4">

        {/* TODO: substituir PNG per SVG quan estigui disponible */}
        <Link href="/" onClick={() => setMenuObert(false)}>
          <Image
            src="/images/brand/7_StudentsCareerLab_Rectangular_2.png"
            alt="UpSkill: Students' Career LAB"
            width={180}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Links de navegació: visibles només en escriptori */}
        <div className="hidden md:flex gap-6 text-[13px] font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-us-dark opacity-65 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA: visible només en escriptori */}
        <Link
          href="#uneix-te"
          className="hidden md:block bg-us-dark text-us-cream text-[13px] font-semibold px-5 py-2 rounded-full hover:opacity-80 transition-opacity"
        >
          Uneix-te
        </Link>

        {/* Botó hamburguesa: visible només en mòbil */}
        <button
          onClick={() => setMenuObert(!menuObert)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label={menuObert ? "Tancar menú" : "Obrir menú"}
        >
          {/* Les tres línies es transformen en X quan el menú és obert */}
          <span className={`block w-6 h-[1.5px] bg-us-dark transition-transform duration-300 origin-center ${menuObert ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-us-dark transition-opacity duration-300 ${menuObert ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-us-dark transition-transform duration-300 origin-center ${menuObert ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>

      </nav>

      {/* Menú mòbil: desplegable sota el Navbar */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuObert ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col px-8 pb-6 gap-5 border-t-[1.5px] border-us-dark pt-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuObert(false)}
              className="text-us-dark text-[16px] font-semibold opacity-75 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          {/* CTA dins del menú mòbil */}
          <Link
            href="#uneix-te"
            onClick={() => setMenuObert(false)}
            className="bg-us-dark text-us-cream text-[14px] font-semibold px-5 py-3 rounded-full text-center hover:opacity-80 transition-opacity mt-2"
          >
            Uneix-te
          </Link>
        </div>
      </div>

    </header>
  );
}