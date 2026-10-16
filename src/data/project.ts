
import { Project } from "@/types/Project";

export const projects: Project[] = [
    {
        title: "EventFlow",
        description: {
            en: "Backend API for event management and user registrations, built with FastAPI and PostgreSQL. Focused on authentication, database design, and maintainable architecture.",
            es: "API backend para la gestión de eventos e inscripciones de usuarios, desarrollada con FastAPI y PostgreSQL. Enfocada en autenticación, diseño de bases de datos y arquitectura mantenible.",
        },
        image: "",
        stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
        status: "in-progress",
    },
    {
        title: "LINEUP",
        description: {
            en: "A personal software project currently under development.",
            es: "Proyecto personal de software actualmente en desarrollo.",
        },
        image: "",
        stack: ["Next.js", "TypeScript", "FastAPI"],
        status: "in-progress",
    },
    {
        title: "Auditoría de Lecturas de Medidores",
        description: {
            en: "Data auditing project focused on detecting anomalies in meter readings, reconciling datasets, and generating structured reports using Python, SQL, and Excel.",
            es: "Proyecto de auditoría de datos enfocado en detectar anomalías en lecturas de medidores, conciliar conjuntos de datos y generar reportes estructurados con Python, SQL y Excel.",
        },
        image: "",
        stack: ["Python", "Pandas", "PostgreSQL", "SQL", "Excel"],
        status: "in-progress",
    },
    {
        title: "Análisis de Ventas - Pyme",
        description: {
            en: "Sales analytics project simulating a small business. Used Python to generate and process data, then built an Excel report with pivot tables, charts, and budget tracking.",
            es: "Proyecto de análisis de ventas de una pyme ficticia. Utilicé Python para generar y procesar datos y construí un reporte en Excel con tablas dinámicas, gráficos y control de presupuesto.",
        },
        image: "/projects/analisis-ventas-pyme.webp",
        stack: ["Python", "Pandas", "Faker", "OpenPyXL", "Excel"],
        github: "https://github.com/RamosGonzalo/analisis-ventas-pyme",
        status: "done",
    },
    {
        title: "Máximo García Website",
        description: {
            en: "Website for a fitness professional, built with Next.js and TypeScript, integrating Mercado Pago and a WhatsApp-based lead capture and follow-up flow.",
            es: "Sitio web para un profesional del fitness, desarrollado con Next.js y TypeScript, con integración de Mercado Pago y un flujo de captación y seguimiento de leads mediante WhatsApp.",
        },
        image: "/projects/maximogarcia.webp",
        stack: ["Next.js", "TypeScript", "Mercado Pago API"],
        status: "done",
    },
    {
        title: "CRM Freelancer",
        description: {
            en: "Full-stack CRM application designed to help freelancers organize and manage client relationships.",
            es: "Aplicación CRM full-stack diseñada para ayudar a freelancers a organizar y gestionar sus relaciones con clientes.",
        },
        image: "/projects/crm.webp",
        stack: ["React", "TypeScript", "Express", "MongoDB", "TailwindCSS"],
        github: "https://github.com/RamosGonzalo/CRM-Freelancer",
        status: "done",
    },
    {
        title: "Medical Clinic System",
        description: {
            en: "Multi-layered clinic management application built with C#, ASP.NET Web Forms, and a relational database.",
            es: "Sistema de gestión para una clínica, desarrollado con C#, ASP.NET Web Forms y una base de datos relacional, utilizando una arquitectura multicapa.",
        },
        image: "/projects/medicalclinicsystem.webp",
        stack: ["C#", "ASP.NET Web Forms", "SQL Server"],
        github: "https://github.com/RamosGonzalo/MedicalClinicSystem",
        status: "done",
    },
];
