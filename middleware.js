import { NextResponse } from "next/server"

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Zaštiti admin dashboard
  if (pathname.startsWith("/admin/dashboard")) {
    const authCookie = request.cookies.get("admin-auth")
    
    // Ako nema cookie ili nije "true" - redirect na login
    if (!authCookie || authCookie.value !== "true") {
      return NextResponse.redirect(new URL("/admin", request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/dashboard/:path*"]
}