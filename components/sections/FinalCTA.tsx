'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          toggleActions: 'play none none none',
        },
      }
    )

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0,
            }}
            animate={{
              y: 'calc(100vh - 100px)',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Soft blue glow background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <div ref={textRef} className="space-y-6 mb-12">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            The next generation
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            won&apos;t compete with AI.
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight">
            They&apos;ll create it.
          </p>
        </div>

        <button
          ref={buttonRef}
          className="group relative px-10 py-4 bg-white text-black font-semibold text-lg rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30"
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block" />
        </button>
      </div>
    </section>
  )
}
