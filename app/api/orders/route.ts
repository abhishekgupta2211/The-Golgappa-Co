// app/api/orders/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Global Event Emitter array for Server-Sent Events (SSE) real-time notifications
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

    const orders = await prisma.order.findMany({
      where,
      include: {
        items: {
          include: {
            product: true,
            addOns: {
              include: {
                addOn: true
              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' },
    })

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

    // Check if shop is open
    const settings = await prisma.shopSettings.findUnique({ where: { id: 'default' } })
    if (settings && !settings.isOpen) {
      return NextResponse.json({ success: false, error: 'The shop is currently closed for online bookings.' }, { status: 400 })
    }

    // Generate Order ID: GP-YYYYMMDD-XXX
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, '')
    const countToday = await prisma.order.count()
    const orderNumber = `GP-${today}-${String(countToday + 1).padStart(3, '0')}`

    // Calculate verified total from Database
    let subtotal = 0

    const orderItemsData = []

    for (const item of items) {
      const dbProduct = await prisma.product.findUnique({ where: { id: item.productId } })
      if (!dbProduct || !dbProduct.available) {
        return NextResponse.json({ success: false, error: `Item ${item.name || ''} is currently unavailable` }, { status: 400 })
      }

      let itemTotal = dbProduct.price * item.quantity
      subtotal += itemTotal

      const itemAddOnsData = []
      if (item.addOnIds && item.addOnIds.length > 0) {
        for (const addOnId of item.addOnIds) {
          const dbAddOn = await prisma.addOn.findUnique({ where: { id: addOnId } })
          if (dbAddOn && dbAddOn.available) {
            subtotal += dbAddOn.price
            itemAddOnsData.push({
              addOnId: dbAddOn.id,
              price: dbAddOn.price,
            })
          }
        }
      }

      orderItemsData.push({
        productId: dbProduct.id,
        quantity: item.quantity,
        unitPrice: dbProduct.price,
        totalPrice: itemTotal,
        spiceLevel: item.spiceLevel || 'Medium',
        paniPreference: item.paniPreference || 'Pudina',
        addOns: {
          create: itemAddOnsData,
        },
      })
    }

    const total = subtotal

    const newOrder = await prisma.order.create({
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
      include: {
        items: {
          include: {
            product: true,
            addOns: {
              include: { addOn: true }
            }
          }
        }
      }
    })

    // Broadcast Real-time SSE to Admin Dashboard Clients
    sseClients.forEach((send) => {
      send({ type: 'NEW_ORDER', order: newOrder })
    })

    return NextResponse.json({ success: true, order: newOrder })
  } catch (error: any) {
    console.error('Order creation error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
