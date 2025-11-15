"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Početna" },
    { href: "/aktivne-akcije", label: "Aktivne akcije" },
    { href: "/uspjesne-akcije", label: "Uspješne akcije" },
    { href: "/o-nama", label: "O nama" },
    { href: "/kontakt", label: "Kontakt" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3 group hover:scale-110 transition-transform">
            <Image 
              src="/logo.png" 
              alt="Pomozi" 
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className="text-3xl font-bold text-primary logo-text"></span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="nav-link text-gray-700 font-semibold px-4 py-2 rounded-lg transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Doniraj button */}
          <div className="hidden md:block">
            <Link 
              href="/doniraj" 
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transform hover:scale-110 transition-all animate-pulse"
            >
              ❤️ Doniraj
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary text-2xl hover:scale-125 transition-transform"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="block text-gray-700 hover:text-primary font-semibold py-2 px-4 rounded-lg hover:bg-red-50 transition-all transform hover:translate-x-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/doniraj" 
              className="block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold text-center mt-4 hover:shadow-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              ❤️ Doniraj
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
