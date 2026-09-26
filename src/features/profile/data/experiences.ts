import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "forrof",
    companyName: "Moïse Bienvenu Wendpanga OUEDRAOGO",
    companyLogo: "/images/experience/forrof.svg",
    positions: [
      {
        id: "Dokal-fullstack-dev",
        title: {
          fr: "Développeur Fullstack, UI/UX Designer",
          en: "Fullstack Developer, UI/UX Designer",
        },
        employmentPeriod: {
          start: "03.2026",
        },
        employmentType: { fr: "Temps plein", en: "Full-time" },
        icon: "code",
        description: {
          fr: `- **Conception et développement** d'une application mobile de gestion avec Expo (React Native), couvrant l'authentification, la navigation, la gestion de données métier et l'expérience utilisateur ;
- **Design UI/UX complet** : création de maquettes haute fidélité, prototypage interactif et mise en place d'un design system cohérent pour garantir une adoption fluide par les équipes terrain ;
- **Intégration d'APIs et synchronisation** : connexion aux backends existants via des endpoints REST, gestion du cache local et optimisation des performances en conditions réseau dégradées ;
- **Optimisation mobile** : adaptation responsive multi-écrans, gestion d'états complexes et réduction des temps de chargement pour une navigation fluide et intuitive ;
- **Qualité et déploiement** : itérations agiles, revues de code, tests sur devices physiques et mise en production via les canaux internes (TestFlight / Google Play Internal Testing) ;
- **Suivi et amélioration continue** : collecte de retours utilisateurs, analyse des parcours critiques et itérations rapides pour augmenter l'efficacité opérationnelle et la rétention.`,
          en: `- **Design and development** of a management mobile app with Expo (React Native), covering authentication, navigation, business data management, and user experience;
- **Full UI/UX design**: creating high-fidelity mockups, interactive prototyping, and building a coherent design system to ensure smooth adoption by field teams;
- **API integration and syncing**: connecting to existing backends via REST endpoints, managing local caching, and optimizing performance under degraded network conditions;
- **Mobile optimization**: multi-screen responsive adaptation, complex state management, and reduced load times for smooth, intuitive navigation;
- **Quality and deployment**: agile iterations, code reviews, testing on physical devices, and production releases through internal channels (TestFlight / Google Play Internal Testing);
- **Monitoring and continuous improvement**: collecting user feedback, analyzing critical journeys, and iterating quickly to increase operational efficiency and retention.`,
        },
        skills: [
          "React Native",
          "Expo",
          "TypeScript",
          "JavaScript",
          "UI/UX Design",
          "Figma",
          "Prototypage interactif",
          "Design System",
          "RESTful APIs",
          "State Management (Redux/Zustand)",
          "React Query",
          "Mobile App Deployment",
          "Git & GitHub",
          "Postman",
          "Remote Work",
          "Problem-solving",
        ],
        isExpanded: true,
      },
      {
        id: "dokal-stagiaire-dev",
        title: {
          fr: "Développeur Stagiaire à Dokal Burkina",
          en: "Developer Intern at Dokal Burkina",
        },
        employmentPeriod: {
          start: "07.2025",
          end: "12.2025",
        },
        employmentType: { fr: "Temps plein", en: "Full-time" },
        icon: "code",
        description: {
          fr: `- **Développement et déploiement** de bot WhatsApp automatisé couvrant le cycle complet de commande (catalogue → panier → paiement → suivi) ;
- **Conception full-stack** d'interfaces et backends (Node.js/Express, Next.js, PostgreSQL/MongoDB) intégrés à l'API WhatsApp Business Cloud ;
- **Modélisation de flux conversationnels** UX-first : menus interactifs, boutons, listes et gestion proactive des erreurs ou abandons ;
- **Intégration d'écosystèmes métier** via APIs REST et webhooks : synchronisation des stocks, passerelles de paiement et notifications temps réel ;
- **Industrialisation du code** avec pipelines CI/CD, tests automatisés et monitoring pour garantir fiabilité, scalabilité et maintenabilité ;
- **Sécurité et conformité** : gestion des consentements, validation des templates Meta, chiffrement des données sensibles et respect du RGPD ;
- **Suivi analytique** : implémentation de dashboards pour mesurer taux de conversion, temps de réponse et identifier les points d'optimisation .`,
          en: `- **Development and deployment** of an automated WhatsApp bot covering the full order cycle (catalog → cart → payment → tracking);
- **Full-stack design** of interfaces and backends (Node.js/Express, Next.js, PostgreSQL/MongoDB) integrated with the WhatsApp Business Cloud API;
- **UX-first conversational flow modeling**: interactive menus, buttons, lists, and proactive handling of errors or drop-offs;
- **Business ecosystem integration** via REST APIs and webhooks: inventory syncing, payment gateways, and real-time notifications;
- **Code industrialization** with CI/CD pipelines, automated tests, and monitoring to ensure reliability, scalability, and maintainability;
- **Security and compliance**: consent management, Meta template validation, encryption of sensitive data, and GDPR compliance;
- **Analytics tracking**: implementing dashboards to measure conversion rate, response time, and identify optimization opportunities.`,
        },
        skills: [
          "React.js",
          "Next.js",
          "NestJS",
          "TypeScript",
          "Express.js",
          "JavaScript",
          "PostgreSQL",
          "Redis",
          "RESTful APIs",
          "WhatsApp Business API",
          "Postman",
          "Remote Work",
          "Problem-solving",
        ],
        isExpanded: true,
      },
      {
        id: "CDEJ-BF0469",
        title: {
          fr: "Formateur en piano, Encadreur d'enfants au CDEJ-BF0469",
          en: "Piano Instructor, Children's Supervisor at CDEJ-BF0469",
        },
        employmentPeriod: {
          start: "04.2024",
          end: "06.2025",
        },
        employmentType: { fr: "Temps partiel", en: "Part-time" },
        icon: "education",
        description: {
          fr: `
  - Enseignement  des bases musicales ;
  - Adaptation des méthodes pédagogiques ;
  - Evaluation des progrès ;
  - Inspiration et motivation ;
  - Création d'un environnement d'apprentissage positif ;
  - Assurer la sécurité des enfants ;
  - Planifier et organiser des activités adaptées ;
  - Superviser et encadrer les enfants ;
  - Encourager le développement social et émotionnel.`,
          en: `
  - Teaching musical fundamentals;
  - Adapting teaching methods;
  - Assessing progress;
  - Inspiring and motivating;
  - Creating a positive learning environment;
  - Ensuring children's safety;
  - Planning and organizing tailored activities;
  - Supervising and mentoring children;
  - Encouraging social and emotional development.`,
        },
        skills: [
          "Pédagogie",
          "Adaptabilité",
          "Communication",
          "Patience",
          "Organisation",
          "Encadrement",
        ],
      },
      {
        id: "CDEJ-BF0648",
        title: {
          fr: "Formateur en piano, Encadreur d'enfants au CDEJ-BF0648",
          en: "Piano Instructor, Children's Supervisor at CDEJ-BF0648",
        },
        employmentPeriod: {
          start: "03.2022",
          end: "10.2023",
        },
        employmentType: { fr: "Temps partiel", en: "Part-time" },
        icon: "education",
        description: {
          fr: `
  - Enseignement  des bases musicales ;
  - Adaptation des méthodes pédagogiques ;
  - Evaluation des progrès ;
  - Inspiration et motivation ;
  - Création d'un environnement d'apprentissage positif ;
  - Assurer la sécurité des enfants ;
  - Planifier et organiser des activités adaptées ;
  - Superviser et encadrer les enfants ;
  - Encourager le développement social et émotionnel.`,
          en: `
  - Teaching musical fundamentals;
  - Adapting teaching methods;
  - Assessing progress;
  - Inspiring and motivating;
  - Creating a positive learning environment;
  - Ensuring children's safety;
  - Planning and organizing tailored activities;
  - Supervising and mentoring children;
  - Encouraging social and emotional development.`,
        },
        skills: [
          "Pédagogie",
          "Adaptabilité",
          "Communication",
          "Patience",
          "Organisation",
          "Encadrement",
        ],
      },
    ],
    isCurrentEmployer: true,
    theme: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: { fr: "Développeur Full-stack", en: "Full-stack Developer" },
        employmentPeriod: {
          start: "",
        },
        employmentType: { fr: "Temps Partiel", en: "Part-time" },
        description: {
          fr: "Conception et développement de solutions web, mobiles et d'automatisation pour des clients variés. Architecture full-stack (Next.js, Node.js/NestJS, PostgreSQL/MongoDB), création d'interfaces UI/UX (Figma) et déploiement d'applications Expo. Intégration d'écosystèmes métier via APIs REST, webhooks et WhatsApp Business API. Gestion complète du cycle projet : cadrage, développement, tests, déploiement et maintenance. Livraison de produits performants, sécurisés et orientés résultats.",
          en: "Design and development of web, mobile, and automation solutions for a variety of clients. Full-stack architecture (Next.js, Node.js/NestJS, PostgreSQL/MongoDB), UI/UX interface creation (Figma), and Expo app deployment. Integration of business ecosystems via REST APIs, webhooks, and the WhatsApp Business API. Full project lifecycle management: scoping, development, testing, deployment, and maintenance. Delivery of performant, secure, results-driven products.",
        },
        icon: "code",
        skills: [
          "React.js",
          "Next.js",
          "Node.js",
          "Express.js",
          "NestJS",
          "TypeScript",
          "React Native",
          "Expo",
          "UI/UX Design",
          "Figma",
          "Webflow",
          "RESTful APIs",
          "WhatsApp Business API",
          "PostgreSQL",
          "MongoDB",
          "Git & GitHub",
          "CI/CD",
          "Problem-solving",
        ],
        isExpanded: true,
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: { fr: "Designer UI/UX", en: "UI/UX Designer" },
        employmentPeriod: {
          start: "",
        },
        employmentType: { fr: "Temps Partiel", en: "Part-time" },
        description: {
          fr: ` - Conception d'interfaces utilisateur intuitives et esthétiques pour des applications web et mobiles.
- Création de maquettes haute fidélité et de prototypes interactifs avec Figma pour valider les concepts de design.
- Développement de design systems cohérents pour assurer une expérience utilisateur fluide et une adoption rapide par les équipes de développement.
- Collaboration étroite avec les clients pour comprendre leurs besoins métier et traduire ces exigences en solutions de design efficaces.
- Application des meilleures pratiques de design UX pour optimiser la navigation, l'accessibilité et l'engagement des utilisateurs.`,
          en: ` - Designing intuitive, aesthetic user interfaces for web and mobile applications.
- Creating high-fidelity mockups and interactive prototypes with Figma to validate design concepts.
- Building coherent design systems to ensure a smooth user experience and fast adoption by development teams.
- Working closely with clients to understand their business needs and translate requirements into effective design solutions.
- Applying UX design best practices to optimize navigation, accessibility, and user engagement.`,
        },
        icon: "design",
        skills: [
          "UI/UX Design",
          "Figma",
          "Adobe XD",
          "Prototypage interactif",
          "Material UI",
          "Responsive Design",
        ],
      },
      {
        id: "a3f1c2d4-9b8e-4f0a-b1c2-d3e4f5a6b7c8",
        title: { fr: "Infographe", en: "Graphic Designer" },
        employmentPeriod: {
          start: "",
        },
        employmentType: { fr: "Temps Partiel", en: "Part-time" },
        description: {
          fr: `- Conception d'affiches et de visuels publicitaires pour des clients variés.
- Création de logos et de chartes graphiques complètes adaptées à l'image de marque.
- Mise en page de documents (flyers, brochures, plaquettes) pour une communication cohérente.
- Retouche photo pour sublimer les visuels utilisés dans les supports de communication.
- Réalisation de supports PowerPoint professionnels pour présentations et pitchs.
- Production de visuels pour réseaux sociaux et supports de communication.`,
          en: `- Designing posters and promotional visuals for a variety of clients.
- Creating logos and complete brand guidelines tailored to brand image.
- Laying out documents (flyers, brochures, booklets) for consistent communication.
- Photo retouching to enhance visuals used across communication materials.
- Producing professional PowerPoint decks for presentations and pitches.
- Creating visuals for social media and communication materials.`,
        },
        icon: "design",
        skills: [
          "Conception d'affiches",
          "Logo Design",
          "Charte graphique",
          "Mise en page",
          "Retouche photo",
          "PowerPoint",
          "Figma",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Canva",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: {
          fr: "Université Aube Nouvelle (Bobo)",
          en: "Université Aube Nouvelle (Bobo)",
        },
        employmentPeriod: {
          start: "2022",
          end: "2025",
        },
        icon: "education",
        description: {
          fr: "- Obtention de la licence en Génie Logiciel",
          en: "- Earned a Bachelor's degree in Software Engineering",
        },
        skills: [
          "Développment Logiciel",
          "Programmation orientée Objet (POO)",
          "Structures de données & Algorithmique",
          "Dévelopment Web",
          "Systèmes de Gestion de Base de Données (SGBD)",
          "Fondements de la Programmation",
          "Systèmes d'exploitation",
          "Génie Logiciel",
          "Réseaux Informatiques",
          "Architecture des Logiciels",
          "Architecture des ordinateurs",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: {
          fr: "Ecole Supérieure d'Informatique (ESI)",
          en: "Ecole Supérieure d'Informatique (ESI)",
        },
        employmentPeriod: {
          start: "2020",
          end: "2021",
        },
        icon: "education",
        description: {
          fr: "- 1ère année de Licence en Génie Logiciel.",
          en: "- 1st year of a Bachelor's degree in Software Engineering.",
        },
        skills: [
          "Programmation C",
          "Algorithmique",
          "Development Web",
          "Architecture des ordinateurs",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: {
          fr: "Baccalauréat Série D (BAC)",
          en: "High School Diploma, Science Track (BAC)",
        },
        employmentPeriod: {
          start: "2017",
          end: "2020",
        },
        icon: "education",
        description: {
          fr: "- Enseignement de base",
          en: "- General education",
        },
        skills: [
          "Math",
          "Physique-Chimie",
          "Sciences de le Vie et de la Terre",
        ],
      },
      {
        id: "d9c8e1b5-7c3a-4f0b-9c8e-1a2b3c4d5e6f",
        title: {
          fr: "Brevet d'Etude du Premier Cycle (BEPC)",
          en: "Junior High School Diploma (BEPC)",
        },
        employmentPeriod: {
          start: "2013",
          end: "2017",
        },
        icon: "education",
        description: {
          fr: "- Enseignement de base",
          en: "- General education",
        },
        skills: [],
      },
      {
        id: "d9c8e1b5-7c3a-4f0b-9c8e-1a2b3c4d5e6d",
        title: {
          fr: "Certificat d'Etude Primaire (CEP)",
          en: "Primary School Certificate (CEP)",
        },
        employmentPeriod: {
          start: "2007",
          end: "2013",
        },
        icon: "education",
        description: {
          fr: "- Enseignement de base",
          en: "- General education",
        },
        skills: [],
      },
    ],
  },
];
