import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'actions.js')

function readData() {
  const fileContent = fs.readFileSync(dataPath, 'utf-8')
  const activeMatch = fileContent.match(/export const activeActions = (\[[\s\S]*?\])\n\nexport const completedActions/)
  const completedMatch = fileContent.match(/export const completedActions = (\[[\s\S]*?\])\n\nexport const partners/)
  const partnersMatch = fileContent.match(/export const partners = (\[[\s\S]*?\])/)
  
  return {
    activeActions: activeMatch ? JSON.parse(activeMatch[1].replace(/'/g, '"')) : [],
    completedActions: completedMatch ? JSON.parse(completedMatch[1].replace(/'/g, '"')) : [],
    partners: partnersMatch ? JSON.parse(partnersMatch[1].replace(/'/g, '"')) : []
  }
}

function writeData(data) {
  const content = `export const activeActions = ${JSON.stringify(data.activeActions, null, 2)}

export const completedActions = ${JSON.stringify(data.completedActions, null, 2)}

export const partners = ${JSON.stringify(data.partners, null, 2)}
`
  fs.writeFileSync(dataPath, content, 'utf-8')
}

// POST - dodaj novog partnera
export async function POST(request) {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('admin-auth')
  
  if (authCookie?.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const data = readData()
  
  const newPartner = {
    id: Math.max(...data.partners.map(p => p.id || 0), 0) + 1,
    name: body.name,
    logo: body.logo
  }

  data.partners.push(newPartner)
  writeData(data)

  return NextResponse.json({ success: true, partner: newPartner })
}

// DELETE - obriši partnera
export async function DELETE(request) {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('admin-auth')
  
  if (authCookie?.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await request.json()
  const data = readData()
  
  data.partners = data.partners.filter(p => p.id !== id)
  writeData(data)

  return NextResponse.json({ success: true })
}
