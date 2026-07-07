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
        start: 'top center',
        end: 'center center',
        scrub: 1,
        markers: false,
      }
    })

    tl.to(textRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    })
    .to('#second-text', {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      <div className="max-w-4xl text-center relative w-full h-[300px] flex items-center justify-center">
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
        >
          Education teaches subjects.<br/>AI demands builders.
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight opacity-0"
          id="second-text"
        >
          We don't teach AI.<br/>We build AI Engineers.
        </div>
      </div>
    </section>
  )
}
