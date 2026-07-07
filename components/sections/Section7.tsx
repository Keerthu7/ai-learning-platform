'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Circle, LineChart, Diamond, Star, Square, CheckCircle, CircleDot, Zap } from 'lucide-react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const dashboards = [
  { title: 'Progress Ring', icon: <Circle className="w-8 h-8" /> },
  { title: 'Learning Graph', icon: <LineChart className="w-8 h-8" /> },
  { title: 'Skill Radar', icon: <Diamond className="w-8 h-8" /> },
  { title: 'XP Counter', icon: <Star className="w-8 h-8" /> },
  { title: 'Portfolio Status', icon: <Square className="w-8 h-8" /> },
  { title: 'Interview Score', icon: <CheckCircle className="w-8 h-8" /> },
  { title: 'Project Completion', icon: <CircleDot className="w-8 h-8" /> },
  { title: 'Resume Score', icon: <Zap className="w-8 h-8" /> },
]

export default function Section7() {
  const containerRef = useRef<HTMLDivElement>(null)
  const dashboardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    dashboardsRef.current.forEach((dashboard, index) => {
      if (!dashboard) return

      gsap.fromTo(
        dashboard,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: dashboard,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.3,
          },
        }
      )
    })
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Abstract Dashboards
          </h2>
          <p className="text-white/50 text-lg mt-4">Glimpses of progress, not the whole picture</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dashboards.map((dash, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                dashboardsRef.current[index] = el
              }}
              className="relative h-32 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glassmorphic container */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-lg border border-white/10 rounded-lg group-hover:border-blue-500/30 group-hover:from-white/12 transition-all duration-300 overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/0"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'mirror',
                  }}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-4">
                  <div className="mb-2 opacity-70 group-hover:opacity-100 transition-opacity text-blue-400">
                    {dash.icon}
                  </div>
                  <div className="text-white/60 text-xs text-center font-medium group-hover:text-white/80 transition-colors">
                    {dash.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
