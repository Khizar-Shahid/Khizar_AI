import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import type { Post } from '@/sanity/lib/types';
import { delay } from '@/components/site';

export const metadata: Metadata = {
  title: 'Blog & CRM Insights | Realtor-Go',
  description:
    'Actionable CRM setup guides, GoHighLevel automation strategies, and pipeline workflows for real estate agents and mortgage loan officers.',
  alternates: {
    canonical: 'https://realtor-go.com/blog',
  },
  openGraph: {
    title: 'Blog & CRM Insights | Realtor-Go',
    description:
      'Actionable CRM setup guides, GoHighLevel automation strategies, and pipeline workflows for real estate agents and mortgage loan officers.',
    url: 'https://realtor-go.com/blog',
    type: 'website',
  },
};

export const revalidate = 60; // Fallback ISR revalidation every 60s in addition to instant webhooks

export default async function BlogPage() {
  let posts: Post[] = [];
  try {
    posts = await client.fetch<Post[]>(POSTS_QUERY);
  } catch (err) {
    console.error('Error fetching blog posts from Sanity:', err);
  }

  return (
    <>
      <Header />
      <main id="top" className="min-h-screen">
        {/* Blog Hero: 40% viewport height when posts exist with heading/para, full height when empty */}
        <section
          className="band hero service-hero"
          aria-labelledby="blog-heading"
          style={posts.length > 0 ? { minHeight: '40vh', paddingTop: 'calc(80px + 2vh)', paddingBottom: '3rem' } : undefined}
        >
          <div className="wrap">
            {posts.length > 0 ? (
              <div className="service-hero-content text-center mx-auto" data-r style={delay(0)}>
                <div className="pill service-pill mb-4 inline-flex" style={{ visibility: 'hidden' }} aria-hidden="true">
                  <span className="pill-dot" />
                  <span>Realtor-Go Playbooks</span>
                  <span className="pill-divider">·</span>
                  <span className="pill-sub">USA &amp; Canada</span>
                </div>
                <h1 id="blog-heading" className="service-heading max-w-3xl mx-auto" style={{ marginBottom: '14px' }}>
                  Real Estate &amp; Mortgage CRM Playbooks
                </h1>
                <p className="service-lede max-w-2xl mx-auto" style={{ marginBottom: 0 }}>
                  Practical guides, conversion automations, and GoHighLevel architecture tips crafted for producing agents and loan officers.
                </p>
              </div>
            ) : (
              <div
                className="blog-empty-box"
                data-r
                style={delay(0)}
              >
                <div className="blog-empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h2 id="blog-heading">No Articles Published Yet</h2>
                <p>
                  Articles written in your Sanity Studio will appear right here automatically.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="/studio" className="btn btn-primary">
                    Open Sanity Studio →
                  </Link>
                  <Link href="/contact" className="btn btn-ghost">
                    Schedule a Strategy Call
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* When posts exist, display them in a dedicated grid */}
        {posts.length > 0 && (
          <section className="band band-pine blog-band">
            <div className="wrap">
              <div className="blog-grid">
                {posts.map((post, index) => {
                  const formattedDate = post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                    : null;

                  return (
                    <article
                      key={post._id}
                      className="blog-card"
                      data-r
                      style={delay((index % 3) + 1)}
                    >
                      <Link href={`/blog/${post.slug}`} className="blog-card-media">
                        {post.mainImage?.asset ? (
                          <Image
                            src={urlForImage(post.mainImage).width(700).height(420).url()}
                            alt={post.mainImage.alt || post.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-faint)', fontSize: '14px' }}>
                            Realtor-Go Insights
                          </div>
                        )}
                        {post.category && (
                          <span style={{
                            position: 'absolute',
                            top: '12px',
                            left: '12px',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            background: 'rgba(6, 14, 11, 0.85)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid var(--line)',
                            color: 'var(--citron)',
                            fontSize: '11px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                          }}>
                            {post.category}
                          </span>
                        )}
                      </Link>

                      <div className="blog-card-content">
                        {formattedDate && (
                          <time
                            dateTime={post.publishedAt}
                            style={{ fontSize: '13px', color: 'var(--fg-dim)', marginBottom: '8px' }}
                          >
                            {formattedDate}
                          </time>
                        )}

                        <h2 style={{ fontSize: '20px', lineHeight: 1.3, marginBottom: '10px' }}>
                          <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {post.title}
                          </Link>
                        </h2>

                        {post.excerpt && (
                          <p style={{ fontSize: '14.5px', color: 'var(--fg-dim)', lineHeight: 1.55, marginBottom: '20px', flex: 1 }}>
                            {post.excerpt}
                          </p>
                        )}

                        <div style={{
                          marginTop: 'auto',
                          paddingTop: '16px',
                          borderTop: '1px solid var(--line)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '13px',
                          color: 'var(--fg-dim)',
                        }}>
                          <span>{post.author || 'Realtor-Go Team'}</span>
                          <Link
                            href={`/blog/${post.slug}`}
                            style={{ color: 'var(--citron)', fontWeight: 600, textDecoration: 'none' }}
                          >
                            Read →
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
