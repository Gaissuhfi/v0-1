"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // 動畫設定
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <motion.footer
      className="py-8 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div className="glass p-8 rounded-2xl" variants={container}>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            {/* 左側 */}
            <motion.div variants={item}>
              <h3 className="text-2xl font-heading font-bold mb-4 text-gradient">Gaius Chen</h3>
              <p className="text-gray-400 mb-4 max-w-xs">
                Performance Marketing Specialist with a focus on Paid Media, Analytics, and Automation.
              </p>
              <div className="flex space-x-4">
                {/* Icon Buttons */}
                {[{
                  href: "https://www.linkedin.com/in/gaiuschen",
                  label: "LinkedIn",
                  icon: <Linkedin size={20} />
                }, {
                  href: "mailto:bobo218079@gmail.com",
                  label: "Email",
                  icon: <Mail size={20} />
                }, {
                  href: "https://www.google.com/maps/place/New+Taipei+City",
                  label: "Location",
                  icon: <MapPin size={20} />
                }].map(({ href, label, icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
                    aria-label={label}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* 中間快速連結 */}
            <motion.div variants={item}>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["home", "about", "skills", "projects", "experience", "contact"].map((itemName) => (
                  <li key={itemName}>
                    <a
                      href={`#${itemName}`}
                      className="text-gray-400 hover:text-white transition-colors capitalize"
                    >
                      {itemName}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 專業領域 */}
            <motion.div variants={item}>
              <h3 className="text-lg font-bold mb-4">Expertise</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Paid Media Strategy</li>
                <li>Google / Meta / ASA Ads</li>
                <li>GA4 / Looker Studio</li>
                <li>Campaign Automation</li>
                <li>App & Web Attribution</li>
              </ul>
            </motion.div>
          </div>

          {/* 底部 */}
          <motion.div
            className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p>&copy; {currentYear} Gaius Chen. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
