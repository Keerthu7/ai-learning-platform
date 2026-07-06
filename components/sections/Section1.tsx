'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Section1() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const originalText = 'Education teaches subjects. AI demands builders.'
    const newText = "We don't teach AI. We build AI Engineers."

    gsap.fromTo(
      textRef.current,
      { textContent: originalText },
      {
        textContent: newText,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
          markers: false,
        },
      }
    )
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl text-center">
        <div
          ref={textRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
        >
          Education teaches subjects. AI demands builders.
        </div>
      </div>
    </section>
  )
}
