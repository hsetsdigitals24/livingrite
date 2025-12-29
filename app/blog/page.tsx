import Link from "next/link"
import { getPaginatedPosts } from "@/lib/blog"
import BlogCard from "@/components/blog/blog-card"

export const metadata = {
  title: "Blog — LivingRite Care",
  description: "Articles on post-acute care, rehab, caregiver tips and patient stories.",
}

export default async function BlogListPage({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Number(searchParams?.page || 1)
  const { items, totalPages } = await getPaginatedPosts(page, 4)

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-28 pb-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">Insights</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Latest from our Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Thought leadership, guides and patient stories to help families navigate home-based care.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((post:any) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-3">
          <Pagination current={page} total={totalPages} />
        </div>
      </section>
    </main>
  )
}

function Pagination({ current, total }: { current: number; total: number }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1)
  return (
    <nav className="inline-flex items-center gap-2">
      {pages.map((p) => (
        <Link
          key={p}
          href={`/blog?page=${p}`}
          className={`px-3 py-1 rounded-md ${p === current ? "bg-primary text-white" : "bg-white border"}`}
        >
          {p}
        </Link>
      ))}
    </nav>
  )
}
