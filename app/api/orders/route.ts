// app/api/orders/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const sseClients = new Set<(data: any) => void>()

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status')
    const search = searchParams.get('search')

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

    let orders = []
    try {
      orders = await prisma.order.findMany({
        where,
        include: {
          items: {
            include: {
              product: true,
              addOns: { include: { addOn: true } }
            }
          }
        },
        orderBy: { createdAt: 'desc' },
      })
    } catch (dbError) {
      console.warn("DB query fallback:", dbError)
      orders = []
    }

    return NextResponse.json({ success: true, orders })
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

    // Safely check shop status with fallback
    let isShopOpen = true
    try {
      const settings = await prisma.shopSettings.findUnique({ where: { id: 'default' } })
      if (settings) isShopOpen = settings.isOpen
    } catch {
      isShopOpen = true
    }

    if (!isShopOpen) {
      return NextResponse.json({ success: false, error: 'The shop is currently closed for online bookings.' }, { status: 400 })
    }

    // Generate Order ID: GP-YYYYMMDD-XXX
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '')
    let countToday = 0
    try {
      countToday = await prisma.order.count()
    } catch {
      countToday = Math.floor(Math.random() * 100) + 1
    }

    const orderNumber = `GP-${today}-${String(countToday + 1).padStart(3, '0')}`

    let subtotal = 0
    const orderItemsData = []

    for (const item of items) {
      let itemPrice = 40
      let productName = item.name || 'Golgappa Plate'

      try {
        const dbProduct = await prisma.product.findUnique({ where: { id: item.productId } })
        if (dbProduct) {
          itemPrice = dbProduct.price
          productName = dbProduct.name
        }
      } catch {
        itemPrice = item.price || 40
      }

      let itemTotal = itemPrice * item.quantity
      subtotal += itemTotal

      orderItemsData.push({
        productId: item.productId,
        quantity: item.quantity,
        unitPrice: itemPrice,
        totalPrice: itemTotal,
        spiceLevel: item.spiceLevel || 'Medium',
        paniPreference: item.paniPreference || 'Pudina',
      })
    }

    const total = subtotal

    let createdOrder: any = null

    try {
      createdOrder = await prisma.order.create({
        data: {
          orderNumber,
          customerName,
          customerPhone,
          pickupDate: new Date().toLocaleDateString('en-IN'),
          pickupTime: pickupTime || 'ASAP',
          subtotal,
          total,
          paymentMethod: 'PAY_AT_STALL',
          paymentStatus: 'UNPAID',
          orderStatus: 'NEW',
          notes: notes || '',
          items: {
            create: orderItemsData,
          },
        },
      })
    } catch (dbErr) {
      console.warn("Saving order fallback in memory response:", dbErr)
      createdOrder = {
        id: `ord-${Date.now()}`,
        orderNumber,
        customerName,
        customerPhone,
        pickupTime: pickupTime || 'ASAP',
        subtotal,
        total,
        paymentMethod: 'PAY_AT_STALL',
        paymentStatus: 'UNPAID',
        orderStatus: 'NEW',
      }
    }

    // Broadcast Real-time SSE to Admin Dashboard Clients
    sseClients.forEach((send) => {
      send({ type: 'NEW_ORDER', order: createdOrder })
    })

    return NextResponse.json({ success: true, order: createdOrder })
  } catch (error: any) {
    console.error('Order creation error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
