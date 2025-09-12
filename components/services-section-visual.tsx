"use client"

import { motion } from "framer-motion"
import { Target, BarChart, Layers, Brain } from "lucide-react"

const services = [
  {
    title: "Paid Media Strategy",
    description:
      "Full-funnel campaign planning across Google, Meta, TikTok, and ASA to build scalable and sustainable growth.",
    icon: Target,
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
  },
  {
    title: "Campaign Optimization",
    description:
      "Lower CPL, improve ROAS, and maximize conversions with data-driven optimization and automated A/B testing.",
    icon: BarChart,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  },
  {
    title: "Performance Analytics",
    description:
      "Integrating GA4, AppsFlyer, and Looker Studio to turn raw data into actionable insights and live dashboards.",
    icon: Layers,
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
  {
    title: "AI Tools Integration",
    description:
      "Leverage GPT, Midjourney, Heygen, v0, and Lovable to boost creativity, automate workflows, and improve collaboration.",
    icon: Brain,
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            My Best Quality <span className="text-gradient">Services</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl shadow-lg text-left group overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Animated Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 blur-2xl group-hover:opacity-40 group-hover:blur-3xl transition-all duration-500`}
                ></div>

                {/* Icon */}
                <motion.div
                  className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-md mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Icon size={24} />
                </motion.div>

                {/* Title */}
                <h3 className="relative text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Arrow CTA */}
                <motion.div
                  className="absolute bottom-6 right-6 text-gray-400 group-hover:text-primary"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  →
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
