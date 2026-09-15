// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding Golgappa Shop Database...')

  // Seed Admin User
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
      name: 'Mahesh Kumar Gupta',
      role: 'ADMIN',
    },
  })

  // Seed Shop Settings
  await prisma.shopSettings.upsert({
    where: { id: 'default' },
    update: {
      shopName: 'THE GOLGAPPA CO.',
      tagline: 'Crispy. Chatpata. Addictive.',
      phone: '9876543210',
      whatsapp: '9876543210',
      address: 'Main Market Street, Near Central Park',
      googleMapsUrl: 'https://maps.app.goo.gl/jm4LXsy1NSKZ38P17?g_st=aw',
      isOpen: true,
      openingTime: '03:00 PM',
      closingTime: '10:00 PM',
      slotDurationMinutes: 15,
      maxOrdersPerSlot: 10,
    },
    create: {
      id: 'default',
      shopName: 'THE GOLGAPPA CO.',
      tagline: 'Crispy. Chatpata. Addictive.',
      phone: '9876543210',
      whatsapp: '9876543210',
      address: 'Main Market Street, Near Central Park',
      googleMapsUrl: 'https://maps.app.goo.gl/jm4LXsy1NSKZ38P17?g_st=aw',
      isOpen: true,
      openingTime: '03:00 PM',
      closingTime: '10:00 PM',
      slotDurationMinutes: 15,
      maxOrdersPerSlot: 10,
    },
  })

  // Seed Products
  const products = [
    {
      name: 'Classic Golgappa (6 Pcs)',
      description: 'Golden crispy puris filled with spiced potato-chana masala and iconic mint-coriander teekha paani.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
      price: 50,
      spiceLevel: 'Medium',
      sortOrder: 1,
      available: true,
    },
    {
      name: 'Teekha Volcano Golgappa (6 Pcs)',
      description: 'Extra fiery green chillies and double spiced masaledar paani for true street food thrill seekers.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      price: 60,
      spiceLevel: 'Extra Spicy',
      sortOrder: 2,
      available: true,
    },
    {
      name: 'Khatta-Meetha Imli Special (6 Pcs)',
      description: 'Sweet and sour tamarind chutney with soft boiled chickpea mash and roasted cumin powder.',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
      price: 55,
      spiceLevel: 'Mild',
      sortOrder: 3,
      available: true,
    },
    {
      name: 'Dahi Puri Chatpata Delight (6 Pcs)',
      description: 'Stuffed puris loaded with thick chilled yogurt, sweet chutney, spicy garlic chutney & fine nylon sev.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      price: 80,
      spiceLevel: 'Medium',
      sortOrder: 4,
      available: true,
    },
    {
      name: 'Special Mix Fusion Platter (8 Pcs)',
      description: 'A feast of 2 classic, 2 teekha, 2 khatta-meetha, and 2 dahi puras crafted by Mahesh Ji.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
      price: 110,
      spiceLevel: 'Spicy',
      sortOrder: 5,
      available: true,
    },
  ]

  for (const prod of products) {
    const existing = await prisma.product.findFirst({ where: { name: prod.name } })
    if (!existing) {
      await prisma.product.create({ data: prod })
    }
  }

  // Seed AddOns
  const addOns = [
    { name: 'Extra Mint Teekha Paani (250ml)', description: 'Chilled signature pudina paani', price: 15, available: true },
    { name: 'Extra Imli Sweet Paani (250ml)', description: 'Tangy tamarind date syrup paani', price: 15, available: true },
    { name: 'Crispy Extra Puris (5 Pcs)', description: 'Freshly fried crunchy puris', price: 20, available: true },
    { name: 'Extra Nylon Sev & Boondi', description: 'Crunchy topping pack', price: 10, available: true },
  ]

  for (const addon of addOns) {
    const existing = await prisma.addOn.findFirst({ where: { name: addon.name } })
    if (!existing) {
      await prisma.addOn.create({ data: addon })
    }
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
