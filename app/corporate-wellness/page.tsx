import { CorporateWellnessHero } from "@/components/corporate-wellness/corporate-wellness-hero"
import { CorporateWellnessFeatures } from "@/components/corporate-wellness/corporate-wellness-features"
import { WellnessPrograms } from "@/components/corporate-wellness/wellness-programs" 
import { ServiceProcess } from "@/components/services/service-process"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTABanner } from "@/components/cta-banner"

export const metadata = {
  title: "Corporate Wellness Programs | Employee Health Solutions - Living Rite Care",
  description:
    "Comprehensive employee wellness programs and organizational health consultations. Tailored solutions to improve workplace health and productivity.",
  keywords: [
    "corporate wellness",
    "employee wellness",
    "workplace health",
    "health programs",
    "wellness consulting",
    "occupational health",
  ],
  openGraph: {
    title: "Corporate Wellness Programs | Employee Health Solutions",
    description:
      "Professional wellness programs designed to improve employee health and engagement",
    url: "https://livingritecare.com/corporate-wellness",
    type: "website",
  },
}

export default function CorporateWellnessPage() {
  return (
    <main className="min-h-screen"> 
      <CorporateWellnessHero />
      <CorporateWellnessFeatures />
      <WellnessPrograms /> 
      <ServiceProcess serviceType="Corporate Wellness" />
      <ServiceFAQ serviceType="Corporate Wellness" />
      <CTABanner /> 
    </main>
  )
}
