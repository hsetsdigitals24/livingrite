import { EndOfLifeHero } from "@/components/end-of-life-care/end-of-life-hero"
import { EndOfLifeFeatures } from "@/components/end-of-life-care/end-of-life-features"
import { CompassionateCare } from "@/components/end-of-life-care/compassionate-care"
// import { EndOfLifeTestimonials } from "@/components/end-of-life-care/end-of-life-testimonials"
import { ServiceProcess } from "@/components/services/service-process"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTABanner } from "@/components/cta-banner"

export const metadata = {
  title: "End-of-Life Care | Palliative & Hospice Services - Living Rite Care",
  description:
    "Compassionate palliative and hospice care focusing on comfort, dignity, and quality of life. Support for patients and families during this important time.",
  keywords: [
    "end-of-life care",
    "palliative care",
    "hospice care",
    "comfort care",
    "family support",
    "grief support",
  ],
  openGraph: {
    title: "End-of-Life Care | Palliative & Hospice Services",
    description:
      "Compassionate care focused on comfort, dignity, and quality of life",
    url: "https://livingritecare.com/end-of-life-care",
    type: "website",
  },
}

export default function EndOfLifeCarePage() {
  return (
    <main className="min-h-screen">
      <EndOfLifeHero />
      <EndOfLifeFeatures />
      <CompassionateCare />
      {/* <EndOfLifeTestimonials /> */}
      <ServiceProcess serviceType="End-of-Life Care" />
      <ServiceFAQ serviceType="End-of-Life Care" />
      <CTABanner /> 
    </main>
  )
}
