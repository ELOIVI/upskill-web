// lib/equip.ts: font única de dades de l'equip
// Afegir nous membres aquí per actualitzar tant la secció principal com els perfils

export interface Membre {
  nom: string;
  cognom: string;
  slug: string;
  foto: string;
  estudis: string;
  universitat: string;
  rol: {
    ca: string;
    es: string;
    en: string;
  };
  bio?: {
    ca: string;
    es: string;
    en: string;
  };
  linkedin?: string;
  instagram?: string;
  email?: string;
}

export const membres: Membre[] = [
  {
    nom: "Lucia",
    cognom: "Guerrero",
    rol: {
      ca: "Presidenta",
      es: "Presidenta",
      en: "President",
    },
    slug: "lucia-guerrero",
    foto: "/images/team/lucia_foto_fondo.webp",
    estudis: "Psicologia",
    universitat: "Universitat Rovira i Virgili",
    bio: {
      ca: "Estudiant de tercer de Psicologia amb menció en Recursos Humans i Organitzacions, realitzant pràctiques en Talent Acquisition en una empresa internacional del sector tecnològic.\n\nCompto amb experiència internacional en l'àmbit acadèmic, participant en programes formatius en entorns multiculturals, la qual cosa m'ha permès desenvolupar una visió global i adaptativa.\n\nCom a cofundadora i presidenta d'UpSkill, lidero l'organització i temporització de les sessions, la definició de continguts i la coordinació de l'equip, així com la gestió de la comunicació i la presència digital del projecte.",
      es: "Estudiante de tercero de Psicología con mención en Recursos Humanos y Organizaciones, realizando prácticas en Talent Acquisition en una empresa internacional del sector tecnológico.\n\nCuento con experiencia internacional en el ámbito académico, participando en programas formativos en entornos multiculturales, lo que me ha permitido desarrollar una visión global y adaptativa.\n\nComo cofundadora y presidenta de UpSkill, lidero la organización y temporización de las sesiones, la definición de contenidos y la coordinación del equipo, así como la gestión de la comunicación y la presencia digital del proyecto.",
      en: "Third-year Psychology student specialising in Human Resources and Organisations, currently interning in Talent Acquisition at an international tech company.\n\nI have international academic experience, having participated in training programmes in multicultural environments, which has allowed me to develop a global and adaptive perspective.\n\nAs co-founder and president of UpSkill, I lead the organisation and scheduling of sessions, content definition, team coordination, and the management of communication and the project's digital presence.",
    },
  },
  {
    nom: "Grecia",
    cognom: "Martínez",
    rol: {
      ca: "Ops Lead",
      es: "Ops Lead",
      en: "Ops Lead",
    },
    slug: "grecia-martinez",
    foto: "/images/team/grecia_foto_fondo.webp",
    estudis: "Psicologia",
    universitat: "Universitat Rovira i Virgili",
    bio: {
      ca: "Estudiant d'últim any de Psicologia, especialitzant-se en desenvolupament de talent i cultura organitzacional.\n\nActualment fa pràctiques en Talent Management en una empresa tecnològica internacional amb seu a Suïssa.\n\nGestiona el seu LinkedIn amb més de 4.000 seguidors, on comparteix recursos sobre desenvolupament professional i accés al mercat laboral per a talent jove, construint una xarxa en els sectors tecnològic i de Recursos Humans i accedint a oportunitats internacionals.\n\nA UpSkill co-lidera el projecte i s'encarrega d'operacions i comunitat: gestió, sessions, esdeveniments i posicionament.",
      es: "Estudiante de último año de Psicología, especializándose en desarrollo de talento y cultura organizacional.\n\nActualmente realiza prácticas en Talent Management en una empresa tecnológica internacional con sede en Suiza.\n\nGestiona su LinkedIn con más de 4.000 seguidores, donde comparte recursos sobre desarrollo profesional y acceso al mercado laboral para talento joven, construyendo una red en los sectores tecnológico y de Recursos Humanos y accediendo a oportunidades internacionales.\n\nEn UpSkill colidera el proyecto y se encarga de operaciones y comunidad: gestión, sesiones, eventos y posicionamiento.",
      en: "Final year Psychology student, specializing in talent development and organizational culture.\n\nCurrently interning in Talent Management at an international tech company based in Switzerland.\n\nManages her LinkedIn with over 4,000 followers, where she shares resources on professional development and access to the job market for young talent, building a network in the tech and HR sectors and accessing international opportunities.\n\nAt UpSkill, she co-leads the project and is responsible for operations and community: management, sessions, events and positioning.",
    },
    linkedin: "https://www.linkedin.com/in/grecia-mart%C3%ADnez-7373b323a/",
  },
  {
    nom: "Eloi",
    cognom: "Viciana",
    rol: {
      ca: "Tech Lead",
      es: "Tech Lead",
      en: "Tech Lead",
    },
    slug: "eloi-viciana",
    foto: "/images/team/eloi_foto_fondo.webp",
    estudis: "Enginyeria Informàtica",
    universitat: "Universitat Rovira i Virgili",
    bio: {
      ca: "Estudiant d'Enginyeria Informàtica a la URV, especialitzat en Intel·ligència Artificial i Ciberseguretat. La meva formació combina una base sòlida en programació, algorismes i arquitectura de computadors.\n\nA més de les meves àrees principals d'interès, també m'apassiona el desenvolupament web i d'aplicacions mòbils, així com la informàtica forense i la investigació de delictes informàtics.\n\nSoc delegat de classe i membre actiu de Code URV, l'associació d'estudiants d'informàtica de la universitat. Participo habitualment en hackathons nacionals i internacionals, experiències que m'han ensenyat a treballar sota pressió, prendre decisions tècniques ràpides i col·laborar amb equips diversos per construir solucions reals en poc temps.\n\nA UpSkill porto la part tècnica com a CTO. Crec que la tecnologia és una de les millors cartes que un estudiant pot tenir, i que aprendre a comunicar-la i mostrar-la bé és tan important com dominar-la.",
      es: "Estudiante de Ingeniería Informática en la URV, especializado en Inteligencia Artificial y Ciberseguridad. Mi formación combina una base sólida en programación, algoritmos y arquitectura de computadores.\n\nAdemás de mis áreas principales de interés, también me apasiona el desarrollo web y de aplicaciones móviles, así como la informática forense y la investigación de delitos informáticos.\n\nSoy delegado de clase y miembro activo de Code URV, la asociación de estudiantes de informática de la universidad. Participo habitualmente en hackathons nacionales e internacionales, experiencias que me han enseñado a trabajar bajo presión, tomar decisiones técnicas rápidas y colaborar con equipos diversos para construir soluciones reales en poco tiempo.\n\nEn UpSkill llevo la parte técnica como CTO. Creo que la tecnología es una de las mejores cartas que un estudiante puede tener, y que aprender a comunicarla y mostrarla bien es tan importante como dominarla.",
      en: "Computer Engineering student at URV, specialized in Artificial Intelligence and Cybersecurity. My background combines a solid foundation in programming, algorithms and computer architecture.\n\nBeyond my main areas of interest, I'm also passionate about web and mobile app development, as well as digital forensics and cybercrime investigation.\n\nI'm class delegate and active member of Code URV, the university's computer science student association. I regularly participate in national and international hackathons, experiences that have taught me to work under pressure, make quick technical decisions, and collaborate with diverse teams to build real solutions in short timeframes.\n\nAt UpSkill, I handle the technical part as CTO. I believe technology is one of the best assets a student can have, and that learning to communicate it and showcase it well is as important as mastering it.",
    },
    linkedin: "https://www.linkedin.com/in/eloi-viciana-g%C3%B3mez-864539211/",
    instagram: "https://www.instagram.com/_eloivi_/",
    email: "eloi.viciana@gmail.com",
  },
];

// Funció auxiliar per buscar un membre pel slug
export function getMembre(slug: string): Membre | undefined {
  return membres.find((m) => m.slug === slug);
}