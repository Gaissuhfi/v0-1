"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 relative bg-gradient-to-b from-[#0b1020] via-[#12182b] to-[#0b1020] text-white">
      <div className="container mx-auto px-4">
        <div className="glass p-8 rounded-2xl backdrop-blur-md bg-white/5 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            {/* 個人資訊區 */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-gradient">Gaius Chen</h3>
              <p className="text-gray-400 mb-4 max-w-xs">
                Performance Marketing Specialist based in Taipei, passionate about automation & data.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://twitter.com/"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/gaiuschen"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://instagram.com/"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </div>

            {/* 快速導覽區 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-white">Experience</a></li>
                <li>
                  <a href="mailto:bobo218079@gmail.com" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* 聯絡資訊區 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail size={16} />
                  <a href="mailto:bobo218079@gmail.com" className="hover:text-white">bobo218079@gmail.com</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={16} />
                  <a href="tel:+886903024283" className="hover:text-white">+886-903-024-283</a>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <a
                    href="https://www.google.com/maps/place/New+Taipei+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    New Taipei City, Taiwan
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 底部版權 */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {currentYear} Gaius Chen. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
