import { Project } from "@/types/Project"

export const projects: Project[] = [
    {
        title: "CRM Freelancer",
        description: "CRM application specially designed for freelancers who want to efficiently manage their clients.",
        image: "/projects/crm.webp",
        stack: ["React", "TypeScript", "Express", "MongoDB", "TailwindCSS"],
        github: "https://github.com/RamosGonzalo/CRM-Freelancer",
        status: "done"
    },
    {
        title: "Finance Dashboard",
        description: "Track your income and expenses with charts and date filters.",
        image: "",
        stack: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
        status: "in-progress"
    },
    {
        title: "Shadows of Laenor",
        description: "Role-playing game developed with C++ and the SFML library for my final programming II exam.",
        image: "/projects/menu-shadows-of-laenor.webp",
        stack: ["C++", "SFML", "Box2D", "Piskel"],
        github: "https://github.com/RamosGonzalo/Shadows-of-Laenor-1.0",
        status: "done"
    },
    {
        title: "Medical Clinic System",
        description: "Multi-layered web app built in C# using ASP.NET Web Forms and SQL Server.",
        image: "/projects/medicalclinicsystem.webp",
        stack: [".NET", "MySQL"],
        github: "https://github.com/RamosGonzalo/MedicalClinicSystem",
        status: "done"
    },
    {
        title: "Weather App",
        description: "Simple weather app that displays the weather by city using OpenWeather API.",
        image: "/projects/weather-app.webp",
        stack: ["React", "JavaScript", "TailwindCSS", "OpenWeather API"],
        github: "https://github.com/RamosGonzalo/Weather-App",
        status: "done"
    },
    {
        title: "AI Resume Scanner",
        description: "Upload your CV and get instant feedback and suggestions using AI.",
        image: "",
        stack: ["React", "TypeScript", "TailwindCSS", "OpenAI API"],
        status: "in-progress"
    },
    {
        title: "E-commerce Store",
        description: "E-commerce platform to manage products, orders and revenue tracking.",
        image: "",
        stack: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
        status: "in-progress"
    },
    {
        title: "Habit Tracker",
        description: "Track your habits and build consistency through a clean, minimal UI.",
        image: "",
        stack: ["React", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"],
        status: "in-progress"
    }
]
