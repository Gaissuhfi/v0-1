"use client"

import type React from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Brain, Zap, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: React.ReactNode
  date: string
  readTime: string
  author: string
  category: {
    name: string
    icon: React.ReactNode
    color: string
  }
  tags: Array<{
    name: string
    icon: React.ReactNode
    color: string
  }>
}

const blogPosts: Record<string, BlogPost> = {
  "ai-tools-for-marketers": {
    slug: "ai-tools-for-marketers",
    title: "AI Tools Every Marketer Should Know",
    excerpt: "From GPT to Midjourney and Heygen — discover how AI tools are reshaping marketing strategies.",
    date: "Feb 2025",
    readTime: "7 min",
    author: "Gaius Chen",
    category: {
      name: "AI & Marketing",
      icon: <Brain className="w-3 h-3 mr-1" />,
      color: "purple",
    },
    tags: [
      { name: "AI", icon: <Brain className="w-3 h-3 mr-1" />, color: "purple" },
      { name: "Marketing", icon: <Zap className="w-3 h-3 mr-1" />, color: "cyan" },
    ],
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Introduction</h2>
        <p className="text-gray-300 leading-relaxed">
          The rise of AI tools has transformed marketing from design to analytics. Marketers now have unprecedented
          opportunities to create, optimize, and scale campaigns with greater efficiency.
        </p>
        <h2 className="text-xl font-semibold text-white">Key Tools</h2>
        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li><strong>GPT:</strong> Copywriting, automation, workflow optimization.</li>
          <li><strong>Midjourney:</strong> Fast creative generation for ad visuals.</li>
          <li><strong>Heygen:</strong> AI-powered video creation with human avatars.</li>
          <li><strong>v0:</strong> Web & app prototyping with AI assistance.</li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          In my own campaigns, tools like Heygen helped us achieve ad performance breakthroughs even in highly regulated
          industries, proving AI's growing role in creative production.
        </p>
      </div>
    ),
  },
  "data-driven-marketing": {
    slug: "data-driven-marketing",
    title: "Data-Driven Marketing: How GA4 + AppsFlyer Shape Smarter Campaigns",
    excerpt: "Leveraging GA4 and AppsFlyer for cross-platform insights and smarter ad decisions.",
    date: "Feb 2025",
    readTime: "8 min",
    author: "Gaius Chen",
    category: {
      name: "Analytics",
      icon: <BarChart3 className="w-3 h-3 mr-1" />,
      color: "blue",
    },
    tags: [
      { name: "GA4", icon: <BarChart3 className="w-3 h-3 mr-1" />, color: "blue" },
      { name: "AppsFlyer", icon: <Zap className="w-3 h-3 mr-1" />, color: "cyan" },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          Data-driven marketing is no longer optional. With tools like GA4, AppsFlyer, Mixpanel, and Tableau,
          businesses can track, analyze, and optimize campaigns at scale.
        </p>
        <h2 className="text-xl font-semibold text-white">Practical Applications</h2>
        <ul className="list-disc ml-6 text-gray-300 space-y-2">
          <li><strong>GA4:</strong> Funnel tracking, attribution, cross-platform insights.</li>
          <li><strong>AppsFlyer:</strong> Mobile attribution and LTV analysis, especially critical for apps in gaming and finance.</li>
          <li><strong>Mixpanel/Tableau:</strong> Real-time behavior analysis and final performance dashboards.</li>
        </ul>
        <p className="text-gray-300 leading-relaxed">
          In practice, I’ve relied on GA4 for campaign effectiveness, AppsFlyer for user LTV, and Mixpanel for
          real-time reactions — each tool complements the others to provide a full picture.
        </p>
      </div>
    ),
  },
  "from-zero-to-brand": {
    slug: "from-zero-to-brand",
    title: "From Zero to Brand: Building from the Ground Up",
    excerpt: "How new brands and apps go from concept to market success with the right marketing foundation.",
    date: "Feb 2025",
    readTime: "9 min",
    author: "Gaius Chen",
    category: {
      name: "Brand Growth",
      icon: <Zap className="w-3 h-3 mr-1" />,
      color: "orange",
    },
    tags: [
      { name: "Branding", icon: <Zap className="w-3 h-3 mr-1" />, color: "orange" },
      { name: "Growth", icon: <Brain className="w-3 h-3 mr-1" />, color: "purple" },
    ],
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          Launching a brand from scratch requires more than just a product — it’s about narrative, timing, and execution.
        </p>
        <h2 className="text-xl font-semibold text-white">Lessons from Experience</h2>
        <p className="text-gray-300 leading-relaxed">
          From crowdfunding campaigns in consumer products to mobile app launches, I’ve seen how critical early positioning is.
          For one e-commerce brand, leveraging platform audiences helped us rank in the top 3 across APAC markets. For app launches,
          timing campaigns around pre-registrations and immediate data-driven pivots was key to building healthy user ecosystems.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Research also shows that brands with strong launch positioning grow 2.6x faster in their first year (McKinsey, 2024).
          This validates why early brand-building is as crucial as ongoing optimization.
        </p>
        <p className="text-gray-300 leading-relaxed italic">
          This is why I love this industry — because it’s an infinite game.
        </p>
      </div>
    ),
  },
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />

      <div className="relative max-w-4xl mx-auto px-4 py-20">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Blog Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="p-8 pb-6">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className={`bg-${tag.color}-500/20 text-${tag.color}-300 border-${tag.color}-500/30`}>
                      {tag.icon}
                      {tag.name}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{post.title}</h1>
                <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime} read</div>
                </div>
              </div>
              <div className="px-8 pb-8">{post.content}</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
