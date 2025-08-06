import { Project } from "@/types/Project"

export const projects: Project[] = [
    {
        title: "CRM Freelancer",
        description: {
        en: "CRM application specially designed for freelancers who want to efficiently manage their clients.",
        es: "Aplicación CRM especialmente diseñada para freelancers que quieren gestionar eficientemente a sus clientes."
        },
        image: "/projects/crm.webp",
        stack: ["React", "TypeScript", "Express", "MongoDB", "TailwindCSS"],
        github: "https://github.com/RamosGonzalo/CRM-Freelancer",
        status: "done"
    },
    {
        title: "Finance Dashboard",
        description: {
        en: "A fullstack application to track income, expenses, and spending categories. Developed using the MERN stack",
        es: "Una aplicación fullstack para el seguimiento de ingresos, gastos y categorías de gastos. Desarrollada con el stack MERN."
        },
        image: "",
        stack: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
        status: "in-progress"
    },
    {
        title: "Shadows of Laenor",
        description: {
        en: "Role-playing game developed with C++ and the SFML library for my final programming II exam.",
        es: "Juego de rol desarrollado con C++ y la biblioteca SFML para mi examen final de Programación II."
        },
        image: "/projects/menu-shadows-of-laenor.webp",
        stack: ["C++", "SFML", "Box2D", "Piskel"],
        github: "https://github.com/RamosGonzalo/Shadows-of-Laenor-1.0",
        status: "done"
    },
    {
        title: "Medical Clinic System",
        description: {
        en: "Multi-layered web app built in C# using ASP.NET Web Forms and SQL Server.",
        es: "Aplicación web multicapa desarrollada en C# usando ASP.NET Web Forms y SQL Server."
        },
        image: "/projects/medicalclinicsystem.webp",
        stack: [".NET", "MySQL"],
        github: "https://github.com/RamosGonzalo/MedicalClinicSystem",
        status: "done"
    },
    {
        title: "Weather App",
        description: {
        en: "Simple weather app that displays the weather by city using OpenWeather API.",
        es: "Aplicación del clima simple que muestra el clima por ciudad usando la API de OpenWeather."
        },
        image: "/projects/weather-app.webp",
        stack: ["React", "JavaScript", "TailwindCSS", "OpenWeather API"],
        github: "https://github.com/RamosGonzalo/Weather-App",
        status: "done"
    },
    {
        title: "AI Resume Scanner",
        description: {
        en: "Upload your CV and get instant feedback and suggestions using AI.",
        es: "Sube tu CV y recibe sugerencias y feedback instantáneo usando IA."
        },
        image: "",
        stack: ["React", "TypeScript", "TailwindCSS", "OpenAI API"],
        status: "in-progress"
    },
    {
        title: "E-commerce Store",
        description: {
        en: "E-commerce platform to manage products, orders and revenue tracking.",
        es: "Plataforma de comercio electrónico para gestionar productos, pedidos y seguimiento de ingresos."
        },
        image: "",
        stack: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
        status: "in-progress"
    },
    {
        title: "Habit Tracker",
        description: {
        en: "Track your habits and build consistency through a clean, minimal UI.",
        es: "Controla tus hábitos y construí consistencia con una interfaz limpia y minimalista."
        },
        image: "",
        stack: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
        status: "in-progress"
    }
]
