"use client"

export function VideoTestimonials() {
	const testimonials = [
		{
			id: 1,
			title: "Post-Stroke Recovery Success",
			clientName: "Mrs. Fatima Adeyemi",
			condition: "Post-Stroke Care",
			duration: "90 seconds",
			videoUrl: "https://example.com/testimonial-1.mp4", // Replace with Cloudflare Stream URL
			thumbnail: "/testimonial-1-thumbnail.jpg",
			outcome: "Successfully regained mobility and returned to daily activities",
		},
		{
			id: 2,
			title: "ICU to Home Transition",
			clientName: "Mr. Chukwu Okafor",
			condition: "Post-ICU Recovery",
			duration: "75 seconds",
			videoUrl: "https://example.com/testimonial-2.mp4", // Replace with Cloudflare Stream URL
			thumbnail: "/testimonial-2-thumbnail.jpg",
			outcome: "Smooth transition from ICU with expert home care support",
		},
	]

	return (
		<div className="grid md:grid-cols-2 gap-8">
			{testimonials.map((testimonial) => (
				<div key={testimonial.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
					{/* Video Container */}
					<div className="relative bg-black aspect-video flex items-center justify-center group">
						<img
							src={testimonial.thumbnail}
							alt={testimonial.title}
							className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
						/>
						{/* Play Button Overlay */}
						<div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
							<button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg">
								<svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
									<path d="M8 5v14l11-7z" />
								</svg>
							</button>
						</div>
						{/* Duration Badge */}
						<div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-medium">
							{testimonial.duration}
						</div>
					</div>

					{/* Content */}
					<div className="p-6">
						<h3 className="text-lg font-semibold text-gray-900 mb-1">{testimonial.title}</h3>
						<p className="text-sm text-primary font-medium mb-3">{testimonial.condition}</p>
						<p className="text-gray-700 mb-4 text-sm">{testimonial.outcome}</p>
						<div className="flex items-center justify-between">
							<span className="text-sm text-gray-600">— {testimonial.clientName}</span>
							<div className="flex text-accent">
								{[...Array(5)].map((_, i) => (
									<svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
									</svg>
								))}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
