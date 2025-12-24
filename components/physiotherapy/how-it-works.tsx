"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, UserCheck, Home, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Book Your Session",
    description: "Choose a convenient time and date for your first assessment session online or by phone.",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Initial Assessment",
    description: "Our licensed physiotherapist conducts a comprehensive evaluation of your condition and mobility.",
  },
  {
    icon: Home,
    number: "03",
    title: "Personalized Treatment",
    description: "Receive one-on-one therapy sessions at home with exercises tailored to your goals.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Track Progress",
    description: "Regular evaluations and adjustments ensure you're making steady improvements.",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-primary md:text-4xl">How It Works</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Start your recovery journey in four simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-8 hidden h-[calc(100%-64px)] w-0.5 bg-gradient-to-b from-primary via-accent to-primary lg:block" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                    {/* Icon and number */}
                    <motion.div className="relative z-10 flex items-center gap-4" whileHover={{ scale: 1.05 }}>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-6xl font-bold text-primary/10 lg:hidden">{step.number}</div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md lg:ml-8"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="mb-2 text-2xl font-semibold text-foreground">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                        <div className="ml-4 hidden text-4xl font-bold text-primary/20 lg:block">{step.number}</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
