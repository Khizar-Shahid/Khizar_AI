import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { client } from '@/sanity/lib/client';
import { POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { CustomPortableText } from '@/sanity/components/PortableText';
import type { Post } from '@/sanity/lib/types';
import { SITE } from '@/components/site';

interface PageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60; // Fallback ISR revalidation every 60s in addition to instant webhooks

export async function generateStaticParams() {
  try {
    const posts = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY);
    if (!Array.isArray(posts)) return [];
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await client.fetch<Post>(POST_BY_SLUG_QUERY, { slug: params.slug }).catch(() => null);

  if (!post) {
    return {
      title: 'Article Not Found | Realtor-Go',
    };
  }

  const title = post.seo?.metaTitle || `${post.title} | Realtor-Go Blog`;
  const description = post.seo?.metaDescription || post.excerpt || post.title;
  const canonicalUrl = `https://realtor-go.com/blog/${post.slug}`;
  const ogImage = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(1200).height(630).url()
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : undefined,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await client.fetch<Post>(POST_BY_SLUG_QUERY, { slug: params.slug }).catch(() => null);

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://realtor-go.com/blog/${post.slug}`,
    },
    author: {
      '@type': 'Person',
      name: post.author || 'Realtor-Go Team',
      jobTitle: 'CRM Specialist',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Realtor-Go',
      url: 'https://realtor-go.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://realtor-go.com/og-image.png',
      },
    },
    image: post.mainImage?.asset
      ? urlForImage(post.mainImage).width(1200).height(630).url()
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main id="top">
        <article className="band hero blog-article-hero">
          <div className="wrap blog-article-wrap">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="breadcrumbs">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="crumb-sep">/</li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="crumb-sep">/</li>
                <li className="crumb-current" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Dark Header Card for Article Info */}
            <header className="blog-article-dark-card">
              {post.category && (
                <div style={{ marginBottom: '18px' }}>
                  <span className="pill service-pill" style={{
                    margin: 0,
                    background: 'rgba(214, 220, 92, 0.1)',
                    borderColor: 'rgba(214, 220, 92, 0.25)',
                    color: 'var(--citron)'
                  }}>
                    <span className="pill-dot" />
                    <span>{post.category}</span>
                  </span>
                </div>
              )}

              <h1 className="service-heading" style={{ fontSize: 'clamp(30px, 4.2vw, 48px)', lineHeight: 1.18, color: '#FFFFFF' }}>
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="service-lede" style={{ fontSize: 'clamp(17px, 1.8vw, 20px)', color: '#B2C4BC' }}>
                  {post.excerpt}
                </p>
              )}

              <div className="blog-article-meta">
                <div className="blog-article-author">
                  <div className="blog-author-avatar">
                    {post.author ? post.author.charAt(0) : 'R'}
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#FFFFFF', fontSize: '15px' }}>
                      {post.author || 'Realtor-Go Team'}
                    </strong>
                    <span style={{ fontSize: '12.5px', color: '#8DA198' }}>
                      CRM Architecture Specialist
                    </span>
                  </div>
                </div>

                {formattedDate && (
                  <time dateTime={post.publishedAt} style={{ fontSize: '13.5px', color: '#8DA198' }}>
                    Published on {formattedDate}
                  </time>
                )}
              </div>
            </header>

            {/* Featured Image */}
            {post.mainImage?.asset && (
              <figure className="blog-article-media">
                <Image
                  src={urlForImage(post.mainImage).width(1200).height(675).url()}
                  alt={post.mainImage.alt || post.title}
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 820px"
                />
                {post.mainImage.caption && (
                  <figcaption style={{
                    position: 'absolute',
                    bottom: 0,
                    insetInline: 0,
                    padding: '8px 16px',
                    background: 'rgba(0,0,0,0.6)',
                    color: '#fff',
                    fontSize: '12px',
                    textAlign: 'center'
                  }}>
                    {post.mainImage.caption}
                  </figcaption>
                )}
              </figure>
            )}

            {/* Article Content */}
            <div className="blog-article-body">
              {post.body ? (
                <CustomPortableText value={post.body} />
              ) : (
                <p style={{ color: 'var(--fg-dim)', fontStyle: 'italic' }}>
                  No content written for this article yet.
                </p>
              )}
            </div>

            {/* Author Bio Card */}
            {post.authorBio && (
              <div className="blog-article-bio">
                <div className="blog-author-avatar" style={{
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  background: 'rgba(10, 21, 17, 0.06)',
                  border: '1px solid var(--line)',
                  color: 'var(--forest)'
                }}>
                  {post.author ? post.author.charAt(0) : 'R'}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--fg-dim)',
                    marginBottom: '6px'
                  }}>
                    Written by {post.author || 'Realtor-Go Team'}
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--fg)', lineHeight: 1.6, margin: 0 }}>
                    {post.authorBio}
                  </p>
                </div>
              </div>
            )}

            {/* Bottom CTA Card */}
            <div className="blog-article-cta">
              <h3>Want this system built in your GoHighLevel account?</h3>
              <p>
                We build custom pipelines, 365-day nurture sequences, and sub-minute speed-to-lead
                workflows for US & Canadian real estate and mortgage professionals.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={SITE.bookingUrl} className="btn btn-primary">
                  Book a Free Strategy Fit Call
                </a>
                <Link href="/blog" className="btn btn-ghost">
                  ← Back to All Articles
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
