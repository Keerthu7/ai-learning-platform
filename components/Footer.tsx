'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Branding */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Hynox Campus</h3>
            <p className="text-white/50 text-sm">
              The AI Career Operating System for the next generation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white/80 font-semibold text-sm mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/40 text-sm">© 2024 Hynox Campus. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
