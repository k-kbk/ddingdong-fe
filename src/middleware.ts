import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const subdomain = req.headers.get('host')?.split('.')[0];
  console.log(subdomain, req.url);

  if (subdomain === 'admin') {
    return NextResponse.rewrite(new URL(`/${subdomain}`, req.nextUrl.pathname));
  }
}

export const config = {
  matcher: '/',
};
