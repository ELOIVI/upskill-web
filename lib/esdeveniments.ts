// lib/esdeveniments.ts: font única de dades dels esdeveniments
// Afegir nous esdeveniments aquí per actualitzar la secció

export interface Esdeveniment {
  data: { ca: string; es: string; en: string };
  dia: { ca: string; es: string; en: string };
  hora: string;
  titol: { ca: string; es: string; en: string };
  descripcio: { ca: string; es: string; en: string };
  lloc: { ca: string; es: string; en: string };
  inscripcio: string | null;
  actiu: boolean;
  passat: boolean;
}

export const esdeveniments: Esdeveniment[] = [
  {
    data: { ca: "18 mar", es: "18 mar", en: "18 Mar" },
    dia: { ca: "Dimecres", es: "Miércoles", en: "Wednesday" },
    hora: "17:00 – 19:00",
    titol: {
      ca: "Primera sessió UpSkill",
      es: "Primera sesión UpSkill",
      en: "First UpSkill session",
    },
    descripcio: {
      ca: "LinkedIn, networking i com moure't al món professional sent estudiant.",
      es: "LinkedIn, networking y cómo moverte en el mundo profesional siendo estudiante.",
      en: "LinkedIn, networking and how to navigate the professional world as a student.",
    },
    lloc: { ca: "Classe 418 · Campus Catalunya · URV", es: "Clase 418 · Campus Catalunya · URV", en: "Classroom 418 · Campus Catalunya · URV" },
    inscripcio: null,
    actiu: false,
    passat: true,
  },
  {
    data: { ca: "8 abr", es: "8 abr", en: "8 Apr" },
    dia: { ca: "Dimecres", es: "Miércoles", en: "Wednesday" },
    hora: "15:30 – 17:00",
    titol: {
      ca: "Marca personal i LinkedIn",
      es: "Marca personal y LinkedIn",
      en: "Personal branding and LinkedIn",
    },
    descripcio: {
      ca: "Com construir la teva marca personal com a estudiant, com i què publicar, i com posicionar-te. Vine amb el perfil de LinkedIn creat!",
      es: "Cómo construir tu marca personal como estudiante, qué publicar y cómo posicionarte. ¡Ven con el perfil de LinkedIn creado!",
      en: "How to build your personal brand as a student, what to post and how to position yourself. Come with your LinkedIn profile ready!",
    },
    lloc: { ca: "Classe 418 · Campus Catalunya · URV", es: "Clase 418 · Campus Catalunya · URV", en: "Classroom 418 · Campus Catalunya · URV" },
    inscripcio: "SESSIO_URL",
    actiu: true,
    passat: false,
  },
];