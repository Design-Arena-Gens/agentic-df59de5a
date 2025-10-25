import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  return new Response('WebSocket endpoint - use /api/socket for real-time updates', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
