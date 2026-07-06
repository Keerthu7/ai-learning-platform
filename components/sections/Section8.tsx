'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const suspenseLines = [
  'Watching videos',
  'isn\'t learning.',
  'Building products',
  'is.',
  'Shipping projects',
  'is.',
  'Getting hired',
  'is.',
]

export default function Section8() {
  const containerRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    linesRef.current.forEach((line, index) => {
      if (!line) return

      gsap.fromTo(
        line,
        { opacity: 0.2, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: line,
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
      <div className="max-w-4xl w-full space-y-12 text-center">
        {suspenseLines.map((line, index) => (
          <div
            key={index}
            ref={(el) => {
              linesRef.current[index] = el
            }}
            className={`${
              line.includes('is.') ? 'text-blue-500' : 'text-white'
            } text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`}
          >
            {line}
          </div>
        ))}
      </div>
    </section>
  )
}
