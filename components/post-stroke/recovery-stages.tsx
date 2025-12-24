"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, Target, Zap } from "lucide-react"

interface RecoveryStage {
  phase: string
  duration: string
  title: string
  description: string
  milestones: string[]
  icon: React.ComponentType<{ className?: string }>
}

const recoveryStages: RecoveryStage[] = [
  {
    phase: "Phase 1",
    duration: "Weeks 1-4",
    title: "Acute Recovery & Stabilization",
    description:
      "Focus on hospital-to-home transition, initial assessment, and establishing baseline. We monitor vital signs and begin gentle mobility work.",
    milestones: [
      "Comfortable home environment setup",
      "Initial physical assessment",
      "Gentle passive movements begun",
      "Family education started",
    ],
    icon: Clock,
  },
  {
    phase: "Phase 2",
    duration: "Weeks 5-12",
    title: "Active Rehabilitation Begins",
    description:
      "Intensive therapy starts with increasing exercises. Physical and occupational therapy intensifies as strength improves.",
    milestones: [
      "Active range of motion exercises",
      "Speech therapy begins (if needed)",
      "Strength training intensifies",
      "Functional mobility improvements",
    ],
    icon: Zap,
  },
  {
    phase: "Phase 3",
    duration: "Weeks 13-24",
    title: "Functional Recovery & Independence",
    description:
      "Building independence in daily activities. Fine motor skills improve, walking becomes steadier, and confidence grows.",
    milestones: [
      "Independent walking improvements",
      "Self-care skill restoration",
      "Return to hobbies consideration",
      "Advanced strength training",
    ],
    icon: Target,
  },
  {
    phase: "Phase 4",
    duration: "6+ Months",
    title: "Long-term Maintenance & Wellness",
    description:
      "Sustainable recovery programs to prevent re-stroke and maintain gains. Transition to maintenance therapy and preventive care.",
    milestones: [
      "Maintenance exercise routines",
      "Lifestyle modification support",
      "Long-term wellness planning",
      "Community integration support",
    ],
    icon: CheckCircle2,
  },
]

export function RecoveryStages() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-slate-800/50 to-slate-900 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-up">
            Your Recovery Journey in 4 Phases
          </h2>
          <p className="text-lg text-gray-300 animate-slide-up animation-delay-200">
            A structured, evidence-based approach to maximize your recovery potential at every stage
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {recoveryStages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <div
                key={index}
                className="mb-8 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  {/* Phase Indicator */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-600 text-white font-bold flex-shrink-0 mb-4">
                      <span className="text-sm">{stage.phase}</span>
                    </div>
                    {index < recoveryStages.length - 1 && (
                      <div className="w-1 h-32 bg-linear-to-b from-emerald-500/50 to-transparent"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <Card className="border-gray-700/50 bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                              {stage.title}
                            </h3>
                            <p className="text-sm text-emerald-400 font-semibold">
                              {stage.duration}
                            </p>
                          </div>
                          <div className="inline-flex p-3 rounded-lg bg-emerald-500/20">
                            <Icon className="w-6 h-6 text-emerald-400" />
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {stage.description}
                        </p>

                        {/* Milestones */}
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-gray-200">
                            Key Milestones:
                          </p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {stage.milestones.map((milestone, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                                <span className="text-sm text-gray-300">
                                  {milestone}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              number: "3-6 months",
              label: "Average Recovery Timeline",
              desc: "Most intensive recovery gains occur",
            },
            {
              number: "80-90%",
              label: "Potential Recovery Rate",
              desc: "With dedicated rehabilitation",
            },
            {
              number: "24/7",
              label: "Professional Support",
              desc: "Always available for you",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${400 + idx * 100}ms` }}
            >
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
