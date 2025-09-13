"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Brain, Zap, BarChart3 } from "lucide-react"

const blogPosts = [
  {
    slug: "ai-tools-for-marketers",
    title: "AI Tools Every Marketer Should Know",
    excerpt: "From GPT to Midjourney and Heygen — discover how AI tools are reshaping marketing strategies.",
    date: "Feb 2025",
    readTime: "7 min",
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    color: "from-purple-500/10 to-purple-800/10",
  },
  {
    slug: "data-driven-marketing",
    title: "Data-Driven Marketing: How GA4 + AppsFlyer Shape Smarter Campaigns",
    excerpt: "Leveraging GA4 and AppsFlyer for cross-platform insights and smarter ad decisions.",
    date: "Feb 2025",
    readTime: "8 min",
    icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
    color: "from-blue-500/10 to-blue-800/10",
  },
  {
    slug: "from-zero-to-brand",
    title: "From Zero to Brand: Building from the Ground Up",
    excerpt: "How new brands and apps go from concept to market success with the right marketing foundation.",
    date: "Feb 2025",
    readTime: "9 min",
    icon: <Zap className="w-5 h-5 text-orange-400" />,
    color: "from-orange-500/10 to-orange-800/10",
  },
]

export default function LatestBlogsSection() {
  return (
    <section id="latest-blogs" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my latest thoughts on AI, data-driven marketing, and brand building.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-r ${post.color} p-6 flex items-center justify-center`}>
                {post.icon}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} read</span>
                </div>

                {/* Link */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
