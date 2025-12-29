
import { AboutSection } from "@/components/about-section"
import { TrustIndicators } from "@/components/trust-indicators"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTABanner } from "@/components/cta-banner"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
	title: "About Us — LivingRite Care",
	description:
		"LivingRite Care brings hospital-quality home healthcare to Nigerian families — discover our mission, values and team.",
}

const team = [
	{
		name: "Aisha Bello",
		title: "Head Nurse",
		image: "/african-woman-professional-headshot.png",
		bio: "Hospital-trained nurse with 12 years experience in post-acute care.",
	},
	{
		name: "Dr. Emeka Okoye",
		title: "Clinical Lead",
		image: "/african-doctor-professional-headshot.jpg",
		bio: "Consultant in internal medicine guiding our care protocols.",
	},
	{
		name: "Ngozi Ade",
		title: "Physiotherapy Lead",
		image: "/african-woman-professional-headshot.png",
		bio: "Specialist in stroke rehab and mobility recovery.",
	},
	{
		name: "Chinedu Ibe",
		title: "Operations Manager",
		image: "/african-man-professional-headshot.png",
		bio: "Ensures smooth scheduling and caregiver matching.",
	},
]

export default function AboutPage() {
	return (
		<main className="bg-white text-gray-800">
			{/* Full-width hero with split layout */}
			<section className="pt-24 pb-12 bg-gradient-to-b from-white to-gray-50">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
						<div>
							<p className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">About LivingRite</p>
							<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">Hospital-quality care, delivered at home</h1>
							<p className="text-gray-600 mb-6 max-w-xl">
								We combine clinical excellence with compassionate support — helping patients recover safely at home while
								giving families the clarity and confidence they need.
							</p>

							<div className="flex flex-wrap gap-3">
								<Link href="/services">
									<Button size="lg">Explore Services</Button>
								</Link>
								<Link href="/contact">
									<Button size="lg" variant="outline">Book a Consultation</Button>
								</Link>
							</div>
						</div>

						<div className="relative">
							<div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
								<img src="/african-nurse-caring-for-elderly-patient-at-home--.jpg" alt="Caregiver with patient" className="w-full h-full object-cover" />
							</div>

							<div className="absolute -bottom-6 -right-6 bg-primary text-white p-5 rounded-2xl shadow-xl border border-primary/20">
								<div className="text-2xl font-bold">98%</div>
								<div className="text-xs opacity-90">Client Satisfaction</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mission & Values */}
			<section className="py-12">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-8 items-start">
						<div>
							<h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
							<p className="text-gray-600 mb-6">To restore health and independence by delivering personalised, evidence-based care in the comfort of home.</p>

							<h3 className="text-lg font-medium mb-2">Core Values</h3>
							<ul className="space-y-3 text-gray-700">
								<li className="flex items-start gap-3">
									<span className="mt-1 text-primary">•</span>
									<span><strong>Compassion:</strong> Treat every client like family.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1 text-primary">•</span>
									<span><strong>Excellence:</strong> Clinical standards based on best practice.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1 text-primary">•</span>
									<span><strong>Transparency:</strong> Clear communication and fair pricing.</span>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold mb-3">Impact</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="p-6 bg-white border rounded-lg shadow-sm text-center">
									<div className="text-2xl font-bold text-primary">2,000+</div>
									<div className="text-sm text-gray-500">Families Served</div>
								</div>
								<div className="p-6 bg-white border rounded-lg shadow-sm text-center">
									<div className="text-2xl font-bold text-primary">50k+</div>
									<div className="text-sm text-gray-500">Care Hours Delivered</div>
								</div>
								<div className="p-6 bg-white border rounded-lg shadow-sm text-center">
									<div className="text-2xl font-bold text-primary">98%</div>
									<div className="text-sm text-gray-500">Satisfaction Rate</div>
								</div>
								<div className="p-6 bg-white border rounded-lg shadow-sm text-center">
									<div className="text-2xl font-bold text-primary">10+</div>
									<div className="text-sm text-gray-500">Years Trusted</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-8">
						<h2 className="text-2xl font-semibold">Meet the Team</h2>
						<p className="text-gray-600 mt-2">Experienced clinicians and caregivers driving better outcomes.</p>
					</div>

					<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
						{team.map((m) => (
							<div key={m.name} className="bg-white border rounded-lg p-4 text-center shadow-sm">
								<div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3 border border-gray-200">
									<img src={m.image} alt={m.name} className="w-full h-full object-cover" />
								</div>
								<div className="font-semibold">{m.name}</div>
								<div className="text-sm text-gray-500 mb-2">{m.title}</div>
								<div className="text-xs text-gray-600">{m.bio}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Reuse AboutSection, TrustIndicators, Testimonials, CTA */}
			<AboutSection />
			<TrustIndicators />
			<TestimonialsSection />
			<CTABanner />
		</main>
	)
}
