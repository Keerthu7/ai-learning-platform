'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const fragments = [
  { label: 'AI Mentor', icon: '🤖' },
  { label: 'Project Generated', icon: '✨' },
  { label: 'Resume Score', icon: '📊' },
  { label: 'GitHub Graph', icon: '📈' },
  { label: 'Portfolio', icon: '🎯' },
  { label: 'Coding Window', icon: '💻' },
]

export default function Section3() {
  const containerRef = useRef<HTMLDivElement>(null)
  const fragmentsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    fragmentsRef.current.forEach((frag, index) => {
      if (!frag) return

      gsap.fromTo(
        frag,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: frag,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.5,
          },
        }
      )
    })
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {fragments.map((frag, index) => (
            <div
              key={index}
              ref={(el) => {
                fragmentsRef.current[index] = el
              }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-all duration-300 h-32 flex flex-col items-center justify-center cursor-pointer">
                <div className="text-4xl mb-3">{frag.icon}</div>
                <div className="text-white/70 text-sm text-center group-hover:text-white transition-colors">
                  {frag.label}
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 rounded-lg transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
