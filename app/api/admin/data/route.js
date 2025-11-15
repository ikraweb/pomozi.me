import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { activeActions, completedActions, partners } from '@/data/actions'

export async function GET() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('admin-auth')
  
  if (authCookie?.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({
    actions: [
      ...activeActions.map(a => ({...a, completed: false})),
      ...completedActions.map(a => ({...a, completed: true}))
    ],
    partners: partners
  })
}
