"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function PhotoGalleryCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [selectedImage, setSelectedImage] = useState<number | null>(null)

	const galleryItems = [
		{
			id: 1,
			image: "/gallery-1-care-session.jpg",
			title: "Physiotherapy Session",
			description: "Our therapist working with a client on mobility recovery",
			category: "Care Sessions",
		},
		{
			id: 2,
			image: "/gallery-2-progress.jpg",
			title: "Progress Milestone",
			description: "Client achieving independence in daily activities",
			category: "Progress",
		},
		{
			id: 3,
			image: "/gallery-3-family.jpg",
			title: "Family Support",
			description: "Nurse educating family members on ongoing care",
			category: "Family",
		},
		{
			id: 4,
			image: "/gallery-4-home-setup.jpg",
			title: "Safe Home Environment",
			description: "Properly equipped and safe care space in client's home",
			category: "Environment",
		},
		{
			id: 5,
			image: "/gallery-5-wellness.jpg",
			title: "Wellness Activity",
			description: "Client enjoying outdoor activity during recovery",
			category: "Wellness",
		},
		{
			id: 6,
			image: "/gallery-6-team.jpg",
			title: "Care Team",
			description: "Our compassionate healthcare professionals",
			category: "Team",
		},
		{
			id: 7,
			image: "/gallery-7-before-after.jpg",
			title: "Recovery Journey",
			description: "Visual representation of remarkable recovery progress",
			category: "Progress",
		},
		{
			id: 8,
			image: "/gallery-8-celebration.jpg",
			title: "Discharge Celebration",
			description: "Family celebrating successful recovery milestone",
			category: "Celebrations",
		},
	]

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
	}

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
	}

	return (
		<div className="space-y-6">
			{/* Main Carousel */}
			<div className="relative bg-black rounded-lg overflow-hidden shadow-xl">
				{/* Main Image */}
				<div className="relative aspect-video sm:aspect-[16/9] overflow-hidden">
					<img
						src={galleryItems[currentIndex].image}
						alt={galleryItems[currentIndex].title}
						className="w-full h-full object-cover"
					/>
					{/* Overlay with Info */}
					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
						<span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
							{galleryItems[currentIndex].category}
						</span>
						<h3 className="text-xl font-semibold text-white mb-2">{galleryItems[currentIndex].title}</h3>
						<p className="text-gray-200 text-sm">{galleryItems[currentIndex].description}</p>
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={prevSlide}
						className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						onClick={nextSlide}
						className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>

					{/* Image Counter */}
					<div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-medium">
						{currentIndex + 1} / {galleryItems.length}
					</div>
				</div>
			</div>

			{/* Thumbnail Navigation */}
			<div className="space-y-4">
				<h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">View More</h3>
				<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 overflow-x-auto pb-2">
					{galleryItems.map((item, idx) => (
						<button
							key={item.id}
							onClick={() => setCurrentIndex(idx)}
							className={`relative aspect-square rounded-lg overflow-hidden flex-shrink-0 transition-all ${
								currentIndex === idx ? "ring-4 ring-primary scale-105" : "opacity-70 hover:opacity-100"
							}`}
						>
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-full object-cover"
							/>
						</button>
					))}
				</div>
			</div>

			{/* Privacy Notice */}
			<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
				<div className="flex gap-3">
					<svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
					</svg>
					<p className="text-sm text-blue-900">
						All photos are shared with family consent and privacy is maintained. Faces may be obscured or identities anonymized.
					</p>
				</div>
			</div>

			{/* Category Stats */}
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
				<div className="text-center">
					<div className="text-2xl font-bold text-primary">8+</div>
					<p className="text-xs text-gray-600 mt-1">Photo Stories</p>
				</div>
				<div className="text-center">
					<div className="text-2xl font-bold text-accent">100+</div>
					<p className="text-xs text-gray-600 mt-1">Care Moments</p>
				</div>
				<div className="text-center">
					<div className="text-2xl font-bold text-primary">500+</div>
					<p className="text-xs text-gray-600 mt-1">Progress Photos</p>
				</div>
				<div className="text-center">
					<div className="text-2xl font-bold text-accent">2000+</div>
					<p className="text-xs text-gray-600 mt-1">Families Served</p>
				</div>
			</div>
		</div>
	)
}
