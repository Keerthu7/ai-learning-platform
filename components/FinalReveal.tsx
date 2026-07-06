'use client'

import { useEffect, useState } from 'react'

export default function FinalReveal() {
  const [showSecond, setShowSecond] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowSecond(true), 600)
          setTimeout(() => setShowButton(true), 1200)
        }
      },
      { threshold: 0.5 }
    )

    const section = document.getElementById('final-reveal')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="final-reveal"
      className="min-h-screen flex flex-col items-center justify-center px-4 space-y-12"
    >
      <div className="text-center space-y-8 max-w-3xl">
        {/* First line */}
        <div className="overflow-hidden">
          <h2 className="text-6xl md:text-8xl font-black text-white leading-tight animate-fade-in-up">
            The next generation
          </h2>
        </div>

        {/* Second line */}
        {showSecond && (
          <div className="overflow-hidden">
            <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent leading-tight animate-fade-in-up">
              won&apos;t just use AI.
            </h2>
          </div>
        )}

        {showSecond && (
          <div className="overflow-hidden">
            <p className="text-5xl md:text-7xl font-black text-blue-500 leading-tight animate-fade-in-up mt-4">
              They&apos;ll build it.
            </p>
          </div>
        )}
      </div>

      {/* CTA Button */}
      {showButton && (
        <button className="relative px-10 py-5 text-white font-semibold group animate-fade-in mt-8">
          {/* Animated border */}
          <div className="absolute inset-0 rounded border border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Background */}
          <div className="absolute inset-0 bg-blue-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Text */}
          <span className="relative block text-lg">Begin</span>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/50 transition-shadow duration-300" />
        </button>
      )}

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  )
}
