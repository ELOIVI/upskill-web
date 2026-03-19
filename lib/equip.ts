// lib/equip.ts: font única de dades de l'equip
// Afegir nous membres aquí per actualitzar tant la secció principal com els perfils

export interface Membre {
  nom: string;
  cognom: string;
  rol: string;
  slug: string;
  foto: string;
  estudis: string;
  universitat: string;
  bio?: string; // TODO: omplir quan les noies passin la informació
  linkedin?: string;
  instagram?: string;
  email?: string;
}

export const membres: Membre[] = [
  {
    nom: "Grecia",
    cognom: "Martínez",
    rol: "Co-fundadora",
    slug: "grecia-martinez",
    foto: "/images/team/grecia_foto.webp",
    estudis: "Psicologia",
    universitat: "Universitat Rovira i Virgili",
  },
  {
    nom: "Lucia",
    cognom: "Guerrero",
    rol: "Co-fundadora",
    slug: "lucia-guerrero",
    foto: "/images/team/lucia_foto.webp",
    estudis: "Psicologia",
    universitat: "Universitat Rovira i Virgili",
  },
];

// Funció auxiliar per buscar un membre pel slug
export function getMembre(slug: string): Membre | undefined {
  return membres.find((m) => m.slug === slug);
}