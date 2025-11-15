import { NextResponse } from 'next/server'
import { checkAuth } from '@/lib/auth'

export async function POST(request) {
  const { username, password } = await request.json()
  
  if (checkAuth(username, password)) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('admin-auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 // 24 sata
    })
    return response
  }
  
  return NextResponse.json({ success: false }, { status: 401 })
}
