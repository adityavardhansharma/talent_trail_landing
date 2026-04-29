'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Team', href: '#team' },
]

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
    )
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={headerRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,1100px)]"
    >
      <nav
        className={`glass rounded-full pl-3 pr-2 py-2 flex items-center justify-between gap-4 transition-shadow duration-300 ${
          scrolled ? 'card-shadow' : 'shadow-[0_4px_20px_-12px_rgba(19,99,223,0.25)]'
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 pl-2 group">
          <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-xl gradient-bg text-white shadow-md">
            <Sparkles className="w-4 h-4" />
            <span className="absolute -inset-0.5 rounded-xl ring-1 ring-white/40" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-[#06283D]">
            Talent<span className="text-gradient">Trail</span>
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium text-[#06283D]/80">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative px-3 py-2 rounded-full hover:text-[#06283D] transition-colors group"
              >
                {link.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-gradient-to-r from-[#1363DF] to-[#47B5FF] rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#features"
          className="btn-primary text-sm !py-2 !px-4"
        >
          Get started
          <ArrowRight className="w-4 h-4" />
        </Link>
      </nav>
    </div>
  )
}
