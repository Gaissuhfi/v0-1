"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, Briefcase, MessageCircle, Menu, X, BookOpen } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Services", href: "#services", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Blog", href: "#blogs", icon: BookOpen },   // 對應 <section id="blogs">
  { name: "Contact", href: "#contact", icon: MessageCircle },
]

const hrefToId = (href: string) => (href.startsWith("#") ? href.slice(1) : href)

export default function FloatingSidebar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const ticking = useRef(false)
  const lastActive = useRef(activeSection)

  // 平滑捲動到對應錨點（同頁面）
  const smoothNavigate = (href: string) => {
    const id = hrefToId(href)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      // 找不到元素時回退到 hash（例如不同頁或尚未渲染）
      window.location.hash = `#${id}`
    }
  }

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        try {
          const y = window.scrollY
          setScrolled(y > 100)

          const ids = navItems.map((item) => hrefToId(item.href))
          let found = lastActive.current

          for (const id of ids) {
            const el = document.getElementById(id)
            if (!el) continue
            const rect = el.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              found = id
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

    window.addEventListener("scroll", onScroll, { passive: true })
    // 掛載後先算一次，避免初始狀態不正確
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <motion.div
        className="hidden lg:block fixed z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {!scrolled ? (
            // Top Navigation Bar
            <motion.nav
              key="topnav"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: -50,
                x: -200,
                scale: 0.8,
                opacity: 0,
                transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full glass backdrop-blur-xl border-b border-white/10"
              style={{ background: "rgba(10, 10, 15, 0.8)" }}
            >
              <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                  <Link
                    href="#home"
                    className="text-2xl font-heading font-bold"
                    onClick={(e) => {
                      e.preventDefault()
                      smoothNavigate("#home")
                    }}
                  >
                    <span className="text-gradient">Gaius</span>
                  </Link>

                  <div className="flex items-center space-x-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          smoothNavigate(item.href)
                        }}
                        className={`text-sm font-medium transition-all duration-300 relative group ${
                          activeSection === hrefToId(item.href)
                            ? "text-primary"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {item.name}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.nav>
          ) : (
            // Side Navigation Bar
            <motion.nav
              key="sidenav"
              initial={{ x: -200, y: -50, scale: 0.8, opacity: 0 }}
              animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              exit={{ x: -200, y: -50, scale: 0.8, opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="fixed left-6 glass backdrop-blur-xl rounded-2xl border border-white/10 p-4"
              style={{
                background: "rgba(10, 10, 15, 0.9)",
                top: "35%",
                transform: "translateY(50%)",
                zIndex: 50,
              }}
            >
              <div className="flex flex-col space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center mb-2"
                >
                  <Link
                    href="#home"
                    className="text-lg font-heading font-bold"
                    onClick={(e) => {
                      e.preventDefault()
                      smoothNavigate("#home")
                    }}
                  >
                    <span className="text-gradient">GC</span>
                  </Link>
                </motion.div>

                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeSection === hrefToId(item.href)
                  return (
                    <motion.div
                      key={item.name}
                      className="relative group"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          smoothNavigate(item.href)
                        }}
                        className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 relative ${
                          isActive ? "bg-primary/20 text-primary" : "text-gray-400 hover:text-white hover:bg-white/10"
                        }`}
                        title={item.name}
                      >
                        <Icon size={20} />
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl border border-primary/30"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </Link>

                      {/* Tooltip */}
                      <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-card/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10 translate-x-2 group-hover:translate-x-0">
                        {item.name}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        className="lg:hidden fixed top-4 right-4 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="w-12 h-12 glass backdrop-blur-xl rounded-xl border border-white/10 flex items-center justify-center text-white"
          style={{ background: "rgba(10, 10, 15, 0.9)" }}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 right-0 glass backdrop-blur-xl rounded-2xl border border-white/10 p-4 min-w-[200px]"
              style={{ background: "rgba(10, 10, 15, 0.95)" }}
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSection === hrefToId(item.href)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        smoothNavigate(item.href)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActive ? "bg-primary/20 text-primary" : "text-gray-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
