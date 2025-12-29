import { FamilySupportHero } from "@/components/family-support/family-support-hero"
import { FamilySupportFeatures } from "@/components/family-support/family-support-features"
import { SupportServices } from "@/components/family-support/support-services"
// import { FamilySupportTestimonials } from "@/components/family-support/family-support-testimonials"
import { ServiceProcess } from "@/components/services/service-process"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTABanner } from "@/components/cta-banner"

export const metadata = {
  title: "Family Support Services | Caregiver Support & Counseling - Living Rite Care",
  description:
    "Respite care and professional counseling to support caregivers. Helping families maintain wellbeing while caring for their loved ones.",
  keywords: [
    "family support",
    "caregiver support",
    "respite care",
    "counseling services",
    "caregiver respite",
    "family counseling",
  ],
  openGraph: {
    title: "Family Support Services | Caregiver Support & Counseling",
    description:
      "Comprehensive support services for caregivers and families",
    url: "https://livingritecare.com/family-support",
    type: "website",
  },
}

export default function FamilySupportPage() {
  return (
    <main className="min-h-screen"> 
      <FamilySupportHero />
      <FamilySupportFeatures />
      <SupportServices />
      {/* <FamilySupportTestimonials /> */}
      <ServiceProcess serviceType="Family Support" />
      <ServiceFAQ serviceType="Family Support" />
      <CTABanner />
    </main>
  )
}
