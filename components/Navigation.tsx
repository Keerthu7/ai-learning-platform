'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import RegistrationModal from './RegistrationModal'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-lg tracking-tight">
            Hynox Campus
          </Link>

          <div className="hidden md:flex items-center gap-8">
          </div>

          <div className="flex items-center gap-4">
            <button className="text-white/60 hover:text-white text-sm transition-colors">
              Login
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded transition-colors"
            >
              Join Beta
            </button>
          </div>
        </div>
      </nav>

      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
