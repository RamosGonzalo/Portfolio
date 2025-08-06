import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    tags?: string[];
    excerpt?: string;
}

export async function getBlogPosts(lang: "en" | "es"): Promise<BlogPost[]> {
    const dir = path.join(process.cwd(), "src/content/blog", lang);

    try {
        const files = await readdir(dir);

        const posts = await Promise.all(
            files
                .filter((filename) => filename.endsWith(".mdx"))
                .map(async (filename) => {
                    const slug = filename.replace(".mdx", "");
                    const fileContent = await readFile(path.join(dir, filename), "utf8");
                    const { data } = matter(fileContent);

                    return {
                        slug,
                        title: data.title,
                        date: data.date,
                        tags: data.tags || [],
                        excerpt: data.excerpt || "",
                    };
                })
        );

        return posts;
    } catch (error) {
        console.warn("Error al leer posts:", error);
        return [];
    }
}
