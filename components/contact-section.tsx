"use client"

import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const contactItems = [
  {
    icon: <Mail className="w-6 h-6 text-pink-400" />,
    title: "Email",
    value: "bobo218079@gmail.com",
    href: "mailto:bobo218079@gmail.com",
    bg: "bg-pink-900/30",
  },
  {
    icon: <Phone className="w-6 h-6 text-cyan-400" />,
    title: "Phone",
    value: "+886 903 024 283",
    href: "tel:+886903024283",
    bg: "bg-cyan-900/30",
  },
  {
    icon: <MapPin className="w-6 h-6 text-yellow-400" />,
    title: "Location",
    value: "New Taipei City, Taiwan",
    href: "https://www.google.com/maps/place/New+Taipei+City",
    bg: "bg-yellow-900/30",
  },
  {
    icon: <Linkedin className="w-6 h-6 text-violet-400" />,
    title: "LinkedIn",
    value: "linkedin.com/in/gaiuschen",
    href: "https://www.linkedin.com/in/gaiuschen",
    bg: "bg-violet-900/30",
  },
]

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-[#0b0f1a] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-4 p-6 rounded-xl hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer ${item.bg}`}
              whileHover={{ scale: 1.05 }}
            >
              <div>{item.icon}</div>
              <div>
                <p className="text-sm text-gray-400">{item.title}</p>
                <p className="text-lg font-medium text-white">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
