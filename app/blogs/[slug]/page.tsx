"use client"

import type React from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, Brain, Zap, Shield, ArrowRight } from "lucide-react"
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
  "ai-tools-marketers": {
    slug: "ai-tools-marketers",
    title: "AI Tools Every Marketer Should Know",
    excerpt: "From GPT to Heygen, discover how AI tools are transforming marketing creativity and workflows.",
    date: "January 2025",
    readTime: "7 min",
    author: "Gaius Chen",
    category: {
      name: "AI in Marketing",
      icon: <Brain className="w-3 h-3 mr-1" />,
      color: "purple",
    },
    tags: [
      { name: "AI Tools", icon: <Brain className="w-3 h-3 mr-1" />, color: "purple" },
      { name: "Creativity", icon: <Zap className="w-3 h-3 mr-1" />, color: "cyan" },
    ],
    content: (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-white">The Rise of AI in Marketing</h2>
        <p className="text-gray-300 leading-relaxed">
          In the past three years, we’ve moved from tentative experiments with AI-generated images to
          fully deploying AI-powered video ads in regulated industries. My journey mirrors this
          evolution—from testing <strong className="text-white">Midjourney</strong> during app campaigns,
          to piloting <strong className="text-white">Heygen</strong> for commercial video creatives, and
          integrating <strong className="text-white">GPT</strong>, <strong className="text-white">v0</strong>,
          and other tools into daily workflows.
        </p>

        <h2 className="text-2xl font-bold text-white">Early Experiments</h2>
        <p className="text-gray-300 leading-relaxed">
          At first, Midjourney’s bold basketball-themed creatives caught attention but required heavy
          design team iterations before commercial use. In an agency setting, strict client brand
          guidelines limited AI adoption, but it opened doors for using scripts and AI helpers in
          analytics, GTM checks, and reporting.
        </p>

        <h2 className="text-2xl font-bold text-white">Breakthrough with Video AI</h2>
        <p className="text-gray-300 leading-relaxed">
          The real shift came when my in-house team piloted Heygen for video ads in finance. Within
          weeks, we produced regulatory-compliant, humanlike testimonial ads. After a short adjustment
          phase, these ads became <strong className="text-white">top performers for several months</strong>,
          proving AI video’s commercial viability.
        </p>

        <h2 className="text-2xl font-bold text-white">AI for Productivity</h2>
        <p className="text-gray-300 leading-relaxed">
          Beyond creatives, AI now powers my daily operations. Using GPT, Claude, and v0, I’ve cut my
          recurring workflows by <strong className="text-white">over 80%</strong>, freeing time for
          higher-value strategy work. From scripts to workflow automation, AI isn’t just a helper—it’s
          a productivity multiplier.
        </p>
      </div>
    ),
  },

  "data-driven-marketing": {
    slug: "data-driven-marketing",
    title: "Data-Driven Marketing: How GA4 + AppsFlyer Shape Smarter Campaigns",
    excerpt: "Leveraging GA4, AppsFlyer, and Mixpanel to understand attribution, optimize LTV, and scale campaigns effectively.",
    date: "January 2025",
    readTime: "8 min",
    author: "Gaius Chen",
    category: {
      name: "Analytics",
      icon: <Zap className="w-3 h-3 mr-1" />,
      color: "cyan",
    },
    tags: [
      { name: "GA4", icon: <Zap className="w-3 h-3 mr-1" />, color: "cyan" },
      { name: "AppsFlyer", icon: <Brain className="w-3 h-3 mr-1" />, color: "purple" },
    ],
    content: (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-white">The Multi-Tool Reality</h2>
        <p className="text-gray-300 leading-relaxed">
          In practice, no single analytics platform answers every marketing question. Over the years,
          I’ve worked with <strong className="text-white">GA4, AppsFlyer, Mixpanel, Tableau</strong>, and
          more. Each tool fills a different gap—AppsFlyer is indispensable for app campaigns, GA4 offers
          web and conversion tracking, and Mixpanel provides instant user-flow clarity.
        </p>

        <h2 className="text-2xl font-bold text-white">Why AppsFlyer Matters</h2>
        <p className="text-gray-300 leading-relaxed">
          For gaming and finance apps, AppsFlyer was central to evaluating short- and long-term campaign
          ROI. Partnering with data engineers, we even explored building <strong className="text-white">predictive
          LTV models</strong>—giving us a strategic edge in scaling spend with confidence.
        </p>

        <h2 className="text-2xl font-bold text-white">GA4, Mixpanel, and Tableau</h2>
        <p className="text-gray-300 leading-relaxed">
          One major brand I worked with relied on GA4-Tableau-Mixpanel in tandem: GA4 for attribution,
          Mixpanel for real-time site monitoring, and Tableau for the final multi-channel revenue model.
          Each delay (GA4’s 24–48h lag, Tableau’s extra processing) forced us to triangulate insights
          carefully—critical when managing tens of thousands in daily ad spend.
        </p>

        <h2 className="text-2xl font-bold text-white">Lesson Learned</h2>
        <p className="text-gray-300 leading-relaxed">
          Marketing data is never about clinging to one tool—it’s about building a
          <strong className="text-white"> flexible, layered measurement stack</strong> that evolves
          with campaigns. In today’s AI-driven landscape, marketers who can adapt quickly will win.
        </p>
      </div>
    ),
  },

  "from-zero-to-brand": {
    slug: "from-zero-to-brand",
    title: "From Zero to Brand: Lessons from Real Campaigns",
    excerpt: "Building a brand from scratch requires clarity, execution, and the mindset of an infinite game.",
    date: "January 2025",
    readTime: "9 min",
    author: "Gaius Chen",
    category: {
      name: "Brand Strategy",
      icon: <Shield className="w-3 h-3 mr-1" />,
      color: "red",
    },
    tags: [
      { name: "Branding", icon: <Shield className="w-3 h-3 mr-1" />, color: "red" },
      { name: "Case Study", icon: <Brain className="w-3 h-3 mr-1" />, color: "purple" },
    ],
    content: (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-white">Starting from Scratch</h2>
        <p className="text-gray-300 leading-relaxed">
          Launching a brand from zero is both exhilarating and daunting. From vision-setting to daily
          execution, every choice shapes long-term trajectory. In my experience—whether launching a
          gaming app or supporting new e-commerce brands—the early stage was always about{" "}
          <strong className="text-white">differentiation, momentum, and relentless testing.</strong>
        </p>

        <h2 className="text-2xl font-bold text-white">Expert Insights</h2>
        <p className="text-gray-300 leading-relaxed">
          Research shows <strong className="text-white">42% of startups fail due to misreading market
          demand</strong> (CB Insights, 2024). Another Harvard Business Review study (2023) highlights
          that brands with clear positioning in their first year are{" "}
          <strong className="text-white">3x more likely to sustain growth.</strong>
        </p>

        <h2 className="text-2xl font-bold text-white">Real Campaign Lessons</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong className="text-white">Crowdfunding momentum:</strong> Pre-orders reduced entry
            barriers and validated product-market fit for a bedding brand.
          </li>
          <li>
            <strong className="text-white">Localized execution:</strong> In a Japanese lifestyle brand
            project, I managed Taiwan’s ad campaigns while other regions operated independently.
            Our team ranked top 3 in APAC performance.
          </li>
          <li>
            <strong className="text-white">Aggressive app launches:</strong> For new apps, the first
            2–4 weeks determined survival. Our 24/7 PDCA cycles ensured healthy user ecosystems.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white">Infinite Game Mindset</h2>
        <p className="text-gray-300 leading-relaxed">
          Brand building is never finished. It’s an ongoing cycle of testing, learning, and scaling.
          This is why I see marketing as an{" "}
          <strong className="text-white">infinite game</strong>: tools and platforms evolve, but the
          mindset of adaptation is what endures.
        </p>
        <p className="text-gray-300 leading-relaxed font-semibold">
          This is also why I love this industry—because it’s an infinite game.
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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 py-20">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Blog Post */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="p-8 pb-6">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {post.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className={`bg-${tag.color}-500/20 text-${tag.color}-300 border-${tag.color}-500/30`}
                    >
                      {tag.icon}
                      {tag.name}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{post.title}</h1>
                <p className="text-gray-300 text-lg mb-6">{post.excerpt}</p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">{post.content}</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-12">
          <Card className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Want to discuss more?</h3>
              <p className="text-gray-300 mb-6">Let’s explore how data, AI, and branding can fuel your business growth.</p>
              <Link href="/#contact">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                  Start the Conversation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
