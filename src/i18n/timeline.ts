import type { TimelineItem, Lang } from "@/types/timeline";

export const timelineCopy = {
    es: { heading: "Timeline" },
    en: { heading: "Timeline" },
} as const;

export const timelineByLang: Record<Lang, TimelineItem[]> = {
    es: [
        {
        org: "KIAD",
        period: "Abr 2025 – Dic 2025",
        title: "Co-fundador & Frontend Developer",
        bullets: [
            "Cofundar la startup, ocupandome de la experiencia del cliente.",
            "UIs responsive con React + Tailwind + TypeScript.",
            "Mejoras de performance.",
        ],
        color: "blue",
        },
        {
        org: "Proyectos Personales",
        period: "Jul 2024 – Presente",
        title: "Full-stack Trainee",
        bullets: [
            "Desarrollando proyectos para poner en juego mis habilidades",
        ],
        color: "violet",
        },
        {
        org: "Universidad Tecnológica Nacional",
        period: "Mar 2024 – May 2026",
        title: "Tecnicatura Universitaria en Programación",
        bullets: ["Java, C#, SQL, patrones, arquitectura básica."],
        color: "amber",
        link: "https://www.frgp.utn.edu.ar/",
        },
        {
        org: "Instituto Superior Cultural Británico",
        period: "Mar 2023 – Dic 2025",
        title: "Inglés para Adultos (intensivo)",
        bullets: [
            "Carga horaria: 3 h/semana (clases dinámicas y conversacionales).",
            "Enfoque comunicativo para situaciones cotidianas (viajes, pedidos de info, etc).",
            "Trayecto con preparación para exámenes internacionales."
        ],
        color: "green",
        link: "https://icbritanico.edu.ar/"
        }
    ],
    en: [
        {
        org: "KIAD",
        period: "Apr 2025 – Dec 2025",
        title: "Co-founder & Frontend Developer",
        bullets: [
            "Co-founded the startup, focusing on customer experience.",
            "Built responsive UIs with React + Tailwind + TypeScript.",
            "Implemented performance improvements.",
        ],
        color: "blue",
        },
        {
        org: "Personal Projects",
        period: "Jul 2024 – Now",
        title: "Full-stack Trainee",
        bullets: [
            "Developing projects to put my skills into play",
        ],
        color: "violet",
        },
        {
        org: "National Technological University",
        period: "Mar 2024 – May 2026",
        title: "Technical Degree in Programming",
        bullets: ["Java, C#, SQL, patterns, basic architecture."],
        color: "amber",
        link: "https://www.frgp.utn.edu.ar/",
        },
        {
        org: "British Superior Cultural Institute",
        period: "Mar 2023 – Dec 2025",
        title: "Adult English (intensive track)",
        bullets: [
            "3 hours/week, dynamic and speaking-first classes.",
            "Communicative approach to everyday situations (travel, info requests, etc.).",
            "Pathway/prep for international exams."
        ],
        color: "green",
        link: "https://icbritanico.edu.ar/"
        }
    ],
};
