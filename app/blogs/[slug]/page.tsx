"use client"

import type React from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, Brain, Zap, Shield, ArrowRight, TrendingUp, BarChart3, Target } from "lucide-react"
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
  // 1) AI Tools
  "ai-tools-marketers": {
    slug: "ai-tools-marketers",
    title: "AI Tools Every Marketer Should Know",
    excerpt:
      "From GPT and Midjourney to Heygen and v0—how AI moved from experiments to production and reshaped marketing workflows.",
    date: "February 2025",
    readTime: "10 min",
    author: "Gaius Chen",
    category: {
      name: "AI in Marketing",
      icon: <Brain className="w-3 h-3 mr-1" />,
      color: "purple",
    },
    tags: [
      { name: "AI Tools", icon: <Brain className="w-3 h-3 mr-1" />, color: "purple" },
      { name: "Creativity", icon: <Zap className="w-3 h-3 mr-1" />, color: "cyan" },
      { name: "Workflow", icon: <Target className="w-3 h-3 mr-1" />, color: "blue" },
    ],
    content: (
      <div className="space-y-8">
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">From Novelty to Necessity</h2>
          <p className="text-gray-300 leading-relaxed">
            Over the last few years, AI moved from “cool demo” to “production-critical.” My path followed that arc:
            first experiments with <strong className="text-white">Midjourney</strong> for bold app creatives; then
            adopting <strong className="text-white">GPT</strong> and <strong className="text-white">v0</strong> to
            automate workflows; and finally deploying <strong className="text-white">Heygen</strong> spokesperson videos
            that outperformed traditional assets—even in regulated categories.
          </p>
        </section>

        {/* Early experiments */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Early Experiments: Creative Exploration</h2>
          <p className="text-gray-300 leading-relaxed">
            During app campaigns, we used Midjourney to explore strong visual territories—one series was
            basketball-themed, high-contrast, highly stylized. Most outputs still needed a designer’s polish, but our
            iteration speed skyrocketed. The value wasn’t instant “final ads,” it was accelerated ideation and
            direction-finding with the creative team.
          </p>
          <p className="text-gray-300 leading-relaxed">
            In a global agency context, strict brand guidelines meant fewer AI visuals made it to production. But AI
            still drove impact elsewhere: scripts to validate <strong className="text-white">GTM</strong> setups, helper
            checks for parameters, and data tidying to stabilize reporting. Creative wasn’t the only frontier—operations
            quietly benefited first.
          </p>
        </section>

        {/* Breakthrough with video AI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Breakthrough: Commercial Video with Heygen</h2>
          <p className="text-gray-300 leading-relaxed">
            The real inflection point came when we piloted Heygen for finance ads. The goal: scalable spokesperson and
            explainer videos that pass compliance. After a short adaptation window, these AI-generated videos became{" "}
            <strong className="text-white">top performers for months</strong>. The lesson: once legal and brand teams
            align on guardrails, AI video can be both compliant and compelling.
          </p>
        </section>

        {/* Tool-by-tool impact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">What Each Tool Does Best</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong className="text-white">GPT / Claude / Gemini:</strong> copywriting, QA checklists, code snippets,
              data wrangling, and “explain this log/error” assistants.
            </li>
            <li>
              <strong className="text-white">Midjourney:</strong> rapid concepting for visual directions, mood boards,
              and style exploration; hand off to designers for final assets.
            </li>
            <li>
              <strong className="text-white">Heygen:</strong> fast spokesperson/explainer videos with brand-safe
              templates; great for conversion-focused education.
            </li>
            <li>
              <strong className="text-white">v0:</strong> design-to-code acceleration; generate React/Tailwind blocks
              and refine with devs for production-quality components.
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Net result: I reduced recurring workflows by <strong className="text-white">~80%</strong>, reallocating time
            to strategy, experimentation, and cross-functional collaboration.
          </p>
        </section>

        {/* Adoption playbook */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Adoption Playbook</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>
              <strong className="text-white">Start narrow:</strong> pick one use case (e.g., GTM audit scripts, UGC
              video variants) and prove lift.
            </li>
            <li>
              <strong className="text-white">Set guardrails:</strong> compliance checklist, brand tone, review flow.
            </li>
            <li>
              <strong className="text-white">Automate hand-offs:</strong> templates + prompts + doc hygiene.
            </li>
            <li>
              <strong className="text-white">Track the delta:</strong> hours saved, speed-to-creative, ROAS/CPL
              improvements.
            </li>
          </ol>
        </section>

        {/* Closing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">The Bottom Line</h2>
          <p className="text-gray-300 leading-relaxed">
            AI is no longer a novelty. Used well, it compounds: faster iteration, clearer insights, and more time for
            high-leverage work. The stack evolves, but the direction is set—marketers who systematize AI will outpace
            those who dabble.
          </p>
        </section>
      </div>
    ),
  },

  // 2) Data-Driven Marketing
  "data-driven-marketing": {
    slug: "data-driven-marketing",
    title: "Data-Driven Marketing: How GA4 + AppsFlyer Shape Smarter Campaigns",
    excerpt:
      "Why GA4, AppsFlyer, Mixpanel, and Tableau play different roles—and how to combine them for decisions that scale.",
    date: "February 2025",
    readTime: "11 min",
    author: "Gaius Chen",
    category: {
      name: "Analytics",
      icon: <BarChart3 className="w-3 h-3 mr-1" />,
      color: "blue",
    },
    tags: [
      { name: "GA4", icon: <BarChart3 className="w-3 h-3 mr-1" />, color: "blue" },
      { name: "AppsFlyer", icon: <Zap className="w-3 h-3 mr-1" />, color: "cyan" },
      { name: "Attribution", icon: <TrendingUp className="w-3 h-3 mr-1" />, color: "purple" },
    ],
    content: (
      <div className="space-y-8">
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">One Question, Many Lenses</h2>
          <p className="text-gray-300 leading-relaxed">
            Across gaming, finance, and e-commerce, I’ve learned that analytics is a team sport.{" "}
            <strong className="text-white">GA4, AppsFlyer, Mixpanel, and Tableau</strong> each answer different parts of
            the same question: “Is this working—and why?”
          </p>
        </section>

        {/* AppsFlyer */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">AppsFlyer in Practice</h2>
          <p className="text-gray-300 leading-relaxed">
            For app growth, AppsFlyer was indispensable. It let us cohort by source/campaign, inspect
            short- vs. long-term value, and collaborate with data engineers to explore{" "}
            <strong className="text-white">predictive LTV</strong>. Tying installs to downstream value
            steered budget far better than last-click thinking.
          </p>
          <p className="text-gray-300 leading-relaxed">
            It also helped us compare “fast” channels with “compounders.” Some sources win day-one CPA; others win by
            retention, ARPU, or upgrade rates. Without cohort reads, you’re blind to that second layer.
          </p>
        </section>

        {/* GA4 + Mixpanel + Tableau */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Triangulating with GA4, Mixpanel, and Tableau</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong className="text-white">GA4:</strong> ad efficiency, user journeys, conversion paths—great for
              channel questions but expect a <strong className="text-white">24–48h lag</strong>.
            </li>
            <li>
              <strong className="text-white">Mixpanel:</strong> near-real-time funnels and on-site behavior—perfect for
              “what’s breaking right now?” checks during high-spend windows.
            </li>
            <li>
              <strong className="text-white">Tableau:</strong> slowest to refresh, but the richest view when your data
              team models multi-touch revenue and internal definitions of contribution.
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed">
            Managing daily spends in the tens of thousands means trade-offs: we used Mixpanel for speed, GA4 for
            marketing visibility, and Tableau as the source of truth at the end of each cycle.
          </p>
        </section>

        {/* Practical system */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">A Practical Measurement Stack</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>
              <strong className="text-white">Define north-star + guardrails:</strong> agree on KPIs and “stop loss”
              conditions for tests.
            </li>
            <li>
              <strong className="text-white">Cohort + LTV first:</strong> avoid over-indexing on day-one metrics.
            </li>
            <li>
              <strong className="text-white">Cross-check lag:</strong> GA4 lags; Tableau may lag more; use Mixpanel for
              instant sanity checks.
            </li>
            <li>
              <strong className="text-white">Document assumptions:</strong> why a channel “wins” (creative/message,
              audience, landing, incentive)?
            </li>
            <li>
              <strong className="text-white">Close the loop weekly:</strong> refresh cohorts, re-cut creative trees,
              rebalance budgets.
            </li>
          </ol>
        </section>

        {/* Closing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">The Point Isn’t Tools—it’s Truth</h2>
          <p className="text-gray-300 leading-relaxed">
            No tool is perfect. Together, they let you get closer to the truth at the speed the business needs. In an
            AI-driven era, that speed-to-truth is the edge.
          </p>
        </section>
      </div>
    ),
  },

  // 3) From Zero to Brand
  "from-zero-to-brand": {
    slug: "from-zero-to-brand",
    title: "From Zero to Brand: Building from the Ground Up",
    excerpt:
      "Positioning, momentum, and disciplined iteration—how new brands and apps move from concept to compounding growth.",
    date: "February 2025",
    readTime: "12 min",
    author: "Gaius Chen",
    category: {
      name: "Brand Strategy",
      icon: <Shield className="w-3 h-3 mr-1" />,
      color: "red",
    },
    tags: [
      { name: "Branding", icon: <Shield className="w-3 h-3 mr-1" />, color: "red" },
      { name: "Growth", icon: <TrendingUp className="w-3 h-3 mr-1" />, color: "purple" },
      { name: "Launch", icon: <Zap className="w-3 h-3 mr-1" />, color: "pink" },
    ],
    content: (
      <div className="space-y-8">
        {/* Intro */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Why the First Weeks Matter</h2>
          <p className="text-gray-300 leading-relaxed">
            Launching from zero is about getting three things right:{" "}
            <strong className="text-white">positioning, momentum, and iteration</strong>. Whether it’s a new consumer
            brand or a mobile app, those first weeks set the trajectory. You’re designing the story, the system, and
            the speed.
          </p>
        </section>

        {/* Crowdfunding example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">De-Risking with Crowdfunding</h2>
          <p className="text-gray-300 leading-relaxed">
            For a bedding selection brand, we used crowdfunding to validate differentiation, compress CAC early, and tap
            into a platform audience. It wasn’t just about money—it was about evidence: which angles resonate, which
            benefits get repeated in comments, and which promises people pre-commit to.
          </p>
        </section>

        {/* APAC ecom example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Regional Execution: APAC Top-3</h2>
          <p className="text-gray-300 leading-relaxed">
            In a Japanese selection e-commerce project, I managed{" "}
            <strong className="text-white">Taiwan’s advertising</strong> while each country had its own team. By leaning
            on catalog ads, A/B testing, and bundle experiments, our Taiwan campaigns consistently ranked{" "}
            <strong className="text-white">top-three</strong> among APAC divisions—proof that localized execution wins
            even with shared brand assets.
          </p>
        </section>

        {/* App launch example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">App Launches: Velocity is a Moat</h2>
          <p className="text-gray-300 leading-relaxed">
            New apps are a different sport. We built pre-registration funnels, prepared multiple creative angles (from
            casting to scripts to edits), and ran aggressive <strong className="text-white">PDCA</strong> in the first{" "}
            2–4 weeks. In several cases we monitored results nearly hourly—switching audiences, creatives, and offers to
            sustain user velocity and reach a healthy internal ecosystem fast.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Pre-build landing & analytics pipelines to avoid day-one chaos.</li>
            <li>Treat creative like a <em>tree</em>—keep branching winners, prune the rest.</li>
            <li>Budget by cohort value, not just day-one CPA.</li>
          </ul>
        </section>

        {/* Research stats + reasoning */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">What the Research Says</h2>
          <p className="text-gray-300 leading-relaxed">
            External research aligns with this: brands with strong launch positioning grow roughly{" "}
            <strong className="text-white">2.6× faster</strong> in their first year (McKinsey, 2024). Other industry
            analyses suggest a large share of launches underperform due to weak differentiation or unclear value. The
            remedy is simple, not easy: <em>position clearly, test quickly, measure honestly</em>.
          </p>
        </section>

        {/* Playbook */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">A Pragmatic Playbook</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>
              <strong className="text-white">Positioning & Creative Platform:</strong> the one-line promise + repeatable
              visual territory your audience will remember.
            </li>
            <li>
              <strong className="text-white">Demand Seeding:</strong> crowdfunding, waitlists, influencer collabs, or
              partnerships to compress the cold start.
            </li>
            <li>
              <strong className="text-white">Test in Weeks, Not Months:</strong> creative A/Bs, landing experiments,
              offer/bundle tests—ship, learn, repeat.
            </li>
            <li>
              <strong className="text-white">Data Loop:</strong> daily KPIs, weekly cohorts, monthly LTV. Document what
              you believe and why.
            </li>
            <li>
              <strong className="text-white">Ops Readiness:</strong> analytics hygiene, ad ops checklists, creative
              pipeline, and the support loop.
            </li>
          </ol>
        </section>

        {/* Closing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">The Infinite Game</h2>
          <p className="text-gray-300 leading-relaxed">
            Brand building is compounding work. The tactics evolve, but the habit of learning faster than the market is
            the durable advantage. This is why I love this industry—<strong className="text-white">because it’s an
            infinite game</strong>.
          </p>
        </section>
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
              <p className="text-gray-300 mb-6">Let’s explore how AI, analytics, and brand building can fuel growth.</p>
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
