import { revalidatePath, revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get('secret');
    const configuredSecret = process.env.SANITY_REVALIDATE_SECRET;

    if (configuredSecret && secret !== configuredSecret) {
      return NextResponse.json({ message: 'Invalid revalidation secret' }, { status: 401 });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body: any = await req.json().catch(() => null);

    // Purge tag-based and path-based caches
    revalidateTag('post', 'max');
    revalidatePath('/blog');
    revalidatePath('/');

    // Revalidate individual post path if slug is present in Sanity webhook payload
    if (body?.slug) {
      const slug = typeof body.slug === 'string' ? body.slug : body.slug?.current;
      if (slug) {
        revalidatePath(`/blog/${slug}`);
      }
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: 'On-demand ISR cache revalidated successfully without full site rebuild',
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ message: 'Error revalidating', error: errorMsg }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  const configuredSecret = process.env.SANITY_REVALIDATE_SECRET;

  if (configuredSecret && secret !== configuredSecret) {
    return NextResponse.json({ message: 'Invalid revalidation secret' }, { status: 401 });
  }

  revalidateTag('post', 'max');
  revalidatePath('/blog');
  revalidatePath('/');

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    message: 'Manual GET trigger: blog pages revalidated successfully',
  });
}
