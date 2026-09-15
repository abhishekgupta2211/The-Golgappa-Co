// app/api/admin/sse/route.ts
import { NextResponse } from 'next/server'
import { sseClients } from '@/app/api/orders/route'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const stream = new ReadableStream({
    start(controller) {
      const send = (data: any) => {
        controller.enqueue(`data: ${JSON.stringify(data)}\n\n`)
      }

      sseClients.add(send)

      // Heartbeat every 15s to keep SSE connection alive
      const interval = setInterval(() => {
        controller.enqueue(`: heartbeat\n\n`)
      }, 15000)

      req.signal.addEventListener('abort', () => {
        clearInterval(interval)
        sseClients.delete(send)
        controller.close()
      })
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
    },
  })
}
