"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Heart, Zap } from "lucide-react"

export function PostStrokeHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-linear-to-br from-slate-900 via-primary/10 to-slate-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary/80 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-slide-up animation-delay-200">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Specialized Stroke Recovery
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up animation-delay-300">
              Expert <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Post-Stroke Recovery</span> at Home
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl animate-slide-up animation-delay-400">
              Recover with confidence under the care of hospital-trained nurses and specialized physiotherapists. Our evidence-based rehabilitation programs help restore mobility, independence, and quality of life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up animation-delay-500">
              <Button
                size="lg"
                className="text-base font-semibold bg-primary hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 group"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Learn About Recovery
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-4 animate-slide-up animation-delay-600">
              {[
                { icon: Brain, label: "Expert Care", value: "Hospital-trained" },
                { icon: Zap, label: "Rapid Progress", value: "Evidence-based" },
                { icon: Heart, label: "24/7 Support", value: "Always available" },
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="text-center">
                    <div className="inline-flex p-3 rounded-lg bg-primary/20 mb-3">
                      <Icon className="w-6 h-6 text-primary/80" />
                    </div>
                    <div className="text-sm text-gray-400 mb-1">{feature.label}</div>
                    <div className="text-sm font-semibold text-primary/80">{feature.value}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex items-center justify-center relative animate-slide-up animation-delay-300">
            <div className="relative w-full max-w-md">
              {/* Gradient Card */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                  {/* Recovery Circle Animation */}
                  <div className="relative w-40 h-40">
                    <svg
                      className="w-full h-full animate-pulse"
                      viewBox="0 0 160 160"
                      fill="none"
                    >
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="50"
                        stroke="url(#gradient2)"
                        strokeWidth="2"
                        opacity="0.3"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                        <linearGradient
                          id="gradient2"
                          x1="0%"
                          y1="100%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">
                          95%
                        </div>
                        <div className="text-xs text-gray-400">Recovery Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl animate-float">
                <div className="text-sm font-semibold text-white">Expert Team</div>
                <div className="text-xs text-gray-300">Certified specialists</div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl animate-float animation-delay-200">
                <div className="text-sm font-semibold text-white">Proven Results</div>
                <div className="text-xs text-gray-300">Thousands recovered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">Scroll to learn more</span>
            <div className="w-1 h-6 rounded-full border-2 border-primary flex justify-center">
              <div className="w-0.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
