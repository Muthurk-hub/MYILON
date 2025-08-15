import { NextResponse } from 'next/server';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

export async function GET() {
  const hasEmailUser = !!process.env.EMAIL_USER;
  const hasEmailPass = !!process.env.EMAIL_PASS;
  
  return NextResponse.json({
    emailConfigured: hasEmailUser && hasEmailPass,
    hasEmailUser,
    hasEmailPass,
    emailUser: hasEmailUser ? process.env.EMAIL_USER : 'NOT SET'
  });
} 