import { PostICUHero } from "@/components/post-icu/post-icu-hero"
import { PostICUFeatures } from "@/components/post-icu/post-icu-features"
import { TransitionCare } from "@/components/post-icu/transition-care"
// import { PostICUTestimonials } from "@/components/post-icu/post-icu-testimonials"
import { ServiceProcess } from "@/components/services/service-process"
import { ServiceFAQ } from "@/components/services/service-faq"
import { CTABanner } from "@/components/cta-banner"

export const metadata = {
	title: "Post-ICU Care | 24/7 Home Monitoring - Living Rite Care",
	description:
		"Intensive post-ICU home care with continuous monitoring. Safe hospital-to-home transition with specialized professional support.",
	keywords: [
		"post-ICU care",
		"ICU recovery",
		"home monitoring",
		"intensive care",
		"post-ICU monitoring",
		"critical care transition",
	],
	openGraph: {
		title: "Post-ICU Care | 24/7 Home Monitoring",
		description:
			"Expert post-ICU recovery programs with 24/7 professional supervision",
		url: "https://livingritecare.com/post-icu-care",
		type: "website",
	},
}

export default function PostICUCarePage() {
	return (
		<main className="min-h-screen"> 
			<PostICUHero />
			<PostICUFeatures />
			<TransitionCare />
			{/* <PostICUTestimonials /> */}
			<ServiceProcess serviceType="Post-ICU Care" />
			<ServiceFAQ serviceType="Post-ICU Care" />
			<CTABanner /> 
		</main>
	)
}