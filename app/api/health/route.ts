import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const commitSha = 
    process.env.VERCEL_GIT_COMMIT_SHA || 
    process.env.NEXT_PUBLIC_COMMIT_SHA || 
    'unknown';
  
  const branch = 
    process.env.VERCEL_GIT_COMMIT_REF || 
    process.env.VERCEL_GIT_COMMIT_REF_SLUG ||
    'unknown';
  
  const buildTime = 
    process.env.NEXT_PUBLIC_BUILD_TIME || 
    new Date().toISOString();
  
  const vercelUrl = 
    process.env.VERCEL_URL || 
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    'unknown';

  return NextResponse.json(
    {
      ok: true,
      commit: commitSha,
      branch,
      buildTime,
      vercelUrl,
    },
    {
      headers: {
        'Cache-Control': 'no-store, must-revalidate',
        'Content-Type': 'application/json',
      },
    }
  );
}

