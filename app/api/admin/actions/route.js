import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

// GET - Fetch actions
export async function GET() {
  try {
    const actions = await redis.get('actions') || []
    return NextResponse.json({ actions })
  } catch (error) {
    console.error('GET error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST - Create action
export async function POST(request) {
  try {
    const body = await request.json()
    
    const newAction = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString()
    }
    
    const actions = await redis.get('actions') || []
    actions.push(newAction)
    await redis.set('actions', actions)
    
    console.log('✅ Action added to Redis:', newAction.title)
    
    return NextResponse.json({ success: true, action: newAction })
  } catch (error) {
    console.error('POST error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// PUT - Update action
export async function PUT(request) {
  try {
    const body = await request.json()
    const actions = await redis.get('actions') || []
    
    const index = actions.findIndex(a => a.id === body.id)
    if (index !== -1) {
      actions[index] = { ...actions[index], ...body }
      await redis.set('actions', actions)
      return NextResponse.json({ success: true })
    }
    
    return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('PUT error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// DELETE - Remove action
export async function DELETE(request) {
  try {
    const body = await request.json()
    const actions = await redis.get('actions') || []
    
    const filtered = actions.filter(a => a.id !== body.id)
    await redis.set('actions', filtered)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('DELETE error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
