"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CaseStudies() {
	const [expandedId, setExpandedId] = useState<number | null>(null)

	const caseStudies = [
		{
			id: 1,
			title: "From ICU to Independence: Mrs. Adeola's Journey",
			serviceType: "post-icu",
			serviceName: "Post-ICU Care",
			clientName: "Mrs. Adeola Balogun",
			age: 62,
			location: "Lagos",
			condition: "Post-ICU Recovery following severe pneumonia and sepsis",
			challenge:
				"After 18 days in the ICU receiving mechanical ventilation, Mrs. Adeola faced a critical transition to home recovery. She was weak, had severe deconditioning, required respiratory support management, and her family was overwhelmed with the complexity of post-hospital care.",
			intervention: [
				"24-hour nursing support for the first week",
				"Daily physiotherapy sessions to rebuild strength and mobility",
				"Respiratory therapy and oxygen management",
				"Nutritional support with a dietitian's meal plan",
				"Psychological support for post-ICU trauma",
				"Family education and caregiver training",
			],
			timeline: [
				{ week: "Week 1", milestone: "Stable home transition, pain management optimized" },
				{ week: "Week 3", milestone: "Began light physiotherapy, reduced oxygen dependency" },
				{ week: "Week 6", milestone: "Walking with walker for 50 meters, oxygen-free during day" },
				{ week: "Week 10", milestone: "Independent activities, returned to light household duties" },
				{ week: "Week 16", milestone: "Discharged from care, back to normal life" },
			],
			outcomes: [
				"✓ Successfully weaned off oxygen support in 8 weeks",
				"✓ Regained full mobility and independence",
				"✓ Zero readmissions to hospital",
				"✓ Family confidence and caregiver skills developed",
				"✓ Psychological recovery with improved quality of life",
			],
			testimonialQuote:
				"LivingRite Care didn't just help my mother recover physically—they helped our entire family feel confident and supported during a scary time. The nurses were compassionate, the doctors knew what they were doing, and most importantly, my mother is thriving again.",
			testimonialAuthor: "Mr. Tunde Balogun (Son)",
			images: ["/case-study-1-before.jpg", "/case-study-1-progress.jpg", "/case-study-1-after.jpg"],
			videoUrl: "https://example.com/case-study-1.mp4",
		},
		{
			id: 2,
			title: "Walking Again: Mr. Emeka's Stroke Recovery",
			serviceType: "post-stroke",
			serviceName: "Post-Stroke Care & Neurorehabilitation",
			clientName: "Mr. Emeka Obi",
			age: 58,
			location: "Abuja",
			condition: "Post-Stroke Recovery with left-side hemiparesis",
			challenge:
				"Mr. Emeka suffered a moderate stroke that left him with significant weakness on his left side. He lost confidence, feared he'd never walk again, and his family lacked the specialized knowledge to support his recovery.",
			intervention: [
				"Specialized neurorehabilitation protocol",
				"Daily physical therapy targeting motor recovery",
				"Occupational therapy for daily living activities",
				"Speech therapy (mild dysarthria)",
				"Cognitive rehabilitation and mental health support",
				"Home environment modification for safety",
				"Family education on stroke recovery and prevention",
			],
			timeline: [
				{ week: "Week 1", milestone: "Assessment, pain management, initial ROM exercises" },
				{ week: "Week 3", milestone: "Sitting balance improved, started standing with support" },
				{ week: "Week 6", milestone: "Walking with walker, significant strength improvement" },
				{ week: "Week 12", milestone: "Walking with cane, fine motor skills recovering" },
				{ week: "Month 6", milestone: "Independent ambulation, returned to work part-time" },
			],
			outcomes: [
				"✓ Regained 85% of pre-stroke mobility",
				"✓ Speech clarity fully restored",
				"✓ Returned to work and social activities",
				"✓ Psychological confidence rebuilt",
				"✓ Family empowered with ongoing support skills",
			],
			testimonialQuote:
				"After my stroke, I thought my life was over. The team at LivingRite Care showed me it was just a new chapter. Their expertise, patience, and belief in my recovery gave me the strength to push forward. I'm now back to doing the things I love.",
			testimonialAuthor: "Mr. Emeka Obi",
			images: ["/case-study-2-before.jpg", "/case-study-2-progress.jpg", "/case-study-2-after.jpg"],
			videoUrl: "https://example.com/case-study-2.mp4",
		},
		{
			id: 3,
			title: "Comfort & Dignity: Mrs. Patience's Palliative Care Journey",
			serviceType: "palliative",
			serviceName: "End-of-Life & Palliative Care",
			clientName: "Mrs. Patience Adewale",
			age: 74,
			location: "Port Harcourt",
			condition: "Advanced cancer with 6-month prognosis",
			challenge:
				"Mrs. Patience was transitioning from curative to palliative care and wanted to spend her final months at home with family. She needed expert pain management, symptom control, and emotional support while maintaining her dignity.",
			intervention: [
				"Comprehensive pain and symptom management",
				"24-hour palliative care nursing",
				"Psychological and spiritual counseling",
				"Family support and grief counseling",
				"Advance care planning and documentation",
				"Comfortable home environment setup",
				"Caregiver education and respite care",
			],
			timeline: [
				{ week: "Week 1", milestone: "Pain assessment, comfort measures implemented" },
				{ week: "Week 3", milestone: "Stable symptom control, family feeling supported" },
				{ week: "Month 2", milestone: "Focus shifted to quality time with family, legacy planning" },
				{ week: "Month 4", milestone: "Spiritual preparation, family gathered for farewells" },
				{ week: "Month 5", milestone: "Peaceful passing at home, surrounded by loved ones" },
			],
			outcomes: [
				"✓ Excellent pain and symptom control achieved",
				"✓ Spent final months at home with family",
				"✓ Maintained dignity and quality of life",
				"✓ Family supported through entire journey",
				"✓ Meaningful legacy and closure for family",
			],
			testimonialQuote:
				"We couldn't have asked for better care. The team honored my mother's wishes to die at home in peace. Beyond the clinical expertise, it was their compassion and humanity that made all the difference. They treated mum with such dignity.",
			testimonialAuthor: "Ms. Zainab Adewale (Daughter)",
			images: ["/case-study-3-comfort.jpg", "/case-study-3-family.jpg", "/case-study-3-legacy.jpg"],
			videoUrl: "https://example.com/case-study-3.mp4",
		},
	]

	return (
		<div className="grid gap-8">
			{caseStudies.map((study) => (
				<Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
					<CardHeader>
						<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
							<div>
								<CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
								<CardDescription className="text-base">
									<Badge variant="outline" className="mb-2">
										{study.serviceName}
									</Badge>
									<p className="mt-2 text-gray-700">
										<strong>Client:</strong> {study.clientName}, {study.age} years old | <strong>Location:</strong> {study.location}
									</p>
								</CardDescription>
							</div>
						</div>
					</CardHeader>

					<CardContent className="space-y-6">
						{/* Challenge Section */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
							<p className="text-gray-700">{study.challenge}</p>
						</div>

						{/* Intervention Section */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">Our Intervention</h3>
							<ul className="grid sm:grid-cols-2 gap-3">
								{study.intervention.map((item, idx) => (
									<li key={idx} className="flex items-start gap-2">
										<svg className="w-5 h-5 text-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
											<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
										</svg>
										<span className="text-gray-700">{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Outcomes Section */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">Outcomes</h3>
							<ul className="space-y-2">
								{study.outcomes.map((outcome, idx) => (
									<li key={idx} className="text-gray-700 flex items-start gap-2">
										<span className="text-primary font-bold">•</span>
										<span>{outcome}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Family Testimonial */}
						<div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
							<div className="flex gap-1 mb-3">
								{[...Array(5)].map((_, i) => (
									<svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
									</svg>
								))}
							</div>
							<p className="text-gray-800 italic mb-3 text-lg">"{study.testimonialQuote}"</p>
							<p className="text-gray-700 font-semibold">— {study.testimonialAuthor}</p>
						</div>

						{/* Timeline Section - Expandable */}
						<button
							onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
							className="w-full text-left"
						>
							<h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center justify-between hover:text-primary transition-colors">
								Recovery Timeline
								<svg
									className={`w-5 h-5 transition-transform ${expandedId === study.id ? "rotate-180" : ""}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
								</svg>
							</h3>
						</button>

						{expandedId === study.id && (
							<div className="space-y-4 pt-4 border-t">
								{study.timeline.map((item, idx) => (
									<div key={idx} className="flex gap-4">
										<div className="flex flex-col items-center">
											<div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
											{idx < study.timeline.length - 1 && <div className="w-1 h-12 bg-primary/30 mt-2"></div>}
										</div>
										<div className="pb-4">
											<p className="font-semibold text-primary">{item.week}</p>
											<p className="text-gray-700">{item.milestone}</p>
										</div>
									</div>
								))}
							</div>
						)}

						{/* Images Gallery - Preview */}
						{study.images && study.images.length > 0 && (
							<div>
								<h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Progress (with consent)</h3>
								<div className="grid grid-cols-3 gap-3">
									{study.images.map((img, idx) => (
										<div key={idx} className="aspect-square rounded-lg overflow-hidden bg-gray-200">
											<img
												src={img}
												alt={`Progress photo ${idx + 1}`}
												className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
											/>
										</div>
									))}
								</div>
								<p className="text-xs text-gray-500 mt-3 italic">*Photos shown with family permission and privacy considerations</p>
							</div>
						)}
					</CardContent>
				</Card>
			))}
		</div>
	)
}
