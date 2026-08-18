import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Houston Travel Guides & Limo Tips | AvaLimo Blog",
  description:
    "Expert guides on Houston airport transfers, wedding limo planning, corporate travel tips, wine tours, and getting around Houston in luxury. Written by AvaLimo.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "AvaLimo Blog | Houston Travel & Luxury Transportation Guides",
    description:
      "Expert tips on airports, events, and getting around Houston in style. IAH, Hobby, weddings, corporate travel.",
    url: "https://avalimo.net/blog",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
