"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Blog() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-yellow-500 font-medium tracking-wide uppercase mb-4">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Houston travel{" "}
              <span className="text-gradient italic">guides</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Expert tips on airports, events, and getting around Houston in style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeInUp}
                className="glass-card glass-card-hover overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <span>{post.emoji}</span>
                    <span className="bg-gray-800 px-2 py-0.5 rounded text-xs">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.read}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {post.summary}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-yellow-500 hover:text-yellow-400 text-sm font-medium flex items-center gap-1"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold mb-4">
              Ready to ride in{" "}
              <span className="text-gradient italic">luxury?</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Book online in 30 seconds. Flat rates, zero surge, always on time.
            </p>
            <Link href="/book" className="btn-gold">
              Book Your Ride
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
