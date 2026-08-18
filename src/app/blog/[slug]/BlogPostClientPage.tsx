"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { use } from "react";
import { getBlogPost } from "@/lib/blog-data";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-yellow-500 hover:text-yellow-400">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Article */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div {...fadeInUp}>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white text-sm flex items-center gap-1 mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header {...fadeInUp} className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>{post.emoji}</span>
              <span className="bg-gray-800 px-2 py-0.5 rounded text-xs">
                {post.category}
              </span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.read}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-400">{post.summary}</p>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-8 glass-card text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              Ready to ride in <span className="text-gradient italic">luxury?</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Book online in 30 seconds. Flat rates, zero surge, always on time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book" className="btn-gold">
                Book Your Ride
              </Link>
              <a
                href="tel:+18325678050"
                className="text-gray-300 hover:text-white transition-colors"
              >
                📞 (832) 567-8050
              </a>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
