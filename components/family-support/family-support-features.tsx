"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, Zap, Users, Lightbulb, HandHeart } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Respite Care",
    description: "Temporary relief for primary caregivers to prevent burnout.",
    color: "from-cyan-100 to-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: MessageCircle,
    title: "Professional Counseling",
    description: "Expert guidance for emotional and psychological wellbeing.",
    color: "from-sky-100 to-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Zap,
    title: "Practical Support",
    description: "Assistance with daily tasks and caregiving responsibilities.",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Support Groups",
    description: "Connect with others facing similar caregiving challenges.",
    color: "from-cyan-100 to-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "Resources & Education",
    description: "Knowledge and tools to improve caregiving skills and confidence.",
    color: "from-sky-100 to-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: HandHeart,
    title: "Holistic Wellness",
    description: "Comprehensive approach to caregiver physical and mental health.",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
]

export function FamilySupportFeatures() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Comprehensive Family Support
          </h2>
          <p className="text-lg text-gray-700 animate-slide-up animation-delay-200">
            Professional support services designed to strengthen families and caregivers.
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
                <Card className="h-full border-gray-300 bg-white hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-200 hover:scale-105">
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
