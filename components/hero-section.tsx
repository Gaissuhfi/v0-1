"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import AnimatedText from "./animated-text"
import AnimatedAvatar from "./animated-avatar"
import { useResponsive } from "@/hooks/use-responsive"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // 桌機版維持初始設定
  })

  const { isMobile } = useResponsive()

  // 桌機版淡出，手機維持不暗
  const opacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 1] : [0, 0.5],
    isMobile ? [1, 1] : [1, 0.2]
  )
  const scale = useTransform(
    scrollYProgress,
    isMobile ? [0, 1] : [0, 0.5],
    isMobile ? [1, 1] : [1, 0.9]
  )
  const y = useTransform(
    scrollYProgress,
    isMobile ? [0, 1] : [0, 0.5],
    isMobile ? [0, 0] : [0, 50]
  )

  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (particlesRef.current) {
      const particleCount = isMobile ? 20 : 40
      const particles: HTMLDivElement[] = []

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div")
        const size = Math.random() * 4 + 1

        particle.className = "absolute rounded-full pointer-events-none"
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.background =
          i % 3 === 0
            ? "rgba(124,193,255,0.7)"
            : i % 3 === 1
            ? "rgba(255,82,193,0.7)"
            : "rgba(0,225,244,0.7)"

        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animation = `float-${i % 3} ${5 + Math.random() * 5}s ease-in-out infinite`
        particle.style.animationDelay = `${Math.random() * 5}s`

        particlesRef.current.appendChild(particle)
        particles.push(particle)
      }

      return () => {
        if (particlesRef.current) {
          particles.forEach((p) => p.remove())
        }
      }
    }
  }, [isMobile])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-20"
    >
      {/* 粒子背景 */}
      <div ref={particlesRef} className="absolute inset-0 z-0" />

      {/* 主內容 */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl"
      >
        {/* 左側文字 */}
        <div className="text-left space-y-6">
          <span className="text-lg text-blue-400">👋 Hi, I'm Gaius</span>
          <AnimatedText
            text="PERFORMANCE MARKETING SPECIALIST"
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          />
          <p className="text-gray-300 text-lg max-w-xl">
            Driving growth with data-driven advertising & lead generation across multiple channels. 
            Proven expertise in reducing CPL, scaling campaigns, and optimizing conversions.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/gaiuschen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
            >
              Visit my LinkedIn
            </a>
          </div>
        </div>

        {/* 右側卡片 */}
        <div className="flex justify-center md:justify-end">
          <div className="p-6 rounded-2xl bg-[#12182b] shadow-xl text-center w-80">
            <AnimatedAvatar />
            <h3 className="text-xl font-semibold mt-4">Gaius</h3>
            <p className="text-blue-400">Performance Marketing Expert</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <span className="block text-2xl font-bold text-blue-400">5+</span>
                Years Exp
              </div>
              <div>
                <span className="block text-2xl font-bold text-purple-400">200M+</span>
                Ad Spend Managed
              </div>
              <div>
                <span className="block text-2xl font-bold text-green-400">30%</span>
                CPL Reduction
              </div>
              <div>
                <span className="block text-2xl font-bold text-pink-400">50%</span>
                CPF Growth
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 下方提示箭頭 */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  )
}
