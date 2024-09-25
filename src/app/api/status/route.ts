// check if the archer is online or offline by checking the last updated time of the database
// 5 minutes is the threshold for the bot to be considered offline

import { PrismaClient } from '@prisma/client';

export async function GET() {
  const prisma = new PrismaClient();
  const response = await prisma.archerInformation.findFirst();

  if (!response) {
    return new Response(JSON.stringify({ status: 'offline' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (response.UpdatedAt.getTime() < Date.now() - 300000) {
    return new Response(
      JSON.stringify({
        status: 'offline',
        servers: response.TotalServerCount,
        users: response.TotalUserCount,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } else {
    return new Response(
      JSON.stringify({
        status: 'online',
        servers: response.TotalServerCount,
        users: response.TotalUserCount,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
