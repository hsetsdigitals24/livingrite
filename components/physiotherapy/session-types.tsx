"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Brain, Bone, Accessibility, HeartPulse, Dumbbell, Stethoscope } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const sessionTypes = [
  {
    icon: Brain,
    title: "Post-Stroke Rehabilitation",
    description: "Specialized therapy to regain movement, strength, and independence after a stroke.",
    features: ["Mobility retraining", "Balance exercises", "Coordination improvement"],
    duration: "45-60 min",
    badge: "Most Popular",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bone,
    title: "Orthopedic Physiotherapy",
    description: "Recovery from fractures, joint replacements, and musculoskeletal injuries.",
    features: ["Joint mobilization", "Strengthening exercises", "Pain management"],
    duration: "45-60 min",
    badge: null,
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Accessibility,
    title: "Mobility Enhancement",
    description: "Improve walking ability, transfer skills, and overall functional mobility.",
    features: ["Gait training", "Transfer techniques", "Fall prevention"],
    duration: "45-60 min",
    badge: null,
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: HeartPulse,
    title: "Cardiac Rehabilitation",
    description: "Safe, supervised exercise programs for heart condition recovery.",
    features: ["Cardiovascular conditioning", "Monitored exercises", "Lifestyle guidance"],
    duration: "30-45 min",
    badge: null,
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Dumbbell,
    title: "Sports Injury Recovery",
    description: "Specialized treatment to get you back to your active lifestyle safely.",
    features: ["Injury rehabilitation", "Performance restoration", "Prevention"],
    duration: "45-60 min",
    badge: null,
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Stethoscope,
    title: "Post-ICU Recovery",
    description: "Gentle rehabilitation after intensive care to rebuild strength and endurance.",
    features: ["Gradual strengthening", "Breathing exercises", "Endurance building"],
    duration: "30-45 min",
    badge: null,
    color: "from-teal-500 to-cyan-500",
  },
]

export function SessionTypes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-primary md:text-4xl">Our Physiotherapy Programs</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Specialized sessions tailored to your specific recovery needs
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sessionTypes.map((session, index) => {
            const Icon = session.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-md transition-all hover:shadow-xl"
              >
                {/* Gradient header */}
                <div className={`relative h-32 bg-gradient-to-br ${session.color} p-6`}>
                  {session.badge && (
                    <Badge className="absolute right-4 top-4 bg-white text-primary">{session.badge}</Badge>
                  )}
                  <motion.div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{session.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{session.description}</p>

                  <div className="mb-4 space-y-2">
                    {session.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mb-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm font-medium text-muted-foreground">Duration</span>
                    <span className="text-sm font-semibold text-primary">{session.duration}</span>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    Book This Session
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
