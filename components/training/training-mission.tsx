"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const missionPoints = [
  {
    title: "Combatting Brain Drain",
    description:
      "We invest in those who stay, ensuring that home-based care means world-class care. Strengthen your expertise locally.",
    color: "primary",
  },
  {
    title: "Preventing Patient Harm",
    description:
      "We empower caregivers and clinicians with the confidence and skill to perform procedures safely and accurately.",
    color: "primary",
  },
  {
    title: "Building Specialized Manpower",
    description:
      "From Neurorehabilitation to Critical Care, we are training the specialists that the Nigerian healthcare landscape currently lacks.",
    color: "primary",
  },
];

export function TrainingMission() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-primary leading-tight">
                Why Our Training Academy Matters
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nigeria's healthcare system is at a crossroads. As many professionals seek opportunities abroad,
                the dedicated nurses, clinicians, and caregivers who remain are often left without the advanced,
                specialized training required for complex out-of-hospital care.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                This skill gap doesn't just stall recovery—it can lead to preventable harm. At LivingRite Care,
                we are stepping in to bridge this gap. We are a capacity-building company dedicated to equipping
                the next generation of healthcare providers with the clinical precision and requisite skills needed
                to protect and restore the lives of our citizens.
              </p>
              <p className="font-semibold text-lg text-primary italic">
                "The rite path to full recovery starts with the rite training."
              </p>
            </div>
          </div>

          {/* Right Content - Mission Points */}
          <div className="space-y-5">
            {missionPoints.map((point, index) => (
              <Card
                key={index}
                className={`border-l-4 ${
                  point.color === "primary"
                    ? "border-l-primary bg-primary/5"
                    : point.color === "secondary"
                      ? "border-l-secondary bg-secondary/5"
                      : "border-l-accent bg-accent/5"
                } hover:shadow-lg transition-all duration-300`}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className={`w-6 h-6 flex-shrink-0 mt-1 ${
                        point.color === "primary"
                          ? "text-primary"
                          : point.color === "secondary"
                            ? "text-secondary"
                            : "text-accent"
                      }`}
                    />
                    <h3 className={`text-lg font-bold font-poppins ${
                        point.color === "primary"
                          ? "text-primary"
                          : point.color === "secondary"
                            ? "text-secondary"
                            : "text-accent"
                      }`}>
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed ml-9">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
