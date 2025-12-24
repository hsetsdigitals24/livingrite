"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Stethoscope,
  Brain,
  Users,
  Home,
  Award,
  Phone,
  Clock,
  Shield,
} from "lucide-react"

interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
  iconColor: string
}

const features: Feature[] = [
  {
    icon: Stethoscope,
    title: "Specialized Stroke Nurses",
    description:
      "Hospital-trained nurses with specialized stroke care certification and years of post-acute care experience",
    color: "from-emerald-500/20 to-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Brain,
    title: "Cognitive Rehabilitation",
    description:
      "Evidence-based programs for memory, speech, and cognitive function recovery using proven techniques",
    color: "from-blue-500/20 to-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Users,
    title: "Multidisciplinary Team",
    description:
      "Coordinated care from physiotherapists, speech therapists, occupational therapists, and nurses",
    color: "from-cyan-500/20 to-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    icon: Home,
    title: "Home-Based Therapy",
    description:
      "All care delivered at home in a comfortable, familiar environment that promotes faster recovery",
    color: "from-purple-500/20 to-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Award,
    title: "Proven Protocols",
    description:
      "Our care follows international stroke recovery guidelines and best practices for optimal outcomes",
    color: "from-yellow-500/20 to-yellow-500/10",
    iconColor: "text-yellow-400",
  },
  {
    icon: Phone,
    title: "24/7 Support Available",
    description:
      "Round-the-clock access to our medical team for questions, concerns, or emergencies",
    color: "from-rose-500/20 to-rose-500/10",
    iconColor: "text-rose-400",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Therapy sessions scheduled around your family's needs and preferences for maximum convenience",
    color: "from-indigo-500/20 to-indigo-500/10",
    iconColor: "text-indigo-400",
  },
  {
    icon: Shield,
    title: "Comprehensive Monitoring",
    description:
      "Regular assessment and progress tracking with detailed reports shared with you and your doctor",
    color: "from-teal-500/20 to-teal-500/10",
    iconColor: "text-teal-400",
  },
]

export function PostStrokeFeatures() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-slate-900 via-slate-800/50 to-slate-900 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-up">
            Why Choose Our Post-Stroke Care?
          </h2>
          <p className="text-lg text-gray-300 animate-slide-up animation-delay-200">
            Comprehensive, specialized care designed specifically for stroke recovery success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <Card className={`border-gray-700/50 bg-linear-to-br ${feature.color} backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 h-full hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-105`}>
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-lg bg-linear-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up animation-delay-500">
          <p className="text-gray-300 mb-6">
            Ready to begin your stroke recovery journey at home?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300 group">
            Book Your Free Consultation Today
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
