import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export async function GET() {
  try {
    const actions = await redis.get('actions') || []
    const partners = await redis.get('partners') || []
    
    return NextResponse.json({ actions, partners })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
