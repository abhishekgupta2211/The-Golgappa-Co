// lib/auth.ts
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const SECRET_KEY = new TextEncoder().encode(process.env.AUTH_SECRET || 'super-secret-golgappa-key-2026')

export async function createSession(username: string) {
  const token = await new SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(SECRET_KEY)

  const cookieStore = await cookies()
  cookieStore.set('admin_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 86400,
  })

  return token
}

export async function verifySession() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_session')?.value

  if (!token) return null

  try {
    const { payload } = await jwtVerify(token, SECRET_KEY)
    return payload
  } catch {
    return null
  }
}

export async function clearSession() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
}
