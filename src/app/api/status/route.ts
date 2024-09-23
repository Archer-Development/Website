import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'online',
    uptime: 0.999,
    servers: 1490,
    users: 1500000,
  });
}
