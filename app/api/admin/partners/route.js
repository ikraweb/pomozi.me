import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export async function GET() {
  try {
    const partners = await redis.get('partners') || []
    return NextResponse.json({ partners })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    
    const newPartner = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString()
    }
    
    const partners = await redis.get('partners') || []
    partners.push(newPartner)
    await redis.set('partners', partners)
    
    return NextResponse.json({ success: true, partner: newPartner })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const body = await request.json()
    const partners = await redis.get('partners') || []
    
    const filtered = partners.filter(p => p.id !== body.id)
    await redis.set('partners', filtered)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
