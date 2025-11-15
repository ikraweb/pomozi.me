"use client"
import Image from "next/image"
import Link from "next/link"
import { FaCheckCircle } from "react-icons/fa"

export default function CompletedActionCard({ action }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      
      {/* Slika */}
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={action.mainImage} 
          alt={action.title} 
          width={400}
          height={250}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Green overlay badge */}
        <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
          <FaCheckCircle className="text-sm" />
          Završeno
        </div>
      </div>

      {/* Sadrzaj */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-green-600 transition-colors">{action.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{action.shortDescription}</p>

        {/* Stats */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-xs text-gray-500 font-semibold">Cilj</p>
              <p className="text-xl font-bold text-gray-800">{action.goal}EUR</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-semibold">Prikupljeno</p>
              <p className="text-xl font-bold text-green-600">{action.collected}EUR</p>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="bg-gray-300 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-green-500 h-full"
              style={{ width: `${Math.min((action.collected / action.goal) * 100, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Link */}
        <Link
          href={`/uspjesne-akcije/${action.id}`}
          className="w-full inline-block bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold text-center transition-all text-sm"
        >
          Pogledaj detalje
        </Link>
      </div>
    </div>
  )
}
