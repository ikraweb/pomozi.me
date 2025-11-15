import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generiši jedinstveno ime fajla
    const timestamp = Date.now()
    const filename = `${timestamp}-${file.name.replace(/\s+/g, '-')}`
    const path = join(process.cwd(), 'public', 'images', filename)

    await writeFile(path, buffer)

    return NextResponse.json({ 
      success: true, 
      filename,
      url: `/images/${filename}` 
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
