import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export interface BlogPost {
  _id: string
  slug: {
    current: string
  }
  title: string
  excerpt?: string
  publishedAt: string
  mainImage?: {
    asset: {
      _id: string
    }
  }
  body?: any[]
}

export interface BlogPostDisplay {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string | null
  content?: string
}

export const posts = [
  {
    slug: "recovering-after-stroke",
    title: "Recovering After Stroke: A Practical Family Guide",
    excerpt: "Practical steps families can take to support stroke recovery at home.",
    date: "2025-11-12",
    image: "/blog/stroke-guide.jpg",
    content:
      `<p>Stroke recovery is a journey. This guide covers early mobilisation, goal-based physiotherapy, medication adherence, and caregiver coaching. Start with small, measurable goals and work closely with your clinician.</p><p>Weekly progress tracking and family training significantly improve outcomes. We recommend establishing a daily routine that includes therapy exercises, safe transfers and graded activity to rebuild confidence and endurance.</p>`,
  },
  {
    slug: "post-icu-to-home",
    title: "From ICU to Home: What Families Need to Know",
    excerpt: "Planning the transition from hospital to home after an ICU stay.",
    date: "2025-10-05",
    image: "/blog/post-icu.jpg",
    content:
      `<p>Transitioning from ICU to home requires clinical coordination, equipment setup and caregiver training. Early planning reduces readmissions and supports safe recovery.</p>`,
  },
  {
    slug: "physiotherapy-benefits",
    title: "How Home Physiotherapy Accelerates Recovery",
    excerpt: "Why home-based physiotherapy can be more effective than clinic-only care.",
    date: "2025-09-20",
    image: "/blog/physio.jpg",
    content: `<p>Home physiotherapy helps clinicians tailor exercises to real-world tasks like climbing stairs, bathing and standing transfers. Real environment practice builds confidence faster.</p>`,
  },
  {
    slug: "caregiver-checklist",
    title: "Family Caregiver Checklist: First 30 Days",
    excerpt: "A concise checklist for family caregivers supporting a loved one at home.",
    date: "2025-08-15",
    image: "/blog/caregiver.jpg",
    content: `<p>This checklist covers medication schedules, emergency plans, safe transfer techniques, and when to call your clinician.</p>`,
  },
  {
    slug: "end-of-life-compassion",
    title: "Compassionate End-of-Life Care at Home",
    excerpt: "How to provide comfort-focused care with dignity and support.",
    date: "2025-07-30",
    image: "/blog/compassion.jpg",
    content: `<p>Palliative care focuses on comfort, symptom management and family support. Home care allows for a peaceful, familiar environment during this important time.</p>`,
  },
]

export async function getPostBySlug(slug: string): Promise<BlogPostDisplay | null> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      excerpt,
      publishedAt,
      body,
      mainImage,
      "slug": slug.current
    }`
    
    const post = await client.fetch<BlogPost>(query, { slug })
    
    if (post) {
      return {
        slug: post.slug.current,
        title: post.title,
        excerpt: post.excerpt || "",
        date: post.publishedAt || "",
        image: post.mainImage?.asset ? urlFor(post.mainImage).width(800).height(400).url() : null,
        content: post.body ? parsePortableText(post.body) : "",
      }
    }
  } catch (error) {
    console.error('Failed to fetch post from Sanity:', error)
  }

  // Fallback to local posts
  return posts.find((p) => p.slug === slug) || null
}

export async function getPaginatedPosts(page = 1, perPage = 4): Promise<{ items: BlogPostDisplay[]; total: number; totalPages: number }> {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      excerpt,
      publishedAt,
      mainImage,
      "slug": slug.current
    }`
    
    const allPosts = await client.fetch<BlogPost[]>(query)
    
    if (allPosts && allPosts.length > 0) {
      const total = allPosts.length
      const start = (page - 1) * perPage
      const items = allPosts.slice(start, start + perPage).map((p) => ({
        slug: p.slug.current,
        title: p.title,
        excerpt: p.excerpt || "",
        date: p.publishedAt || "",
        image: p.mainImage?.asset ? urlFor(p.mainImage).width(400).height(300).url() : null,
      }))
      const totalPages = Math.ceil(total / perPage)
      return { items, total, totalPages }
    }
  } catch (error) {
    console.error('Failed to fetch posts from Sanity:', error)
  }

  // Fallback to local posts
  const total = posts.length
  const start = (page - 1) * perPage
  const items = posts.slice(start, start + perPage)
  const totalPages = Math.ceil(total / perPage)
  return { items, total, totalPages }
}

function parsePortableText(blocks: any[]): string {
  if (!Array.isArray(blocks)) return ""
  
  return blocks
    .map((block) => {
      if (block._type === "block" && block.children) {
        return block.children.map((child: any) => child.text || "").join("")
      }
      return ""
    })
    .join("\n")
}

export default posts
