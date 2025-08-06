import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const files = fs.readdirSync("src/content/blog");
    return files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));
    }

    export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const filePath = path.join(process.cwd(), "src/content/blog", `${params.slug}.mdx`);
    if (!fs.existsSync(filePath)) return notFound();

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(fileContent);

    return (
        <section className="pt-40 px-6 sm:px-10 lg:px-24 xl:px-32 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">{data.title}</h1>
        <p className="text-neutral-400 text-sm mb-6">{data.date}</p>
        <article className="prose prose-invert max-w-none">
            <MDXRemote source={content} />
        </article>
        </section>
    );
}
