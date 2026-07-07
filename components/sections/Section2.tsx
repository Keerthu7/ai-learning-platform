'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timelineItems = [
  'Curiosity',
  'Learning',
  'Practice',
  'Building',
  'Thinking',
  'Creating',
  'Launching',
  'Career',
]

export default function Section2() {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      if (!item) return

      gsap.fromTo(
        item,
        { opacity: 0.2 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top center',
            end: 'center center',
            scrub: 0.5,
          },
        }
      )
    })
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full">
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <div
                ref={(el) => {
                  itemsRef.current[index] = el
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              >
                {item}
              </div>
              {index < timelineItems.length - 1 && (
                <div className="text-white/30"><ArrowDown className="w-8 h-8" /></div>
              )}
            </div>
          ))}
        </div>

        {/* Animated dots on the right */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-12 h-96">
          {timelineItems.map((_, index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-blue-500"
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
