"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

interface Testimonial {
  name: string
  relation: string
  condition: string
  quote: string
  rating: number
  improvement: string
}

const testimonials: Testimonial[] = [
  {
    name: "Chioma O.",
    relation: "Patient's Daughter",
    condition: "Left Hemisphere Stroke",
    quote:
      "My father was completely dependent after the stroke. The physiotherapy team helped him walk again within 4 months. The compassion and expertise of the care team was incredible. He's now living independently.",
    rating: 5,
    improvement: "From wheelchair to independent walking",
  },
  {
    name: "Folake A.",
    relation: "Stroke Survivor",
    condition: "Right-sided Weakness",
    quote:
      "I was terrified after my stroke. The team's structured recovery program and constant encouragement made all the difference. I've regained use of my arm and returned to work. Truly life-changing.",
    rating: 5,
    improvement: "Returned to work, regained arm function",
  },
  {
    name: "Adebayo M.",
    relation: "Caregiver Husband",
    condition: "Aphasia & Right-sided Paralysis",
    quote:
      "My wife's speech therapy progress was remarkable. She went from being unable to speak to having full conversations. The home-based care allowed her to recover in familiar surroundings with family nearby.",
    rating: 5,
    improvement: "Speech fully restored, walking improved",
  },
  {
    name: "Zainab H.",
    relation: "Patient's Son",
    condition: "Severe Stroke",
    quote:
      "The 24/7 nursing support gave us peace of mind. The detailed progress reports and family involvement made us feel supported. Mom's recovery exceeded our expectations.",
    rating: 5,
    improvement: "From critical care to independent living",
  },
]

export function PostStrokeTestimonials() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-slate-800/50 to-slate-900 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-up">
            Recovery Stories That Inspire
          </h2>
          <p className="text-lg text-gray-300 animate-slide-up animation-delay-200">
            Real people, real recovery. Hear from patients and families who've experienced remarkable transformations
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <Card className="border-gray-700/50 bg-linear-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 h-full hover:shadow-2xl hover:shadow-emerald-500/20">
                <CardContent className="p-8">
                  {/* Quote */}
                  <div className="flex gap-4 mb-6">
                    <Quote className="w-5 h-5 text-emerald-400 shrink-0" />
                    <p className="text-gray-300 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                  </div>

                  {/* Improvement Badge */}
                  <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-3 mb-6">
                    <p className="text-sm text-emerald-300">
                      <span className="font-semibold">Recovery:</span>{" "}
                      {testimonial.improvement}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-gray-700/50 pt-4">
                    <p className="font-semibold text-white mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400 mb-2">
                      {testimonial.relation}
                    </p>
                    <p className="text-xs text-emerald-400 font-medium">
                      {testimonial.condition}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Highlight */}
        <Card className="border-emerald-500/30 bg-linear-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm max-w-2xl mx-auto animate-slide-up animation-delay-400">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Stroke Recovery Community
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  2,500+
                </div>
                <p className="text-sm text-gray-300">Patients Recovered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  95%
                </div>
                <p className="text-sm text-gray-300">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  4.9/5
                </div>
                <p className="text-sm text-gray-300">Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Testimonial CTA */}
        <div className="text-center mt-16 animate-slide-up animation-delay-500">
          <h3 className="text-xl font-bold text-white mb-4">
            Watch Real Recovery Stories
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            View video testimonials from stroke survivors and families sharing their
            recovery journey and transformation
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300 group">
            Watch Testimonials
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
