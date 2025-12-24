"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, BarChart3, Lightbulb, Users, Calendar, Award } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Personalized Goals",
    description: "Recovery plans tailored to your specific condition and personal objectives.",
    color: "from-orange-100 to-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Measurable improvements monitored through regular assessments and documentation.",
    color: "from-amber-100 to-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Lightbulb,
    title: "Evidence-Based Methods",
    description: "Utilizes proven rehabilitation techniques and therapeutic approaches.",
    color: "from-yellow-100 to-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced physiotherapists and rehabilitation specialists guiding your recovery.",
    color: "from-orange-100 to-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Sessions scheduled around your lifestyle and recovery pace.",
    color: "from-red-100 to-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Qualified therapists with proven track record of successful outcomes.",
    color: "from-orange-100 to-orange-50",
    iconColor: "text-orange-600",
  },
]

export function RehabilitationFeatures() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Comprehensive Rehabilitation Support
          </h2>
          <p className="text-lg text-gray-700 animate-slide-up animation-delay-200">
            Our rehabilitation programs combine expertise with compassionate care for optimal recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <Card className="h-full border-gray-300 bg-white hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-200 hover:scale-105">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
