import { groq } from 'next-sanity';

// Query to get all published blog posts ordered newest first
export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  publishedAt,
  excerpt,
  author,
  mainImage
}`;

// Query to get a single post by slug
export const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  publishedAt,
  excerpt,
  author,
  authorBio,
  mainImage,
  body
}`;

// Query to fetch all slugs for static params & dynamic sitemap generation
export const POST_SLUGS_QUERY = groq`*[_type == "post" && defined(slug.current)] {
  "slug": slug.current
}`;
