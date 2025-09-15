"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation, type PanInfo } from "framer-motion"
import { ExternalLink, Github, Target, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Financial Ads Transformation — Taiwan Top-100 Financial Enterprise",
    description:
      "Led in-house transition for financial lead-gen ads, managing NT$2M+ monthly spend while cutting CPL by 30%, CPF by 50%, and CPI by 35%.",
    longDescription:
      "At a leading Taiwanese financial enterprise, I spearheaded the shift from agency-managed to in-house ad operations across Meta, Google, and TikTok. Managed NT$2M+ monthly ad spend (~CAD $80K+) and delivered major efficiency gains: CPL ↓30%, CPF ↓50%, CPI ↓35%. These results built executive trust, enabling team expansion and faster scaling.",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads", "AppsFlyer"],
    image: "/images/projects/finance-campaign.png",
    links: { demo: "#", github: "#" },
    features: ["CPL -30%", "CPF -50%", "CPI -35%", "In-house Transition"],
    color: "from-yellow-400/20 to-red-500/20",
  },
  {
    title: "Cross-Border E-commerce Growth — APAC Agency",
    description:
      "Planned and optimized e-commerce campaigns across APAC (TW, VN, JP, SG). Drove Shopee brand to Top 3 APAC with >12% margin growth.",
    longDescription:
      "At a cross-border advertising agency, I managed regional campaigns in Taiwan, Vietnam, Japan, and Singapore. By launching localized e-commerce initiatives and leading D2C growth projects, the Taiwan branch achieved Top 3 Shopee APAC ranking. Contributed >12% margin growth for in-house brand initiatives through tailored ad strategies.",
    tags: ["Shopee", "E-commerce", "APAC Strategy", "D2C"],
    image: "/images/projects/ecommerce-growth.png",
    links: { demo: "#", github: "#" },
    features: ["Shopee Top-3 APAC", "Margin +12%", "Cross-border Ads", "Localized Strategies"],
    color: "from-orange-400/20 to-pink-500/20",
  },
  {
    title: "Mobile App Marketing — Gaming Startup",
    description:
      "Executed global campaigns for a mobile gaming app, reducing campaign costs by 50% while sustaining install & event conversion quality.",
    longDescription:
      "At a mobile gaming startup, I ran campaigns across Google Ads, Meta Ads, TikTok Ads, AppLovin, and Reddit. Developed in-app event dashboards (IAP tracking) that improved attribution accuracy and actionable insights. Negotiated and executed Reddit Ads, pioneering platform adoption. Achieved 50% campaign cost reduction while maintaining conversion volume.",
    tags: ["Google Ads", "TikTok Ads", "Reddit Ads", "Attribution"],
    image: "/images/projects/mobile-app.png",
    links: { demo: "#", github: "#" },
    features: ["50% Cost Reduction", "Reddit Ads Pilot", "IAP Event Dashboard", "Multi-channel"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Fitness Business Growth — Global Gym Brand",
    description:
      "Boosted membership sales by 80% (NT$500K+ annually) with consultative sales approach. Maintained >90% retention rate.",
    longDescription:
      "As a fitness consultant at a global gym chain, I applied consultative sales and long-term engagement strategies. Increased membership sales by 80%, generating NT$500K+ annually. Sustained >90% retention rate by developing personalized coaching and relationship-building programs.",
    tags: ["Consultative Sales", "Client Retention", "B2C Growth"],
    image: "/images/projects/fitness.png",
    links: { demo: "#", github: "#" },
    features: ["+80% Membership", "500K+ TWD Revenue", ">90% Retention", "Engagement Programs"],
    color: "from-green-400/20 to-emerald-500/20",
  },
  {
    title: "Ad Innovation — Reddit Ads Pilot",
    description:
      "Negotiated and executed Reddit Ads campaigns for a mobile app publisher — pioneering new acquisition channel in Taiwan.",
    longDescription:
      "Introduced Reddit Ads to a Taiwanese mobile app publisher, handling everything from vendor negotiation to execution. This pilot created a new channel for lead acquisition and app installs, later adopted by the wider marketing team as a scalable source of installs.",
    tags: ["Reddit Ads", "Innovation", "Vendor Negotiation"],
    image: "/images/projects/reddit-ads.png",
    links: { demo: "#", github: "#" },
    features: ["Vendor Negotiation", "Channel Innovation", "App Installs", "Market First"],
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [previewIndex, setPreviewIndex] = useState(0) // 新增 preview index

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  // 自動輪播 preview，每 5 秒切換
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviewIndex((prev) => (prev + 4) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  }
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const nextProject = () => setActiveIndex((prev) => (prev + 1) % projects.length)
  const prevProject = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x > 50) prevProject()
    else if (info.offset.x < -50) nextProject()
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            Case studies across fintech, e-commerce, and app marketing — delivering measurable growth and innovation.
          </motion.p>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"></motion.div>
        </motion.div>

        {/* Active Project Card */}
        <motion.div
          key={activeIndex}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="grid md:grid-cols-2 gap-8 items-center project-card"
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Target size={18} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold">{projects[activeIndex].title}</h3>
            </div>

            <p className="text-gray-300 mb-4">
              {isExpanded ? projects[activeIndex].longDescription : projects[activeIndex].description}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-primary hover:text-secondary transition-colors mb-4"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              {projects[activeIndex].tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full glass border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-medium mb-2">Key Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {projects[activeIndex].features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <motion.button
                onClick={prevProject}
                className="p-2 rounded-full glass hover:bg-card/50"
                whileHover={{ scale: 1.1 }}
              >
                <ChevronLeft />
              </motion.button>
              <motion.button
                onClick={nextProject}
                className="p-2 rounded-full glass hover:bg-card/50"
                whileHover={{ scale: 1.1 }}
              >
                <ChevronRight />
              </motion.button>
            </div>
          </div>

          {/* Right Image */}
          <motion.div className="gradient-border p-1 rounded-2xl overflow-hidden">
            <div className={`rounded-xl overflow-hidden bg-gradient-to-br ${projects[activeIndex].color} p-4`}>
              <motion.div whileHover={{ scale: 1.03, rotate: 1 }} transition={{ duration: 0.3 }}>
                <Image
                  src={projects[activeIndex].image || "/placeholder.svg"}
                  alt={projects[activeIndex].title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Preview Cards (輪播顯示) */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.slice(previewIndex, previewIndex + 3).map((project, idx) => (
            <motion.div
              key={idx}
              className="glass p-5 rounded-xl hover:bg-card/30 transition-all cursor-pointer project-card"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setActiveIndex(projects.findIndex((p) => p.title === project.title))}
            >
              <div className="h-40 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-400 line-clamp-2 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full bg-primary/10 border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-gray-700">
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
