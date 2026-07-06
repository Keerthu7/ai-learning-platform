'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Section1 from '@/components/sections/Section1'
import Section2 from '@/components/sections/Section2'
import Section3 from '@/components/sections/Section3'
import Section4 from '@/components/sections/Section4'
import Section5 from '@/components/sections/Section5'
import Section6 from '@/components/sections/Section6'
import Section7 from '@/components/sections/Section7'
import Section8 from '@/components/sections/Section8'
import Section9 from '@/components/sections/Section9'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative bg-background">
      <Navigation />
      
      <main className="relative">
        <HeroSection />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
