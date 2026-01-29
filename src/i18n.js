import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "navbar": {
                "home": "Home",
                "about": "About Me",
                "projects": "My Work",
                "contact": "Contact"
            },
            "work": {
                "title": "My Work",
                "professional": "Professional Work",
                "professional_desc": "Enterprise solutions and client projects.",
                "personal": "Personal Projects",
                "personal_desc": "Experimental labs and creative code.",
                "client": "Client",
                "ref": "Ref ID",
                "read_more": "Read More",
                "view_project": "View Project",
                "tech_stack": "Tech Stack"
            },
            "hero": {
                "greeting": "Hello, I'm",
                "role": "Full-Stack Developer | AI-Augmented Specialist",
                "cta": "View My Work",
                "description": "Building digital universes with code and creativity. Let's launch your next big idea."
            },
            "about": {
                "p1": "Full-Stack Expert specializing in React.js and Cloud Ecosystems. Pioneer in AI-Augmented Development, leveraging Gemini/GPT to accelerate delivery cycles.",
                "p2": "Proven track record transforming legacy systems into flexible Headless Architectures. Tech and science enthusiast.",
                "p3": "Part of my passion is building and creating technological worlds while interacting and experimenting with the latest AI models."
            },
            "contact": {
                "subtitle": "Ready to launch a project together? Signal me.",
                "name": "Name",
                "message": "Message",
                "send": "Send Transmission",
                "name_placeholder": "Commander Shepard",
                "message_placeholder": "Transmission content..."
            },
            "footer": {
                "text": "Portfolio. Built with React & Starlight."
            }
        }
    },
    es: {
        translation: {
            "navbar": {
                "home": "Inicio",
                "about": "Sobre Mí",
                "projects": "Mi Trabajo",
                "contact": "Contacto"
            },
            "work": {
                "title": "Mi Trabajo",
                "professional": "Trabajos Profesionales",
                "professional_desc": "Soluciones empresariales y proyectos de clientes.",
                "personal": "Proyectos Propios",
                "personal_desc": "Laboratorios experimentales y código creativo.",
                "client": "Cliente",
                "ref": "Ref ID",
                "read_more": "Ampliar Detalles",
                "view_project": "Ver Proyecto",
                "tech_stack": "Tecnologías"
            },
            "hero": {
                "greeting": "Hola, soy",
                "role": "Full-Stack Developer | AI-Augmented Specialist",
                "cta": "Ver Mis Trabajos",
                "description": "Construyendo universos digitales con código y creatividad. Lancemos tu próxima gran idea."
            },
            "about": {
                "p1": "Experto Full-Stack especializado en React.js y Ecosistemas Cloud. Pionero en Desarrollo Aumentado por IA, aprovechando Gemini/GPT para acelerar ciclos de entrega.",
                "p2": "Historial comprobado transformando sistemas legacy en Arquitecturas Headless flexibles. Fanático de la tecnología y la ciencia.",
                "p3": "Parte de mi pasión es construir y crear mundos tecnológicos e interactuar y experimentar con los últimos modelos de inteligencia artificial."
            },
            "contact": {
                "subtitle": "¿Listo para lanzar un proyecto juntos? Envíame una señal.",
                "name": "Nombre",
                "message": "Mensaje",
                "send": "Enviar Transmisión",
                "name_placeholder": "Comandante Shepard",
                "message_placeholder": "Contenido de la transmisión..."
            },
            "footer": {
                "text": "Portafolio. Construido con React & Starlight."
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
