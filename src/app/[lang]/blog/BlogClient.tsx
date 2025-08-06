"use client";

import Link from "next/link";
import { useLang } from "@/context/langContext";
import { blog } from "@/i18n/blog";

type Props = {
    posts: {
        slug: string;
        title: string;
        date: string;
        excerpt?: string;
        tags?: string[];
    }[];
};

export default function BlogClient({ posts }: Props) {
    const lang = useLang();
    const t = blog[lang];

    return (
        <section className="min-h-screen pt-40 px-6 sm:px-10 lg:px-24 xl:px-32">
        <div className="animate-fadeIn w-full max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-100 text-center mb-2">
            {t.title}
            </h2>
            <div className="h-1 w-14 bg-neutral-600 rounded mb-6 mx-auto" />
            <p className="text-center text-neutral-400 mb-12">{t.description}</p>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
            {posts.map((post) => (
                <Link href={`/${lang}/blog/${post.slug}`} key={post.slug}>
                <div className="bg-neutral-900 rounded-xl border border-neutral-700 p-6 hover:scale-[1.02] transition-transform">
                    <span className="text-xs text-neutral-500">{post.date}</span>
                    <h3 className="text-lg font-semibold text-white mt-2 mb-1">{post.title}</h3>
                    {post.excerpt && (
                    <p className="text-sm text-neutral-400 mb-3">{post.excerpt}</p>
                    )}
                    <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                    {post.tags?.map((tag) => (
                        <span key={tag} className="bg-neutral-800 px-2 py-1 rounded">
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>
        </section>
    );
}
