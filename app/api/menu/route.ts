// app/api/menu/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifySession } from '@/lib/auth'

const defaultProducts = [
  {
    id: 'prod-1',
    name: 'Classic Golgappa (6 Pcs)',
    description: 'Golden crispy puris filled with spiced potato-chana masala and iconic mint-coriander teekha paani.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    price: 50,
    spiceLevel: 'Medium',
    available: true,
  },
  {
    id: 'prod-2',
    name: 'Teekha Volcano Golgappa (6 Pcs)',
    description: 'Extra fiery green chillies and double spiced masaledar paani for true street food thrill seekers.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    price: 60,
    spiceLevel: 'Extra Spicy',
    available: true,
  },
  {
    id: 'prod-3',
    name: 'Khatta-Meetha Imli Special (6 Pcs)',
    description: 'Sweet and sour tamarind chutney with soft boiled chickpea mash and roasted cumin powder.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    price: 55,
    spiceLevel: 'Mild',
    available: true,
  },
  {
    id: 'prod-4',
    name: 'Dahi Puri Chatpata Delight (6 Pcs)',
    description: 'Stuffed puris loaded with thick chilled yogurt, sweet chutney, spicy garlic chutney & fine nylon sev.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    price: 80,
    spiceLevel: 'Medium',
    available: true,
  },
  {
    id: 'prod-5',
    name: 'Special Mix Fusion Platter (8 Pcs)',
    description: 'A feast of 2 classic, 2 teekha, 2 khatta-meetha, and 2 dahi puras crafted by Mahesh Ji.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    price: 110,
    spiceLevel: 'Spicy',
    available: true,
  },
]

const defaultAddOns = [
  { id: 'addon-1', name: 'Extra Mint Teekha Paani (250ml)', description: 'Chilled signature pudina paani', price: 15, available: true },
  { id: 'addon-2', name: 'Extra Imli Sweet Paani (250ml)', description: 'Tangy tamarind date syrup paani', price: 15, available: true },
  { id: 'addon-3', name: 'Crispy Extra Puris (5 Pcs)', description: 'Freshly fried crunchy puris', price: 20, available: true },
  { id: 'addon-4', name: 'Extra Nylon Sev & Boondi', description: 'Crunchy topping pack', price: 10, available: true },
]

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { sortOrder: 'asc' },
    })
    const addOns = await prisma.addOn.findMany({
      where: { available: true },
    })
    const settings = await prisma.shopSettings.findUnique({ where: { id: 'default' } })

    return NextResponse.json({
      success: true,
      products: products.length > 0 ? products : defaultProducts,
      addOns: addOns.length > 0 ? addOns : defaultAddOns,
      settings: settings || { isOpen: true },
    })
  } catch {
    return NextResponse.json({
      success: true,
      products: defaultProducts,
      addOns: defaultAddOns,
      settings: { isOpen: true },
    })
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
