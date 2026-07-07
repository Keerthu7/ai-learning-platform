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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=4000', // Pinned for a much longer scroll distance
        scrub: 1,
        pin: true,
        markers: false,
      }
    })

    // 1. Hold first text for a very long time (simulating 1 minute of scrolling)
    tl.to({}, { duration: 10 })
    
    // 2. Fade in second text below it
    .to('#second-text', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    })
    
    // 3. Hold both texts
    .to({}, { duration: 1 })
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      <div className="max-w-4xl text-center flex flex-col items-center justify-center gap-12">
        <div
          ref={textRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Education teaches subjects.<br/>AI demands builders.
        </div>
        <div
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight opacity-0 translate-y-8"
          id="second-text"
        >
          We don't teach AI.<br/>We build AI Engineers.
        </div>
      </div>
    </section>
  )
}
