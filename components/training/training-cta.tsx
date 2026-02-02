"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function TrainingCTA() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm">
              <p className="text-sm font-semibold text-secondary flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Limited Slots Available
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-slate-800 leading-tight">
              Join the Next Generation of Healthcare Leaders
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
              Don't let the opportunity to advance your career pass you by. The rite path to full recovery 
              starts with the rite training. Secure your spot today and become a catalyst for change in Nigerian healthcare.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="https://nestuge.com/ivjxuy9om" target="_blank" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full rounded-full bg-primary text-white hover:bg-primary/60 font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Register Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            {/* <Link href="#training-schedule" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-2 border-white text-white hover:bg-white/10 font-bold transition-all duration-300 hover:scale-105"
              >
                View All Programs
              </Button>
            </Link> */}
          </div>

          {/* Trust Message */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">
              ✓ Accredited Training Programs | ✓ Expert Instructors | ✓ Flexible Schedules | ✓ Job Placement Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
