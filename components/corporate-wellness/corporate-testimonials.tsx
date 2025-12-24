"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "TechCorp Ltd",
    role: "HR Director",
    content: "The corporate wellness program has increased employee engagement and reduced absenteeism. Great investment in our team!",
    rating: 5,
  },
  {
    name: "SecureFinance Group",
    role: "CEO",
    content: "Our employees are happier and more productive since implementing the wellness program. Highly recommended!",
    rating: 5,
  },
  {
    name: "HealthCare Solutions",
    role: "Wellness Coordinator",
    content: "Professional, customized approach to corporate wellness. The support and resources provided are excellent.",
    rating: 5,
  },
]

export function CorporateTestimonials() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up">
            Corporate Testimonials
          </h2>
          <p className="text-lg text-gray-700 animate-slide-up animation-delay-200">
            Organizations improving employee wellness with our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-gray-300 bg-white hover:border-indigo-400 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-200">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">{`"${testimonial.content}"`}</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
