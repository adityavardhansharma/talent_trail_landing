"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FileText, BookOpen, Video, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: <FileText className="w-12 h-12 text-[#1363DF]" />,
    title: "AI Resume Matcher",
    description:
      "Our advanced AI algorithm matches your resume to job descriptions, increasing your chances of landing interviews.",
    href: "https://talenttrailresume.netlify.app/",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-[#1363DF]" />,
    title: "Study Note Analyzer",
    description:
      "Upload your study notes and receive AI-generated explanations and practice questions to enhance your learning.",
    href: "https://talenttrailprep.netlify.app",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-[#1363DF]" />,
    title: "AI Quiz Generator",
    description: "Prepare for technical interviews with AI-powered quizzes tailored to your tech stack and job role.",
    href: "https://talenttrailsquiz.vercel.app/",
  },
  {
    icon: <Video className="w-12 h-12 text-[#1363DF] opacity-50" />,
    title: "AI Mock Interviews",
    description:
      "Practice interviews with our AI-powered system and receive instant feedback to improve your interview skills.",
    href: "https://talenttrailsmock.vercel.app/",
    comingSoon: true,
  },
]

export default function Features() {
  const featuresRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadFeatures = async () => {
      const featureElements = gsap.utils.toArray(".feature")

      featureElements.forEach((feature, index) => {
        gsap.from(feature, {
          opacity: 0,
          y: 30,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: feature,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })
      })

      setIsLoaded(true)
    }

    loadFeatures()
  }, [])

  const handleFeatureClick = (href: string, element: HTMLElement) => {
    const tl = gsap.timeline({
      onComplete: () => {
        window.location.href = href
      },
    })

    tl.to(element, {
      boxShadow: "0 0 0 2px #1363DF, 0 0 0 4px #47B5FF",
      duration: 0.3,
      ease: "power2.inOut",
    })

    const intelligenceEffect = element.querySelector(".intelligence-effect") as HTMLElement
    tl.to(
      intelligenceEffect,
      {
        opacity: 0.3,
        scale: 1.05,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "-=0.2",
    )

    const wavyEffect = element.querySelector(".wavy-effect") as HTMLElement
    tl.fromTo(
      wavyEffect,
      { attr: { d: "M0,32 Q64,0 128,32 T256,32" } },
      {
        attr: { d: "M0,32 Q64,64 128,32 T256,32" },
        repeat: 1,
        yoyo: true,
        duration: 0.4,
        ease: "sine.inOut",
      },
      "-=0.4",
    )

    tl.to([intelligenceEffect, wavyEffect], {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    })

    // Set total duration to ensure instant navigation after animation
    tl.duration(0.7)
  }

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-64">
        <Image src="/placeholder.svg" alt="Loading..." width={50} height={50} className="animate-spin" />
      </div>
    )
  }

  return (
    <section ref={featuresRef} id="features" className="py-16 px-4 bg-[#DFF6FF]/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#06283D]">
          Powerful <span className="text-gradient">AI Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature bg-white p-6 rounded-2xl transition-all duration-300 ${
                feature.comingSoon ? "opacity-70 cursor-not-allowed" : "cursor-pointer hover:shadow-lg"
              } shadow-md relative overflow-hidden`}
              onClick={(e) => {
                if (!feature.comingSoon) {
                  e.preventDefault()
                  handleFeatureClick(feature.href!, e.currentTarget)
                }
              }}
            >
              <div className="intelligence-effect absolute inset-0 bg-gradient-to-br from-[#1363DF33] via-[#47B5FF33] to-[#1363DF33] opacity-0 scale-50 rounded-2xl"></div>
              <svg
                className="wavy-effect absolute inset-0 w-full h-full opacity-0"
                viewBox="0 0 256 64"
                preserveAspectRatio="none"
              >
                <path d="M0,32 Q64,0 128,32 T256,32" fill="none" stroke="url(#gradient)" strokeWidth="2" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1363DF" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#47B5FF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#1363DF" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
              {feature.comingSoon ? (
                <>
                  <Badge variant="secondary" className="absolute top-4 right-4 z-10">
                    Coming Soon
                  </Badge>
                  <div className="mb-4 p-3 rounded-full inline-block bg-[#DFF6FF] relative z-10">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#06283D] relative z-10">{feature.title}</h3>
                  <p className="text-[#06283D]/80 text-sm relative z-10">{feature.description}</p>
                </>
              ) : (
                <div className="block relative z-10">
                  <div className="mb-4 p-3 rounded-full inline-block bg-[#DFF6FF]">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#06283D]">{feature.title}</h3>
                  <p className="text-[#06283D]/80 text-sm">{feature.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
