"use client"

import type React from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Brain,
  Zap,
  Database,
  BarChart3,
  ShoppingCart,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// BlogPost 型別
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

// 三篇文章內容
const blogPosts: BlogPost[] = [
  {
    slug: "ai-tools-marketers",
    title: "AI Tools Every Marketer Should Know",
    excerpt:
      "From Midjourney to Heygen, GPT to v0, how AI has redefined marketing workflows and helped me cut daily work time by 80%.",
    date: "January 2025",
    readTime: "8 min",
    author: "Gaius Chen",
    category: {
      name: "AI in Marketing",
      icon: <Brain className="w-3 h-3 mr-1" />,
      color: "purple",
    },
    tags: [
      { name: "AI Tools", icon: <Brain className="w-3 h-3 mr-1" />, color: "purple" },
      { name: "Marketing", icon: <Zap className="w-3 h-3 mr-1" />, color: "cyan" },
    ],
    content: (
      <div className="space-y-8 text-gray-300">
        <h2 className="text-2xl font-bold text-white border-l-4 border-purple-400 pl-3">
          Early Days: Midjourney and Creative Breakthroughs
        </h2>
        <p>
          I first encountered AI tools in the era when <strong>Midjourney</strong> was just emerging.
          At the time, my team had access to strong resources, and we began experimenting with bold creative directions.
          Some of the basketball-themed creatives stood out visually, though most still required close collaboration with our design team before they could reach a market-ready stage.
        </p>

        <h2 className="text-2xl font-bold text-white border-l-4 border-purple-400 pl-3">
          Agency Life and Technical Shifts
        </h2>
        <p>
          Later, during my time at an ad agency, it was harder to apply AI for direct creative production.
          Large brands had strict compliance requirements, so instead I turned to AI to break barriers on the technical side—
          using AI to validate <strong>GTM tracking</strong>, generate scripts for data pipelines, and support reporting accuracy across numerous projects.
        </p>

        <h2 className="text-2xl font-bold text-white border-l-4 border-purple-400 pl-3">
          A New AI Era: From Workshop to Market Success
        </h2>
        <p>
          At my current company, we organized internal <strong>AI workshops</strong> with marketing experts
          to explore tools like GPT, Claude, v0, and Heygen. The most remarkable milestone came when we successfully deployed{" "}
          <strong>Heygen-generated video creatives</strong> in a highly regulated financial industry.
        </p>
        <p>
          Beyond creative production, tools like GPT and Claude have helped me cut my daily workflows by nearly{" "}
          <strong>80%—reducing time by one fifth</strong> while increasing output quality.
          Much of this came from automating reports, Excel workflows, and even ad copy generation.
        </p>
      </div>
    ),
  },
  {
    slug: "data-driven-marketing",
    title: "Data-Driven Marketing: How GA4 + AppsFlyer Shape Smarter Campaigns",
    excerpt:
      "From GA4 delays to AppsFlyer predictive LTV, here’s how I balance multiple analytics tools for smarter campaign decisions.",
    date: "January 2025",
    readTime: "9 min",
    author: "Gaius Chen",
    category: {
      name: "Analytics",
      icon: <Database className="w-3 h-3 mr-1" />,
      color: "blue",
    },
    tags: [
      { name: "GA4", icon: <BarChart3 className="w-3 h-3 mr-1" />, color: "blue" },
      { name: "AppsFlyer", icon: <Database className="w-3 h-3 mr-1" />, color: "green" },
    ],
    content: (
      <div className="space-y-8 text-gray-300">
        <h2 className="text-2xl font-bold text-white border-l-4 border-blue-400 pl-3">Why One Tool is Never Enough</h2>
        <p>
          Working across industries—from gaming apps to financial services—has given me a broad view of the analytics ecosystem.
          Tools like <strong>GA4</strong>, <strong>AppsFlyer</strong>, <strong>Tableau</strong>, and <strong>Mixpanel</strong> often overlap, but each also plays a unique role.
        </p>

        <h2 className="text-2xl font-bold text-white border-l-4 border-blue-400 pl-3">AppsFlyer: Gaming and Finance at Scale</h2>
        <p>
          In both gaming and finance apps, <strong>AppsFlyer</strong> became indispensable.
          With the help of skilled data engineers, we were even able to build predictive models that connected in-app events like{" "}
          <strong>IAP (In-App Purchases)</strong> with <strong>LTV (Lifetime Value)</strong>.
        </p>

        <h2 className="text-2xl font-bold text-white border-l-4 border-blue-400 pl-3">GA4 Delays, Mixpanel Speed, Tableau Depth</h2>
        <p>
          The biggest challenge with GA4 is the <strong>24–48 hour lag (Google’s official limitation)</strong>.
          Tableau, which our data science team customized for attribution, often added another delay.
          That meant waiting three to four days for reliable multi-touch attribution.
          But when you’re spending <strong>tens of thousands of TWD (or euros) daily</strong>, you can’t afford to wait.
          That’s where Mixpanel’s near-real-time tracking became critical for on-the-fly adjustments.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400">
          Together, GA4, Mixpanel, Tableau, and AppsFlyer created a decision-making ecosystem that scaled brands effectively.
        </blockquote>
      </div>
    ),
  },
  {
    slug: "from-zero-to-brand",
    title: "From Zero to Brand: Building Growth from Scratch",
    excerpt:
      "Launching a brand or app isn’t about luck—it’s about disciplined positioning, smart advertising, and relentless PDCA cycles.",
    date: "January 2025",
    readTime: "10 min",
    author: "Gaius Chen",
    category: {
      name: "Brand Building",
      icon: <ShoppingCart className="w-3 h-3 mr-1" />,
      color: "orange",
    },
    tags: [
      { name: "Brand Strategy", icon: <ShoppingCart className="w-3 h-3 mr-1" />, color: "orange" },
      { name: "Growth", icon: <Zap className="w-3 h-3 mr-1" />, color: "yellow" },
    ],
    content: (
      <div className="space-y-8 text-gray-300">
        <h2 className="text-2xl font-bold text-white border-l-4 border-orange-400 pl-3">Positioning First: Bedding and Crowdfunding</h2>
        <p>
          One of my earliest experiences was with a bedding selection brand.
          We led with positioning, differentiated the product, and launched via crowdfunding to reduce entry barriers.
          The crowdfunding platform itself provided initial reach and momentum, making it easier to scale after launch.
        </p>

        <h2 className="text-2xl font-bold text-white border-l-4 border-orange-400 pl-3">Japanese Selection E-commerce: APAC Competition</h2>
        <p>
          Another project was a Japanese lifestyle e-commerce brand.
          While multiple teams managed different APAC countries, I was responsible for <strong>Taiwan advertising</strong>.
          Through catalog ads, A/B testing, and bundled offers, our team achieved <strong>top three performance among APAC branches</strong>.
          (This refers to internal branch performance, not overall market share.)
        </p>

        <h2 className="text-2xl font-bold text-white border-l-4 border-orange-400 pl-3">App Launch: Creative, Channels, and PDCA</h2>
        <p>
          Launching a new app was perhaps the most intense experience.
          From casting for live-action shoots to script iterations, the creative prep was extensive.
          We built pre-registration websites, then shifted into full-scale acquisition at launch.
          For the first month, it was a <strong>24/7 sprint—monitoring data daily and running rapid PDCA cycles</strong>.
        </p>

        <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-400">
          According to a 2024 McKinsey study, brands with clear positioning see 2.6× faster growth in their first year.
        </blockquote>

        <p>
          Brand building is not a one-time game—it’s an <strong>infinite game</strong>.
          This constant evolution and need to adapt is exactly why I love this industry.
        </p>
      </div>
    ),
  },
]

// BlogPost Component
export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const currentIndex = blogPosts.findIndex((post) => post.slug === slug)
  const post = blogPosts[currentIndex]

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <Link href="/">
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const prevPost = blogPosts[currentIndex - 1]
  const nextPost = blogPosts[currentIndex + 1]

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />

      <div className="relative max-w-4xl mx-auto px-4 py-20">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Blog Post */}
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
                <div className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime} read</div>
              </div>
            </div>

            {/* ✅ 文章完整顯示 */}
            <div className="px-8 pb-8 text-gray-300 space-y-8">{post.content}</div>
          </CardContent>
        </Card>

        {/* Prev/Next Navigation */}
        <div className="flex justify-between mt-10 text-sm">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className="text-purple-400 hover:underline flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> {prevPost.title}
            </Link>
          ) : <div />}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} className="text-purple-400 hover:underline flex items-center gap-2">
              {nextPost.title} <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>

        {/* Call to Action */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-12">
          <Card className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Talk Growth?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let’s discuss how AI, analytics, and brand building can take your marketing to the next level.
              </p>
              {/* ✅ 正確跳轉到 contact 區塊 */}
              <Link href="/#contact">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                  Start the Conversation <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
