'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Section6() {
  const containerRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = containerRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create nodes
    const nodes = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 0.5,
      type: ['project', 'student', 'mentor', 'company', 'idea'][Math.floor(Math.random() * 5)],
    }))

    const animate = () => {
      // Clear with fade
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw node
        ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + Math.random() * 0.3})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connections
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach((other) => {
          const dist = Math.hypot(node.x - other.x, node.y - other.y)
          if (dist < 200) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${(200 - dist) / 200 * 0.1})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <canvas
        ref={containerRef}
        className="absolute inset-0"
      />

      <div className="relative z-10 text-center max-w-2xl">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          An Ecosystem
        </h2>
        <p className="text-white/60 text-lg">
          Thousands of nodes. Projects. Students. Mentors. Companies. Ideas. Everything connected.
        </p>
      </div>
    </section>
  )
}
