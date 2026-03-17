import Link from "next/link";

// Banner — avís temporal per a la primera sessió
// Quan ja no sigui rellevant, eliminar la importació a app/layout.tsx
export default function Banner() {
  return (
    <div className="bg-us-amber px-8 py-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
      {/* Informació de l'event */}
      <p className="text-us-dark text-[13px] font-bold">
        Primera sessió — 18 de març, 17h
      </p>
      <p className="text-us-dark text-[13px] opacity-75">
        Aula 418 · Campus Catalunya · URV
      </p>

      {/* Enllaç d'inscripció, en mòbil alineat a l'esquerra, en escriptori a la dreta */}
      <Link
        href="https://lnkd.in/eGJrXYYZ"
        target="_blank"
        rel="noopener noreferrer"
        className="sm:ml-auto text-us-dark text-[13px] font-bold underline hover:opacity-70 transition-opacity"
      >
        Inscriu-te aquí →
      </Link>

    </div>
  );
}