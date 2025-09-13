"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    slug: "ai-tools-marketers",
    title: "AI Tools Every Marketer Should Know",
    excerpt:
      "From Midjourney to Heygen, GPT to v0, how AI has redefined marketing workflows and helped me cut daily work time by 80%.",
    date: "January 2025",
    cover: "/images/blogs/ai-tools.jpg", // 封面圖
  },
  {
    slug: "data-driven-marketing",
    title: "Data-Driven Marketing: How GA4 + AppsFlyer Shape Smarter Campaigns",
    excerpt:
      "From GA4 delays to AppsFlyer predictive LTV, here’s how I balance multiple analytics tools for smarter campaign decisions.",
    date: "January 2025",
    cover: "/images/blogs/data-driven.jpg", // 封面圖
  },
  {
    slug: "from-zero-to-brand",
    title: "From Zero to Brand: Building Growth from Scratch",
    excerpt:
      "Launching a brand or app isn’t about luck—it’s about disciplined positioning, smart advertising, and relentless PDCA cycles.",
    date: "January 2025",
    cover: "/images/blogs/from-zero.jpg", // 封面圖
  },
]

export default function LatestBlogsSection() {
  return (
    <section id="latest-blogs" className="py-20 md:py-32 bg-[#0a0a0f] relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Latest <span className="text-gradient">Blogs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights on AI tools, analytics, and brand building—directly from my hands-on marketing experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 backdrop-blur-sm hover:shadow-lg transition-all overflow-hidden">
                {/* 封面圖 */}
                <div className="h-40 w-full overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-gray-500 text-xs">
                    <span>{post.date}</span>
                    <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                      Read more →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
