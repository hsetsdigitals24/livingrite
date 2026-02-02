import { TrainingHero } from "@/components/training/training-hero";
import { TrainingSchedule } from "@/components/training/training-schedule";
import { TrainingMission } from "@/components/training/training-mission";
import { TrainingBenefits } from "@/components/training/training-benefits";
import { TrainingCTA } from "@/components/training/training-cta"; 
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Academy | LivingRite Care",
  description:
    "Join LivingRite Care's specialized training programs for healthcare professionals. Learn advanced clinical skills in phlebotomy, BLS, critical care, and more.",
  openGraph: {
    title: "Training & Academy | LivingRite Care",
    description: "Specialized healthcare training programs to close the care gap in Nigeria",
    url: "https://livingritecare.com/training",
  },
};

export default function TrainingPage() {
  return (
    <main className="min-h-screen">
      <TrainingHero />
      <TrainingSchedule />
      <TrainingMission />
      <TrainingBenefits />
      <TrainingCTA /> 
    </main>
  );
}
