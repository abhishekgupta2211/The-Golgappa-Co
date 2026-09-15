// app/api/admin/settings/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifySession } from '@/lib/auth'

export async function GET() {
  try {
    const settings = await prisma.shopSettings.findUnique({ where: { id: 'default' } })
    return NextResponse.json({ success: true, settings })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const updatedSettings = await prisma.shopSettings.update({
      where: { id: 'default' },
      data: body,
    })

    return NextResponse.json({ success: true, settings: updatedSettings })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
