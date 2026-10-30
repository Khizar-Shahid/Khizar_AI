import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;

    if (!secret) {
      return NextResponse.json(
        { message: 'Missing SANITY_WEBHOOK_SECRET in environment' },
        { status: 401 }
      );
    }

    // Verify webhook signature from Sanity
    const { isValidSignature, body } = await parseBody<any>(req, secret);

    if (!isValidSignature) {
      return NextResponse.json(
        { message: 'Invalid webhook signature.' },
        { status: 401 }
      );
    }

    const slug = body?.slug?.current || body?.slug;

    // 1. Revalidate the blog index page
    revalidatePath('/blog');

    // 2. Revalidate the specific post page if slug exists
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }

    // 3. Revalidate the sitemap for instant Google indexing
    revalidatePath('/sitemap.xml');

    return NextResponse.json({
      message: 'Revalidated successfully',
      revalidated: true,
      slug: slug || null,
      now: Date.now(),
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message || 'Error revalidating' },
      { status: 500 }
    );
  }
}

