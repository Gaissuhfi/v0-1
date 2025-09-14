"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(var(--primary),0.1),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in working together or just want to say hi? Feel free to connect through any of the options below.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="glass p-6 flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <a
                  href="mailto:bobo218079@gmail.com"
                  className="text-gray-400 hover:underline"
                >
                  bobo218079@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="glass p-6 flex items-start space-x-4">
              <div className="p-3 rounded-full bg-secondary/20">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <a
                  href="tel:+886903024283"
                  className="text-gray-400 hover:underline"
                >
                  (+886) 903-024-283
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="glass p-6 flex items-start space-x-4">
              <div className="p-3 rounded-full bg-blue-500/20">
                <FaLinkedin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/gaiuschen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline"
                >
                  linkedin.com/in/gaiuschen
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="glass p-6 flex items-start space-x-4">
              <div className="p-3 rounded-full bg-green-500/20">
                <MapPin className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <a
                  href="https://www.google.com/maps/place/New+Taipei+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline"
                >
                  New Taipei City, Taiwan
                </a>
              </div>
            </div>
          </motion.div>

          {/* 空白展示圖 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <Send className="w-32 h-32 text-primary/20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
