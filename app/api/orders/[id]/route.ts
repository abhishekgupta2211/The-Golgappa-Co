// app/api/orders/[id]/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sseClients } from '@/app/api/orders/route'

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
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
