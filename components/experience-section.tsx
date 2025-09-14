"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import anime from "animejs"

const experiences = [
  {
    company: "Chailease Holding",
    position: "Performance Marketing Specialist",
    period: "2023 - Present",
    description:
      "Managed and optimized multi-channel digital advertising campaigns (Google, Meta, ASA) for financial services and fintech products.",
    achievements: [
      "Reduced cost-per-lead (CPL) by 30% through campaign restructuring and audience testing",
      "Migrated brand campaigns from agency to in-house with measurable KPI uplift",
      "Developed GA4 + Looker Studio dashboards to automate reporting and reduce manual workload"
    ],
    technologies: ["Google Ads", "Meta Ads", "ASA", "GA4", "Looker Studio", "Apps Script"]
  },
  {
    company: "AnyMind Group",
    position: "Performance Marketing Executive",
    period: "2022 - 2023",
    description:
      "Led user acquisition campaigns for e-commerce, app install, and influencer commerce clients across Asia.",
    achievements: [
      "Improved ROAS by 42% for a key retail client via advanced audience segmentation",
      "Built customized conversion funnel analysis with Google Analytics & AppsFlyer",
      "Operated cross-border campaigns in Japan, Taiwan, and SEA markets"
    ],
    technologies: ["Google Ads", "Meta Ads", "AppsFlyer", "TikTok Ads", "Mixpanel", "Excel"]
  },
  {
    company: "All9fun Inc.",
    position: "Digital Advertising Strategist",
    period: "2020 - 2022",
    description:
      "Oversaw paid advertising and conversion tracking for gaming and entertainment verticals.",
    achievements: [
      "Lowered CPF by 50% through creative A/B testing and funnel optimization",
      "Built full-funnel reporting from ad to in-app events with AppsFlyer & Firebase",
      "Scaled campaigns across Google UAC and Meta with daily budgets exceeding NT$200k"
    ],
    technologies: ["UAC", "Firebase", "Meta Ads", "Google Sheets", "ASO", "Tableau"]
  }
]

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  // Changed once to false and reduced threshold to ensure better triggering
  const isInView = useInView(ref, { once: false, amount: 0.1, fallback: true })
  const controls = useAnimation()
  const timelineRef = useRef<HTMLDivElement>(null)

  // Ensure animations run when component mounts
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible")

      // Animate timeline elements
      if (timelineRef.current) {
        anime({
          targets: timelineRef.current.querySelectorAll(".timeline-dot"),
          scale: [0, 1],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 800,
          delay: anime.stagger(300),
          complete: function() {
            const elements = timelineRef.current?.querySelectorAll(".timeline-dot");
            if (elements) {
              elements.forEach(el => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "scale(1)";
              });
            }
          }
        })

        anime({
          targets: timelineRef.current.querySelectorAll(".timeline-line"),
          scaleY: [0, 1],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: 300,
          complete: function() {
            const elements = timelineRef.current?.querySelectorAll(".timeline-line");
            if (elements) {
              elements.forEach(el => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "scaleY(1)";
              });
            }
          }
        })

        anime({
          targets: timelineRef.current.querySelectorAll(".experience-card"),
          translateX: [40, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 800,
          delay: anime.stagger(300),
          complete: function() {
            const elements = timelineRef.current?.querySelectorAll(".experience-card");
            if (elements) {
              elements.forEach(el => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateX(0)";
              });
            }
          }
        })
      }
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-gradient-to-b from-card/50 to-background">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
          style={{ opacity: 1 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 max-w-2xl mx-auto">
            My professional journey in paid media and digital performance marketing.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"
          ></motion.div>
        </motion.div>

        <div className="max-w-5xl mx-auto" ref={timelineRef}>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2 timeline-line origin-top"></div>
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 ml-12" : "md:pl-12 ml-12 md:ml-auto"}`}
                style={{ width: "100%", maxWidth: "45%", opacity: 1 }}
              >
                <div
                  className={`absolute top-0 ${index % 2 === 0 ? "left-0 md:right-0 md:left-auto" : "left-0"} w-4 h-4 rounded-full bg-primary transform translate-x-[-8px] md:translate-x-[-50%] timeline-dot z-10`}
                  style={{ opacity: 1 }}
                ></div>
                <motion.div
                  className="glass p-6 md:p-8 experience-card"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)", transition: { duration: 0.2 } }}
                  style={{ opacity: 1 }}
                >
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/20 text-primary mb-4">
                    {exp.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">{exp.position}</h3>
                  <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <h5 className="text-sm font-medium mb-2 text-secondary">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-400">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-xs rounded-full bg-card/50 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          style={{ opacity: 1 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass bg-primary/10 hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(252, 82, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
