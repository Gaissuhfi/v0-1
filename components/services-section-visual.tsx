"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Settings, BarChart3, Sparkles } from "lucide-react"

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2, fallback: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const services = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Paid Media Strategy",
      description:
        "Developing full-funnel media strategies across Google, Meta, ASA, and TikTok to maximize lead generation and brand growth.",
    },
    {
      icon: <Settings className="w-8 h-8 text-secondary" />,
      title: "Campaign Optimization",
      description:
        "Reducing CPA and improving ROAS through continuous testing, bid strategies, and creative iteration.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: "Performance Analytics",
      description:
        "Leveraging GA4, AppsFlyer, and Looker Studio to build data-driven insights and dashboards for better decision making.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-400" />,
      title: "AI Tools Integration",
      description:
        "Using GPT, Midjourney, Heygen, Gemini, v0, and Loveable to enhance ad creatives, automate workflows, and scale smarter.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(var(--secondary),0.1),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            My <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="glass p-6 md:p-8 rounded-2xl text-center card-hover"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
