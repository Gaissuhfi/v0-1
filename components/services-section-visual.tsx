"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Layers, Brain, ShoppingCart, DollarSign } from "lucide-react"

const services = [
  {
    title: "Paid Media Strategy",
    description:
      "Cross-channel campaign planning and execution across Google, Meta, TikTok, and ASA — maximizing growth with data-driven targeting.",
    icon: TrendingUp,
    gradient: "from-pink-500 via-purple-500 to-blue-500",
  },
  {
    title: "Campaign Optimization",
    description:
      "Cut CPL, boost ROAS, and scale campaigns through A/B testing and real-time data optimization.",
    icon: BarChart3,
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    title: "Performance Analytics",
    description:
      "Turn GA4, AppsFlyer, and Looker Studio into actionable insights for smarter ad decisions.",
    icon: Layers,
    gradient: "from-purple-500 via-pink-500 to-red-500",
  },
  {
    title: "AI Tools Integration",
    description:
      "Use GPT, Midjourney, Heygen, v0, and more to accelerate your workflow and creativity.",
    icon: Brain,
    gradient: "from-green-400 via-teal-500 to-blue-500",
  },
  {
    title: "E-commerce Growth",
    description:
      "Launched and scaled eCommerce campaigns in APAC, supporting internal brand growth into Top 3 regional performance.",
    icon: ShoppingCart,
    gradient: "from-orange-400 via-red-500 to-pink-500",
  },
  {
    title: "Financial Ads Expertise",
    description:
      "Specialized in lead generation for financial products — optimizing CPL while ensuring compliance and scalability.",
    icon: DollarSign,
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            My Best Quality <span className="text-gradient">Services</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="relative p-8 rounded-2xl shadow-lg text-left group overflow-hidden border border-white/10 will-change-transform"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                {/* 背景漸層 + Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-30 group-hover:opacity-50 transition-all duration-500 bg-[length:200%_200%] group-hover:bg-[position:100%_0]`}
                ></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-500 blur-3xl bg-white"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-md mb-6 transition-transform duration-300 group-hover:rotate-12`}
                  >
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-100">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
