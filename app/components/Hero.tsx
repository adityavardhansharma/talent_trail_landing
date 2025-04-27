'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Card, CardContent } from "@/components/ui/card"

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.hero-text', {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.quote-card', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.3')
  }, [])

  return (
    <section ref={heroRef} className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="hero-text text-5xl md:text-6xl font-bold mb-6 text-[#06283D] leading-tight">
              Elevate Your Career with <span className="text-gradient">AI-Powered</span> Tools
            </h1>
            <p className="hero-text text-xl mb-8 text-[#06283D]/80 max-w-lg">
              Unlock your potential with Talent Trail's cutting-edge AI tools for job matching, study assistance, and interview preparation.
            </p>
          </div>
          <div className="md:w-1/2">
            <Card className="quote-card bg-white shadow-lg">
              <CardContent className="p-6">
                <blockquote className="text-lg text-[#06283D] italic">
                  "AI is revolutionizing the way we learn and prepare for our careers. It's not just about absorbing information anymore; it's about intelligent, personalized learning experiences that adapt to each individual's needs and goals."
                </blockquote>
                <p className="mt-4 text-right text-[#1363DF] font-semibold">-Dr. ChatGPT</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
