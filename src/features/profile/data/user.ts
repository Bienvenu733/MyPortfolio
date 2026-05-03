import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Moïse Bienvenu",
  lastName: "OUEDRAOGO",
  displayName: "Moïse Bienvenu",
  username: "moisebienvenu",
  gender: "male",
  pronouns: "il/lui",
  bio: "Creating with code. Small details matter.",
  timeZone: "Africa/Ouagadougou",
  flipSentences: [
    "Développeur Fullstack Web",
    "Développeur d'applications mobiles",
    "Développeur d'applications de bureau (Desktop)",
    "Freelance",
  ],
  address: "Ouagadougou, Burkina Faso",
  phoneNumber: "KzIyNiA3NSAzMSA4OSA2Mg==", // E.164 format, base64 encoded (https://t.io.vn/
  secondPhoneNumber: "KzIyNiA2MCAwNyAxMCA3Ng==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  // base64-string-converter)
  email: "bW9pc2ViaWVudmVudTczM0BnbWFpbC5jb20=", // base64 encoded
  website: "https://moisebienvenu.me",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "Développeur Fullstack Web, Mobile et Desktop",
      company: "Dokal Technologies",
      website: "https://dokal.com",
    },
  ],
  about: `
- **Développeur Fullstack** avec **2+ ans d'expériences**. Reconnu pour mon architecture propre et mon souci du détail.
- Expertise en technologies **Next.js**, **React**, **React Native**, **TypeScript**, **Node.js**, **Express.js**, **PostgreSQL**, **MongoDB**, **Tailwind CSS**, **Firebase**, **Expo**, **Zustand**, **Java**, **Spring Boot**, **Python**. Je développe des applications web, mobiles, desktop.
- **Passionné** par l'exploration de nouvelles technologies et la concrétisation d'idées à travers des projets aboutis et prêts pour la production. Exploration actuelle de la **conception de systèmes** et ambition de se spécialiser dans l'**intelligence artificielle** ou la **cybersécurité**.

- **Mission**: Créer des logiciels offrant une expérience utilisateur exceptionnelle tout en restant à la pointe de la technologie.
`,
  avatar: "/images/me.PNG",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "/audio/moise.mp3",
  keywords: [
    "abdul rehman",
    "abdulrehmanwaseem",
    "abdul rehman waseem",
    "fullstack developer",
    "mern stack developer",
    "react developer",
    "nextjs developer",
    "react native developer",
    "three.js developer",
    "3d web developer",
    "electron developer",
    "desktop app developer",
    "mobile app developer",
    "nodejs developer",
    "nestjs developer",
  ],
  dateCreated: "2025-10-12", // YYYY-MM-DD
};
