"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Zap, Activity } from "lucide-react"

interface SuccessMetric {
  icon: React.ComponentType<{ className?: string }>
  number: string
  label: string
  description: string
  color: string
  iconColor: string
}

const metrics: SuccessMetric[] = [
  {
    icon: TrendingUp,
    number: "95%",
    label: "Recovery Success Rate",
    description: "Patients show significant improvement with our specialized care",
    color: "from-primary/20 to-primary/10",
    iconColor: "text-primary/80",
  },
  {
    icon: Users,
    number: "2,500+",
    label: "Stroke Patients Recovered",
    description: "Successfully rehabilitated across Nigeria and diaspora",
    color: "from-blue-500/20 to-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Activity,
    number: "89%",
    label: "Return to Independence",
    description: "Patients regain ability to perform daily activities alone",
    color: "from-accent/20 to-accent/10",
    iconColor: "text-accent/80",
  },
  {
    icon: Zap,
    number: "4.9/5",
    label: "Patient Satisfaction",
    description: "Rated by families on care quality and compassion",
    color: "from-purple-500/20 to-purple-500/10",
    iconColor: "text-purple-400",
  },
]

export function SuccessMetrics() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-slate-900 via-slate-800/50 to-slate-900 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-up">
            Proven Results Speak for Themselves
          </h2>
          <p className="text-lg text-gray-300 animate-slide-up animation-delay-200">
            Our data-driven approach delivers measurable outcomes and real transformations
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <Card className={`border-gray-700/50 bg-linear-to-br ${metric.color} backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full hover:shadow-2xl hover:shadow-primary/20 hover:scale-105`}>
                  <CardContent className="p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-linear-to-br ${metric.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${metric.iconColor}`} />
                    </div>

                    <div className="text-4xl font-bold text-white mb-2">
                      {metric.number}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary/80 transition-colors">
                      {metric.label}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Detailed Outcomes */}
        <Card className="border-gray-700/50 bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm max-w-4xl mx-auto mb-16 animate-slide-up animation-delay-300">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">What Our Recovery Outcomes Include</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary/80 mb-4">Physical Recovery</h4>
                <ul className="space-y-3">
                  {[
                    "Improved mobility and walking ability",
                    "Restored upper limb function",
                    "Enhanced balance and coordination",
                    "Reduced spasticity and pain",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary/80 mb-4">Cognitive & Emotional Recovery</h4>
                <ul className="space-y-3">
                  {[
                    "Speech and language improvements",
                    "Memory and cognitive restoration",
                    "Confidence and emotional wellbeing",
                    "Return to social engagement",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recovery Timeline */}
        <div className="max-w-4xl mx-auto animate-slide-up animation-delay-400">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Typical Recovery Timeline</h3>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { time: "2-4 weeks", milestone: "Hospital to Home", color: "from-blue-500" },
              { time: "1-3 months", milestone: "Active Therapy Phase", color: "from-cyan-500" },
              { time: "3-6 months", milestone: "Major Improvements", color: "from-primary" },
              { time: "6-12 months", milestone: "Long-term Gains", color: "from-accent" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${500 + idx * 50}ms` }}
              >
                <div className={`h-2 bg-linear-to-r ${item.color} to-transparent rounded-full mb-4`}></div>
                <div className="font-semibold text-white text-sm mb-1">{item.time}</div>
                <div className="text-xs text-gray-400">{item.milestone}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
