"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Target, BarChart3, Layers, Brain, ShoppingCart, DollarSign } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Paid Media Strategy",
    description: "Full-funnel campaign planning and execution across Google, Meta, TikTok, and ASA.",
    features: ["Google Ads", "Meta Ads", "TikTok Ads", "Apple Search Ads"],
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Campaign Optimization",
    description: "Driving efficiency and growth with data-driven testing and automation.",
    features: ["A/B Testing", "CPL Reduction", "ROAS Boost", "Automation"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Layers,
    title: "Performance Analytics",
    description: "Transforming multi-channel data into actionable insights and ROI dashboards.",
    features: ["GA4", "AppsFlyer", "Looker Studio", "Tableau"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI Tools Integration",
    description: "Enhancing workflow and creativity with cutting-edge AI tools.",
    features: ["GPT", "Midjourney", "Heygen", "v0 & Lovable"],
    color: "from-green-400 to-teal-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Growth Leadership",
    description: "Scaling APAC campaigns and launching D2C initiatives with measurable impact.",
    features: ["Shopee Top-3 APAC", "D2C Growth", "Margin +12%", "Multi-market Strategy"],
    color: "from-orange-400 to-red-500",
  },
  {
    icon: DollarSign,
    title: "Financial Ads Expertise",
    description: "Lead generation and in-house campaign management for fintech products.",
    features: ["Lead Gen", "CPL Optimization", "Compliance", "In-house Transition"],
    color: "from-yellow-400 to-orange-500",
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            MY BEST QUALITY <span className="text-gradient italic">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world expertise in paid media, analytics, and AI-driven growth — proven across fintech, e-commerce, and app marketing.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="glass rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-400"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 group-hover:bg-secondary transition-colors duration-300"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
