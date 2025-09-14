"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Linkedin, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // 星空動畫
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    let animationFrameId: number

    if (!canvas || !ctx) return

    let stars: { x: number; y: number; r: number; alpha: number }[] = []
    const numStars = 120

    const init = () => {
      stars = []
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.5,
          alpha: Math.random(),
        })
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let star of stars) {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()
        star.alpha += (Math.random() - 0.5) * 0.05
        star.alpha = Math.max(0.1, Math.min(1, star.alpha))
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = 400
      init()
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <motion.footer className="relative z-10">
      {/* 星空 Canvas 背景 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-[400px] z-0"
      />

      <div className="relative container mx-auto px-4 py-16">
        <motion.div className="glass p-10 rounded-2xl backdrop-blur-xl bg-card/70 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            {/* 左側：個人資訊 */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Gaius Chen</h3>
              <p className="text-gray-300 mb-4 max-w-xs">
                Performance Marketing Specialist with a focus on Paid Media, Analytics, and Automation.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/gaiuschen"
                  target="_blank"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:bobo218079@gmail.com"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.google.com/maps/place/New+Taipei+City"
                  target="_blank"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                >
                  <MapPin size={20} />
                </a>
              </div>
            </div>

            {/* 快速連結（去除 skills） */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                {["home", "about", "projects", "experience", "contact"].map((name) => (
                  <li key={name}>
                    <a
                      href={`#${name}`}
                      className="hover:text-white capitalize transition"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 技能描述 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Expertise</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Google / Meta / ASA Ads</li>
                <li>GA4 / Looker Studio</li>
                <li>AppsFlyer / Attribution</li>
                <li>Performance Strategy</li>
                <li>Marketing Automation</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Gaius Chen. All rights reserved.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
