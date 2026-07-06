'use client'

import { useEffect, useState } from 'react'

interface InteractiveElementProps {
  type: 'typing' | 'terminal' | 'progress' | 'graph'
}

export default function InteractiveElement({ type }: InteractiveElementProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.currentScript?.parentElement
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  if (type === 'typing') {
    return (
      <div className="space-y-3">
        <p className="text-gray-500 text-sm uppercase tracking-widest">Prompt Generation</p>
        <div className="bg-gray-950/60 border border-blue-500/20 rounded p-6 backdrop-blur-sm">
          <p className="text-gray-300 text-lg">
            <span className="text-blue-400">Generate</span>
            {isActive && <span className="animate-pulse">_</span>}
          </p>
        </div>
      </div>
    )
  }

  if (type === 'terminal') {
    return (
      <div className="space-y-3">
        <p className="text-gray-500 text-sm uppercase tracking-widest">System Status</p>
        <div className="bg-gray-950/60 border border-blue-500/20 rounded p-6 backdrop-blur-sm font-mono text-sm">
          <div className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-green-400">{'> Initializing...'}</p>
            <p className="text-green-400 mt-2 opacity-75">{'> Loading Knowledge...'}</p>
            <p className="text-green-400 mt-2 opacity-50">{'> Thinking...'}</p>
            <p className="text-green-400 mt-2 opacity-25">{'> Ready.'}</p>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'progress') {
    return (
      <div className="space-y-3">
        <p className="text-gray-500 text-sm uppercase tracking-widest">Learning Progress</p>
        <div className="bg-gray-950/60 border border-blue-500/20 rounded p-6 backdrop-blur-sm">
          <div className="space-y-2">
            <div className="h-2 bg-blue-500/20 rounded overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded transition-all duration-1000"
                style={{ width: isActive ? '100%' : '0%' }}
              />
            </div>
            <p className="text-gray-400 text-sm text-right">
              {isActive ? '100%' : '0%'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'graph') {
    return (
      <div className="space-y-3">
        <p className="text-gray-500 text-sm uppercase tracking-widest">Neural Network</p>
        <div className="bg-gray-950/60 border border-blue-500/20 rounded p-6 backdrop-blur-sm">
          <svg className="w-full h-32" viewBox="0 0 400 128">
            {/* Nodes */}
            {[20, 80, 140, 200, 260, 320, 380].map((x, i) => (
              <circle
                key={`node-${i}`}
                cx={x}
                cy={64}
                r="4"
                fill="#3B82F6"
                opacity={isActive ? 1 : 0.3}
                style={{
                  transition: `opacity 0.6s ease-out ${i * 100}ms`,
                }}
              />
            ))}

            {/* Connections */}
            {[[20, 80], [80, 140], [140, 200], [200, 260], [260, 320], [320, 380]].map(
              ([x1, x2], i) => (
                <line
                  key={`line-${i}`}
                  x1={x1}
                  y1={64}
                  x2={x2}
                  y2={64}
                  stroke="#3B82F6"
                  strokeWidth="1"
                  opacity={isActive ? 0.5 : 0.1}
                  style={{
                    transition: `opacity 0.6s ease-out ${(i + 7) * 100}ms`,
                  }}
                />
              )
            )}
          </svg>
        </div>
      </div>
    )
  }

  return null
}
