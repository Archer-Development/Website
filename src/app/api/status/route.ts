import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = request.url;

  return NextResponse.json({
    status: 'online',
  });
}
