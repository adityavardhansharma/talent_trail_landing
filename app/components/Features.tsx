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
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

type Feature = {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  tagline: string
}

const features: Feature[] = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Resume Matcher",
    description:
      "Tailor your resume to any job description with TrailBot AI and see your match score instantly.",
    tagline: "Boost your match",
    href: "https://talenttrailresume.netlify.app/",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Note Analyzer",
    description:
      "Drop in any notes — TrailBot generates explanations, summaries, and practice questions.",
    tagline: "Understand faster",
    href: "https://talenttrailprep.netlify.app",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Quiz Generator",
    description:
      "Generate interview-grade quizzes for any tech stack or topic with adaptive difficulty.",
    tagline: "Practice smarter",
    href: "https://talenttrailsquiz.vercel.app/",
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: "Mock Interviews",
    description:
      "Realistic AI mock interviews with structured feedback to sharpen your delivery.",
    tagline: "Interview with confidence",
    href: "https://talenttrailsmock.vercel.app/",
  },
  {
    icon: <BookMarked className="w-5 h-5" />,
    title: "Build AI Courses",
    description:
      "Spin up personalized courses with modules, quizzes, and progress — tailored to your goals.",
    tagline: "Learn your way",
    href: "https://talenttraillms.vercel.app/",
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const [navigatingIdx, setNavigatingIdx] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".features-heading > *", {
        opacity: 0,
        y: 18,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".features-heading",
          start: "top 85%",
        },
      })

      gsap.utils.toArray<HTMLElement>(".feature-card").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.55,
          ease: "power3.out",
          delay: i * 0.06,
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
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
    const arrow = card.querySelector(".launch-arrow") as HTMLElement | null
    const ring = card.querySelector(".launch-ring") as HTMLElement | null

    setNavigatingIdx(idx)

    const tl = gsap.timeline({
      onComplete: () => {
        window.open(feature.href, "_blank", "noopener,noreferrer")
        setTimeout(() => setNavigatingIdx(null), 350)
      },
    })

    tl.to(card, { scale: 0.985, duration: 0.12, ease: "power2.out" })
      .to(card, { scale: 1, duration: 0.18, ease: "power2.inOut" })

    if (ring) {
      tl.fromTo(
        ring,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.18, ease: "power2.out" },
        0,
      ).to(ring, { opacity: 0, duration: 0.35, ease: "power2.out" }, 0.25)
    }

    if (arrow) {
      tl.to(
        arrow,
        {
          x: 14,
          y: -14,
          opacity: 0,
          duration: 0.35,
          ease: "power3.in",
        },
        0.05,
      ).fromTo(
        arrow,
        { x: -14, y: 14, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 0.3, ease: "power3.out" },
        0.45,
      )
    }
  }

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-16 md:py-20 px-4 scroll-mt-20"
    >
      <div className="container mx-auto relative">
        <div className="features-heading text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">
            <span className="ping" />
            <span>The TrailBot AI toolkit</span>
          </span>
          <h2 className="section-title mt-4 text-3xl md:text-4xl text-[#06283D]">
            Everything you need to{' '}
            <span className="text-gradient">stand&nbsp;out</span>.
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#06283D]/65">
            Click any card to launch the tool. Powered by TrailBot AI — built by TalentTrail.
          </p>
        </div>

        <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="feature-card group relative bg-white/80 glass rounded-2xl p-5 card-shadow border border-white/60 cursor-pointer select-none"
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
              <div className="shine" />

              <div className="relative z-10 flex items-start gap-3">
                <div className="icon-wrap shrink-0 w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-white shadow-md ring-1 ring-white/40">
                  {feature.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1363DF] mb-1">
                    {feature.tagline}
                  </div>
                  <h3 className="text-lg font-bold text-[#06283D] leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <span className="launch-arrow shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1363DF]/8 text-[#1363DF] group-hover:bg-[#1363DF] group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <p className="relative z-10 mt-3 text-sm leading-relaxed text-[#06283D]/70">
                {feature.description}
              </p>

              <div className="relative z-10 mt-4 pt-3 border-t border-[#06283D]/5 flex items-center justify-between text-xs">
                <span className="open-cta text-[#1363DF] font-semibold">
                  Open tool
                  <ArrowUpRight className="open-cta-arrow w-3.5 h-3.5" />
                </span>
                <span className="text-[#06283D]/45">opens in new tab</span>
              </div>

              <span className="launch-ring pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-[#1363DF]/40 opacity-0" />

              {navigatingIdx === idx && (
                <span className="pointer-events-none absolute inset-x-3 bottom-0 h-0.5 overflow-hidden rounded-full">
                  <span className="block h-full w-1/3 gradient-bg rounded-full animate-[loadingBar_0.7s_ease-in-out_forwards]" />
                </span>
              )}
            </div>
          ))}

          <div className="feature-card relative rounded-2xl p-5 overflow-hidden text-white card-shadow"
            style={{
              background:
                "linear-gradient(135deg, #06283D 0%, #0F4FB3 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(71,181,255,0.6), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.18), transparent 45%)",
              }}
            />
            <div className="relative z-10 flex items-start gap-3">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70 mb-1">
                  Coming soon
                </div>
                <h3 className="text-lg font-bold leading-tight">
                  More TrailBot tools
                </h3>
              </div>
            </div>
            <p className="relative z-10 mt-3 text-sm text-white/75 leading-relaxed">
              We're crafting new tools to help you stand out at every step of your career journey.
            </p>
            <div className="relative z-10 mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="font-semibold inline-flex items-center gap-2">
                Stay tuned
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </span>
              <span className="text-white/55">in the works</span>
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
