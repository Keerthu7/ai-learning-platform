'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Section4() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const [displayedResponse, setDisplayedResponse] = useState('')
  const responseRef = useRef<HTMLDivElement>(null)

  const response = "An AI Agent is a system that observes its environment, makes decisions, and takes actions to achieve goals. You can build one by combining a language model with tools, memory, and a reasoning loop."

  useEffect(() => {
    // Headline animation
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 30 },
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

    // Typing animation for response
    let index = 0
    const timer = setInterval(() => {
      if (index <= response.length) {
        setDisplayedResponse(response.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full">
        <div
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 text-center"
        >
          Imagine learning from AI itself.
        </div>

        {/* Minimal conversation UI */}
        <div className="space-y-8">
          {/* Student message */}
          <div className="flex justify-end">
            <div className="max-w-xl bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <p className="text-white text-lg">How do I build an AI Agent?</p>
            </div>
          </div>

          {/* AI response */}
          <div className="flex justify-start">
            <div
              ref={responseRef}
              className="max-w-xl bg-white/5 border border-white/20 rounded-lg p-6"
            >
              <p className="text-white/80 text-lg leading-relaxed min-h-24">
                {displayedResponse}
                {displayedResponse.length < response.length && (
                  <span className="animate-pulse">▌</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
