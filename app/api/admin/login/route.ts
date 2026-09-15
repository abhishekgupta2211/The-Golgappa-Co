// app/api/admin/login/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { createSession } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json({ success: false, error: 'Username and password are required' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { username } })

    if (!user) {
      return NextResponse.json({ success: false, error: 'Invalid username or password' }, { status: 401 })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return NextResponse.json({ success: false, error: 'Invalid username or password' }, { status: 401 })
    }

    await createSession(user.username)

    return NextResponse.json({ success: true, message: 'Logged in successfully' })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
