import type { Metadata } from "next";
import { getBlogPost } from "@/lib/blog-data";
import BlogPostClientPage from "./BlogPostClientPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | AvaLimo Blog",
    };
  }

  return {
    title: `${post.title} | AvaLimo Blog`,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | AvaLimo Blog`,
      description: post.summary,
      url: `https://avalimo.net/blog/${post.slug}`,
    },
  };
}

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <BlogPostClientPage params={params} />;
}
