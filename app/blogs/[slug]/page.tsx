"use client"

import type React from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Brain, Zap, BarChart3, TrendingUp, Target } from "lucide-react"
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
    excerpt: "From GPT to Midjourney, Heygen, and v0 — how AI tools reshape modern marketing workflows.",
    date: "Feb 2025",
    readTime: "7 min",
    author: "Gaius Chen",
    category: {
      name: "AI & Marketing",
      icon: <Brain className="w-3 h-3 mr-1" />,
      color: "cyan",
    },
    tags: [
      { name: "AI Tools", icon: <Zap className="w-3 h-3 mr-1" />, color: "purple" },
      { name: "Marketing", icon: <Target className="w-3 h-3 mr-1" />, color: "cyan" },
    ],
    content: (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            The rise of AI tools has transformed marketing from creative production
            to performance optimization. Tools like GPT, Midjourney, Heygen, and v0
            have become critical to marketers who need speed, scalability, and impact.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">Early Experiences</h2>
          <p className="text-gray-300 leading-relaxed">
            My first exposure to AI-driven creative was during app marketing campaigns
            when Midjourney emerged. Our team tested it for bold basketball-themed assets.
            While outputs needed design refinement, it opened a new chapter in creative iteration.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">From Experimentation to Adoption</h2>
          <p className="text-gray-300 leading-relaxed">
            Later, at a global ad agency, strict brand guidelines limited direct creative use,
            but AI began to shine in tracking and automation. I built scripts to validate GTM
            setups and optimize reporting — AI became less about visuals, more about operational excellence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">Breakthrough with Video AI</h2>
          <p className="text-gray-300 leading-relaxed">
            Today, video AI has crossed into commercial use. In finance ads, we successfully ran Heygen-generated spokesperson videos under strict compliance rules. Within weeks, results outperformed traditional creatives, becoming top assets for months.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">Workflow Transformation</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>GPT: copywriting, automation, workflow optimization</li>
            <li>Midjourney: fast creative exploration</li>
            <li>Heygen: scalable spokesperson & explainer videos</li>
            <li>v0: design-to-code acceleration</li>
            <li>Claude & Gemini: ideation and strategic planning</li>
          </ul>
          <p className="mt-4 text-gray-300 leading-relaxed">
            With these, I’ve cut routine workflows by 80%, reallocating time to high-value tasks.
          </p>
        </div>
      </div>
    ),
  },

  "data-driven-marketing": {
    slug: "data-driven-marketing",
    title: "Data-Driven Marketing: How GA4 + AppsFlyer Shape Smarter Campaigns",
    excerpt: "Why GA4, AppsFlyer, and complementary tools are critical for data-driven performance marketing.",
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
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white">The Power of Measurement</h2>
          <p className="text-gray-300 leading-relaxed">
            Having worked across gaming, finance, and e-commerce, I’ve seen how attribution tools shape decision-making. GA4, AppsFlyer, Mixpanel, and Tableau each play unique roles — no single tool is ever enough.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">AppsFlyer in Practice</h2>
          <p className="text-gray-300 leading-relaxed">
            For gaming and finance apps, AppsFlyer was indispensable. It allowed us to track
            short and long-term ad performance, optimize campaigns by cohort, and even explore
            predictive modeling with data engineers. The ability to tie installs to lifetime
            value (LTV) was a game-changer.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">GA4 and Attribution Challenges</h2>
          <p className="text-gray-300 leading-relaxed">
            Large brand clients often layered GA4 with Tableau and Mixpanel for cross-validation.
            GA4’s attribution lag (24–48h) meant we needed real-time checks via Mixpanel,
            while Tableau provided delayed but comprehensive multi-channel views.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">Smarter Campaign Decisions</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Mixpanel: immediate funnel visibility</li>
            <li>GA4: advertising efficiency & user journey analysis</li>
            <li>Tableau: holistic, internal multi-touch attribution</li>
          </ul>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Together, these tools helped us navigate daily spends in the tens of thousands while keeping campaigns agile and accountable.
          </p>
        </div>
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
      name: "Branding",
      icon: <Zap className="w-3 h-3 mr-1" />,
      color: "pink",
    },
    tags: [
      { name: "Branding", icon: <Zap className="w-3 h-3 mr-1" />, color: "pink" },
      { name: "Growth", icon: <TrendingUp className="w-3 h-3 mr-1" />, color: "purple" },
    ],
    content: (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white">Lessons from Experience</h2>
          <p className="text-gray-300 leading-relaxed">
            From crowdfunding campaigns in consumer products to mobile app launches,
            I’ve seen how critical early positioning is. For one e-commerce brand,
            leveraging platform audiences helped us rank in the top 3 across APAC markets —
            though each country had its own team, my campaigns for Taiwan performed among the best.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">Execution at Scale</h2>
          <p className="text-gray-300 leading-relaxed">
            Launches demand more than awareness. In app launches, we pre-built landing pages,
            tested ad creatives, and monitored data hourly during the first two weeks. That
            urgency determined whether we reached a sustainable user base or not.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">Research Insights</h2>
          <p className="text-gray-300 leading-relaxed">
            Research shows brands with strong launch positioning grow{" "}
            <strong className="text-white">2.6x faster</strong> in their first year (McKinsey, 2024).
            This reinforces why brand-building is as critical as performance optimization.
          </p>
        </div>

        <p className="italic text-gray-400">
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
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white">
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Blog Post */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              {/* Blog Header */}
              <div className="p-8 pb-6">
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

                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">{post.title}</h1>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{post.excerpt}</p>

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

              {/* Blog Content */}
              <div className="px-8 pb-8">{post.content}</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Explore Marketing’s Future?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let’s discuss how AI, analytics, and branding can transform your campaigns.
              </p>
              <Link href="/#contact">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white">
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
