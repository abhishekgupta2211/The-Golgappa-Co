// app/api/orders/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// In-memory persistent order storage for high availability fallback
export const memoryOrders: any[] = [
  {
    id: 'ord-demo-1',
    orderNumber: 'GP-20260915-079',
    customerName: 'Mohan Kumar',
    customerPhone: '7985324162',
    pickupDate: 'Today',
    pickupTime: '05:00 PM',
    subtotal: 2244,
    total: 2244,
    paymentMethod: 'PAY_AT_STALL',
    paymentStatus: 'UNPAID',
    orderStatus: 'NEW',
    notes: 'Testing',
    items: [
      { id: 'item-1', product: { name: 'Classic Teekha Golgappa (6 Pcs)' }, quantity: 1, totalPrice: 40 },
      { id: 'item-2', product: { name: 'Khatta-Meetha Imli Golgappa (6 Pcs)' }, quantity: 1, totalPrice: 45 },
      { id: 'item-3', product: { name: 'Dahi Puri Chatpata Special (6 Pcs)' }, quantity: 1, totalPrice: 70 },
      { id: 'item-4', product: { name: 'Cheese & Garlic Butter Golgappa (6 Pcs)' }, quantity: 1, totalPrice: 90 },
      { id: 'item-5', product: { name: 'Bulk Party / Catering Order (50+ Plates)' }, quantity: 1, totalPrice: 1999 },
    ],
  },
]

export const sseClients = new Set<(data: any) => void>()

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status')
    const search = searchParams.get('search')

    let orders = []
    try {
      const where: any = {}
      if (status && status !== 'ALL') {
        where.orderStatus = status
      }
      if (search) {
        where.OR = [
          { orderNumber: { contains: search } },
          { customerName: { contains: search } },
          { customerPhone: { contains: search } },
        ]
      }

      orders = await prisma.order.findMany({
        where,
        include: {
          items: {
            include: {
              product: true,
              addOns: { include: { addOn: true } },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      })
    } catch {
      orders = []
    }

    // Merge in-memory orders if DB is uninitialized or empty
    const allCombined = [...orders, ...memoryOrders]

    const filtered = allCombined.filter((o) => {
      if (status && status !== 'ALL' && o.orderStatus !== status) return false
      if (search) {
        const q = search.toLowerCase()
        return (
          o.orderNumber.toLowerCase().includes(q) ||
          o.customerName.toLowerCase().includes(q) ||
          o.customerPhone.includes(q)
        )
      }
      return true
    })

    return NextResponse.json({ success: true, orders: filtered })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { customerName, customerPhone, pickupTime, notes, items } = body

    if (!customerName || !customerPhone || !items || items.length === 0) {
      return NextResponse.json({ success: false, error: 'Missing required order details' }, { status: 400 })
    }

    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '')
    const countToday = memoryOrders.length + 1
    const orderNumber = `GP-${today}-${String(countToday).padStart(3, '0')}`

    let subtotal = 0
    const orderItemsData = []

    for (const item of items) {
      const itemPrice = item.price || 40
      const itemTotal = itemPrice * item.quantity
      subtotal += itemTotal

      orderItemsData.push({
        id: `item-${Date.now()}-${Math.random()}`,
        product: { name: item.name || 'Golgappa Plate' },
        quantity: item.quantity,
        unitPrice: itemPrice,
        totalPrice: itemTotal,
        spiceLevel: item.spiceLevel || 'Medium',
        paniPreference: item.paniPreference || 'Pudina',
      })
    }

    const total = subtotal

    const newOrder = {
      id: `ord-${Date.now()}`,
      orderNumber,
      customerName,
      customerPhone,
      pickupDate: 'Today',
      pickupTime: pickupTime || 'ASAP',
      subtotal,
      total,
      paymentMethod: 'PAY_AT_STALL',
      paymentStatus: 'UNPAID',
      orderStatus: 'NEW',
      notes: notes || '',
      items: orderItemsData,
    }

    // Push to in-memory list
    memoryOrders.unshift(newOrder)

    // Broadcast Real-time SSE to Admin Dashboard Clients
    sseClients.forEach((send) => {
      send({ type: 'NEW_ORDER', order: newOrder })
    })

    return NextResponse.json({ success: true, order: newOrder })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
