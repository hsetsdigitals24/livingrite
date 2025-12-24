"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Shield, Smile, HandHeart, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Comfort-Focused Care",
    description: "Prioritizing comfort and pain management throughout care.",
    color: "from-rose-100 to-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Comprehensive counseling and support for family members.",
    color: "from-pink-100 to-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Shield,
    title: "Dignity Preservation",
    description: "Ensuring respect and dignity in all aspects of care delivery.",
    color: "from-red-100 to-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Smile,
    title: "Emotional Support",
    description: "Professional emotional and spiritual guidance available.",
    color: "from-rose-100 to-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: HandHeart,
    title: "Compassionate Team",
    description: "Specially trained professionals experienced in palliative care.",
    color: "from-pink-100 to-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Lightbulb,
    title: "Quality of Life",
    description: "Focus on maximizing quality of life and meaningful moments.",
    color: "from-rose-100 to-rose-50",
    iconColor: "text-rose-600",
  },
]

export function EndOfLifeFeatures() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Compassionate End-of-Life Care
          </h2>
          <p className="text-lg text-gray-700 animate-slide-up animation-delay-200">
            Professional palliative care focused on comfort, dignity, and quality of life.
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
                <Card className="h-full border-gray-300 bg-white hover:border-rose-400 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-200 hover:scale-105">
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
