"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Mr. & Mrs. Oluwale",
    role: "Family",
    content:
      "After the stroke, their post-stroke care gave us confidence to bring our father home. The therapy and support were exceptional.",
    rating: 5,
  },
  {
    name: "Ms. Ifunanya",
    role: "Patient Family",
    content:
      "The tailored physiotherapy and caregiver coaching helped my mother regain movement and daily function.",
    rating: 5,
  },
]

export function PostStrokeTestimonials() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Patient Recovery Stories</h2>
          <p className="text-gray-700">Families share their outcomes and regained independence.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="h-full">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">“{t.content}”</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PostStrokeTestimonials
