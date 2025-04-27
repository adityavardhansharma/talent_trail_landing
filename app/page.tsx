"use client"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Footer from "./components/Footer"
import InteractiveBackground from "./components/InteractiveBackground"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#06283D]">
      <InteractiveBackground />
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
