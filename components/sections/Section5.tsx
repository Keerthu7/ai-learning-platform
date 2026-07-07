'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const abilities = [
  'AI Mentor',
  'Prompt Engineering Lab',
  'Interactive Coding',
  'Case Studies',
  'Project Builder',
  'Portfolio Generator',
  'Resume Builder',
  'Interview Coach',
  'Career Dashboard',
]

export default function Section5() {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    panelsRef.current.forEach((panel, index) => {
      if (!panel) return

      gsap.fromTo(
        panel,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: panel,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      )
    })
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {abilities.map((ability, index) => (
            <div
              key={index}
              ref={(el) => {
                panelsRef.current[index] = el
              }}
              className="group relative h-40"
            >
              {/* Glass panel */}
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl group-hover:border-blue-500/30 group-hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/5 transition-all duration-500" />

                {/* Content */}
                <div className="relative h-full flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-white/80 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">
                      {ability}
                    </p>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl shadow-lg shadow-blue-500/20" />
                </div>
              </div>

              {/* Arrow separator */}
              {index < abilities.length - 1 && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/30">
                  <ArrowDown className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
