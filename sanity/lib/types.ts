export interface SanityImage {
  asset?: {
    _id: string;
    url: string;
  };
  alt?: string;
  caption?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImage;
  author?: string;
  authorBio?: string;
  body?: any[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}
