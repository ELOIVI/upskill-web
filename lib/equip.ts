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
  {
    nom: "Eloi",
    cognom: "Viciana",
    rol: "CTO",
    slug: "eloi-viciana",
    foto: "/images/team/eloi_foto.webp", 
    estudis: "Enginyeria Informàtica",
    universitat: "Universitat Rovira i Virgili",
    bio: "Estudiant d'Enginyeria Informàtica a la URV, especialitzat en Intel·ligència Artificial i Ciberseguretat. La meva formació combina una base sòlida en programació, algorismes i arquitectura de computadors.A més de les meves àrees principals d'interès, també m'apassiona el desenvolupament web i d'aplicacions mòbils, així com la informàtica forense i la investigació de delictes informàtics.\n\nSoc delegat de classe i membre actiu de Code URV, l'associació d'estudiants d'informàtica de la universitat. Participo habitualment en hackathons nacionals i internacionals, experiències que m'han ensenyat a treballar sota pressió, prendre decisions tècniques ràpides i col·laborar amb equips diversos per construir solucions reals en poc temps.\n\nA UpSkill porto la part tècnica com a CTO. Crec que la tecnologia és una de les millors cartes que un estudiant pot tenir, i que aprendre a comunicar-la i mostrar-la bé és tan important com dominar-la.",
    linkedin: "https://www.linkedin.com/in/eloi-viciana-g%C3%B3mez-864539211/",
    instagram: "https://www.instagram.com/_eloivi_/", 
    email: "eloi.viciana@gmail.com",
    },
  ];

// Funció auxiliar per buscar un membre pel slug
export function getMembre(slug: string): Membre | undefined {
  return membres.find((m) => m.slug === slug);
}