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
  bio: string; // TODO: omplir quan les noies passin la informació
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
    foto: "/images/team/grecia_foto.jpg",
    estudis: "Psicologia",
    universitat: "Universitat Rovira i Virgili",
    bio: "", // TODO: omplir amb la bio de la Grecia
    linkedin: "",
    instagram: "",
    email: "",
  },
  {
    nom: "Lucia",
    cognom: "Guerrero",
    rol: "Co-fundadora",
    slug: "lucia-guerrero",
    foto: "/images/team/lucia_foto.jpg",
    estudis: "Psicologia",
    universitat: "Universitat Rovira i Virgili",
    bio: "", // TODO: omplir amb la bio de la Lucia
    linkedin: "",
    instagram: "",
    email: "",
  },
];

// Funció auxiliar per buscar un membre pel slug
export function getMembre(slug: string): Membre | undefined {
  return membres.find((m) => m.slug === slug);
}