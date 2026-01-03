'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, Search, ArrowRight } from 'lucide-react'

// Resource categories
const RESOURCE_CATEGORIES = [
  {
    id: 'guides',
    name: 'Care Guides',
    description: 'Comprehensive guides for different care situations',
    count: 12,
    color: 'bg-primary/10 text-primary',
  },
  {
    id: 'checklists',
    name: 'Checklists',
    description: 'Daily and weekly caregiving checklists',
    count: 8,
    color: 'bg-accent/10 text-accent',
  },
  {
    id: 'videos',
    name: 'Video Tutorials',
    description: 'Step-by-step video guides and demonstrations',
    count: 15,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'worksheets',
    name: 'Worksheets',
    description: 'Interactive planning and tracking tools',
    count: 10,
    color: 'bg-green-100 text-green-600',
  },
]

// Featured resources
const FEATURED_RESOURCES = [
  {
    id: '1',
    title: 'Complete Post-Stroke Care Checklist',
    description:
      'A comprehensive daily checklist for caring for someone recovering from a stroke, covering medications, exercises, and safety precautions.',
    category: 'checklists',
    type: 'PDF',
    downloads: 2341,
    rating: 4.8,
    image: '📋',
  },
  {
    id: '2',
    title: 'Home Physiotherapy Exercise Video Series',
    description:
      'Professional videos demonstrating safe exercises for post-acute care recovery at home. Includes modifications for different mobility levels.',
    category: 'videos',
    type: 'Video',
    duration: '12 videos',
    rating: 4.9,
    image: '🎥',
  },
  {
    id: '3',
    title: 'Family Caregiver Wellness Guide',
    description:
      'A guide to managing caregiver stress, preventing burnout, and maintaining your own health while caring for a loved one.',
    category: 'guides',
    type: 'PDF',
    downloads: 1856,
    rating: 4.7,
    image: '❤️',
  },
  {
    id: '4',
    title: 'Wound Care & Dressing Change Instructions',
    description:
      'Detailed step-by-step instructions for safe wound care at home, with tips on infection prevention and when to seek help.',
    category: 'guides',
    type: 'PDF',
    downloads: 1234,
    rating: 4.8,
    image: '🏥',
  },
]

// All resources
const ALL_RESOURCES = [
  ...FEATURED_RESOURCES,
  {
    id: '5',
    title: 'Medication Tracking Worksheet',
    description: 'Printable worksheet to track medications, dosages, times, and side effects.',
    category: 'worksheets',
    type: 'PDF',
    downloads: 892,
    rating: 4.6,
    image: '💊',
  },
  {
    id: '6',
    title: 'ICU Discharge Preparation Guide',
    description:
      'Everything you need to know before bringing your loved one home from the ICU.',
    category: 'guides',
    type: 'PDF',
    downloads: 1567,
    rating: 4.9,
    image: '🏥',
  },
  {
    id: '7',
    title: 'Vital Signs Tracking Chart',
    description: 'Easy-to-use chart for monitoring blood pressure, temperature, and other vital signs.',
    category: 'worksheets',
    type: 'PDF',
    downloads: 945,
    rating: 4.7,
    image: '📊',
  },
  {
    id: '8',
    title: 'Nutrition Guide for Post-Acute Care',
    description: 'Dietary recommendations and meal planning tips for different care situations.',
    category: 'guides',
    type: 'PDF',
    downloads: 723,
    rating: 4.5,
    image: '🥗',
  },
]

// Resource card component
function ResourceCard({ resource }: { resource: (typeof ALL_RESOURCES)[0] }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full overflow-hidden">
      <div className="relative p-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="text-4xl mb-4">{resource.image}</div>
        <div className="mb-4">
          <Badge variant="secondary" className="mb-2">
            {resource.type}
          </Badge>
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
            {resource.title}
          </h3>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{resource.description}</p>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>⭐ {resource.rating}</span>
            {resource.downloads && <span>📥 {resource.downloads.toLocaleString()}</span>}
            {resource.duration && <span>⏱️ {resource.duration}</span>}
          </div>
          <Button variant="ghost" size="sm" className="group/btn">
            <Download className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default function ResourcesContent() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter resources
  let filteredResources = ALL_RESOURCES
  if (activeCategory !== 'all') {
    filteredResources = filteredResources.filter((r) => r.category === activeCategory)
  }
  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    filteredResources = filteredResources.filter(
      (r) =>
        r.title.toLowerCase().includes(query) || r.description.toLowerCase().includes(query)
    )
  }

  return (
    <>
      {/* Search Bar */}
      {/* <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
            />
          </div>
        </div>
      </section> */}

      {/* Category Tabs */}
      {/* <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setActiveCategory('all')}
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              className="group"
            >
              All Resources
              <Badge variant="secondary" className="ml-2">
                {ALL_RESOURCES.length}
              </Badge>
            </Button>
            {RESOURCE_CATEGORIES.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                className="group"
              >
                {cat.name}
                <Badge variant="secondary" className="ml-2">
                  {cat.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Resources Section */}
      {activeCategory === 'all' && (
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">⭐ Most Downloaded</h2>
              <p className="text-gray-600">
                These are our most popular resources, highly rated by our community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {FEATURED_RESOURCES.slice(0, 4).map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resource Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {filteredResources.length > 0 ? (
            <>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {activeCategory === 'all'
                    ? 'All Resources'
                    : RESOURCE_CATEGORIES.find((c) => c.id === activeCategory)?.name}
                </h2>
                <p className="text-gray-600">
                  {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}{' '}
                  found
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No resources found matching your search.</p>
              <Button variant="outline" onClick={() => setSearchQuery('')}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
