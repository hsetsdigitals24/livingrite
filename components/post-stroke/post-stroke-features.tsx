"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Activity, Heart, Users } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Specialist Physiotherapy",
    description: "Goal-directed therapy to restore movement, balance and daily function.",
    color: "from-rose-100 to-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Activity,
    title: "Functional Rehabilitation",
    description: "Task-based training and graded exercises to rebuild independence.",
    color: "from-amber-100 to-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Users,
    title: "Family & Caregiver Support",
    description: "Practical coaching for families to support everyday care and long-term recovery.",
    color: "from-sky-100 to-sky-50",
    iconColor: "text-sky-600",
  },
]

export function PostStrokeFeatures() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Post‑Stroke Services</h2>
          <p className="text-gray-700">Integrated clinical and rehabilitation services designed around each patient's goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="h-full border-gray-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className={`${feature.iconColor} w-5 h-5`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PostStrokeFeatures
