import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "helpdesk-it",
    title: { fr: "HelpDesk IT", en: "HelpDesk IT" },
    period: { start: "11.2026" },
    link: "https://github.com/Bienvenu733/helpdesk-it",
    skills: [
      "Django REST",
      "Spring Boot",
      "Next.js",
      "PostgreSQL",
      "Oracle",
      "PL/SQL",
      "JWT",
      "Docker",
      "GitHub Actions",
    ],
    isExpanded: true,

    description: {
      fr: `HelpDesk IT est une plateforme de gestion des incidents informatiques reposant sur deux services indépendants qui communiquent par une API REST sécurisée.
- **Tickets et rôles** : Espaces dédiés pour l'utilisateur, le technicien et l'administrateur (Django REST, JWT, PostgreSQL), avec répartition automatique des tickets et notifications ;
- **Suivi des SLA** : Service Spring Boot adossé à Oracle qui calcule l'échéance selon la priorité, détecte les retards et tient une piste d'audit, avec un taux de respect calculé par une fonction PL/SQL ;
- **Tableau de bord** : Indicateurs, activité, répartition des pannes et équipe technique, avec mode sombre et interface adaptée au mobile (Next.js) ;
- **Qualité et CI/CD** : Plus de 140 tests, un test de bout en bout sur toute la pile et publication automatique des images Docker via GitHub Actions ;
- **Déploiement simple** : Toute la pile (5 conteneurs) démarre avec \`docker compose up\`.`,
      en: `HelpDesk IT is an IT incident management platform built on two independent services that communicate through a secured REST API.
- **Tickets and roles**: Dedicated spaces for users, technicians and administrators (Django REST, JWT, PostgreSQL), with automatic ticket assignment and notifications;
- **SLA tracking**: Spring Boot service backed by Oracle that computes the deadline by priority, detects overdue tickets and keeps an audit trail, with the compliance rate computed by a PL/SQL function;
- **Dashboard**: Indicators, activity, breakdown of incident types and technical team, with dark mode and a mobile-friendly interface (Next.js);
- **Quality and CI/CD**: Over 140 tests, an end-to-end test across the whole stack and automatic Docker image publishing through GitHub Actions;
- **Simple deployment**: The full stack (5 containers) starts with \`docker compose up\`.`,
    },
    logo: "",
  },
  {
    id: "padloop",
    title: { fr: "PadLoop", en: "PadLoop" },
    period: { start: "09.2026" },
    link: "https://github.com/Bienvenu733/PadLoop",
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "react-native-audio-api",
      "Zustand",
      "Reanimated",
      "Jest",
    ],
    isExpanded: true,

    description: {
      fr: `PadLoop est une application mobile de pads (nappes harmoniques par tonalité) et de loops rythmiques, pensée pour accompagner une performance musicale en direct.
- **Pads et loops** : Lecture de nappes longues par tonalité et de loops par style/tempo, avec crossfade et calage sur la mesure ;
- **Mixage en direct** : Volume et mute indépendants par bus, réglage fin du tempo, changement de tonalité ou de style sans couper le son ;
- **Sessions** : Regroupez les morceaux d'un événement, gérez favoris et duplication, et relancez un morceau d'un appui ;
- **Robustesse sur scène** : Lecture en arrière-plan, gestion des interruptions système (appel entrant, perte d'Audio Focus) et des erreurs audio, mode concentration (écran allumé, « Ne pas déranger ») ;
- **Confort d'usage** : Métronome autonome, thème clair/sombre, français/anglais et mode paysage pour tablette ;
- **Moteur audio testé** : Suite unitaire Jest sur le moteur audio, sans appareil.`,
      en: `PadLoop is a mobile app of pads (harmonic pads by key) and rhythmic loops, designed to support live musical performance.
- **Pads and loops**: Playback of long pads by key and loops by style/tempo, with crossfade and bar-aligned sync;
- **Live mixing**: Independent volume and mute per bus, fine tempo control, key or style changes without cutting the sound;
- **Sessions**: Group an event's songs, manage favorites and duplication, and relaunch a song with one tap;
- **Stage-ready robustness**: Background playback, handling of system interruptions (incoming call, Audio Focus loss) and audio errors, focus mode (screen kept on, Do Not Disturb);
- **Everyday comfort**: Standalone metronome, light/dark theme, French/English and landscape mode for tablets;
- **Tested audio engine**: Jest unit test suite for the audio engine, with no device needed.`,
    },
    logo: "",
  },
  {
    id: "nifu",
    title: { fr: "NIFU", en: "NIFU" },
    period: { start: "2026" },
    link: "https://nifutech.vercel.app/",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Cloudflare Turnstile",
    ],
    isExpanded: true,

    description: {
      fr: `NIFU est le site vitrine de mon agence de services informatiques basée à Ouagadougou, dont je suis le **promoteur**.
- **Présentation des services** : Catalogue détaillé des prestations de l'agence avec pages dédiées par service ;
- **Vitrine des réalisations** : Mise en avant des projets menés par l'agence pour ses clients ;
- **Formulaire de contact sécurisé** : Génération de leads avec protection anti-spam (Cloudflare Turnstile) et validation robuste (React Hook Form + Zod) ;
- **Design soigné et animé** : Interface moderne avec animations fluides via Framer Motion ;
- **Performance et SEO** : Architecture Next.js optimisée pour le référencement et la génération de leads.`,
      en: `NIFU is the showcase website for my IT services agency based in Ouagadougou, which I **founded and lead**.
- **Services showcase**: Detailed catalog of the agency's offerings with dedicated pages per service;
- **Portfolio highlight**: Showcases projects delivered by the agency for its clients;
- **Secure contact form**: Lead generation with anti-spam protection (Cloudflare Turnstile) and robust validation (React Hook Form + Zod);
- **Polished, animated design**: Modern interface with smooth animations via Framer Motion;
- **Performance and SEO**: Next.js architecture optimized for search visibility and lead generation.`,
    },
    logo: "",
  },
  {
    id: "mets-locaux-bf",
    title: { fr: "BFoods", en: "BFoods" },
    period: { start: "2025" },
    link: "https://bfoods.vercel.app/",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL (Neon)",
      "NextAuth",
      "Vercel Blob",
    ],
    isExpanded: true,

    description: {
      fr: `BFoods est une plateforme full-stack dédiée à la valorisation de la richesse culinaire du Burkina Faso à travers ses 18 régions.
- **Exploration par régions** : Parcourez les régions du Burkina Faso et découvrez leurs spécialités culinaires à travers une navigation simple et immersive ;
- **Recettes détaillées** : Accédez aux ingrédients et aux étapes de préparation pour chaque plat, gérées dynamiquement via une base de données PostgreSQL ;
- **Panneau d'administration** : Interface sécurisée (NextAuth) pour créer, modifier et publier des recettes, avec upload d'images via Vercel Blob ;
- **Favoris et galerie** : Sauvegardez vos plats préférés et parcourez une galerie visuelle des mets traditionnels ;
- **Notifications push** : Système de relance automatisé pour tenir les utilisateurs informés des nouvelles recettes ;
- **Interface moderne et responsive** : Design fluide sur tous les appareils avec Next.js et Tailwind CSS.`,
      en: `BFoods is a full-stack platform dedicated to showcasing the culinary richness of Burkina Faso across its 18 regions.
- **Explore by region**: Browse the regions of Burkina Faso and discover their culinary specialties through simple, immersive navigation;
- **Detailed recipes**: Access ingredients and preparation steps for each dish, managed dynamically through a PostgreSQL database;
- **Admin panel**: Secure interface (NextAuth) to create, edit, and publish recipes, with image uploads via Vercel Blob;
- **Favorites and gallery**: Save your favorite dishes and browse a visual gallery of traditional meals;
- **Push notifications**: Automated nudge system to keep users informed about new recipes;
- **Modern, responsive interface**: Smooth experience on every device with Next.js and Tailwind CSS.`,
    },
    logo: "",
  },
  {
    id: "JavaApp2",
    title: { fr: "G-Colis", en: "G-Colis" },
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

    description: {
      fr: `G-Colis est une application desktop dédiée au suivi et à la gestion des colis, permettant d'assurer une meilleure organisation et traçabilité des livraisons.
- **Suivi des colis** : Enregistrez et suivez l'état des colis en temps réel, de l'expédition à la livraison ;
- **Gestion des expéditions** : Ajoutez les informations des colis (expéditeur, destinataire, contenu, statut) et gérez efficacement les envois ;
- **Historique et traçabilité** : Consultez l'historique complet des mouvements pour chaque colis afin d'assurer un suivi fiable ;
- **Gestion des statuts** : Mettez à jour les étapes de livraison (en cours, expédié, livré, en attente) facilement ;
- **Interface intuitive** : Profitez d'une application simple et ergonomique pour une gestion rapide et efficace.`,
      en: `G-Colis is a desktop application dedicated to package tracking and management, ensuring better organization and traceability of deliveries.
- **Package tracking**: Record and follow package status in real time, from shipping to delivery;
- **Shipment management**: Add package details (sender, recipient, contents, status) and efficiently manage shipments;
- **History and traceability**: View the full history of movements for each package for reliable tracking;
- **Status management**: Easily update delivery stages (in progress, shipped, delivered, pending);
- **Intuitive interface**: Enjoy a simple, ergonomic app for fast, efficient management.`,
    },
    logo: "",
  },
  {
    id: "JavaApp1",
    title: { fr: "BoulGest", en: "BoulGest" },
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

    description: {
      fr: `BoulGest est une application Desktop dédiée à la gestion complète d'une boulangerie, permettant d'optimiser les opérations quotidiennes et d'améliorer la productivité.
- **Gestion des produits** : Ajoutez, modifiez et suivez les pains, pâtisseries et autres produits avec leurs caractéristiques et prix ;
- **Suivi des ventes** : Enregistrez les transactions quotidiennes et consultez l'historique des ventes en temps réel ;
- **Gestion des stocks** : Surveillez les matières premières et recevez des alertes en cas de rupture de stock ;
- **Gestion des commandes** : Organisez et suivez les commandes clients pour une meilleure planification ;
- **Interface intuitive** : Profitez d'une application simple, rapide et facile à utiliser pour une gestion efficace.`,
      en: `BoulGest is a desktop application dedicated to the complete management of a bakery, helping to optimize daily operations and improve productivity.
- **Product management**: Add, edit, and track breads, pastries, and other products with their characteristics and prices;
- **Sales tracking**: Record daily transactions and view sales history in real time;
- **Inventory management**: Monitor raw materials and receive alerts for stock shortages;
- **Order management**: Organize and track customer orders for better planning;
- **Intuitive interface**: Enjoy a simple, fast, and easy-to-use application for efficient management.`,
    },
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
