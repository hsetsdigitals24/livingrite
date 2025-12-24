"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CorporateWellnessHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800/50 to-slate-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-indigo-400/30 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-slide-up animation-delay-200">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            Employee Health Solutions
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up animation-delay-300">
            Boost Employee Wellness with <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Corporate Programs</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-up animation-delay-400">
            Comprehensive wellness programs and health consultations tailored to your organization. Improve employee health, engagement, and productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-500">
            <Button size="lg" className="text-base font-semibold bg-gradient-to-r from-indigo-500 to-blue-600 hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 group">
              Learn About Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
