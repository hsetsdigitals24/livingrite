import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RehabilitationHero } from "@/components/rehabilitation-support/rehabilitation-hero"
import { RehabilitationFeatures } from "@/components/rehabilitation-support/rehabilitation-features"
import { RehabilitationPrograms } from "@/components/rehabilitation-support/rehabilitation-programs"
import { RehabilitationTestimonials } from "@/components/rehabilitation-support/rehabilitation-testimonials"
import { ServiceProcess } from "@/components/services/service-process"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTABanner } from "@/components/cta-banner"

export const metadata = {
  title: "Rehabilitation Support | Post-Surgery & Injury Recovery - Living Rite Care",
  description:
    "Comprehensive rehabilitation programs for post-surgery and injury recovery. Personalized therapy plans to help regain function and independence.",
  keywords: [
    "rehabilitation support",
    "post-surgery recovery",
    "injury recovery",
    "rehabilitation therapy",
    "recovery programs",
    "physical rehabilitation",
  ],
  openGraph: {
    title: "Rehabilitation Support | Post-Surgery & Injury Recovery",
    description:
      "Personalized rehabilitation programs designed for successful recovery",
    url: "https://livingritecare.com/rehabilitation-support",
    type: "website",
  },
}

export default function RehabilitationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <RehabilitationHero />
      <RehabilitationFeatures />
      <RehabilitationPrograms />
      <RehabilitationTestimonials />
      <ServiceProcess serviceType="Rehabilitation Support" />
      <ServiceFAQ serviceType="Rehabilitation Support" />
      <CTABanner />
      <Footer />
    </main>
  )
}
