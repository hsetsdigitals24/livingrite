"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/public/service-hero.jpg";
import Link from "next/link";

export function LiveInNursingHero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800/50 to-slate-900 bg-cover bg-center"
      style={{ backgroundImage: `url('${heroImage.src}')` }}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-accent text-accent px-4 py-2 rounded-full text-sm font-medium mb-8 animate-slide-up animation-delay-200">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            24/7 Professional Care
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 mb-6 leading-tight animate-slide-up animation-delay-300">
            Round-the-Clock{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Live-in Nursing
            </span>{" "}
            Care
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-up animation-delay-400">
            Dedicated caregivers providing comprehensive round-the-clock
            support. Our live-in nursing service ensures your loved one receives
            professional, compassionate care in the comfort of home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-500">
            <Link
              href={process.env.CALENDLY_URLINK || "https://calendly.com/livingritecare/30min"}
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="text-base font-semibold bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
