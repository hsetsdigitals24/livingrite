"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import heroImage from '@/public/service-hero.jpg'

export function ServicesHero() {
  return (
    <section className="relative min-h-125 flex items-center pt-32 overflow-hidden bg-linear-to-br from-slate-900 via-emerald-900/20 to-slate-900" style={{ backgroundImage: `url('${heroImage.src}')`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-slide-up animation-delay-200">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Specialized Healthcare Services
          </div>
 
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up animation-delay-300">
            Our <span className="bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Comprehensive Care</span> Services
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-up animation-delay-400">
            Discover our full range of professional healthcare services designed to meet your loved ones' unique needs. From post-acute recovery to long-term support, we deliver exceptional care with compassion.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-500">
            <Button size="lg" className="text-base font-semibold bg-linear-to-r from-emerald-500 to-teal-600 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300 group">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
