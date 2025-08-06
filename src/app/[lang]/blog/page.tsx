import { getBlogPosts } from "@/lib/getBlogPosts";
import BlogClient from "./BlogClient";

export default async function BlogPage({ params }: { params: { lang: "en" | "es" } }) {
    const posts = await getBlogPosts(params.lang);
    return <BlogClient posts={posts} />;
}