"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Zap, Shield, Users, Clock, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Personalized Care Plans",
    description:
      "Tailored rehabilitation programs designed specifically for your recovery goals and medical condition.",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: Zap,
    title: "Faster Recovery",
    description: "Evidence-based techniques that accelerate healing and restore function more effectively.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Shield,
    title: "Safe & Supervised",
    description: "Licensed physiotherapists ensure proper form and technique to prevent injury during recovery.",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Users,
    title: "Family Involvement",
    description: "We train family members on proper support techniques for continued progress between sessions.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions at times that work for you, including weekends and evenings.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Regular assessments and detailed reports to monitor your improvement journey.",
    color: "text-teal-500",
    bgColor: "bg-teal-50",
  },
]

export function PhysiotherapyBenefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-primary md:text-4xl">
            Why Choose Our Physiotherapy Services?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Experience comprehensive care that addresses your unique needs with proven results
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <motion.div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${benefit.bgColor} transition-transform group-hover:scale-110`}
                  whileHover={{ rotate: 5 }}
                >
                  <Icon className={`h-6 w-6 ${benefit.color}`} />
                </motion.div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
