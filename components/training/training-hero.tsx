"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import heroImage from "@/public/PHLEBOTOMY WEBSITE POPUP (1).jpg";

export function TrainingHero() {
  return (
    <section className="relative md:min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pt-32 pb-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <p className="text-sm font-semibold text-primary">
                  LivingRite Care Academy {new Date().getFullYear()} Training Programs
                </p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-primary leading-tight">
                Closing the{" "}
                <span className="bg-gradient-to-r from-primary  to-accent bg-clip-text text-transparent">
                  Care Gap
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Building the specialized healthcare manpower Nigeria needs. Equip yourself with
                world-class clinical training that transforms lives.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-primary/10">
                <p className="text-3xl font-bold text-primary">5</p>
                <p className="text-sm text-gray-600">Training Programs</p>
              </div>
              <div className="p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-secondary/10">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-600">Professionals Trained</p>
              </div>
              <div className="p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-accent/10">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-600">Practical Focus</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* <Link href="#training-schedule">
                <Button
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                >
                  View Schedule <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link> */}
              <Link href="https://nestuge.com/ivjxuy9om" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-accent text-accent hover:bg-accent/10 bg-accent text-white font-semibold transition-all duration-300 hover:scale-105"
                >
                  Register Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-[500px] rounded-2xl  shadow-2xl" style={{ backgroundImage: `url("${heroImage.src}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
        </div>
      </div>
    </section>
  );
}
