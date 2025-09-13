"use client"

import { motion } from "framer-motion"

const blogs = [
  {
    title: "AI Tools Every Marketer Should Know",
    excerpt:
      "From Midjourney’s creative visuals to Heygen’s human-like video generation, discover how GPT, v0, and other tools are reshaping marketing workflows...",
    link: "#",
    date: "Feb 2025",
    gradient: "from-pink-500 via-purple-500 to-blue-500",
  },
  {
    title: "Data-Driven Marketing: How GA4 + AppsFlyer Shape Smarter Campaigns",
    excerpt:
      "Mixpanel, GA4, and AppsFlyer are redefining how brands measure growth. Here’s how cross-tool attribution unlocks insights for smarter ad decisions...",
    link: "#",
    date: "Feb 2025",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    title: "From Zero to Brand: Building a New Brand with Strategy & Growth",
    excerpt:
      "Launching a new brand isn’t just about ads — it’s aligning short-term execution with long-term growth. Lessons from crowdfunding, e-commerce, and app launches...",
    link: "#",
    date: "Feb 2025",
    gradient: "from-orange-400 via-red-500 to-pink-500",
  },
]

export default function LatestBlogsSection() {
  return (
    <section id="blogs" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Latest <span className="text-gradient">Blogs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights at the intersection of AI, data, and digital marketing
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.link}
              className="group relative rounded-2xl p-6 border border-white/10 glass hover:border-white/20 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Background gradient hover effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <span className="text-sm text-gray-400">{blog.date}</span>
                <h3 className="text-xl font-bold mt-3 mb-3 group-hover:text-primary transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3">{blog.excerpt}</p>
                <div className="mt-4 text-primary text-sm font-medium group-hover:underline">
                  Read more →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
