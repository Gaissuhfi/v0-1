"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Send, Bot, User, Sparkles, RefreshCw } from "lucide-react"
import Image from "next/image"

// Predefined chat messages
const initialMessages = [
  {
    role: "assistant",
    content: "👋 Hi there! I'm AI Bro, your virtual assistant. Ask me about Gaius's work experience, skills, or projects!",
  },
]

const experienceResponses = [
  {
    role: "assistant",
    content: `Gaius has over 4 years of experience in performance marketing and digital advertising:

**Senior Digital Marketing Specialist** — Chailease Holding (2024–Present)  
• Lead in-house acquisition strategy for financing and installment products  
• Implemented analytics-driven optimization with GA4, Tableau, Looker Studio, AppsFlyer, Mixpanel  
• Shifted from agency to in-house buying, cutting costs significantly  
• Managed monthly ad budgets over NT$2M (~CAD $80K)  
• Achieved CPL ↓30%, CPF ↓50%, CPI ↓35%  

**Account Strategy (Performance Marketing Focus)** — AnyMind Group (2023–2024)  
• Planned and executed paid campaigns across APAC (Taiwan, Vietnam, Japan, Singapore)  
• Optimized ROAS and demand generation for diverse industries  
• Managed NT$1–2M monthly budgets, reporting directly to Country Manager  
• Supported e-commerce brand initiatives with >12% margin growth  

**Paid Media Specialist** — All9fun Inc. (2021–2023)  
• Managed UA campaigns for gaming & app products across Google, Meta, ASA, TikTok, AppLovin, Reddit  
• Reduced costs by 50% while maintaining conversion quality  
• Built IAP-event visualization to improve attribution accuracy  
• Negotiated and launched Reddit Ads campaigns, first in company history`,
  },
]

const skillsResponses = [
  {
    role: "assistant",
    content: `Gaius specializes in:

**Paid Media Strategy** - Google Ads, Meta Ads, TikTok Ads, Apple Search Ads  
**Analytics & Attribution** - GA4, Looker Studio, AppsFlyer, Mixpanel, Tableau  
**Campaign Automation** - Reporting automation with Apps Script / Looker Studio connectors  
**AI Marketing** - Applying AI tools for creative optimization, campaign analysis, and workflow automation  
**Languages** - English (Fluent), Chinese (Native), Taiwanese (Conversational)`,
  },
]

const projectResponses = [
  {
    role: "assistant",
    content: `Some highlighted projects include:

**In-house Marketing Migration** — Built reporting infra + dashboards, transitioned from agency to in-house, cutting costs while scaling volume  
**Cross-border eCommerce Launches** — Supported APAC campaigns (Shopee, etc.), driving localized performance uplift  
**Gaming/App UA Growth** — Hit CPI goals across Tier 1/SEA markets through creative iteration & budget control  
**Automation Workflows** — Created ad ops automation scripts (daily reporting, budget alerts), reducing manual effort significantly`,
  },
]

// Extended services
const aiMarketingResponses = [
  {
    role: "assistant",
    content: `Excellent choice! Gaius's AI Marketing services include:

**Creative Optimization** - Using AI to test and analyze ad creatives faster  
**Campaign Insights** - Automating analysis with AI-driven dashboards  
**Audience Targeting** - Leveraging AI to identify high-value cohorts  
**Workflow Automation** - Reducing repetitive tasks with AI-assisted processes  

**Technologies Used:**  
• Looker Studio, GA4, AppsFlyer  
• Google Ads Scripts / Apps Script automation  
• AI-powered creative testing & reporting  

Would you like to discuss how AI can enhance your marketing campaigns?`,
  },
]

const processAutomationResponses = [
  {
    role: "assistant",
    content: `Perfect! Gaius's process automation work covers:

**Ad Ops Automation** - Daily budget pacing, alerts, reporting  
**Workflow Optimization** - Streamlined campaign management  
**API / Connector Use** - Apps Script + Looker Studio integrations  
**Task Automation** - Automated scheduling and reporting updates  

These automations reduced manual reporting time by 70% and improved decision-making speed.`,
  },
]

const dataAnalyticsResponses = [
  {
    role: "assistant",
    content: `Gaius's analytics expertise includes:

**Campaign Performance Dashboards** - Unified multi-channel reporting (Google, Meta, TikTok, ASA)  
**Attribution Analysis** - AppsFlyer, Mixpanel for cross-device tracking  
**KPI Tracking** - CPL, CPF, CPI, LTV monitoring  
**Real-time Insights** - Looker Studio dashboards for stakeholders  

Focused on actionable insights to improve marketing ROI.`,
  },
]

const chatbotResponses = [
  {
    role: "assistant",
    content: `Gaius has applied chatbot-style automation in marketing contexts:

**Lead Qualification Bots** - Automated flows to pre-screen prospects  
**FAQ Automation** - Reducing repetitive service questions  
**Integration** - With CRM and campaign data  

These solutions help improve conversion while reducing workload.`,
  },
]

