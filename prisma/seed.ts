// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

// 100% Guaranteed High Quality Pani Puri / Golgappa Image URLs
const GOLGAPPA_IMAGES = {
  classic: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
  teekha: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
  dahi: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
  special: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
}

async function main() {
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

  await prisma.shopSettings.upsert({
    where: { id: 'default' },
    update: {
      shopName: 'THE GOLGAPPA CO.',
      tagline: 'Crispy. Chatpata. Addictive.',
      phone: '9369610213',
      whatsapp: '9369610213',
      address: 'Near Central Park, Main Market Street',
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
      phone: '9369610213',
      whatsapp: '9369610213',
      address: 'Near Central Park, Main Market Street',
      googleMapsUrl: 'https://maps.app.goo.gl/jm4LXsy1NSKZ38P17?g_st=aw',
      isOpen: true,
      openingTime: '03:00 PM',
      closingTime: '10:00 PM',
      slotDurationMinutes: 15,
      maxOrdersPerSlot: 10,
    },
  })

  const products = [
    {
      name: 'Classic Teekha Golgappa (6 Pcs)',
      description: 'Golden crunchy puri loaded with spiced chickpea-potato mash and chilled spicy mint pudina paani.',
      image: GOLGAPPA_IMAGES.classic,
      price: 40,
      spiceLevel: 'Spicy',
      sortOrder: 1,
      available: true,
    },
    {
      name: 'Khatta-Meetha Imli Golgappa (6 Pcs)',
      description: 'Tangy tamarind & date paani with soft boiled mash and roasted cumin aromatic spices.',
      image: GOLGAPPA_IMAGES.teekha,
      price: 45,
      spiceLevel: 'Mild',
      sortOrder: 2,
      available: true,
    },
    {
      name: 'Dahi Puri Chatpata Special (6 Pcs)',
      description: 'Crispy puris overflowing with thick chilled yogurt, sweet dates chutney, spicy garlic chutney & nylon sev.',
      image: GOLGAPPA_IMAGES.dahi,
      price: 70,
      spiceLevel: 'Medium',
      sortOrder: 3,
      available: true,
    },
    {
      name: 'Cheese & Garlic Butter Golgappa (6 Pcs)',
      description: 'Modern fusion crispy puris topped with melted cheese, garlic butter infusion and green herbs.',
      image: GOLGAPPA_IMAGES.special,
      price: 90,
      spiceLevel: 'Medium',
      sortOrder: 4,
      available: true,
    },
    {
      name: 'Bulk Party / Catering Order (50+ Plates)',
      description: 'Book live Golgappa stalls & bulk orders for weddings, birthdays, anniversaries & all auspicious occasions.',
      image: GOLGAPPA_IMAGES.special,
      price: 1999,
      spiceLevel: 'Customizable',
      sortOrder: 5,
      available: true,
    },
  ]

  for (const prod of products) {
    const existing = await prisma.product.findFirst({ where: { name: prod.name } })
    if (!existing) {
      await prisma.product.create({ data: prod })
    } else {
      await prisma.product.update({ where: { id: existing.id }, data: prod })
    }
  }

  const addOns = [
    { name: 'Extra Pudina Teekha Paani (500ml)', description: 'Chilled signature pudina paani bottle', price: 25, available: true },
    { name: 'Extra Imli Meetha Paani (500ml)', description: 'Tangy tamarind date syrup paani bottle', price: 25, available: true },
    { name: 'Extra Crunchy Puris Pack (10 Pcs)', description: 'Freshly fried crunchy puris', price: 30, available: true },
    { name: 'Extra Nylon Sev & Crunchy Boondi', description: 'Special topping pouch', price: 15, available: true },
  ]

  for (const addon of addOns) {
    const existing = await prisma.addOn.findFirst({ where: { name: addon.name } })
    if (!existing) {
      await prisma.addOn.create({ data: addon })
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
