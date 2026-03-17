"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Navbar: component de client per gestionar l'estat del menú mòbil i la secció activa
// Estructura: logo | links (escriptori) | botó CTA (escriptori) | hamburguesa (mòbil)
export default function Navbar() {
  const [menuObert, setMenuObert] = useState(false);
  const [seccioActiva, setSeccioActiva] = useState("");

  const links = [
    { href: "#qui-som", label: "Qui som" },
    { href: "#que-fem", label: "Què fem" },
    { href: "#equip", label: "Equip" },
    { href: "#esdeveniments", label: "Esdeveniments" },
  ];

  // Detecta quina secció és visible i actualitza la URL sense recarregar
  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setSeccioActiva(`#${id}`);
            
          }
        });
      },
      {
        // La secció s'activa quan ocupa almenys el 30% de la pantalla
        threshold: 0.3,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Funció per fer scroll suau a una secció
  // Necessària perquè els links de hash no es recarreguen si ja hi ets
  const scrollASeccio = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuObert(false);
    }
  };

  return (
    <header className="bg-us-cream border-b-[1.5px] border-us-dark sticky top-0 z-50">
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
        <div className="hidden md:flex gap-6 text-[15px] font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollASeccio(e, link.href)}
              className={`transition-opacity cursor-pointer ${
                seccioActiva === link.href
                  ? "text-us-purple opacity-100 font-bold"
                  : "text-us-dark opacity-65 hover:opacity-100"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA: visible només en escriptori */}
        <a
          href="#uneix-te"
          onClick={(e) => scrollASeccio(e, "#uneix-te")}
          className="hidden md:block bg-us-dark text-us-cream text-[13px] font-semibold px-5 py-2 rounded-full hover:opacity-80 transition-opacity cursor-pointer"
        >
          Uneix-te
        </a>

        {/* Botó hamburguesa: visible només en mòbil */}
        <button
          onClick={() => setMenuObert(!menuObert)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label={menuObert ? "Tancar menú" : "Obrir menú"}
        >
          <span className={`block w-6 h-[1.5px] bg-us-dark transition-transform duration-300 origin-center ${menuObert ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-us-dark transition-opacity duration-300 ${menuObert ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-us-dark transition-transform duration-300 origin-center ${menuObert ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>

      </nav>

      {/* Menú mòbil: desplegable sota el Navbar */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuObert ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col px-8 pb-6 gap-5 border-t-[1.5px] border-us-dark pt-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollASeccio(e, link.href)}
              className={`text-[16px] font-semibold transition-opacity cursor-pointer ${
                seccioActiva === link.href
                  ? "text-us-purple opacity-100"
                  : "text-us-dark opacity-75 hover:opacity-100"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#uneix-te"
            onClick={(e) => scrollASeccio(e, "#uneix-te")}
            className="bg-us-dark text-us-cream text-[14px] font-semibold px-5 py-3 rounded-full text-center hover:opacity-80 transition-opacity mt-2 cursor-pointer"
          >
            Uneix-te
          </a>
        </div>
      </div>

    </header>
  );
}