"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Lightbulb, BarChart3, Shield, Target } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Improved Productivity",
    description: "Healthier employees lead to increased productivity and engagement.",
    color: "from-indigo-100 to-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Wellness programs strengthen team cohesion and company culture.",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Custom Solutions",
    description: "Programs designed specifically for your organization's needs.",
    color: "from-purple-100 to-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    description: "Measurable outcomes through comprehensive wellness tracking.",
    color: "from-indigo-100 to-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Shield,
    title: "Health Coverage",
    description: "Comprehensive health assessments and preventive care programs.",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Target,
    title: "Goal Alignment",
    description: "Programs aligned with your company's strategic health objectives.",
    color: "from-purple-100 to-purple-50",
    iconColor: "text-purple-600",
  },
]

export function CorporateWellnessFeatures() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Corporate Wellness Benefits
          </h2>
          <p className="text-lg text-gray-700 animate-slide-up animation-delay-200">
            Strategic wellness programs that benefit both employees and your organization.
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
                <Card className="h-full border-gray-300 bg-white hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-200 hover:scale-105">
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
