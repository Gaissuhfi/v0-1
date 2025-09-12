"use client"

import { motion } from "framer-motion"
import { ArrowRight, BarChart, Target, Layers, Brain } from "lucide-react"

const services = [
  {
    title: "Paid Media Strategy",
    description: "Multi-channel campaign planning and execution across Google, Meta, TikTok, and more.",
    icon: Target,
    size: "large",
    action: "chatbot:strategy",
  },
  {
    title: "Campaign Optimization",
    description: "Lower CPL, improve ROAS, and maximize conversions with data-driven optimization.",
    icon: BarChart,
    size: "small",
    action: "chatbot:optimization",
  },
  {
    title: "Performance Analytics",
    description: "GA4, AppsFlyer, Looker Studio—turn raw data into actionable insights.",
    icon: Layers,
    size: "small",
    action: "chatbot:analytics",
  },
  {
    title: "AI Tools Integration",
    description: "Use GPT, Midjourney, Heygen, v0, and more to supercharge your advertising workflow.",
    icon: Brain,
    size: "medium",
    action: "chatbot:ai",
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
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[200px]">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`
                  relative rounded-2xl p-6 md:p-8 text-white cursor-pointer
                  bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20
                  backdrop-blur-xl border border-white/10 shadow-lg
                  ${service.size === "large" ? "md:row-span-2" : ""}
                  ${service.size === "medium" ? "md:col-span-2" : ""}
                `}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-300">{service.description}</p>
                  </div>

                  {/* 右下角箭頭按鈕 */}
                  <button
                    onClick={() => console.log("Trigger chatbot:", service.action)}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
