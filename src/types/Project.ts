export type Project = {
    title: string;
    description: {
        en: string;
        es: string;
    };
    image: string;
    stack: string[];
    github?: string;
    status: "done" | "in-progress";
};
