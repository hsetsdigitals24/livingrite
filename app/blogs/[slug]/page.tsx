import { getPostBySlug } from "@/lib/blog"
import Link from "next/link"

export async function generateStaticParams() {
  // Optionally pre-generate slugs from Sanity
  return []
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Post not found</h2>
          <p className="mt-4 text-gray-600">The article you're looking for does not exist.</p>
          <Link href="/blog" className="mt-6 inline-block text-primary underline">Back to blog</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-20">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
          <div className="text-sm text-gray-500 mb-4">{post.date}</div>
        </header>

        {post.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-2xl mb-8" />
        )}

        <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12">
          <Link href="/blog" className="text-primary underline">← Back to all posts</Link>
        </div>
      </article>
    </main>
  )
}
