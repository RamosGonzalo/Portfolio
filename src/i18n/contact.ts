export type Lang = "es" | "en";

type ContactCopy = {
    title: string;
    subtitle: string;
    lead: string;
    items: {
        email: string;
        instagram: string;
        linkedin: string;
        medium: string;
    };
    cta: {
        write: string;
        download: string; 
        city: string;
        tz: string; 
        emailSubject: string;
        emailBody: string;
    };
};

export const contactCopy: Record<Lang, ContactCopy> = {
    es: {
        title: "Contacto",
        subtitle: "Conectemos.",
        lead: "Podés contactarme por cualquiera de estas plataformas.",
        items: {
        email: "Email",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        medium: "Medium",
        },
        cta: {
        write: "Escribime",
        download: "Descargar CV",
        city: "Buenos Aires",
        tz: "UTC−3",
        emailSubject: "Hola Gonza",
        emailBody: "Contame tu idea o proyecto acá. 👋",
        },
    },
    en: {
        title: "Contact",
        subtitle: "Let's connect.",
        lead: "Connect with me through any of these platforms.",
        items: {
        email: "Email",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        medium: "Medium",
        },
        cta: {
        write: "Write to me",
        download: "Download CV",
        city: "Buenos Aires",
        tz: "UTC−3",
        emailSubject: "Hi Gonza",
        emailBody: "Tell me about your idea or project here. 👋",
        },
    },
};
