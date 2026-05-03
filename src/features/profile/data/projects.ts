import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "Portfolio1",
    title: "Portfolio Personnel avec Django (Python)",
    period: { start: "2025" },
    link: "",
    skills: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    isExpanded: true,

    description: `Portfolio Personnel est une application web développée avec Django, permettant de présenter mes projets, compétences et expériences de manière professionnelle et interactive.  
- **Présentation des projets** : Découvrez une sélection de mes réalisations avec leurs descriptions, technologies utilisées et aperçus visuels ;  
- **Gestion de contenu dynamique** : Ajoutez et mettez à jour facilement les projets et informations via l’administration Django ;  
- **Interface moderne et responsive** : Profitez d’un design adapté à tous les écrans pour une expérience utilisateur fluide ;  
- **Navigation intuitive** : Accédez rapidement aux différentes sections (projets, compétences, contact) grâce à une structure claire ;  
- **Mise en valeur du profil** : Présente efficacement mon parcours, mes compétences techniques et mon savoir-faire.`,
    logo: "",
  },
  {
    id: "JavaApp2",
    title: "G-Colis",
    period: { start: "2024" },
    link: "https://github.com/Bienvenu733/G-Colis.git",
    skills: [
      "Java",
      "Java Swing",
      "OOP",
      "JDBC",
      "MySQL",
      "Gestion des états (workflow)",
    ],
    isExpanded: true,

    description: `G-Colis est une application desktop dédiée au suivi et à la gestion des colis, permettant d’assurer une meilleure organisation et traçabilité des livraisons.  
- **Suivi des colis** : Enregistrez et suivez l’état des colis en temps réel, de l’expédition à la livraison ;  
- **Gestion des expéditions** : Ajoutez les informations des colis (expéditeur, destinataire, contenu, statut) et gérez efficacement les envois ;  
- **Historique et traçabilité** : Consultez l’historique complet des mouvements pour chaque colis afin d’assurer un suivi fiable ;  
- **Gestion des statuts** : Mettez à jour les étapes de livraison (en cours, expédié, livré, en attente) facilement ;  
- **Interface intuitive** : Profitez d’une application simple et ergonomique pour une gestion rapide et efficace.`,
    logo: "",
  },
  {
    id: "JavaApp1",
    title: "BoulGest",
    period: { start: "2024" },
    link: "https://github.com/Bienvenu733/BoulGest.git",
    skills: [
      "Java",
      "Java Swing",
      "POO (Programmation Orientée Objet)",
      "Gestion de base de données",
      "UI Desktop",
    ],
    isExpanded: true,

    description: `BoulGest est une application Desktop dédiée à la gestion complète d'une boulangerie, permettant d'optimiser les opérations quotidiennes et d'améliorer la productivité.  
- **Gestion des produits** : Ajoutez, modifiez et suivez les pains, pâtisseries et autres produits avec leurs caractéristiques et prix ;
- **Suivi des ventes** : Enregistrez les transactions quotidiennes et consultez l’historique des ventes en temps réel ;
- **Gestion des stocks** : Surveillez les matières premières et recevez des alertes en cas de rupture de stock ;
- **Gestion des commandes** : Organisez et suivez les commandes clients pour une meilleure planification ;
- **Interface intuitive** : Profitez d’une application simple, rapide et facile à utiliser pour une gestion efficace.`,
    logo: "",
  },
  {
    id: "mets-locaux-bf",
    title: "BFoods",
    period: { start: "2023" },
    link: "https://mets-locaux-bf.onrender.com/",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
    isExpanded: true,

    description: `BFoods est une plateforme dédiée à la valorisation de la richesse culinaire du Burkina Faso à travers ses différentes régions.  
- **Exploration par régions** : Parcourez les différentes régions du Burkina Faso et découvrez leurs spécialités culinaires à travers une navigation simple et immersive ;
- **Découverte des mets locaux** : Chaque région présente une sélection de plats traditionnels avec de belles images mettant en valeur la culture et le terroir ;
- **Recettes détaillées** : Accédez aux ingrédients et aux étapes de préparation pour chaque plat afin de mieux comprendre et reproduire les recettes ;
- **Valorisation du patrimoine culinaire** : Le site met en lumière les traditions gastronomiques locales et contribue à leur préservation ;
- **Interface intuitive et responsive** : Profitez d’une expérience fluide sur tous les appareils avec un design moderne et accessible.`,
    logo: "",
  },
  /*{
    id: "zombie-invasion-game",
    title: "3D Zombie Invasion Game",
    period: { start: "02.2024" },
    link: "https://github.com/abdulrehmanwaseem/3d-Zombie-Invasion-Game",
    skills: [
      "React",
      "Three.js",
      "React Three Fiber",
      "React-Three/drei",
      "React-Three/Rapiar",
      "TypeScript",
    ],
    description: `A thrilling 3D zombie survival game built with React and Three.js.  
- Immersive post-apocalyptic city environment  
- Real-time physics and collisions  
- Custom camera controls and smooth movement  
- Optimized for web browsers  

**Demo:** [Play Online](https://zombie-invasion-three.vercel.app)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=3D+Zombie+Invasion+Game",
  },
  {
    id: "spotlight-react-native",
    title: "Spotlight React Native",
    period: { start: "03.2024" },
    link: "https://github.com/abdulrehmanwaseem/Spotlight-React-Native",
    skills: ["React Native", "Expo", "Clerk", "Convex", "NativeWind"],
    description: `A modern social media app built with React Native and Expo, designed for smooth performance and simplicity.  
- Seamless user experience with modern UI  
- Authentication and backend powered by Clerk + Convex  
- Beautiful animations using NativeWind  
- Cross-platform mobile app for both iOS and Android  

**Demo:** [Expo Build](https://expo.dev/accounts/abdulrehman.code1/projects/spot-light/builds/12bb6587-06d8-4e2d-ac69-def0ca923306)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Spotlight+React+Native",
  },

  {
    id: "electron-license-distribution-kit",
    title: "Electron License Distribution Template",
    period: { start: "09.2024" },
    link: "https://github.com/abdulrehmanwaseem/Electron-License-Distribution-Kit",
    skills: ["Electron", "React", "Vite", "Keygen.sh", "Sentry.io", "Bytenode"],
    description: `A secure Electron app licensing and distribution boilerplate.  
- License validation with Keygen.sh  
- Code protection using Bytenode  
- Crash monitoring with Sentry  
- Electron + Vite + React setup  

**Download:** [ZIP Template](https://github.com/abdulrehmanwaseem/Electron-License-Distribution-Kit/archive/refs/tags/Electron-License-Distribution-kit.zip)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Electron+License+Distribution+Template",
  },
  {
    id: "3d-pipe-screen-saver",
    title: "3D Pipe Screen Saver",
    period: { start: "05.2024" },
    link: "https://github.com/abdulrehmanwaseem/3D-Pipe-Screen-Saver",
    skills: ["Electron.js", "Three.js", "React", "TypeScript", "Vite"],
    description: `A nostalgic Windows 95-style screen saver recreated in 3D using Electron and Three.js.  
- Procedurally generated 3D pipes  
- Real-time rendering with Three.js  
- Built for Windows with Electron Vite  

**Download:** [Setup EXE](https://github.com/abdulrehmanwaseem/3D-Pipe-Screen-Saver/releases/download/3dScreenSaver/3D.Pipe.Screen.Saver.Setup.1.1.0.exe)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=3D+Pipe+Screen+Saver",
  },
  {
    id: "my-3d-character-game",
    title: "My 3D Character Game (CSGO)",
    period: { start: "02.2024" },
    link: "https://github.com/abdulrehmanwaseem/My-3D-Character-Game",
    skills: [
      "React",
      "R3F",
      "React-Three/drei",
      "React-Three/Rapiar",
      "TypeScript",
    ],
    description: `A 3D game featuring my own face model as the main character, set in a recreated CS:GO Dust map.  
- Custom third-person controller  
- Smooth camera and movement mechanics  
- Web-based with responsive UI  

**Demo:** [Play Online](https://my-3d-character-game.vercel.app)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=My+3D+Character+Game",
  },
  {
    id: "nestjs-microservice-auto-decorators",
    title: "NestJS Microservices Auto Decorators",
    period: { start: "07.2024" },
    link: "https://github.com/abdulrehmanwaseem/nestjs-microservice-auto-decorators",
    skills: ["NestJS", "Node.js", "TypeScript", "ClientProxy"],
    description: `An automation library for NestJS microservices.  
- Generates message patterns automatically  
- Reduces boilerplate in distributed systems  
- Enforces consistent communication across microservices  

**NPM:** [View Package](https://www.npmjs.com/package/nestjs-microservice-auto-decorators)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=NestJS+Microservices+Auto+Decorators",
  },

  {
    id: "electron-license-distribution-kit",
    title: "Electron License Distribution Template",
    period: { start: "09.2024" },
    link: "https://github.com/abdulrehmanwaseem/Electron-License-Distribution-Kit",
    skills: ["Electron", "React", "Vite", "Keygen.sh", "Sentry.io", "Bytenode"],
    description: `A secure Electron app licensing and distribution boilerplate.  
- License validation with Keygen.sh  
- Code protection using Bytenode  
- Crash monitoring with Sentry  
- Electron + Vite + React setup  

**Download:** [ZIP Template](https://github.com/abdulrehmanwaseem/Electron-License-Distribution-Kit/archive/refs/tags/Electron-License-Distribution-kit.zip)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Electron+License+Distribution+Template",
  },
  {
    id: "blogs-app-nestjs-graphql-nextjs",
    title: "Blogs App (NestJS + GraphQL + Next.js)",
    period: { start: "08.2024" },
    link: "https://github.com/abdulrehmanwaseem/NestJS-Prisma-GraphQL-Next.js",
    skills: ["NestJS", "Next.js", "GraphQL", "2FA", "RTK Query", "Codegen"],
    description: `A full-stack blogging platform built with NestJS, Prisma, GraphQL, and Next.js.  
- Secure JWT-based authentication  
- Two-factor authentication with QR-based setup  
- Strong modular architecture  
- Follows best practices for type-safe APIs`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Blogs+App+NestJS+GraphQL",
  },
  {
    id: "oil-refinery-platform",
    title: "Oil Refinery Platform (3D Demo)",
    period: { start: "04.2024" },
    link: "https://github.com/abdulrehmanwaseem/Oil-Refinery-Platform",
    skills: [
      "React",
      "Three.js",
      "React Three Ocean",
      "React-Three/postprocessing",
    ],
    description: `An interactive 3D visualization demo for an oil refinery platform.  
- Realistic lighting and water physics  
- Immersive industrial visualization  
- Showcases real-time 3D monitoring concepts  

**Demo:** [View Live](https://oil-refinery-platform.vercel.app)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Oil+Refinery+Platform",
  },
  {
    id: "react19-serverside-kit",
    title: "React19 Server-Side Kit",
    period: { start: "06.2024" },
    link: "https://github.com/abdulrehmanwaseem/React19-Serverside-Kit",
    skills: ["React 19", "TypeScript", "Express.js", "Tailwind CSS", "Vite"],
    description: `A minimal React 19 SSR starter using Vite and Express.  
- Uses React 19 streaming SSR (renderToPipeableStream)  
- Fast and modern setup for learning SSR  
- Fully typed with TypeScript`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=React19+Server-Side+Kit",
  },
  {
    id: "cloud-file-management-system",
    title: "Cloud File Management System",
    period: { start: "10.2024" },
    link: "https://github.com/abdulrehmanwaseem/Cloud-File-Management-System",
    skills: [
      "MERN",
      "RTK Query",
      "BullMQ",
      "Redis",
      "Nodemailer",
      "Cloudinary",
    ],
    description: `A complete file management system using the MERN stack.  
- Cloudinary integration for file storage  
- Redis caching and BullMQ background jobs  
- Secure user authentication and email notifications  

**Demo:** [View App](https://cloud-file-management-system.vercel.app)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Cloud+File+Management+System",
  },
  {
    id: "blogger-nextjs",
    title: "Blogger (Next.js App)",
    period: { start: "05.2024" },
    link: "https://github.com/abdulrehmanwaseem/NextJs-Blogs-App",
    skills: ["Next.js", "Cloudinary", "NextAuth", "React Hook Form", "Prisma"],
    description: `A full-featured blogging app with advanced authentication and content management.  
- Role-based access control (RBAC)  
- Two-factor authentication (2FA)  
- Cloudinary-based image upload  
- Prisma ORM with PostgreSQL backend`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Blogger+Next.js+App",
  },
  {
    id: "chrome-color-customizer",
    title: "Chrome Color Customizer",
    period: { start: "06.2024" },
    link: "https://github.com/abdulrehmanwaseem/Chrome-Webpage-Colorizer-Extension",
    skills: ["React", "Vite", "JavaScript", "Manifest.json", "TypeScript"],
    description: `A Chrome extension for personalizing webpage colors.  
- Adjust text, background, and element colors  
- Great for accessibility and dark mode  
- Simple UI with fast color updates  

**Download:** [Extension ZIP](https://github.com/abdulrehmanwaseem/Chrome-Webpage-Colorizer-Extension/releases/download/Webpage-Colorizer/webpage-colorizer-extention.zip)`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Chrome+Color+Customizer",
  },*/
];
