"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart, Target, Layers, Brain } from "lucide-react"

const services = [
  {
    title: "Paid Media Strategy",
    description: "Full-funnel planning across Google, Meta, TikTok & ASA — maximizing growth with precision targeting.",
    icon: Target,
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
  },
  {
    title: "Campaign Optimization",
    description: "Cut CPL, boost ROAS, and scale campaigns through A/B testing and real-time data optimization.",
    icon: BarChart,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  },
  {
    title: "Performance Analytics",
    description: "Turn GA4, AppsFlyer, and Looker Studio into actionable insights for smarter ad decisions.",
    icon: Layers,
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
  {
    title: "AI Tools Integration",
    description: "Leverage GPT, Midjourney, Heygen, v0, and more to accelerate your workflow and creativity.",
    icon: Brain,
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* 標題 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            My Best Quality <span className="text-gradient">Services</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        {/* 卡片排版 */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[220px]">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`
                  relative rounded-2xl p-6 md:p-8 cursor-pointer
                  bg-gradient-to-br ${service.gradient} 
                  backdrop-blur-xl shadow-xl
                  group overflow-hidden
                `}
              >
                <div className="flex flex-col h-full justify-between relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Icon className="w-7 h-7 text-white drop-shadow-glow" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mt-4 mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-200 leading-relaxed">{service.description}</p>

                  {/* Arrow Btn */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition"
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </motion.button>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white blur-3xl transition-all duration-500" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
