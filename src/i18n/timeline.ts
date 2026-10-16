
import type { TimelineItem, Lang } from "@/types/timeline";

export const timelineCopy = {
    es: { heading: "Experiencia y formación" },
    en: { heading: "Experience & Education" },
} as const;

export const timelineByLang: Record<Lang, TimelineItem[]> = {
    es: [
        {
            org: "KIAD",
            period: "Abr 2025 – Dic 2025",
            title: "Co-fundador & Software Developer",
            bullets: [
                "Participación en la creación de la startup, planificación y atención al cliente.",
                "Desarrollo de interfaces responsive con React, Tailwind CSS y TypeScript.",
                "Colaboración en mejoras de experiencia de usuario y rendimiento.",
            ],
            color: "blue",
        },
        {
            org: "Proyectos Personales",
            period: "Jul 2024 – Presente",
            title: "Desarrollo de Software",
            bullets: [
                "Desarrollo de EventFlow con Python, FastAPI, SQLAlchemy y PostgreSQL.",
                "Implementación de APIs, autenticación y modelado de bases de datos.",
                "Enfoque en buenas prácticas, arquitectura y pruebas automatizadas.",
            ],
            color: "violet",
        },
        {
            org: "Universidad Tecnológica Nacional",
            period: "Mar 2024 – May 2026",
            title: "Técnico Universitario en Programación",
            bullets: [
                "Graduado en mayo de 2026.",
                "Formación en programación, bases de datos, SQL y fundamentos de arquitectura de software.",
            ],
            color: "amber",
            link: "https://www.frgp.utn.edu.ar/",
        },
        {
            org: "Instituto Superior Cultural Británico",
            period: "Mar 2023 – Dic 2025",
            title: "Inglés para Adultos",
            bullets: [
                "Formación en inglés con enfoque comunicativo y conversacional.",
                "Preparación para continuar desarrollando competencias de inglés académico.",
            ],
            color: "green",
            link: "https://icbritanico.edu.ar/",
        },
    ],
    en: [
        {
            org: "KIAD",
            period: "Apr 2025 – Dec 2025",
            title: "Co-founder & Software Developer",
            bullets: [
                "Contributed to the startup's creation, planning, and customer relations.",
                "Developed responsive interfaces using React, Tailwind CSS, and TypeScript.",
                "Contributed to user experience and performance improvements.",
            ],
            color: "blue",
        },
        {
            org: "Personal Projects",
            period: "Jul 2024 – Present",
            title: "Software Development",
            bullets: [
                "Developing EventFlow with Python, FastAPI, SQLAlchemy, and PostgreSQL.",
                "Building APIs, authentication, and database models.",
                "Focusing on best practices, architecture, and automated testing.",
            ],
            color: "violet",
        },
        {
            org: "National Technological University",
            period: "Mar 2024 – May 2026",
            title: "University Technical Degree in Programming",
            bullets: [
                "Graduated in May 2026.",
                "Studied programming, databases, SQL, and software architecture fundamentals.",
            ],
            color: "amber",
            link: "https://www.frgp.utn.edu.ar/",
        },
        {
            org: "British Cultural Institute",
            period: "Mar 2023 – Dec 2025",
            title: "Adult English Program",
            bullets: [
                "English language training focused on communication and conversation.",
                "Building on this foundation to pursue academic English proficiency.",
            ],
            color: "green",
            link: "https://icbritanico.edu.ar/",
        },
    ],
};
