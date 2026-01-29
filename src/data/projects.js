import aeriImg from '../assets/images/aeri.png';
import loreImg from '../assets/images/lore.png';
import aimeImg from '../assets/images/aime.png';
import gettigImg from '../assets/images/gettig.png';
import estudIaImg from '../assets/images/estud-ia.png';
import eAppImg from '../assets/images/e-app.png';

export const professionalWork = [
    {
        id: "aeri",
        title: {
            en: "Full Stack Developer & Digital Migration Consultant",
            es: "Consultor de Migración Digital & Desarrollador Full Stack"
        },
        client: "AERI",
        ref: "Roberto - +5492214857540",
        description: {
            en: "Digital Transformation for the Provincial Union. Designed and implemented a Strapi Headless CMS to centralize content management, replacing rigid SQL databases with flexible models. Full authentication system implementation (Email, OAuth). UI Refactoring for dynamic RESTful API consumption and real-time filtering. Reduced client dependency for content updates by 100%.",
            es: "Transformación Digital para el Sindicato Provincial. Diseñé e implementé un CMS Headless (Strapi) para centralizar la gestión de contenidos, sustituyendo bases de datos SQL rígidas por modelos flexibles. Implementación completa de autenticación (Email, OAuth). Refactorización de UI para consumo de APIs RESTful dinámicas y filtrado en tiempo real. Reduje en un 100% la dependencia del cliente para actualizaciones."
        },
        tech: ["React", "Strapi", "PostgreSQL", "OAuth", "RESTful APIs"],
        image: aeriImg,
        link: "https://aeri-omega.vercel.app/"
    },
    {
        id: "lorena",
        title: {
            en: "Full Stack Developer - React",
            es: "Desarrollador Full Stack - React"
        },
        client: "Lorena Calcopietro",
        ref: "Lorena - +5492216492754",
        description: {
            en: "Designed and developed a scalable SPA platform migrating from static content to a dynamic system managed by Firebase Firestore. Implemented a secure Admin Panel with Auth and Role management. Developed a custom theme engine (Dark/Light) and optimized components for Core Web Vitals.",
            es: "Diseñé y desarrollé una plataforma SPA escalable migrando de contenido estático a un sistema dinámico gestionado por Firebase Firestore. Implementé un Panel de Administración Seguro con Auth y gestión de roles. Desarrollé un motor de temas personalizado (Dark/Light) y componentes optimizados para Core Web Vitals."
        },
        tech: ["React", "Vite", "Firebase", "Firestore", "Tailwind"],
        image: loreImg,
        link: "https://www.lorenacalcopietro.com.ar"
    },
    {
        id: "getting",
        title: {
            en: "Corporate Landing Page Design",
            es: "Diseño de Landing Page Corporativa"
        },
        client: "Getting Solutions",
        ref: "Maxi - +5493434164671",
        description: {
            en: "Developed a high-impact corporate landing page with modern React architecture. Implemented responsive forms, social media integration, and optimized layout for maximum conversion. Focused on speed and visual hierarchy.",
            es: "Desarrollé una landing page corporativa de alto impacto con arquitectura React moderna. Implementé formularios responsivos, integración de redes sociales y un diseño optimizado para máxima conversión. Enfocado en velocidad y jerarquía visual."
        },
        tech: ["React", "Tailwind", "Forms", "UX/UI"],
        image: gettigImg,
        link: "https://gettig-solutions.vercel.app"
    },
    {
        id: "aime",
        title: {
            en: "Professional Services Platform",
            es: "Plataforma de Servicios Profesionales"
        },
        client: "Aime Translations",
        ref: "Rocio - +5493512280179",
        description: {
            en: "Full-scale web solution for a professional translation agency. Features include detailed service catalogs, interactive contact forms, and a responsive design tailored for professional credibility and international reach.",
            es: "Solución web integral para agencia de traducción profesional. Incluye catálogos de servicios detallados, formularios de contacto interactivos y un diseño responsivo adaptado para la credibilidad profesional y el alcance internacional."
        },
        tech: ["React", "Internationalization", "Responsive Design", "Modern UI"],
        image: aimeImg,
        link: "https://www.aimetranslations.com.ar/"
    }
];

export const personalProjects = [
    {
        id: "estud-ia",
        title: {
            en: "Estud-IA: AI-Powered Study Platform",
            es: "Estud-IA: Plataforma de Estudio con IA"
        },
        description: {
            en: "Born from the need to optimize study flows, Estud-IA transforms how students interact with academic material. It addresses information overload by leveraging Gemini AI to generate summaries and practice exams, organizing all academic info in one place. Built as a PWA, it utilizes Firebase for backend services and GCP for advanced AI integration.",
            es: "Nacido de la necesidad de optimizar flujos de estudio, Estud-IA transforma la interacción con material académico. Ataca la sobrecarga de información utilizando IA (Gemini) para generar resúmenes y modelos de parcial. Desarrollada como PWA, utiliza Firebase y GCP para una integración de IA avanzada."
        },
        tech: ["React", "Vite", "TailwindCSS", "DaisyUI", "Firebase", "GCP", "Gemini API", "GitHub Actions"],
        image: estudIaImg,
        link: "https://www.estud-ia.com.ar/",
        theme: 'light'
    },
    {
        id: "e-app",
        title: {
            en: "E-App: Digital Solutions Agency",
            es: "E-App: Agencia de Soluciones Digitales"
        },
        description: {
            en: "A comprehensive digital solutions platform developed to offer web development, e-commerce, and branding services. This project serves as a professional hub for client acquisition and portfolio management, demonstrating versatility in full-stack implementation and digital marketing strategies. It is the foundation of my professional freelance business.",
            es: "Plataforma integral de soluciones digitales desarrollada para ofrecer servicios de desarrollo web, e-commerce y branding. Este proyecto actúa como hub profesional para la captación de clientes, demostrando versatilidad en implementación full-stack y estrategias de marketing digital. Es la base de mi actividad profesional independiente."
        },
        tech: ["React", "TailwindCSS", "UX/UI Design", "Digital Marketing", "SEO"],
        image: eAppImg,
        link: "https://e-app.com.ar/"
    }
];
