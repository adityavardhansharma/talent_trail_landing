import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

export default function Footer() {
  return (
    <footer id="team" className="relative pt-24 pb-10 px-4">
      <div className="container mx-auto">
        {/* CTA banner */}
        <div className="relative overflow-hidden rounded-[28px] p-10 md:p-14 text-white card-shadow"
          style={{
            background:
              'radial-gradient(140% 140% at 0% 0%, #1D7AF1 0%, #0F4FB3 40%, #06283D 100%)',
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 80% 20%, rgba(71,181,255,0.6), transparent 35%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.25), transparent 35%)',
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Ready when you are
              </span>
              <h3 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl">
                Start building your next career move with TalentTrail.
              </h3>
              <p className="mt-3 text-white/80 max-w-xl">
                Pick any tool above and launch it in seconds. No setup, no clutter — just polished TrailBot AI made for you.
              </p>
            </div>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 self-start md:self-auto bg-white text-[#06283D] font-semibold px-6 py-3.5 rounded-full hover:bg-white/95 hover:shadow-xl transition-all"
            >
              Explore tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Team / brand */}
        <div className="mt-16 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <Link href="/" className="flex items-center gap-2 group">
              <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-xl gradient-bg text-white shadow-md">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-[#06283D]">
                Talent<span className="text-gradient">Trail</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#06283D]/70 max-w-xs leading-relaxed">
              TrailBot AI by TalentTrail — a polished career toolkit crafted as a 7th semester minor project, built for ambitious learners.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#06283D]/50 mb-3">
              Tools
            </div>
            <ul className="space-y-2 text-sm text-[#06283D]/80">
              {[
                ['Resume Matcher', 'https://talenttrailresume.netlify.app/'],
                ['Note Analyzer', 'https://talenttrailprep.netlify.app'],
                ['Quiz Generator', 'https://talenttrailsquiz.vercel.app/'],
                ['Mock Interviews', 'https://talenttrailsmock.vercel.app/'],
                ['Build AI Courses', 'https://talenttraillms.vercel.app/'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1363DF] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#06283D]/50 mb-3">
              Team
            </div>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Aditya Vardhan Sharma', gh: 'https://github.com/adityavardhansharma' },
                { name: 'Akhilesh Sharma', gh: 'https://github.com/akhilex' },
              ].map((p) => (
                <li key={p.name} className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 hover:bg-[#1363DF]/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1363DF] to-[#47B5FF] ring-2 ring-white shadow" />
                    <span className="text-[#06283D] font-medium">{p.name}</span>
                  </div>
                  <Link
                    href={p.gh}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} on GitHub`}
                    className="p-2 rounded-full hover:bg-[#06283D]/5 transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4 text-[#06283D]/70 group-hover:text-[#1363DF]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-fade my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#06283D]/60">
          <p>© {new Date().getFullYear()} TalentTrail — 7th Semester Minor Project</p>
          <p className="flex items-center gap-2">
            Crafted with care · <span className="text-gradient font-semibold">TrailBot AI</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
