"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Activity,
  Stethoscope,
  HeartPulse,
  Heart,
  Home,
  Zap,
  Building2,
  Users,
  ArrowRight,
  Clock,
  Shield,
  Award,
} from "lucide-react"

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  slug: string
  color: string
  iconColor: string
  features?: string[]
  index: number
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  slug,
  color,
  iconColor,
  features = [],
  index,
}: ServiceCardProps) => {
  return (
    <Link href={`/services/${slug}`}>
      <Card
        className="h-full border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-105 cursor-pointer group animate-slide-up"
        style={{ animationDelay: `${index * 75}ms` }}
      >
        <CardContent className="p-8">
          {/* Icon */}
          <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

          {/* Features */}
          {features.length > 0 && (
            <div className="mb-6 space-y-2">
              {features.slice(0, 2).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {feature}
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

const services: Array<ServiceCardProps & { features: string[] }> = [
  {
    icon: Activity,
    title: "Post-Stroke Care",
    description: "Specialized recovery support with experienced nurses trained in stroke rehabilitation and physical therapy.",
    slug: "post-stroke-care",
    color: "from-blue-500/20 to-blue-500/10",
    iconColor: "text-blue-400",
    features: ["24/7 Monitoring", "Rehabilitation Support", "Medication Management"],
    index: 0,
  },
  {
    icon: Stethoscope,
    title: "Post-ICU Care",
    description: "Intensive home monitoring for patients transitioning from ICU with 24/7 supervision and expert care.",
    slug: "post-icu-care",
    color: "from-emerald-500/20 to-emerald-500/10",
    iconColor: "text-emerald-400",
    features: ["Continuous Monitoring", "Vital Signs Tracking", "Emergency Support"],
    index: 1,
  },
  {
    icon: HeartPulse,
    title: "Physiotherapy Sessions",
    description: "Professional physical therapy at home to restore mobility, strength, and independence.",
    slug: "physiotherapy-sessions",
    color: "from-green-500/20 to-green-500/10",
    iconColor: "text-green-400",
    features: ["Customized Programs", "Progress Tracking", "In-Home Therapy"],
    index: 2,
  },
  {
    icon: Heart,
    title: "End-of-Life Care",
    description: "Compassionate palliative support focusing on comfort, dignity, and quality of life for patients and families.",
    slug: "end-of-life-care",
    color: "from-rose-500/20 to-rose-500/10",
    iconColor: "text-rose-400",
    features: ["Palliative Support", "Family Counseling", "Comfort Focus"],
    index: 3,
  },
  {
    icon: Home,
    title: "Live-in Nursing",
    description: "Round-the-clock professional nursing care with dedicated caregivers providing comprehensive in-home support.",
    slug: "live-in-nursing",
    color: "from-purple-500/20 to-purple-500/10",
    iconColor: "text-purple-400",
    features: ["24/7 Availability", "Dedicated Caregiver", "Full Medical Support"],
    index: 4,
  },
  {
    icon: Zap,
    title: "Rehabilitation Support",
    description: "Comprehensive rehab programs for post-surgery and injury recovery with personalized rehabilitation plans.",
    slug: "rehabilitation-support",
    color: "from-orange-500/20 to-orange-500/10",
    iconColor: "text-orange-400",
    features: ["Recovery Plans", "Progress Monitoring", "Therapy Sessions"],
    index: 5,
  },
  {
    icon: Building2,
    title: "Corporate Wellness",
    description: "Employee wellness programs and organizational health consultations tailored to your company's needs.",
    slug: "corporate-wellness",
    color: "from-indigo-500/20 to-indigo-500/10",
    iconColor: "text-indigo-400",
    features: ["Wellness Programs", "Health Consultations", "Team Training"],
    index: 6,
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Respite care and counseling to help caregivers maintain their wellbeing while supporting their loved ones.",
    slug: "family-support",
    color: "from-cyan-500/20 to-cyan-500/10",
    iconColor: "text-cyan-400",
    features: ["Caregiver Support", "Respite Care", "Counseling Services"],
    index: 7,
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-slate-900 via-slate-800/50 to-slate-900 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-up animation-delay-200">
            Complete Care Solutions
          </h2>
          <p className="text-lg text-gray-300 animate-slide-up animation-delay-300">
            From acute recovery to long-term support, explore all our specialized healthcare services designed to provide comprehensive care for every need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 pt-20 border-t border-gray-700/50">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-up">
              Why Choose Our Services?
            </h3>
            <p className="text-lg text-gray-300 animate-slide-up animation-delay-200">
              We combine expertise, compassion, and innovation to deliver the best care outcomes
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock care and support whenever you need us, day or night.",
              },
              {
                icon: Shield,
                title: "Certified Professionals",
                description: "Hospital-trained nurses and therapists with verified credentials and experience.",
              },
              {
                icon: Award,
                title: "Quality Assured",
                description: "Evidence-based care practices with continuous monitoring and improvement.",
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div
                  key={idx}
                  className="group animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20">
                    <div className="inline-flex p-3 rounded-lg bg-emerald-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center animate-slide-up animation-delay-500">
          <p className="text-gray-300 mb-6">
            Ready to experience compassionate, professional healthcare?
          </p>
          <Button
            size="lg"
            className="text-base font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300 group"
          >
            Book Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
