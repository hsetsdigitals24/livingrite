"use client"

export function GoogleReviewsWidget() {
	return (
		<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
			{/* Google Reviews Embed Container */}
			<div className="relative w-full aspect-[4/3] sm:aspect-[16/9] bg-gray-50 flex items-center justify-center">
				{/* Placeholder - Replace with actual Google Reviews embed */}
				<div className="text-center space-y-4 px-6">
					<div className="flex justify-center gap-1">
						{[...Array(5)].map((_, i) => (
							<svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
							</svg>
						))}
					</div>
					<h3 className="text-xl font-semibold text-gray-900">4.8 out of 5 stars</h3>
					<p className="text-gray-600">Based on 150+ Google Reviews</p>

					{/* Embed Instructions */}
					<div className="bg-blue-50 border border-blue-200 rounded p-4 mt-6">
						<p className="text-sm text-blue-900">
							<strong>Note:</strong> Replace this with Google Reviews embed code from your Google Business Profile
						</p>
					</div>

					{/* Embed Code Example */}
					<pre className="bg-gray-100 p-4 rounded text-left text-xs overflow-auto max-h-32">
{`<!-- Google Reviews Embed Code -->
<iframe 
  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=living+rite+care+lagos" 
  width="100%" 
  height="450" 
  style="border:0;" 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>`}
					</pre>
				</div>
			</div>

			{/* Reviews Summary Below */}
			<div className="p-6 bg-gradient-to-b from-gray-50 to-white">
				<h4 className="text-lg font-semibold text-gray-900 mb-4">Why Families Choose Us</h4>
				<div className="grid sm:grid-cols-3 gap-6">
					<div className="text-center">
						<div className="text-3xl font-bold text-primary mb-2">4.8★</div>
						<p className="text-sm text-gray-600">Average Rating</p>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-accent mb-2">150+</div>
						<p className="text-sm text-gray-600">Google Reviews</p>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-primary mb-2">98%</div>
						<p className="text-sm text-gray-600">Would Recommend</p>
					</div>
				</div>

				{/* Key Themes */}
				<div className="mt-8 pt-8 border-t space-y-3">
					<h5 className="font-semibold text-gray-900 text-sm">Common Praise Points</h5>
					<div className="grid sm:grid-cols-2 gap-3">
						{[
							"Professional & caring staff",
							"Expert medical guidance",
							"Excellent communication",
							"Dignified patient care",
							"Family-centered approach",
							"Compassionate support",
						].map((point, idx) => (
							<div key={idx} className="flex items-start gap-2">
								<svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
								</svg>
								<span className="text-sm text-gray-700">{point}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
