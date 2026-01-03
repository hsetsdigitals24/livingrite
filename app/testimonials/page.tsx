import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoTestimonials } from "@/components/testimonials/video-testimonials"
import { CaseStudies } from "@/components/testimonials/case-studies"
import { PhotoGalleryCarousel } from "@/components/testimonials/photo-gallery-carousel"
import { ReviewAggregation } from "@/components/testimonials/review-aggregation"
import { TestimonialFilters } from "@/components/testimonials/testimonial-filters"
import { GoogleReviewsWidget } from "@/components/testimonials/google-reviews-widget"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
	title: "Client Testimonials & Success Stories — LivingRite Care",
	description:
		"Read real stories from families we've helped and see the impact of our home healthcare services. Video testimonials, case studies, and client reviews.",
}

export default function TestimonialsPage() {
	return (
		<main className="bg-white text-gray-800">
			{/* Hero Section */}
			<section className="pt-24 pb-12 bg-gradient-to-b from-primary/10 to-white">
				<div className="container mx-auto px-4 text-center">
					<p className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
						Client Stories
					</p>
					<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
						Real Stories, Real Results
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Hear directly from families we've helped and discover how LivingRite Care has transformed their recovery journeys.
					</p>
				</div>
			</section>

			{/* Video Testimonials */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-semibold text-primary mb-3">Video Testimonials</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Watch families share their experiences in their own words
						</p>
					</div>
					<VideoTestimonials />
				</div>
			</section>

			{/* Review Aggregation */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<ReviewAggregation />
				</div>
			</section>

			{/* Filters & Case Studies */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-semibold text-primary mb-3">In-Depth Case Studies</h2>
						<p className="text-gray-600 max-w-2xl mx-auto mb-8">
							Explore detailed stories of our clients' recovery journeys and the care they received
						</p>
						<TestimonialFilters />
					</div>
					<CaseStudies />
				</div>
			</section>

			{/* Photo Gallery Carousel */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-semibold text-primary mb-3">Care Moments & Progress</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Visual stories of our clients' care journeys (with family permission)
						</p>
					</div>
					<PhotoGalleryCarousel />
				</div>
			</section>

			{/* Google Reviews Widget */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-semibold text-primary mb-3">What Others Are Saying</h2>
						<p className="text-gray-600 max-w-2xl mx-auto mb-8">
							Visit our Google Business Profile to see more reviews and leave your own
						</p>
					</div>
					<GoogleReviewsWidget />
					<div className="text-center mt-8">
						<Link href="https://www.google.com/maps/place/living-rite-care" target="_blank" rel="noopener noreferrer">
							<Button variant="outline" size="lg">
								Leave a Review on Google
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Trust Badges */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-semibold text-primary mb-8">Trusted & Certified</h2>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="font-semibold text-gray-900 mb-1">Hospital-Trained</h3>
							<p className="text-sm text-gray-600 text-center">Certified caregivers</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="font-semibold text-gray-900 mb-1">Doctor-Led</h3>
							<p className="text-sm text-gray-600 text-center">Medical oversight</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="font-semibold text-gray-900 mb-1">5+ Years</h3>
							<p className="text-sm text-gray-600 text-center">Industry experience</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
								<svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="font-semibold text-gray-900 mb-1">98% Satisfaction</h3>
							<p className="text-sm text-gray-600 text-center">Client rated</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Banner */}
			<CTABanner />
		</main>
	)
}
