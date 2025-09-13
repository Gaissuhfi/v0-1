"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"

const blogs = [
  {
    slug: "ai-tools-for-marketers",
    title: "AI Tools Every Marketer Should Know",
    excerpt: "From GPT to Midjourney and Heygen, discover how AI tools are transforming marketing workflows.",
    date: "Feb 2025",
    readTime: "7 min",
    author: "Gaius Chen",
    category: "AI & Marketing",
  },
  {
    slug: "data-driven-marketing",
    title: "Data-Driven Marketing: How GA4 + AppsFlyer Shape Smarter Campaigns",
    excerpt: "A deep dive into how modern analytics platforms enable smarter, cross-channel marketing strategies.",
    date: "Feb 2025",
    readTime: "8 min",
    author: "Gaius Chen",
    category: "Analytics",
  },
  {
    slug: "from-zero-to-brand",
    title: "From Zero to Brand: Building from the Ground Up",
    excerpt: "Lessons from launching apps and e-commerce brands, and why brand-building is an infinite game.",
    date: "Feb 2025",
    readTime: "9 min",
    author: "Gaius Chen",
    category: "Branding",
  },
]

export default function LatestBlogsSection() {
  return (
    <section id="blogs" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Latest <span className="text-gradient">Blogs</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-2xl border border-white/10 overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Blog Content */}
              <Link href={`/blogs/${blog.slug}`}>
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md p-8 h-full flex flex-col justify-between transition-all duration-500 group-hover:from-primary/10 group-hover:to-secondary/10">
                  <div>
                    <p className="text-sm text-primary font-medium mb-3">{blog.category}</p>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">{blog.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blog.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
