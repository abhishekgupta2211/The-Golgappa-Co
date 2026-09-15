// app/api/menu/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifySession } from '@/lib/auth'

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { sortOrder: 'asc' },
    })
    const addOns = await prisma.addOn.findMany({
      where: { available: true },
    })
    const settings = await prisma.shopSettings.findUnique({ where: { id: 'default' } })

    return NextResponse.json({ success: true, products, addOns, settings })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        image: body.image || 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
        price: parseFloat(body.price),
        spiceLevel: body.spiceLevel || 'Medium',
        available: body.available ?? true,
        sortOrder: parseInt(body.sortOrder || '0'),
      },
    })

    return NextResponse.json({ success: true, product })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
