import { PostStrokeHero } from "@/components/post-stroke/post-stroke-hero"
import { PostStrokeFeatures } from "@/components/post-stroke/post-stroke-features"
import { RecoveryStages } from "@/components/post-stroke/recovery-stages"
// import { PostStrokeTestimonials } from "@/components/post-stroke/post-stroke-testimonials"
import { ServiceProcess } from "@/components/services/service-process"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTABanner } from "@/components/cta-banner"

export const metadata = {
  title: "Post-Stroke Care | Expert Home Recovery - Living Rite Care",
  description:
    "Specialized post-stroke home care with hospital-trained nurses and physiotherapists. Proven recovery programs helping patients regain independence.",
  keywords: [
    "post-stroke care",
    "stroke recovery",
    "home rehabilitation",
    "stroke rehabilitation",
    "post-stroke recovery",
    "stroke recovery at home",
  ],
  openGraph: {
    title: "Post-Stroke Care | Expert Home Recovery",
    description:
      "Specialized post-stroke recovery programs at home with proven results",
    url: "https://livingritecare.com/post-stroke-care",
    type: "website",
  },
}

export default function PostStrokeCarePage() {
  return (
    <main className="min-h-screen">
      <PostStrokeHero /> 
        <PostStrokeFeatures />
        <RecoveryStages />
        {/* <PostStrokeTestimonials /> */}
          <ServiceProcess serviceType="post-stroke-care" />
          <ServiceFAQ serviceType="post-stroke-care" />
          <CTABanner />
    </main>
  )
}