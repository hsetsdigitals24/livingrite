import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// Sanity queries
export const queries = {
  services: `*[_type == "service"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    pricing,
    benefits,
    "imageUrl": image.asset->url,
    faqs,
    seo
  }`,
  
  serviceBySlug: (slug: string) => `*[_type == "service" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    pricing,
    benefits,
    "imageUrl": image.asset->url,
    faqs,
    seo
  }`,
  
  blog: `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    author,
    publishedAt,
    featured,
    "imageUrl": image.asset->url,
    tags
  }`,
  
  blogBySlug: (slug: string) => `*[_type == "blog" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    author,
    publishedAt,
    "imageUrl": image.asset->url,
    tags
  }`,
  
  testimonials: `*[_type == "testimonial"] | order(featured desc) {
    _id,
    clientName,
    role,
    content,
    rating,
    "imageUrl": image.asset->url,
    featured
  }`,
  
  team: `*[_type == "team"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    "imageUrl": image.asset->url,
    social
  }`,
};
