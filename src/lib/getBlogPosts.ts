import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    tags?: string[];
    excerpt?: string;
}

export function getBlogPosts(lang: "en" | "es"): BlogPost[] {
    const dir = path.join(process.cwd(), "src/content/blog", lang);

    if (!fs.existsSync(dir)) {
        console.warn("No se encontró el directorio de posts:", dir);
        return [];
    }

    const files = fs.readdirSync(dir);

    return files
        .filter((filename) => filename.endsWith(".mdx"))
        .map((filename) => {
        const slug = filename.replace(".mdx", "");
        const fileContent = fs.readFileSync(path.join(dir, filename), "utf8");
        const { data } = matter(fileContent);

        return {
            slug,
            title: data.title,
            date: data.date,
            tags: data.tags || [],
            excerpt: data.excerpt || "",
        };
        });
}
