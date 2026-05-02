import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "forrof",
    companyName: "Moïse Bienvenu Wendpanga OUEDRAOGO",
    companyLogo: "/images/experience/forrof.svg",
    positions: [
      {
        id: "Dokal-fullstack-dev",
        title: "Développeur Fullstack, UI/UX Designer",
        employmentPeriod: {
          start: "03.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- **Conception et développement** d'une application mobile de gestion avec Expo (React Native), couvrant l'authentification, la navigation, la gestion de données métier et l'expérience utilisateur ;
- **Design UI/UX complet** : création de maquettes haute fidélité, prototypage interactif et mise en place d'un design system cohérent pour garantir une adoption fluide par les équipes terrain ;
- **Intégration d'APIs et synchronisation** : connexion aux backends existants via des endpoints REST, gestion du cache local et optimisation des performances en conditions réseau dégradées ;
- **Optimisation mobile** : adaptation responsive multi-écrans, gestion d'états complexes et réduction des temps de chargement pour une navigation fluide et intuitive ;
- **Qualité et déploiement** : itérations agiles, revues de code, tests sur devices physiques et mise en production via les canaux internes (TestFlight / Google Play Internal Testing) ;
- **Suivi et amélioration continue** : collecte de retours utilisateurs, analyse des parcours critiques et itérations rapides pour augmenter l'efficacité opérationnelle et la rétention.`,
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
        title: "Développeur Stagiaire à Dokal Burkina",
        employmentPeriod: {
          start: "07.2025",
          end: "12.2025",
        },
        employmentType: "Temps plein",
        icon: "code",
        description: `- **Développement et déploiement** de bot WhatsApp automatisé couvrant le cycle complet de commande (catalogue → panier → paiement → suivi) ;
- **Conception full-stack** d'interfaces et backends (Node.js/Express, Next.js, PostgreSQL/MongoDB) intégrés à l'API WhatsApp Business Cloud ;
- **Modélisation de flux conversationnels** UX-first : menus interactifs, boutons, listes et gestion proactive des erreurs ou abandons ;
- **Intégration d'écosystèmes métier** via APIs REST et webhooks : synchronisation des stocks, passerelles de paiement et notifications temps réel ;
- **Industrialisation du code** avec pipelines CI/CD, tests automatisés et monitoring pour garantir fiabilité, scalabilité et maintenabilité ;
- **Sécurité et conformité** : gestion des consentements, validation des templates Meta, chiffrement des données sensibles et respect du RGPD ;
- **Suivi analytique** : implémentation de dashboards pour mesurer taux de conversion, temps de réponse et identifier les points d'optimisation .`,
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
        title: "Formateur en piano, Encadreur d'enfants au CDEJ-BF0469",
        employmentPeriod: {
          start: "04.2024",
          end: "06.2025",
        },
        employmentType: "Temps partiel",
        icon: "education",
        description: `
  - Enseignement  des bases musicales ;
  - Adaptation des méthodes pédagogiques ;
  - Evaluation des progrès ; 
  - Inspiration et motivation ; 
  - Création d'un environnement d'apprentissage positif ; 
  - Assurer la sécurité des enfants ; 
  - Planifier et organiser des activités adaptées ; 
  - Superviser et encadrer les enfants ; 
  - Encourager le développement social et émotionnel.`,
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
        title: "Formateur en piano, Encadreur d'enfants au CDEJ-BF0648",
        employmentPeriod: {
          start: "03.2022",
          end: "10.2023",
        },
        employmentType: "Temps partiel",
        icon: "education",
        description: `
  - Enseignement  des bases musicales ;
  - Adaptation des méthodes pédagogiques ;
  - Evaluation des progrès ; 
  - Inspiration et motivation ; 
  - Création d'un environnement d'apprentissage positif ; 
  - Assurer la sécurité des enfants ; 
  - Planifier et organiser des activités adaptées ; 
  - Superviser et encadrer les enfants ; 
  - Encourager le développement social et émotionnel.`,
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
  /*
  {
    id: "pos-software-developer",
    companyName: "Self-Employed",
    companyLogo:
      "https://api.dicebear.com/7.x/shapes/svg?seed=POS+Shop+Management",
    positions: [
      {
        id: "pos-dev-self-employed",
        title: "POS Software Developer",
        employmentPeriod: {
          start: "11.2023",
          end: "04.2024",
        },
        employmentType: "Self-Employed",
        icon: "education",
        description: `- Built comprehensive Shop Management System using PERN stack (PostgreSQL, Express, React, Node.js).
- Developed complete invoice management system with financial transaction logging.
- Created real-time dashboards for sales analytics and inventory tracking.
- Built customer and vendor management with complete transaction history.
- Implemented payment status tracking system with automatic updates.
- Integrated Handontable for Excel-like data entry and manipulation.
- Delivered weekly improvements and new features to enhance system usability.`,
        skills: [
          "React",
          "Redux",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Prisma",
          "JWT",
          "Handontable",
          "RESTful APIs",
          "PERN Stack",
          "Real-time Dashboards",
          "Inventory Management",
        ],
      },
    ],
  },
  */
  /*{
    id: "web-dev-instructor",
    companyName: "Frontend Development Course",
    companyLogo:
      "https://ui-avatars.com/api/?name=Frontend+Course&background=10B981&color=fff&size=200",
    positions: [
      {
        id: "web-dev-instructor-online",
        title: "Web Development Instructor",
        employmentPeriod: {
          start: "04.2024",
          end: "06.2025",
        },
        employmentType: "Part-time",
        icon: "education",
        description: `- Taught HTML, CSS, JavaScript, and React.js with hands-on project-based learning.
- Delivered structured online training sessions focused on full-stack web development.
- Provided one-on-one mentoring to university students pursuing web development careers.
- Designed curriculum covering modern web development practices and industry standards.`,
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Online Teaching",
          "Curriculum Design",
          "Project-Based Learning",
          "Mentoring",
          "Full-Stack Development",
        ],
      },
    ],
  },*/

  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "",
        },
        employmentType: "Temps Partiel",
        description: `Conception et développement de solutions web, mobiles et d'automatisation pour des clients variés. Architecture full-stack (Next.js, Node.js/NestJS, PostgreSQL/MongoDB), création d'interfaces UI/UX (Figma) et déploiement d'applications Expo. Intégration d'écosystèmes métier via APIs REST, webhooks et WhatsApp Business API. Gestion complète du cycle projet : cadrage, développement, tests, déploiement et maintenance. Livraison de produits performants, sécurisés et orientés résultats.`,
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
        title: "UI/UX Designer",
        employmentPeriod: {
          start: "",
        },
        employmentType: "Temps Partiel",
        description: ` - Conception d'interfaces utilisateur intuitives et esthétiques pour des applications web et mobiles.
- Création de maquettes haute fidélité et de prototypes interactifs avec Figma pour valider les concepts de design.
- Développement de design systems cohérents pour assurer une expérience utilisateur fluide et une adoption rapide par les équipes de développement.
- Collaboration étroite avec les clients pour comprendre leurs besoins métier et traduire ces exigences en solutions de design efficaces.
- Application des meilleures pratiques de design UX pour optimiser la navigation, l'accessibilité et l'engagement des utilisateurs.`,
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
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Université Aube Nouvelle (Bobo)",
        employmentPeriod: {
          start: "2022",
          end: "2025",
        },
        icon: "education",
        description: `- Obtention de la licence en Génie Logiciel`,
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
        title: "Ecole Supérieure d'Informatique (ESI)",
        employmentPeriod: {
          start: "2020",
          end: "2021",
        },
        icon: "education",
        description: `- 1ère année de Licence en Génie Logiciel.`,
        skills: [
          "Programmation C",
          "Algorithmique",
          "Development Web",
          "Architecture des ordinateurs",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Baccalauréat Série D (BAC)",
        employmentPeriod: {
          start: "2017",
          end: "2020",
        },
        icon: "education",
        description: `- Enseignement de base`,
        skills: ["Math", "Physique-Chimie", "Sciences de le Vie et de la Terre"],
      },
      {
        id: "d9c8e1b5-7c3a-4f0b-9c8e-1a2b3c4d5e6f",
        title: "Brevet d'Etude du Premier Cycle (BEPC)",
        employmentPeriod: {
          start: "2013",
          end: "2017",
        },
        icon: "education",
        description: `- Enseignement de base`,
        skills: [],
      },
      {
        id: "d9c8e1b5-7c3a-4f0b-9c8e-1a2b3c4d5e6d",
        title: "Certificat d'Etude Primaire (CEP)",
        employmentPeriod: {
          start: "2007",
          end: "2013",
        },
        icon: "education",
        description: `- Enseignement de base`,
        skills: [],
      },
    ],
  },
];
