import type { TimelineItem, Lang } from "@/types/timeline";

export const timelineCopy = {
    es: { heading: "Timeline" },
    en: { heading: "Timeline" },
} as const;

export const timelineByLang: Record<Lang, TimelineItem[]> = {
    es: [
        {
        org: "KIAD",
        period: "Abr 2025 – Presente",
        title: "Co-fundador & Frontend Developer",
        bullets: [
            "Cofundar la startup, ocupandome de la experiencia del cliente.",
            "UIs responsive con React + Tailwind + TypeScript.",
            "Mejoras de performance.",
        ],
        color: "blue",
        link: "https://www.kiad.dev/",
        },
        {
        org: "Universidad de Buenos Aires",
        period: "Ene 2025 - Presente",
        title: "Ingenieria en Informática",
        bullets: [
            "Ingresando a la carrera de ingenieria para enorgullecer a mis padres",
        ],
        color: "red",
        link: "https://www.uba.ar/",
        },
        {
        org: "Proyectos Personales",
        period: "Jul 2024 – Presente",
        title: "Full-stack Trainee",
        bullets: [
            "Desarrollando proyectos para poner en juego mis habilidades",
        ],
        color: "green",
        },
        {
        org: "Universidad Tecnológica Nacional",
        period: "Ene 2024 – Presente",
        title: "Tecnicatura Universitaria en Programación",
        bullets: ["Java, C#, SQL, patrones, arquitectura básica."],
        color: "amber",
        link: "https://www.frgp.utn.edu.ar/",
        },
    ],
    en: [
        {
        org: "KIAD",
        period: "Apr 2025 – Now",
        title: "Co-founder & Frontend Developer",
        bullets: [
            "Co-founded the startup, focusing on customer experience.",
            "Built responsive UIs with React + Tailwind + TypeScript.",
            "Implemented performance improvements.",
        ],
        color: "blue",
        link: "https://www.kiad.dev/",
        },
        {
        org: "University of Buenos Aires",
        period: "Jan 2025 – Now",
        title: "Computer Engineering",
        bullets: ["Starting a career in engineering to make my parents proud."],
        color: "red",
        link: "https://www.uba.ar/",
        },
        {
        org: "Personal Projects",
        period: "Jul 2024 – Now",
        title: "Full-stack Trainee",
        bullets: [
            "Developing projects to put my skills into play",
        ],
        color: "green",
        },
        {
        org: "National Technological University",
        period: "Jan 2024 – Now",
        title: "Technical Degree in Programming",
        bullets: ["Java, C#, SQL, patterns, basic architecture."],
        color: "amber",
        link: "https://www.frgp.utn.edu.ar/",
        },
    ],
};
