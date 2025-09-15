"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "AI Chat" },
  { id: "blogs", label: "Blog" },
  { id: "contact", label: "Contact" },
]

export default function SectionIndicators() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)

  // rAF 節流旗標，避免在行動裝置上高頻率 setState
  const ticking = useRef(false)
  const lastActive = useRef(activeSection)

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        try {
          // 顯示/隱藏側邊點
          setIsVisible(window.scrollY > 300)

          // 找出目前在視窗內的 section（取第一個符合者）
          let found = lastActive.current
          for (const s of sections) {
            const el = document.getElementById(s.id)
            if (!el) continue
            const rect = el.getBoundingClientRect()
            if (rect.top <= 150 && rect.bottom >= 150) {
              found = s.id
              break
            }
          }

          if (found !== lastActive.current) {
            lastActive.current = found
            setActiveSection(found)
          }
        } finally {
          ticking.current = false
        }
      })
    }

    // 加 passive 可減少行動端滾動開銷
    window.addEventListener("scroll", onScroll, { passive: true })
    // 初始化：掛載後先算一次，避免初始狀態錯誤
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.div
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className="group relative flex items-center"
          aria-label={`Navigate to ${section.label} section`}
        >
          <motion.div
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? "bg-primary shadow-[0_0_10px_rgba(var(--primary),0.7)]"
                : "bg-gray-600 hover:bg-gray-400"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg pointer-events-none whitespace-nowrap border border-white/10 translate-x-2 group-hover:translate-x-0">
            {section.label}
          </div>
        </Link>
      ))}
    </motion.div>
  )
}
