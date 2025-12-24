"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, MessageCircle } from "lucide-react"

export function PhysiotherapyCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Start Your Recovery Journey Today
            </h2>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Book your free consultation and take the first step towards regaining your mobility and independence
            </p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="w-full bg-accent text-white hover:bg-accent/90 sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-primary sm:w-auto bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact options */}
            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-white/20 pt-8 sm:flex-row"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-white/90">
                <Phone className="h-5 w-5" />
                <span className="text-sm">+234 (0) 123 456 7890</span>
              </div>
              <div className="hidden h-4 w-px bg-white/20 sm:block" />
              <div className="flex items-center gap-2 text-white/90">
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">Available 24/7</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Successful Recoveries</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-white/80">Licensed Therapists</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-white">4.9★</div>
              <div className="text-sm text-white/80">Patient Rating</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
