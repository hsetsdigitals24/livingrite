"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const trainings = [
  {
    id: 1,
    title: "Phlebotomy Training",
    focus: "A 5-day intensive training on clinical blood collection techniques.",
    dates: "22nd – 26th of February 2026",
    duration: "5 Days",
    status: "Open",
    color: "primary",
    link: "https://nestuge.com/ivjxuy9om",

  },
  {
    id: 2,
    title: "BLS Training for First Responders & Caregivers",
    focus: "Essential Basic Life Support skills for emergency intervention.",
    dates: "14th & 15th of March 2026",
    duration: "2 Days",
    status: "Closed",
    color: "accent",
    link: "",
  },
  {
    id: 3,
    title: "Caregivers' Training: Specialized Post-Stroke Care",
    focus: "Mastering the complexities of caring for stroke survivors and driving neuro-recovery.",
    dates: "14th – 30th of March 2026",
    duration: "17 Days",
    status: "Closed",
    color: "secondary",
    link: "",
  },
  {
    id: 4,
    title: "Nursing Training for Critical Care Nursing",
    focus: "Specialized training for nurses managing patients in critical recovery phases.",
    dates: "1st – 15th of April 2026",
    duration: "15 Days",
    status: "Closed",
    color: "primary",
    link: "",
  },
  {
    id: 5,
    title: "Ultrasound-Guided Phlebotomy for Clinicians",
    focus: "Advanced vascular access techniques for clinicians.",
    dates: "1st – 10th of May 2026",
    duration: "10 Days",
    status: "Closed",
    color: "accent",
    link: "",
  },
];
 
export function TrainingSchedule() {
  return (
    <section id="training-schedule" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm font-semibold text-primary">2026 Training Calendar</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900">
            LivingRite Care Training Schedule for 2026
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our curriculum is designed to move beyond theory and into high-impact, practical mastery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.map((training) => (
            <Card
              key={training.id}
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 `}
            >
             

              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between">
                  {/* <div className="text-4xl">{training.icon}</div> */}
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${training.status === "Open" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} whitespace-nowrap`}>
                    {training.status}
                  </span>
                </div>
                <CardTitle className="text-xl font-poppins text-gray-700 leading-tight">
                  {training.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* Focus/Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {training.focus}
                </p>

                {/* Training Details */}
                <div className="space-y-3 pt-2 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-4 h-4 flex-shrink-0 font-semibold" style={{
                      color: training.color === "primary"
                        ? "var(--primary)"
                        : training.color === "secondary"
                          ? "var(--secondary)"
                          : "var(--accent)"
                    }} />
                    <span className="text-sm font-medium">{training.dates}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-4 h-4 flex-shrink-0" style={{
                      color: training.color === "primary"
                        ? "var(--primary)"
                        : training.color === "secondary"
                          ? "var(--secondary)"
                          : "var(--accent)"
                    }} />
                    <span className="text-sm font-medium">{training.duration}</span>
                  </div>
                </div>

                {/* Register Button */}
                <Link href={training.link} target="_blank" className="block w-full pt-2">
                  <Button
                  variant="outline"
                    className={`w-fit rounded-lg text-primary border-primary hover:border-accent hover:text-white font-semibold transition-all duration-300 hover:scale-105 `}
                  >
                    Register
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-gray-900">
            Ready to advance your career?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join healthcare professionals transforming their skills through LivingRite Care's specialized training programs.
          </p>
          <Link href="https://nestuge.com/ivjxuy9om" target="_blank">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              Register Now for All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
