"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Heart, Shield, Briefcase, Zap } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock care with dedicated nursing staff always present and attentive.",
    color: "from-purple-100 to-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "Dedicated Caregiver",
    description: "Consistent, familiar caregiver builds trust and understands your loved one's needs.",
    color: "from-pink-100 to-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Heart,
    title: "Full Medical Support",
    description: "Comprehensive healthcare including medication management and vital sign monitoring.",
    color: "from-red-100 to-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Shield,
    title: "Professional Credentials",
    description: "Hospital-trained nurses with verified qualifications and extensive experience.",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Flexible Arrangements",
    description: "Customizable care plans adapted to your family's specific needs and preferences.",
    color: "from-purple-100 to-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "Immediate assistance with any concerns or emergencies that may arise.",
    color: "from-yellow-100 to-yellow-50",
    iconColor: "text-yellow-600",
  },
]

export function LiveInNursingFeatures() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Why Choose Our Live-in Nursing?
          </h2>
          <p className="text-lg text-gray-700 animate-slide-up animation-delay-200">
            Experience professional, compassionate care with features designed for comfort and security.
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
                <Card className="h-full border-gray-300 bg-white hover:border-purple-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200 hover:scale-105">
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
