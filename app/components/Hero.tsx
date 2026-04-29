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
  ShieldCheck,
  Star,
} from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-eyebrow', { y: 16, opacity: 0, duration: 0.6 })
        .from('.hero-headline > span', {
          y: 24,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
        }, '-=0.3')
        .from('.hero-sub', { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-cta > *', { y: 14, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.3')
        .from('.hero-trust', { y: 10, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-visual', {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.8')
        .from('.float-card', {
          opacity: 0,
          y: 20,
          stagger: 0.12,
          duration: 0.6,
        }, '-=0.6')

      // Subtle parallax on visual
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
    <section ref={heroRef} className="relative pt-36 pb-24 px-4 overflow-hidden">
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <span className="hero-eyebrow eyebrow">
              <span className="ping" />
              <span>New • AI-powered career toolkit</span>
            </span>

            <h1 className="hero-headline mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#06283D]">
              <span className="block">Land your next</span>
              <span className="block">
                role with{' '}
                <span className="text-gradient">AI-powered</span>
              </span>
              <span className="block">career tools.</span>
            </h1>

            <p className="hero-sub mt-6 text-lg md:text-xl text-[#06283D]/70 max-w-xl leading-relaxed">
              Match resumes to roles, study smarter, ace mock interviews, and build your own
              AI courses — all in one polished workspace built for ambitious learners.
            </p>

            <div className="hero-cta mt-8 flex flex-wrap items-center gap-3">
              <Link href="#features" className="btn-primary">
                Explore the toolkit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#how" className="btn-secondary">
                <PlayCircle className="w-5 h-5 text-[#1363DF]" />
                See how it works
              </Link>
            </div>

            {/* Trust band */}
            <div className="hero-trust mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#06283D]/70">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    'from-[#1363DF] to-[#47B5FF]',
                    'from-[#47B5FF] to-[#7CC4FA]',
                    'from-[#06283D] to-[#1363DF]',
                  ].map((g, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} ring-2 ring-white`}
                    />
                  ))}
                </div>
                <span className="font-medium">
                  Loved by <span className="text-[#06283D] font-semibold">10k+</span> students
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5B301] text-[#F5B301]" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 average rating</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1363DF]" />
                <span className="font-medium">Privacy-first by design</span>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative">
            <div className="hero-visual relative mx-auto w-full max-w-md">
              {/* Glow */}
              <div className="absolute -inset-10 rounded-[40px] bg-gradient-to-tr from-[#47B5FF]/30 via-[#1363DF]/20 to-transparent blur-2xl" />

              {/* Main panel */}
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
                        AI Career Copilot
                      </div>
                      <div className="text-xs text-[#06283D]/60">
                        Personalized for you
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
                  <span>Powered by AI</span>
                  <span className="inline-flex items-center gap-1 text-[#1363DF] font-semibold">
                    Live <span className="w-1.5 h-1.5 rounded-full bg-[#1363DF] animate-pulse" />
                  </span>
                </div>
              </div>

              {/* Floating mini cards */}
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

      {/* Logo marquee */}
      <div id="how" className="relative mt-24">
        <div className="text-center text-xs uppercase tracking-[0.2em] font-semibold text-[#06283D]/50 mb-6">
          Built with cutting-edge tools
        </div>
        <div className="overflow-hidden mask-fade">
          <div className="marquee text-[#06283D]/50 font-semibold text-lg">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-12">
                {['Next.js', 'GSAP', 'Tailwind', 'OpenAI', 'Gemini', 'Vercel', 'TypeScript', 'Lucide'].map((n) => (
                  <span key={n} className="opacity-80 hover:opacity-100 transition-opacity">
                    {n}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
      `}</style>
    </section>
  )
}
