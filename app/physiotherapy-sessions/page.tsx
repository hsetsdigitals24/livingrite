import { PhysiotherapyHero } from "@/components/physiotherapy-sessions/physiotherapy-hero"
import { PhysiotherapyFeatures } from "@/components/physiotherapy-sessions/physiotherapy-features"
import { SessionTypes } from "@/components/physiotherapy-sessions/session-types"
// import { PhysiotherapyTestimonials } from "@/components/physiotherapy-sessions/physiotherapy-testimonials"
import { ServiceProcess } from "@/components/services/service-process"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTABanner } from "@/components/cta-banner"

export const metadata = {
  title: "Physiotherapy Sessions | Professional Physical Therapy - Living Rite Care",
  description:
    "Professional physical therapy at home to restore mobility, strength, and independence. Customized programs by certified therapists.",
  keywords: [
    "physiotherapy",
    "physical therapy",
    "home therapy",
    "rehabilitation therapy",
    "mobility restoration",
    "strength training",
  ],
  openGraph: {
    title: "Physiotherapy Sessions | Professional Physical Therapy",
    description:
      "Expert physiotherapy services delivered in the comfort of your home",
    url: "https://livingritecare.com/physiotherapy-sessions",
    type: "website",
  },
}

export default function PhysiotherapySessionsPage() {
  return (
    <main className="min-h-screen"> 
      <PhysiotherapyHero />
      <PhysiotherapyFeatures />
      <SessionTypes />
      {/* <PhysiotherapyTestimonials /> */}
      <ServiceProcess serviceType="Physiotherapy Sessions" />
      <ServiceFAQ serviceType="Physiotherapy Sessions" />
      <CTABanner /> 
    </main>
  )
}
