'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Section9() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
    })

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      0
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.3
      )
      .fromTo(
        dashboardRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        0.6
      )
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div
        ref={titleRef}
        className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-8"
      >
        <span className="text-white">Hynox </span>
        <span className="text-blue-500">Campus</span>
      </div>

      <div
        ref={subtitleRef}
        className="max-w-2xl text-center text-lg text-white/60 space-y-3 mb-20"
      >
        <div>Learn.</div>
        <div>Build.</div>
        <div>Prove.</div>
        <div>Launch.</div>
      </div>

      {/* Premium Dashboard */}
      <div ref={dashboardRef} className="max-w-4xl w-full">
        <div className="relative group">
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Main container */}
          <div className="relative bg-gradient-to-b from-white/8 to-white/3 backdrop-blur-lg border border-white/20 group-hover:border-blue-500/40 rounded-xl overflow-hidden transition-all duration-500">
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Content */}
            <div className="relative p-8 space-y-6">
              {/* Mac title bar */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-white/40">hynox-campus.local</span>
              </div>

              <div className="border-t border-white/10" />

              {/* Dashboard content */}
              <div className="space-y-4">
                <div className="h-3 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full" />
                <div className="h-3 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full w-5/6" />
                <div className="h-3 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full w-3/4" />
              </div>

              {/* Stat boxes */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {['Skills', 'Projects', 'Progress'].map((stat) => (
                  <motion.div
                    key={stat}
                    className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center group/stat hover:border-blue-500/40 hover:bg-blue-500/15 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-white/70 text-sm font-medium group-hover/stat:text-white transition-colors">
                      {stat}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
