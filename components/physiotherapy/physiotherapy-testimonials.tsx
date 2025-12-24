"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mr. Adewale Thompson",
    age: "62 years old",
    condition: "Post-Stroke Recovery",
    image: "/elderly-nigerian-man-smiling.jpg",
    testimonial:
      "After my stroke, I thought I'd never walk again. Thanks to the dedicated physiotherapists at LivingRite Care, I'm now walking independently and have regained so much of my strength. The home sessions made all the difference.",
    rating: 5,
    recovery: "6 months of treatment",
  },
  {
    name: "Mrs. Folake Ogunleye",
    age: "58 years old",
    condition: "Hip Replacement Rehabilitation",
    image: "/nigerian-woman-smiling-confidently.jpg",
    testimonial:
      "The personalized care plan helped me recover much faster than expected after my hip surgery. The therapist was professional, patient, and truly cared about my progress. I highly recommend their services.",
    rating: 5,
    recovery: "3 months of treatment",
  },
  {
    name: "Chief Emmanuel Nwosu",
    age: "70 years old",
    condition: "Mobility Enhancement",
    image: "/elderly-nigerian-man-in-traditional-attire.jpg",
    testimonial:
      "The convenience of having therapy at home cannot be overstated. No more stressful hospital visits. The therapist brings all the equipment needed, and I'm making excellent progress with my mobility.",
    rating: 5,
    recovery: "4 months of treatment",
  },
]

export function PhysiotherapyTestimonials() {
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
          <h2 className="mb-4 font-display text-3xl font-bold text-primary md:text-4xl">Success Stories</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hear from our patients about their recovery journeys
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 shadow-md transition-all hover:shadow-xl"
            >
              {/* Quote icon background */}
              <div className="absolute -right-4 -top-4 opacity-5">
                <Quote className="h-32 w-32 text-primary" />
              </div>

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                  >
                    <Star className="h-5 w-5 fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="relative z-10 mb-6 text-muted-foreground">"{testimonial.testimonial}"</p>

              {/* Patient info */}
              <div className="relative z-10 flex items-center gap-4">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/20"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.age}</div>
                  <div className="text-xs font-medium text-primary">{testimonial.condition}</div>
                </div>
              </div>

              {/* Recovery time badge */}
              <motion.div
                className="relative z-10 mt-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                whileHover={{ scale: 1.05 }}
              >
                {testimonial.recovery}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
