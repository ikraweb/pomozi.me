"use client"
import Image from "next/image"
import { FaHeart, FaUniversity, FaPaypal, FaHandHoldingHeart, FaGlobe, FaExternalLinkAlt, FaCopy } from "react-icons/fa"
import { useState } from "react"


export default function DonacijaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Hero sekcija SA SLIKOM KAO BACKGROUND */}
      <section 
  className="relative bg-cover bg-center text-white py-32 overflow-hidden h-89"
        style={{ backgroundImage: "url('/donation.jpg')" }}
      >
        {/* Overlay */}
        <div 
  className="absolute inset-0"
  style={{
    background: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
  }}
></div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <FaHeart className="particle absolute top-20 left-10 text-6xl" />
          <FaHeart className="particle absolute bottom-20 right-20 text-8xl" style={{animationDelay: '2s'}} />
          <FaHandHoldingHeart className="particle absolute top-40 right-1/4 text-7xl" style={{animationDelay: '4s'}} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 h-full flex flex-col items-center justify-center">
          <FaHeart className="text-7xl mx-auto mb-6 animate-heartbeat" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Vaša donacija mijenja živote
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95 drop-shadow-md">
            Svaki doprinos, bez obzira na iznos, donosi nadu i osmijeh nekome ko ga očajnički treba
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgb(254, 242, 242)"/>
          </svg>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-5xl -mt-10 relative z-10">
        {/* Dva glavna boxa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Box 1: Direktna donacija */}
          <DonationMethodBox />

          {/* Box 2: Online donacija */}
          <OnlineDonationBox />
        </div>

        {/* Info sekcija */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <FaHeart className="text-5xl text-red-500 mx-auto mb-4 animate-heartbeat" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Hvala vam na podršci!
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Svaka donacija se koristi transparentno i efikasno. Možete pratiti rezultate naših akcija 
            na našoj web stranici i društvenim mrežama.
          </p>
        </div>
      </div>
    </div>
  )
}


function DonationMethodBox() {
  const [copied, setCopied] = useState(null)

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 hover-lift">
      <div className="flex items-center gap-3 mb-6">
        <FaUniversity className="text-4xl text-primary" />
        <h2 className="text-3xl font-bold text-gray-800">Direktna uplate</h2>
      </div>

      <p className="text-gray-600 mb-6">
        Uplatom možete pomoći na žiro račun i druge načine:
      </p>

      <div className="space-y-6">
        {/* Žiro račun */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-l-4 border-primary">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-1">Žiro račun (Crna Gora)</p>
              <p className="text-2xl font-bold text-gray-800 font-mono">510-130501-29</p>
            </div>
            <button
              onClick={() => copyToClipboard("510-130501-29", "ziro")}
              className="p-2 hover:bg-white rounded-lg transition-colors"
              title="Kopiraj"
            >
              {copied === "ziro" ? (
                <span className="text-green-500 text-sm font-semibold">✓ Kopirano</span>
              ) : (
                <FaCopy className="text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {/* PayPal */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-l-4 border-blue-500">
          <div className="flex items-center gap-3 mb-2">
            <FaPaypal className="text-3xl text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-1">PayPal</p>
              <a 
                href="mailto:info@pomozi.me" 
                className="text-lg font-bold text-blue-600 hover:text-blue-700 hover:underline"
              >
                info@pomozi.me
              </a>
            </div>
          </div>
        </div>

        {/* Lično */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border-l-4 border-green-500">
          <div className="flex items-center gap-3">
            <FaHandHoldingHeart className="text-3xl text-green-600" />
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-1">Lično</p>
              <p className="text-gray-700 font-semibold">Našim aktivistima na terenu</p>
            </div>
          </div>
        </div>

        {/* Inostranstvo */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-l-4 border-purple-500">
          <div className="flex items-center gap-3 mb-4">
            <FaGlobe className="text-3xl text-purple-600" />
            <p className="text-lg font-bold text-gray-800">Uplate iz inostranstva</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">IBAN</p>
                <p className="text-lg font-bold text-gray-800 font-mono">ME25510000000013050129</p>
              </div>
              <button
                onClick={() => copyToClipboard("ME25510000000013050129", "iban")}
                className="p-2 hover:bg-white rounded-lg transition-colors"
                title="Kopiraj"
              >
                {copied === "iban" ? (
                  <span className="text-green-500 text-sm font-semibold">✓</span>
                ) : (
                  <FaCopy className="text-gray-500" />
                )}
              </button>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1">SWIFT</p>
                <p className="text-lg font-bold text-gray-800 font-mono">CKBCMEPG</p>
              </div>
              <button
                onClick={() => copyToClipboard("CKBCMEPG", "swift")}
                className="p-2 hover:bg-white rounded-lg transition-colors"
                title="Kopiraj"
              >
                {copied === "swift" ? (
                  <span className="text-green-500 text-sm font-semibold">✓</span>
                ) : (
                  <FaCopy className="text-gray-500" />
                )}
              </button>
            </div>
            <p className="text-sm text-gray-600 italic">Crnogorska komercijalna banka</p>
          </div>
        </div>
      </div>
    </div>
  )
}


function OnlineDonationBox() {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl shadow-2xl p-8 hover-lift relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 opacity-10">
        <FaHeart className="text-9xl -mr-10 -mt-10" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <FaExternalLinkAlt className="text-4xl" />
          <h2 className="text-3xl font-bold">Online donacija</h2>
        </div>

        <p className="text-lg mb-6 opacity-90 leading-relaxed">
          Donirajte brzo i sigurno putem online platforme. Podržite našu akciju 
          <span className="font-bold"> "Obrok za sve"</span>.
        </p>

        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-6 border border-white/20">
          <p className="text-sm mb-2 opacity-80">Biće preusmjereni na:</p>
          <p className="font-bold text-lg">Vaktija.me - Obrok za sve</p>
        </div>

        <a
          href="https://vaktija.me/donations/obrok-za-sve/"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full bg-white text-primary px-8 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 hover:text-gray-800 transition-all shadow-2xl flex items-center justify-center gap-3"
        >
          <FaHeart className="text-2xl group-hover:animate-heartbeat" />
          Doniraj online
          <FaExternalLinkAlt className="text-lg" />
        </a>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm opacity-80">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          Sigurna online uplate
        </div>
      </div>
    </div>
  )
}