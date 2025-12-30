// lib/queries.ts (or wherever you keep your queries)
export const TESTIMONIALS_QUERY = `
  *[_type == "testimonials"] | order(_createdAt desc)[0...3]{
    _id,
    fullName,
    testimonial,
    image
  }
`;