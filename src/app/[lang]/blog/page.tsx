import BlogClient from "./BlogClient";
import { getBlogPosts } from "@/lib/getBlogPosts";

type Props = {
    params: {
        lang: "en" | "es";
    };
};

export default async function BlogPage({ params }: Props) {
    const posts = getBlogPosts(params.lang);
    return <BlogClient posts={posts} />;
}
