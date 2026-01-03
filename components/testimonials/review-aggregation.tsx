"use client"

import { useState } from "react"

export function ReviewAggregation() {
	const [sortBy, setSortBy] = useState<"recent" | "helpful" | "highest">
		("recent")

	const overallStats = {
		averageRating: 4.8,
		totalReviews: 127,
		distribution: {
			5: 98,
			4: 22,
			3: 5,
			2: 1,
			1: 1,
		},
	}

	const reviews = [
		{
			id: 1,
			author: "Chinyere M.",
			rating: 5,
			date: "2 weeks ago",
			service: "Post-ICU Care",
			title: "Life-changing care",
			content:
				"After my father's ICU discharge, I was terrified. The team at LivingRite made the transition smooth and gave us confidence. The nurses were professional, the doctors were attentive, and the care plan was clear.",
			helpful: 14,
			verified: true,
		},
		{
			id: 2,
			author: "Olu T.",
			rating: 5,
			date: "1 month ago",
			service: "Post-Stroke Care",
			title: "My wife is walking again",
			content:
				"The physiotherapy team was incredible. They didn't just treat symptoms—they gave my wife the hope and determination to recover. She's now walking independently after her stroke.",
			helpful: 22,
			verified: true,
		},
		{
			id: 3,
			author: "Ada K.",
			rating: 5,
			date: "1 month ago",
			service: "Geriatric Care",
			title: "Compassionate professionals",
			content:
				"My mother received palliative care from LivingRite. Beyond the medical expertise, their compassion and respect for my mother's dignity was extraordinary. We felt supported through every step.",
			helpful: 18,
			verified: true,
		},
		{
			id: 4,
			author: "Wale A.",
			rating: 4,
			date: "2 months ago",
			service: "Post-Surgical Care",
			title: "Very good, minor improvement needed",
			content:
				"Overall excellent service. The care was professional and the team was responsive. Only suggestion would be faster response to some evening questions, but overall highly satisfied.",
			helpful: 8,
			verified: true,
		},
		{
			id: 5,
			author: "Tope L.",
			rating: 5,
			date: "2 months ago",
			service: "Physiotherapy",
			title: "Exceeded expectations",
			content:
				"I hired them for post-surgery physiotherapy and they've been exceptional. Regular updates, professional approach, and visible progress. Highly recommend to anyone needing expert care at home.",
			helpful: 25,
			verified: true,
		},
	]

	return (
		<div className="space-y-8">
			{/* Overall Stats Card */}
			<div className="bg-white border border-gray-200 rounded-lg p-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Overall Rating */}
					<div className="flex flex-col items-center justify-center">
						<div className="mb-4">
							<div className="text-5xl font-bold text-primary">{overallStats.averageRating}</div>
							<p className="text-sm text-gray-600 mt-1">out of 5</p>
						</div>
						<div className="flex gap-1 mb-3">
							{[...Array(5)].map((_, i) => (
								<svg
									key={i}
									className={`w-5 h-5 ${i < Math.round(overallStats.averageRating) ? "text-accent fill-current" : "text-gray-300 fill-current"}`}
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
								</svg>
							))}
						</div>
						<p className="text-sm text-gray-600 font-medium">
							Based on {overallStats.totalReviews} verified reviews
						</p>
					</div>

					{/* Star Distribution */}
					<div className="col-span-1 md:col-span-2 space-y-4">
						{[5, 4, 3, 2, 1].map((stars) => {
							const count = overallStats.distribution[stars as keyof typeof overallStats.distribution]
							const percentage = (count / overallStats.totalReviews) * 100

							return (
								<div key={stars} className="flex items-center gap-4">
									<div className="flex items-center gap-1 w-16">
										{[...Array(stars)].map((_, i) => (
											<svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 24 24">
												<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
											</svg>
										))}
										<span className="text-xs text-gray-500 ml-1">{stars}★</span>
									</div>
									<div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
										<div
											className="bg-accent h-full rounded-full transition-all"
											style={{ width: `${percentage}%` }}
										></div>
									</div>
									<span className="text-sm text-gray-600 font-medium w-12 text-right">{count}</span>
								</div>
							)
						})}
					</div>
				</div>
			</div>

			{/* Reviews List */}
			<div className="space-y-4">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<h3 className="text-lg font-semibold text-gray-900">Recent Reviews</h3>
					<select
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value as "recent" | "helpful" | "highest")}
						className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
					>
						<option value="recent">Most Recent</option>
						<option value="helpful">Most Helpful</option>
						<option value="highest">Highest Rated</option>
					</select>
				</div>

				{reviews.map((review) => (
					<div key={review.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
						{/* Review Header */}
						<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
							<div>
								<div className="flex items-center gap-2 mb-2">
									<h4 className="font-semibold text-gray-900">{review.author}</h4>
									{review.verified && (
										<span className="bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
											✓ Verified
										</span>
									)}
								</div>
								<div className="flex items-center gap-2">
									<div className="flex gap-1">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className={`w-4 h-4 ${i < review.rating ? "text-accent fill-current" : "text-gray-300 fill-current"}`}
												viewBox="0 0 24 24"
											>
												<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
											</svg>
										))}
									</div>
									<span className="text-sm text-gray-600">{review.date}</span>
								</div>
							</div>
							<span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{review.service}</span>
						</div>

						{/* Review Content */}
						<div className="mb-4">
							<h5 className="font-semibold text-gray-900 mb-2">{review.title}</h5>
							<p className="text-gray-700 text-sm leading-relaxed">{review.content}</p>
						</div>

						{/* Review Footer */}
						<div className="flex items-center gap-6 pt-4 border-t border-gray-100">
							<button className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.646 7.23a2 2 0 01-1.789 1.106H2a2 2 0 01-2-2V8a2 2 0 012-2h1.657a2 2 0 011.414.586l2.828 2.829a2 2 0 001.414.586h2.657a2 2 0 012 2v1z" />
								</svg>
								Helpful ({review.helpful})
							</button>
							<button className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors">
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.646-7.23a2 2 0 011.789-1.106h10.064a2 2 0 012 2v1z" />
								</svg>
								Not helpful
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Load More Button */}
			<div className="text-center pt-4">
				<button className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-colors">
					Load More Reviews
				</button>
			</div>
		</div>
	)
}
