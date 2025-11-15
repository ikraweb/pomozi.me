import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')
    
    if (!file) {
      return NextResponse.json({ success: false, error: 'No file' }, { status: 400 })
    }
    
    // Convert file to base64
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64 = buffer.toString('base64')
    const dataURI = `data:${file.type};base64,${base64}`
    
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: 'pomozi-me',
      resource_type: 'auto'
    })
    
    console.log('✅ Cloudinary upload success:', result.secure_url)
    
    return NextResponse.json({ 
      success: true, 
      url: result.secure_url 
    })
  } catch (error) {
    console.error('❌ Upload error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 })
  }
}