// Rich text formatting function
const formatMessage = (content: string) => {
  let formatted = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
  formatted = formatted.replace(/^• (.+)$/gm, "<li>$1</li>")
  formatted = formatted.replace(/(<li>.*<\/li>\s*)+/gs, "<ul>$&</ul>")
  formatted = formatted.replace(/\n\n/g, "<br><br>")
  formatted = formatted.replace(/\n/g, "<br>")
  return formatted
}

export default function AIChatSection() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatMessagesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()

  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      inputRef.current?.focus()
    }, 100)

    setTimeout(() => {
      let response
      const lowercaseInput = input.toLowerCase()

      if (lowercaseInput.includes("experience") || lowercaseInput.includes("work")) {
        response = experienceResponses[0]
      } else if (lowercaseInput.includes("skill")) {
        response = skillsResponses[0]
      } else if (lowercaseInput.includes("project")) {
        response = projectResponses[0]
      } else if (lowercaseInput.includes("ai marketing")) {
        response = aiMarketingResponses[0]
      } else if (lowercaseInput.includes("automation")) {
        response = processAutomationResponses[0]
      } else if (lowercaseInput.includes("analytics")) {
        response = dataAnalyticsResponses[0]
      } else if (lowercaseInput.includes("chatbot")) {
        response = chatbotResponses[0]
      } else {
        response = {
          role: "assistant",
          content:
            "I can tell you about Gaius's work experience, skills, projects, or extended services like AI Marketing, process automation, data analytics, and chatbot automation. What would you like to know?",
        }
      }

      setMessages((prev) => [...prev, response])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    const userMessage = { role: "user", content: question }
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      let response
      if (question.includes("experience")) {
        response = experienceResponses[0]
      } else if (question.includes("skills")) {
        response = skillsResponses[0]
      } else if (question.includes("projects")) {
        response = projectResponses[0]
      }
      if (response) setMessages((prev) => [...prev, response])
      setIsTyping(false)
    }, 1500)
  }

  const resetChat = () => {
    setMessages(initialMessages)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const chatElementVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Chat with <span className="text-gradient">AI Ibro</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            Ask about my work experience, skills, projects, or extended marketing services
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div className="max-w-3xl mx-auto" ref={chatContainerRef}>
          <motion.div
            className="glass rounded-2xl overflow-hidden chat-element"
            variants={chatElementVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Chat header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-card/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">AI Ibro</h3>
                  <p className="text-xs text-gray-400">Virtual Assistant</p>
                </div>
              </div>
              <button onClick={resetChat} className="p-2 rounded-full hover:bg-white/10" type="button">
                <RefreshCw size={16} />
              </button>
            </div>

            {/* Chat messages */}
            <div ref={chatMessagesRef} className="h-[400px] overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.role === "user" ? "bg-primary/20 text-white" : "bg-card/50 text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.role === "assistant" ? (
                        <Bot size={16} className="text-primary" />
                      ) : (
                        <User size={16} className="text-secondary" />
                      )}
                      <span className="text-xs font-medium">{message.role === "assistant" ? "AI Ibro" : "You"}</span>
                    </div>
                    <div className="text-sm rich-text" dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }} />
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div className="flex justify-start" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="max-w-[80%] rounded-2xl p-3 bg-card/50 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Bot size={16} className="text-primary" />
                      <span className="text-xs font-medium">AI Ibro</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce"></span>
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}
            <div className="p-3 border-t border-white/10 flex gap-2 overflow-x-auto">
              <button type="button" onClick={() => handleQuickQuestion("Tell me about Gaius's work experience")} className="px-3 py-1 text-xs rounded-full bg-card/50 border border-white/10">
                Work experience
              </button>
              <button type="button" onClick={() => handleQuickQuestion("What are Gaius's skills?")} className="px-3 py-1 text-xs rounded-full bg-card/50 border border-white/10">
                Skills
              </button>
              <button type="button" onClick={() => handleQuickQuestion("Tell me about Gaius's projects")} className="px-3 py-1 text-xs rounded-full bg-card/50 border border-white/10">
                Projects
              </button>
            </div>

            {/* Chat input */}
            <div className="p-4 border-t border-white/10">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my experience, skills, or projects..."
                  className="flex-1 bg-card/50 rounded-full px-4 py-2 text-sm"
                  autoComplete="off"
                />
                <button type="submit" className="p-2 rounded-full bg-gradient-to-r from-primary to-secondary" disabled={!input.trim()}>
                  <Send size={18} className="text-white" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* AI Assistant avatar */}
          <motion.div className="mt-8 flex justify-center chat-element" initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}>
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30">
                <Image src="/images/avatar.png" alt="Gaius Chen" width={96} height={96} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Sparkles size={14} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
