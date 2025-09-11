export type TimelineItem = {
    org: string;
    period: string;
    title: string;
    bullets: string[];       
    color?: "blue" | "amber" | "green" | "red" | "violet"; 
    link?: string;           
};
export type Lang = "es" | "en";
