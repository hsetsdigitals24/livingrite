"use client"

import { Button } from "@/components/ui/button"
import { Activity, Calendar, Home } from "lucide-react"
import { motion } from "framer-motion"

export function PhysiotherapyHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary-dark py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Activity className="h-4 w-4" />
              Professional Physiotherapy Services
            </motion.div>

            <h1 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Expert Physiotherapy <span className="text-accent">in Your Home</span>
            </h1>

            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Recover faster and regain mobility with personalized physiotherapy sessions delivered by licensed
              professionals in the comfort of your home.
            </p>

            {/* Stats */}
            <motion.div
              className="mb-8 grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <div className="mb-1 text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80">Sessions Completed</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <div className="mb-1 text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-white/80">Recovery Success</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <div className="mb-1 text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/80">Support Available</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Session
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm">
              <img
                src="/physiotherapist-helping-elderly-patient-with-rehab.jpg"
                alt="Professional physiotherapy session"
                className="h-full w-full object-cover"
              />

              {/* Floating cards */}
              <motion.div
                className="absolute right-4 top-4 rounded-2xl bg-white p-4 shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">Home Sessions</div>
                    <div className="text-xs text-muted-foreground">Safe & Convenient</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 rounded-2xl bg-white p-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <Activity className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">Licensed Therapists</div>
                    <div className="text-xs text-muted-foreground">Certified Experts</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
