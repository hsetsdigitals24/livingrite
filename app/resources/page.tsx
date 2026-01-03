import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import NewsletterSignup from '@/components/blog/newsletter-signup'
import { CTABanner } from '@/components/cta-banner'
import ResourcesContent from '@/components/resources/resources-content'
import {
  Download,
  BookOpen,
  Video,
  Users,
  Heart,
  Brain,
  FileText,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
} from 'lucide-react';
import heroImage from '@/public/resource-hero.jpg'

export const metadata = {
  title: 'Resources & Guides | LivingRite Care',
  description:
    'Free care guides, checklists, video tutorials, and educational materials for home-based healthcare. Download resources to support your caregiving journey.',
  keywords: [
    'care guides',
    'caregiving resources',
    'home care checklists',
    'healthcare tutorials',
    'patient education',
  ],
}

// Resource categories for static display
const RESOURCE_CATEGORIES = [
  {
    id: 'guides',
    name: 'Care Guides',
    description: 'Comprehensive guides for different care situations',
    icon: <BookOpen className="w-6 h-6" />,
    count: 12,
    color: 'bg-primary/10 text-primary',
  },
  {
    id: 'checklists',
    name: 'Checklists',
    description: 'Daily and weekly caregiving checklists',
    icon: <CheckCircle className="w-6 h-6" />,
    count: 8,
    color: 'bg-accent/10 text-accent',
  },
  {
    id: 'videos',
    name: 'Video Tutorials',
    description: 'Step-by-step video guides and demonstrations',
    icon: <Video className="w-6 h-6" />,
    count: 15,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'worksheets',
    name: 'Worksheets',
    description: 'Interactive planning and tracking tools',
    icon: <FileText className="w-6 h-6" />,
    count: 10,
    color: 'bg-green-100 text-green-600',
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-white via-primary/5 to-accent/5 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage.src}')` }}>
       
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

        <div className="max-w-6xl mx-auto px-6 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <Badge className="mb-4 inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Expert Articles & Guides
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Caregiving Insights & Tips
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Read expert articles on home care, recovery, and wellness. Learn best practices, tips, and strategies from healthcare professionals to support your caregiving journey.
              </p>
            </div>

            <div className="hidden lg:block">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Latest Articles</h3>
                      <p className="text-sm text-gray-600">Expert insights</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">50+ Articles</p>
                        <p className="text-xs text-gray-600">Expert written</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Downloadable PDFs</p>
                        <p className="text-xs text-gray-600">Complementary tools</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">100% Free</p>
                        <p className="text-xs text-gray-600">Always accessible</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/resources/blogs">
                    <Button className="w-full bg-accent hover:bg-primary/90" variant="default" size="sm">
                      Read All Articles
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      {/* <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: '45+ Resources', value: '📚' },
              { label: 'Expert Curated', value: '✓' },
              { label: '100% Free', value: '💰' },
              { label: 'Always Updated', value: '🔄' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{stat.value}</div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Interactive Content (Blog Articles) */}
      <ResourcesContent />

      {/* Downloadable Resources Section */}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Download className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Free Downloadable Resources</h2>
            </div>
            <p className="text-gray-600">Printable guides, checklists, and templates to complement your reading</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Daily Care Checklist',
                type: 'PDF',
                icon: <CheckCircle className="w-5 h-5" />,
              },
              {
                title: 'Medication Tracker',
                type: 'PDF',
                icon: <FileText className="w-5 h-5" />,
              },
              {
                title: 'Vital Signs Chart',
                type: 'PDF',
                icon: <Heart className="w-5 h-5" />,
              },
              {
                title: 'Post-Stroke Recovery Guide',
                type: 'PDF',
                icon: <Brain className="w-5 h-5" />,
              },
              {
                title: 'Emergency Contact Card',
                type: 'PDF',
                icon: <Users className="w-5 h-5" />,
              },
              {
                title: 'Nutrition Planning Template',
                type: 'PDF',
                icon: <Heart className="w-5 h-5" />,
              },
            ].map((resource, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow hover:border-primary/30">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-8 h-8 rounded bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      {resource.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">{resource.type}</Badge>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">{resource.title}</h4>
                  <Button variant="outline" size="sm" className="w-full text-xs h-8">
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Help CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking for Personalized Support?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our guides and articles cover many situations, but every care journey is unique. Connect with our healthcare professionals for personalized advice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/services">
              <Button size="lg">
                Book Expert Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/resources/blogs">
              <Button size="lg" variant="outline">
                Browse All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* CTA Banner */}
      <CTABanner />
    </main>
  )
}