"use client"

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  FileText,
  BookOpen,
  Video,
  Sparkles,
  BookMarked,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

type Feature = {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  tagline: string
  badge?: string
}

const features: Feature[] = [
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "AI Resume Matcher",
    description:
      "Tailor your resume to any job description and instantly see your match score, keyword gaps, and improvement tips.",
    tagline: "Boost your match score",
    href: "https://talenttrailresume.netlify.app/",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Study Note Analyzer",
    description:
      "Drop in any notes and get AI-generated explanations, summaries, and practice questions personalized to you.",
    tagline: "Understand faster",
    href: "https://talenttrailprep.netlify.app",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "AI Quiz Generator",
    description:
      "Generate interview-grade quizzes for any tech stack, role, or topic. Practice with adaptive difficulty.",
    tagline: "Practice smarter",
    href: "https://talenttrailsquiz.vercel.app/",
  },
  {
    icon: <Video className="w-6 h-6 text-white" />,
    title: "AI Mock Interviews",
    description:
      "Run realistic mock interviews with an AI panel and receive instant, structured feedback to improve.",
    tagline: "Interview with confidence",
    href: "https://talenttrailsmock.vercel.app/",
    badge: "Popular",
  },
  {
    icon: <BookMarked className="w-6 h-6 text-white" />,
    title: "Build Your Own AI Courses",
    description:
      "Create personalized AI-powered courses tailored to your goals, with modules, quizzes, and progress.",
    tagline: "Learn your way",
    href: "https://talenttraillms.vercel.app/",
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const [navigatingIdx, setNavigatingIdx] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".feature-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          delay: i * 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })

      gsap.from(".features-heading", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-heading",
          start: "top 85%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handlePointerMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    target.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    target.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  const handleClick = (
    e: ReactMouseEvent<HTMLDivElement>,
    feature: Feature,
    idx: number,
  ) => {
    e.preventDefault()
    if (navigatingIdx !== null) return

    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Ripple
    const ripple = document.createElement("span")
    ripple.className = "ripple"
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.width = "40px"
    ripple.style.height = "40px"
    card.appendChild(ripple)
    setTimeout(() => ripple.remove(), 800)

    setNavigatingIdx(idx)

    const tl = gsap.timeline({
      onComplete: () => {
        window.open(feature.href, "_blank", "noopener,noreferrer")
        setTimeout(() => setNavigatingIdx(null), 400)
      },
    })

    tl.to(card, {
      scale: 0.985,
      duration: 0.12,
      ease: "power2.out",
    })
      .to(card, {
        scale: 1.015,
        duration: 0.18,
        ease: "power2.out",
      })
      .to(
        card.querySelector(".launch-overlay"),
        {
          opacity: 1,
          duration: 0.2,
        },
        0,
      )
      .to(
        card.querySelector(".icon-wrap"),
        {
          rotate: 12,
          scale: 1.1,
          duration: 0.25,
          ease: "back.out(2)",
        },
        0,
      )
      .to(card, {
        scale: 1,
        duration: 0.2,
        ease: "power2.inOut",
      })
      .to(
        card.querySelector(".launch-overlay"),
        {
          opacity: 0,
          duration: 0.25,
        },
        "+=0.05",
      )
      .to(
        card.querySelector(".icon-wrap"),
        {
          rotate: 0,
          scale: 1,
          duration: 0.25,
        },
        "<",
      )
  }

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-28 px-4"
    >
      <div className="container mx-auto relative">
        <div className="features-heading text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow">
            <span className="ping" />
            <span>Five tools, one workspace</span>
          </span>
          <h2 className="section-title mt-5 text-4xl md:text-5xl text-[#06283D]">
            Powerful <span className="text-gradient">AI Features</span>
            <br />
            built for ambitious learners.
          </h2>
          <p className="mt-5 text-lg text-[#06283D]/70">
            Click any tool to launch it instantly. Each one is purpose-built and beautifully crafted.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const isLoading = navigatingIdx === idx
            return (
              <div
                key={feature.title}
                className="feature-card group relative bg-white/70 glass rounded-3xl p-7 card-shadow border border-white/60 cursor-pointer select-none"
                onMouseMove={handlePointerMove}
                onClick={(e) => handleClick(e, feature, idx)}
                role="link"
                tabIndex={0}
                aria-label={`Open ${feature.title} in a new tab`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    window.open(feature.href, "_blank", "noopener,noreferrer")
                  }
                }}
              >
                {/* Hover shine */}
                <div className="shine" />

                {/* Top row */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="icon-wrap w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-md ring-1 ring-white/40">
                    {feature.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {feature.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-[#06283D] text-white">
                        {feature.badge}
                      </span>
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-[#1363DF]/10 text-[#1363DF] border border-[#1363DF]/15">
                      Tool
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#1363DF] mb-2">
                    {feature.tagline}
                  </div>
                  <h3 className="text-xl font-bold text-[#06283D] leading-snug">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#06283D]/70">
                    {feature.description}
                  </p>
                </div>

                {/* Footer / Open CTA */}
                <div className="relative z-10 mt-6 pt-5 border-t border-[#06283D]/5 flex items-center justify-between">
                  <span className="open-cta text-sm">
                    Open tool
                    <ArrowUpRight className="open-cta-arrow w-4 h-4" />
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#06283D]/50">
                    <ExternalLink className="w-3.5 h-3.5" />
                    opens in new tab
                  </span>
                </div>

                {/* Launch overlay */}
                <div className="launch-overlay pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1363DF]/15 via-transparent to-[#47B5FF]/15" />
                  <div className="absolute inset-0 rounded-3xl ring-2 ring-[#1363DF]/40" />
                </div>

                {/* Loading indicator */}
                {isLoading && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 overflow-hidden rounded-b-3xl">
                    <div className="h-full w-1/3 gradient-bg rounded-full animate-[loadingBar_0.7s_ease-in-out_forwards]" />
                  </div>
                )}
              </div>
            )
          })}

          {/* "More coming" tile */}
          <div className="feature-card relative bg-gradient-to-br from-[#06283D] to-[#0F4FB3] rounded-3xl p-7 card-shadow text-white overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(71,181,255,0.6), transparent 40%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.25), transparent 40%)",
              }}
            />
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                  Coming soon
                </div>
                <h3 className="text-xl font-bold">
                  More AI tools on the way
                </h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  We're crafting new tools to help you stand out at every step of your career journey.
                </p>
              </div>
              <div className="mt-auto pt-6 text-sm font-semibold inline-flex items-center gap-2 text-white/90">
                Stay tuned
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes loadingBar {
          0%   { transform: translateX(-100%); width: 30%; }
          50%  { width: 60%; }
          100% { transform: translateX(330%); width: 30%; }
        }
      `}</style>
    </section>
  )
}
