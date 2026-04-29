'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  FileText,
  BookOpen,
  Video,
  BookMarked,
} from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-eyebrow', { y: 16, opacity: 0, duration: 0.6 })
        .from(
          '.hero-headline > span',
          {
            y: 24,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
          },
          '-=0.3',
        )
        .from('.hero-sub', { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
        .from(
          '.hero-cta > *',
          { y: 14, opacity: 0, duration: 0.5, stagger: 0.08 },
          '-=0.3',
        )
        .from(
          '.hero-visual',
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.6',
        )
        .from(
          '.float-card',
          {
            opacity: 0,
            y: 20,
            stagger: 0.12,
            duration: 0.6,
          },
          '-=0.6',
        )

      const visual = heroRef.current?.querySelector('.hero-visual') as HTMLElement | null
      if (visual) {
        gsap.to(visual, {
          y: -10,
          duration: 4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative pt-36 pb-20 px-4 overflow-hidden">
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="hero-eyebrow eyebrow">
              <span className="ping" />
              <span>Meet TrailBot AI · by TalentTrail</span>
            </span>

            <h1 className="hero-headline mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#06283D]">
              <span className="block">Land your next</span>
              <span className="block">
                role with{' '}
                <span className="text-gradient">TrailBot&nbsp;AI</span>
              </span>
              <span className="block">— your career copilot.</span>
            </h1>

            <p className="hero-sub mt-6 text-lg md:text-xl text-[#06283D]/70 max-w-xl leading-relaxed">
              Match resumes to roles, study smarter, ace mock interviews, and build your own
              AI courses — all in one polished workspace, powered by TrailBot AI.
            </p>

            <div className="hero-cta mt-9 flex flex-wrap items-center gap-3">
              <Link href="#features" className="btn-primary">
                Explore the toolkit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#features" className="btn-secondary">
                <PlayCircle className="w-5 h-5 text-[#1363DF]" />
                See the tools
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="hero-visual relative mx-auto w-full max-w-md">
              <div className="absolute -inset-10 rounded-[40px] bg-gradient-to-tr from-[#47B5FF]/30 via-[#1363DF]/20 to-transparent blur-2xl" />

              <div className="relative glass-strong card-shadow rounded-3xl p-6 border border-white/70">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6058]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-xs font-medium text-[#06283D]/60">
                    talenttrail.app
                  </span>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#EAF3FF] to-white p-5 border border-[#1363DF]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white shadow-md">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#06283D]">
                        TrailBot AI
                      </div>
                      <div className="text-xs text-[#06283D]/60">
                        by TalentTrail · personalized for you
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="h-2 rounded-full bg-[#1363DF]/10 overflow-hidden">
                      <div className="h-full w-3/4 gradient-bg rounded-full" />
                    </div>
                    <div className="h-2 rounded-full bg-[#1363DF]/10 overflow-hidden">
                      <div className="h-full w-1/2 gradient-bg rounded-full" />
                    </div>
                    <div className="h-2 rounded-full bg-[#1363DF]/10 overflow-hidden">
                      <div className="h-full w-2/3 gradient-bg rounded-full" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                    {[
                      { l: 'Match', v: '92%' },
                      { l: 'Skills', v: '24' },
                      { l: 'Roles', v: '18' },
                    ].map((s) => (
                      <div
                        key={s.l}
                        className="rounded-xl bg-white/80 border border-[#1363DF]/10 p-2"
                      >
                        <div className="text-base font-bold text-[#06283D]">{s.v}</div>
                        <div className="text-[10px] uppercase tracking-wider text-[#06283D]/60">
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between text-xs text-[#06283D]/60">
                  <span>Powered by TrailBot AI</span>
                  <span className="inline-flex items-center gap-1 text-[#1363DF] font-semibold">
                    Live <span className="w-1.5 h-1.5 rounded-full bg-[#1363DF] animate-pulse" />
                  </span>
                </div>
              </div>

              <div className="float-card absolute -left-6 top-10 glass-strong card-shadow rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EAF3FF] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#1363DF]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#06283D]">Resume matched</div>
                  <div className="text-[11px] text-[#06283D]/60">+12% improvement</div>
                </div>
              </div>

              <div className="float-card absolute -right-6 top-1/2 -translate-y-1/2 glass-strong card-shadow rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EAF3FF] flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[#1363DF]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#06283D]">Notes analyzed</div>
                  <div className="text-[11px] text-[#06283D]/60">12 key concepts</div>
                </div>
              </div>

              <div className="float-card absolute -left-2 -bottom-4 glass-strong card-shadow rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EAF3FF] flex items-center justify-center">
                  <Video className="w-5 h-5 text-[#1363DF]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#06283D]">Interview ready</div>
                  <div className="text-[11px] text-[#06283D]/60">Mock score: 8.4/10</div>
                </div>
              </div>

              <div className="float-card absolute -right-2 -bottom-6 glass-strong card-shadow rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EAF3FF] flex items-center justify-center">
                  <BookMarked className="w-5 h-5 text-[#1363DF]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#06283D]">Course built</div>
                  <div className="text-[11px] text-[#06283D]/60">10 modules</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
