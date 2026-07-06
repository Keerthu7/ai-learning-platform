'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function HeroSection() {
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    // First line: "The future won't be learned."
    tl.fromTo(
      line1Ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
      0
    )

    // Pause, then second line: "It will be built."
    tl.fromTo(
      line2Ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
      1
    )

    // Pause, then third line: "Welcome to Hynox Campus."
    tl.fromTo(
      line3Ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
      2
    )

    // Subtitle
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0 },
      { opacity: 0.7, duration: 0.8, ease: 'power2.out' },
      2.8
    )

    // Button
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      3.2
    )
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl">
        <div
          ref={line1Ref}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-white mb-8"
        >
          The future won&apos;t be learned.
        </div>

        <div
          ref={line2Ref}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-white mb-8"
        >
          It will be built.
        </div>

        <div
          ref={line3Ref}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white"
        >
          Welcome to Hynox Campus.
        </div>

        <div
          ref={subtitleRef}
          className="mt-12 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          The AI Career Operating System for the next generation.
        </div>

        <button
          ref={buttonRef}
          className="mt-14 px-8 py-3 bg-white text-black font-semibold text-base rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2 mx-auto group hover:shadow-lg hover:shadow-white/20"
        >
          Begin
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
