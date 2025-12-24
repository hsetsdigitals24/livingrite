"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Chioma Okafor",
    role: "Daughter of Post-Stroke Patient",
    location: "Lagos, Nigeria",
    image: "/african-woman-professional-headshot.png",
    rating: 5,
    text: "LivingRite Care transformed my mother's recovery journey. The nurses are not just skilled—they genuinely care. I receive daily updates with photos, which gives me peace of mind while I'm at work. Highly recommended!",
  },
  {
    name: "Emeka Nwosu",
    role: "Son arranging care from UK",
    location: "London, United Kingdom",
    image: "/african-man-professional-headshot.png",
    rating: 5,
    text: "As a diaspora Nigerian, finding trustworthy care for my father was challenging. LivingRite made it seamless with video updates, international payment options, and round-the-clock communication. Worth every penny.",
  },
  {
    name: "Dr. Adebayo Johnson",
    role: "Medical Consultant",
    location: "Abuja, Nigeria",
    image: "/african-doctor-professional-headshot.jpg",
    rating: 5,
    text: "I regularly refer my patients to LivingRite Care for post-ICU support. Their staff is professional, well-trained, and follows care protocols meticulously. They've set a new standard for home healthcare in Nigeria.",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = testimonials[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-linear-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-scale">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Client Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-up animation-delay-200">
            Trusted by Families Across Nigeria
          </h2>
          <p className="text-lg text-gray-700 animate-slide-up animation-delay-300">
            Real stories from families who chose LivingRite Care for their loved ones
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-2xl mx-auto mb-12 animate-slide-up animation-delay-400">
          <Card className="border-gray-300 bg-white relative overflow-hidden">
            {/* Quote Mark */}
            <div className="absolute top-6 left-6 text-6xl text-primary/20 opacity-20">
              <span>"</span>
            </div>

            <CardContent className="p-8 lg:p-12 relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-gray-800 mb-8 leading-relaxed italic">"{current.text}"</p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={current.image || "/placeholder.svg"}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg">{current.name}</div>
                  <div className="text-sm text-gray-600">{current.role}</div>
                  <div className="text-xs text-gray-500">{current.location}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="lg"
              className="p-3 h-auto border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 h-2 rounded-full ${
                    index === activeIndex
                      ? "w-8 bg-linear-to-r from-primary to-accent"
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              size="lg"
              className="p-3 h-auto bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Testimonials Thumbnail Grid */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer animate-slide-up rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                index === activeIndex
                  ? "border-primary shadow-lg shadow-primary/20 scale-105"
                  : "border-gray-700/50 hover:border-gray-600"
              }`}
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="aspect-square bg-linear-to-br from-gray-800/40 to-gray-900/40 p-4 flex flex-col justify-center items-center text-center hover:bg-gray-800/60 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-xs font-medium text-white mb-1">{testimonial.name}</p>
                <p className="text-xs text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center animate-slide-up animation-delay-500">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </div>
          <div className="text-center animate-slide-up animation-delay-600">
            <div className="text-4xl font-bold text-primary mb-2">250+</div>
            <div className="text-sm text-gray-400">Reviews</div>
          </div>
          <div className="text-center animate-slide-up animation-delay-600">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-gray-400">Would Recommend</div>
          </div>
          <div className="text-center animate-slide-up animation-delay-600">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-gray-400">Years Trusted</div>
          </div>
        </div>
      </div>
    </section>
  )
}
