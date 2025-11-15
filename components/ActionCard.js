"use client"
import Image from "next/image"
import Link from "next/link"
import { FaHeart, FaCheck } from "react-icons/fa"


export default function ActionCard({ action, isCompleted }) {
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
        {action.urgent && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Hitno
          </div>
        )}
        {isCompleted && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            <FaCheck className="text-sm" />
            Završena
          </div>
        )}
      </div>


      {/* Sadrzaj */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-primary transition-colors">{action.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{action.shortDescription}</p>


        {/* Stats */}
        <div className={`rounded-lg p-4 mb-4 ${isCompleted ? 'bg-green-50' : 'bg-gray-50'}`}>
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-xs text-gray-500 font-semibold">Cilj</p>
              <p className={`text-xl font-bold ${isCompleted ? 'text-green-600' : 'text-gray-800'}`}>
                {action.goal}EUR
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-semibold">Prikupljeno</p>
              <p className={`text-xl font-bold ${isCompleted ? 'text-green-600' : 'text-primary'}`}>
                {action.collected}EUR
              </p>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="bg-gray-300 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full ${isCompleted ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-primary to-secondary'}`}
              style={{ width: `${Math.min((action.collected / action.goal) * 100, 100)}%` }}
            ></div>
          </div>
        </div>


        {/* Link - Različit za aktivne i završene akcije */}
        <Link
          href={`/${isCompleted ? 'uspjesne-akcije' : 'aktivne-akcije'}/${action.id}`}
          className={`mt-6 block w-full text-center py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
            isCompleted 
              ? 'bg-green-500 text-white hover:bg-green-600' 
              : 'bg-primary text-white hover:bg-primary/80'
          }`}
        >
          {isCompleted ? (
            <>
              <FaCheck />
              Pogledaj detalje
            </>
          ) : (
            <>
              <FaHeart />
              Pomozi
            </>
          )}
        </Link>
      </div>
    </div>
  )
}