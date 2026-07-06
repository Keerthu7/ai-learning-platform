'use client'

import { useEffect, useRef, useState } from 'react'
import ScrollReveal from './ScrollReveal'

interface FeaturePanelProps {
  title: string
  delay?: number
}

export default function FeaturePanel({ title, delay = 0 }: FeaturePanelProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <ScrollReveal delay={delay} direction="up">
      <div
        ref={ref}
        className="relative group"
        style={{
          opacity: isVisible ? 1 : 0.3,
          transition: 'all 0.8s ease-out',
        }}
      >
        {/* Glass panel */}
        <div className="relative backdrop-blur-sm border border-blue-500/20 rounded-lg p-12 bg-blue-500/5 group-hover:border-blue-500/40 transition-all duration-500">
          {/* Gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-light text-white text-center leading-relaxed">
              {title}
            </h3>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-full transition-all duration-700" />
        </div>

        {/* Blur effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
      </div>
    </ScrollReveal>
  )
}
