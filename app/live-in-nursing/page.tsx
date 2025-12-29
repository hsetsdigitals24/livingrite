import { LiveInNursingHero } from "@/components/live-in-nursing/live-in-nursing-hero"
import { LiveInNursingFeatures } from "@/components/live-in-nursing/live-in-nursing-features"
import { LiveInNursingBenefits } from "@/components/live-in-nursing/live-in-nursing-benefits"
// import { LiveInNursingTestimonials } from "@/components/live-in-nursing/live-in-nursing-testimonials"
import { ServiceProcess } from "@/components/services/service-process"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTABanner } from "@/components/cta-banner"

export const metadata = {
  title: "Live-in Nursing Services | 24/7 Professional Care - Living Rite Care",
  description:
    "Round-the-clock professional nursing care with dedicated caregivers. Comprehensive in-home support for patients needing continuous medical attention.",
  keywords: [
    "live-in nursing",
    "24/7 nursing care",
    "home nursing",
    "professional caregivers",
    "round-the-clock care",
    "in-home nursing",
  ],
  openGraph: {
    title: "Live-in Nursing Services | 24/7 Professional Care",
    description:
      "Dedicated live-in nursing care providing comprehensive round-the-clock support",
    url: "https://livingritecare.com/live-in-nursing",
    type: "website",
  },
}

export default function LiveInNursingPage() {
  return (
    <main className="min-h-screen"> 
      <LiveInNursingHero />
      <LiveInNursingFeatures />
      <LiveInNursingBenefits />
      {/* <LiveInNursingTestimonials /> */}
      <ServiceProcess serviceType="Live-in Nursing" />
      <ServiceFAQ serviceType="Live-in Nursing" />
      <CTABanner /> 
    </main>
  )
}
