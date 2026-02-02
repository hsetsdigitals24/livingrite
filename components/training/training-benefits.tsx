"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, BookOpen, Users, Zap, Award, Globe } from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "Industry Recognition",
    description: "Gain certified credentials recognized across healthcare institutions in Nigeria and beyond.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Practical Expertise",
    description: "Learn through hands-on training with real-world scenarios and clinical simulations.",
    color: "secondary",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Train under experienced healthcare professionals with decades of clinical practice.",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Career Advancement",
    description: "Upgrade your skills to access higher-paying positions and leadership roles.",
    color: "primary",
  },
  {
    icon: Award,
    title: "Professional Network",
    description: "Connect with peers and build lasting relationships within the healthcare community.",
    color: "secondary",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Learn protocols and techniques aligned with international healthcare best practices.",
    color: "accent",
  },
];

export function TrainingBenefits() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-gray-50 via-primary/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-sm font-semibold text-primary">Training Benefits</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900">
            What You'll Gain
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your healthcare career with skills, certifications, and connections that matter
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClass =
              benefit.color === "primary"
                ? "text-primary"
                : benefit.color === "secondary"
                  ? "text-secondary"
                  : "text-accent";
            const bgClass =
              benefit.color === "primary"
                ? "bg-primary/10"
                : benefit.color === "secondary"
                  ? "bg-secondary/10"
                  : "bg-accent/10";

            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200 bg-white"
              >
                <CardHeader className="space-y-4">
                  <div className={`w-14 h-14 rounded-lg ${bgClass} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${colorClass}`} />
                  </div>
                  <CardTitle className="font-poppins text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
