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

function sanityBaseUrl(projectId: string, dataset = "production") {
  return `https://${projectId}.api.sanity.io/v2023-10-01/data/query/${dataset}`
}

async function fetchFromSanity(query: string, params?: Record<string, any>) {
  const projectId = process.env.SANITY_PROJECT_ID
  const dataset = process.env.SANITY_DATASET || "production"
  if (!projectId) return null

  const url = `${sanityBaseUrl(projectId, dataset)}?query=${encodeURIComponent(query)}`
  // Sanity read endpoints are public for published datasets; token not required for read
  const res = await fetch(url)
  if (!res.ok) return null
  const data = await res.json()
  return data.result
}

export async function getPostBySlug(slug: string) {
  const projectId = process.env.SANITY_PROJECT_ID
  if (projectId) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]{title, excerpt, publishedAt, body, "image": mainImage.asset->url, "slug": slug.current}`
    const result = await fetchFromSanity(query)
    if (result) {
      const p = result
      return {
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt || "",
        date: p.publishedAt || "",
        image: p.image || null,
        content: p.body ? (Array.isArray(p.body) ? p.body.map((b:any)=>b.children?.map((c:any)=>c.text).join('')).join('\n') : String(p.body)) : "",
      }
    }
  }

  // Fallback to local posts
  return posts.find((p) => p.slug === slug) || null
}

export async function getPaginatedPosts(page = 1, perPage = 4) {
  const projectId = process.env.SANITY_PROJECT_ID
  if (projectId) {
    const query = `*[_type == "post"] | order(publishedAt desc){"slug": slug.current, title, excerpt, "date": publishedAt, "image": mainImage.asset->url}`
    const result = await fetchFromSanity(query)
    if (result) {
      const total = result.length
      const start = (page - 1) * perPage
      const items = result.slice(start, start + perPage).map((p:any) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt || "", date: p.date || "", image: p.image || null }))
      const totalPages = Math.ceil(total / perPage)
      return { items, total, totalPages }
    }
  }

  // Fallback to local posts
  const total = posts.length
  const start = (page - 1) * perPage
  const items = posts.slice(start, start + perPage)
  const totalPages = Math.ceil(total / perPage)
  return { items, total, totalPages }
}

export default posts
