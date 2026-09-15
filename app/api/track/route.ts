// app/api/track/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { orderNumber, phone } = await req.json()

    if (!orderNumber || !phone) {
      return NextResponse.json({ success: false, error: 'Order Number and Phone Number are required' }, { status: 400 })
    }

    const cleanOrderNumber = orderNumber.trim().toUpperCase()
    const cleanPhone = phone.trim()

    const order = await prisma.order.findFirst({
      where: {
        orderNumber: cleanOrderNumber,
        customerPhone: { contains: cleanPhone },
      },
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
      return NextResponse.json({ success: false, error: 'No order found with these credentials' }, { status: 404 })
    }

    return NextResponse.json({ success: true, order })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
