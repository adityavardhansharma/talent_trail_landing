'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function Header() {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
  }, [])

  return (
    <header ref={headerRef} className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-full shadow-lg px-10 py-2">
      <div className="flex justify-center items-center">
          <Link href="/" className="text-2xl font-bold text-[#06283D] py-2 inline-block">
            Talent<span className="text-[#1363DF]">Trail</span>
          </Link>
      </div>
    </header>
  )
}
