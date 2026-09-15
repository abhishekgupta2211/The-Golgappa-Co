// app/api/orders/[id]/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sseClients, memoryOrders } from '@/app/api/orders/route'

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const memOrder = memoryOrders.find((o) => o.id === id || o.orderNumber === id)
    if (memOrder) {
      return NextResponse.json({ success: true, order: memOrder })
    }

    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            product: true,
            addOns: { include: { addOn: true } },
          },
        },
      },
    })

    if (!order) {
      return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, order })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const body = await req.json()
    const { orderStatus, cancelReason, paymentStatus } = body

    const memOrder = memoryOrders.find((o) => o.id === id || o.orderNumber === id)
    if (memOrder) {
      if (orderStatus) memOrder.orderStatus = orderStatus
      if (cancelReason !== undefined) memOrder.cancelReason = cancelReason
      if (paymentStatus) memOrder.paymentStatus = paymentStatus

      sseClients.forEach((send) => {
        send({ type: 'ORDER_UPDATED', order: memOrder })
      })

      return NextResponse.json({ success: true, order: memOrder })
    }

    const updateData: any = {}
    if (orderStatus) updateData.orderStatus = orderStatus
    if (cancelReason !== undefined) updateData.cancelReason = cancelReason
    if (paymentStatus) updateData.paymentStatus = paymentStatus

    const updatedOrder = await prisma.order.update({
      where: { id },
      data: updateData,
      include: {
        items: {
          include: { product: true, addOns: { include: { addOn: true } } },
        },
      },
    })

    sseClients.forEach((send) => {
      send({ type: 'ORDER_UPDATED', order: updatedOrder })
    })

    return NextResponse.json({ success: true, order: updatedOrder })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
