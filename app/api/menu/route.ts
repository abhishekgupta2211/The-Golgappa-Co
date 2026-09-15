// app/api/menu/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifySession } from '@/lib/auth'

const GOLGAPPA_IMG = 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80'

const defaultProducts = [
  {
    id: 'prod-1',
    name: 'Classic Teekha Golgappa (6 Pcs)',
    description: 'Golden crunchy puri loaded with spiced chickpea-potato mash and chilled spicy mint pudina paani.',
    image: GOLGAPPA_IMG,
    price: 40,
    spiceLevel: 'Spicy',
    available: true,
  },
  {
    id: 'prod-2',
    name: 'Khatta-Meetha Imli Golgappa (6 Pcs)',
    description: 'Tangy tamarind & date paani with soft boiled mash and roasted cumin aromatic spices.',
    image: GOLGAPPA_IMG,
    price: 45,
    spiceLevel: 'Mild',
    available: true,
  },
  {
    id: 'prod-3',
    name: 'Dahi Puri Chatpata Special (6 Pcs)',
    description: 'Crispy puris overflowing with thick chilled yogurt, sweet dates chutney, spicy garlic chutney & nylon sev.',
    image: GOLGAPPA_IMG,
    price: 70,
    spiceLevel: 'Medium',
    available: true,
  },
  {
    id: 'prod-4',
    name: 'Cheese & Garlic Butter Golgappa (6 Pcs)',
    description: 'Modern fusion crispy puris topped with melted cheese, garlic butter infusion and green herbs.',
    image: GOLGAPPA_IMG,
    price: 90,
    spiceLevel: 'Medium',
    available: true,
  },
  {
    id: 'prod-5',
    name: 'Bulk Party / Catering Order (50+ Plates)',
    description: 'Book live Golgappa stalls & bulk orders for weddings, birthdays, anniversaries & all auspicious occasions.',
    image: GOLGAPPA_IMG,
    price: 1999,
    spiceLevel: 'Customizable',
    available: true,
  },
]

const defaultAddOns = [
  { id: 'addon-1', name: 'Extra Pudina Teekha Paani (500ml)', description: 'Chilled signature pudina paani bottle', price: 25, available: true },
  { id: 'addon-2', name: 'Extra Imli Meetha Paani (500ml)', description: 'Tangy tamarind date syrup paani bottle', price: 25, available: true },
  { id: 'addon-3', name: 'Extra Crunchy Puris Pack (10 Pcs)', description: 'Freshly fried crunchy puris', price: 30, available: true },
  { id: 'addon-4', name: 'Extra Nylon Sev & Crunchy Boondi', description: 'Special topping pouch', price: 15, available: true },
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
        image: body.image || GOLGAPPA_IMG,
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
