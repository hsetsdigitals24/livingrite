"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function TestimonialFilters() {
	const [activeFilter, setActiveFilter] = useState<string>("all")

	const filters = [
		{ id: "all", label: "All Services", count: 3 },
		{ id: "post-stroke", label: "Post-Stroke Care", count: 1 },
		{ id: "post-icu", label: "Post-ICU Care", count: 1 },
		{ id: "palliative", label: "Palliative Care", count: 1 },
		{ id: "physiotherapy", label: "Physiotherapy", count: 0 },
		{ id: "geriatric", label: "Geriatric Care", count: 0 },
	]

	return (
		<div className="flex flex-wrap gap-2 justify-center">
			{filters.map((filter) => (
				<Button
					key={filter.id}
					onClick={() => setActiveFilter(filter.id)}
					variant={activeFilter === filter.id ? "default" : "outline"}
					className="cursor-pointer"
				>
					<span>{filter.label}</span>
					{filter.count > 0 && <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">{filter.count}</span>}
				</Button>
			))}
		</div>
	)
}
