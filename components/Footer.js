import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50C240 30 480 20 720 30C960 40 1200 60 1440 50V100H0V50Z" fill="rgb(17, 24, 39)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/logo.png" 
                alt="Pomozi" 
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-3xl font-bold text-primary">Pomozi</h3>
                <p className="text-red-400 text-sm font-semibold"></p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              Neprofitna humanitarna organizacija posvećena pomaganju ljudi u potrebi širom Crne Gore. 
              Svaka donacija donosi nadu i svjetlost u nečiji život.
            </p>
            
            <div className="space-y-3">
              <p className="text-white font-bold text-sm mb-4">PRATITE NAS:</p>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/Pomozi.Me/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-all shadow-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <FaFacebook className="relative z-10 text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/pomozi.me/?hl=en" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-all shadow-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <FaInstagram className="relative z-10 text-white" />
                </a>
                <a 
                  href="https://www.tiktok.com/@nvo.pomozi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-all shadow-lg overflow-hidden border border-gray-700"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <FaTiktok className="relative z-10 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></span>
              Brzi linkovi
            </h4>
            <div className="space-y-3">
              <Link href="/" className="group flex items-center gap-2 text-gray-400 hover:text-red-400 transition-all">
                <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all"></span>
                <span className="group-hover:translate-x-1 transition-transform">Početna</span>
              </Link>
              <Link href="/aktivne-akcije" className="group flex items-center gap-2 text-gray-400 hover:text-red-400 transition-all">
                <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all"></span>
                <span className="group-hover:translate-x-1 transition-transform">Aktivne akcije</span>
              </Link>
              <Link href="/uspjesne-akcije" className="group flex items-center gap-2 text-gray-400 hover:text-red-400 transition-all">
                <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all"></span>
                <span className="group-hover:translate-x-1 transition-transform">Uspješne akcije</span>
              </Link>
              <Link href="/doniraj" className="group flex items-center gap-2 text-gray-400 hover:text-red-400 transition-all">
                <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all"></span>
                <span className="group-hover:translate-x-1 transition-transform">Doniraj</span>
              </Link>
              <Link href="/o-nama" className="group flex items-center gap-2 text-gray-400 hover:text-red-400 transition-all">
                <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all"></span>
                <span className="group-hover:translate-x-1 transition-transform">O nama</span>
              </Link>
              <Link href="/kontakt" className="group flex items-center gap-2 text-gray-400 hover:text-red-400 transition-all">
                <span className="w-0 h-0.5 bg-red-500 group-hover:w-4 transition-all"></span>
                <span className="group-hover:translate-x-1 transition-transform">Kontakt</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></span>
              Kontakt
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:nvopomozi@gmail.me"
                className="group flex items-start gap-3 text-gray-400 hover:text-red-400 transition-all"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-500 transition-colors">
                  📧
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="font-semibold text-sm">nvopomozi@gmail.me</p>
                </div>
              </a>
              <a 
                href="tel:+38263434490"
                className="group flex items-start gap-3 text-gray-400 hover:text-red-400 transition-all"
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-500 transition-colors">
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Telefon</p>
                  <p className="font-semibold text-sm">063 434 490</p>
                </div>
              </a>
              <div className="group flex items-start gap-3 text-gray-400">
                <div className="p-2 bg-gray-800 rounded-lg">
                  📍
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Lokacija</p>
                  <p className="font-semibold text-sm">Potkrajacka 140<br/>Potkrajci, Bijelo Polje</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-10 blur-xl"></div>
          <div className="relative border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 flex items-center gap-2 flex-wrap text-center md:text-left">
                <Image 
                  src="/logo.png" 
                  alt="Pomozi" 
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>© 2025 <span className="text-primary font-semibold">Pomozi</span></span>
                <span className="hidden sm:inline text-gray-700">•</span>
                <span>Sva prava zadržana</span>
              </p>
              <p className="text-gray-600 text-sm">
                Napravljeno sa ❤️ za bolje sutra
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
    </footer>
  )
}
