"use client"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTiktok, FaCheckCircle, FaTimesCircle } from "react-icons/fa"

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    telefon: "",
    poruka: ""
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      // Pošalji email preko EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.ime,
          from_email: formData.email,
          phone: formData.telefon || "Nije navedeno",
          message: formData.poruka,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setSuccess(true)
      setFormData({ ime: "", email: "", telefon: "", poruka: "" })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      console.error("Email error:", err)
      setError(true)
      setTimeout(() => setError(false), 5000)
    }
    setLoading(false)
  }

  return (
    <div className="w-screen overflow-x-hidden">
      {/* FULL WIDTH Hero sekcija sa background slikom */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white min-h-[600px] flex items-center w-full overflow-hidden"
        style={{
          backgroundImage: "url('/contact-hero.jpg')",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Dark overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #1f1f1fb5, #171717d1)"
          }}
        ></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <FaPhone className="particle absolute top-20 left-10 text-8xl" />
          <FaEnvelope className="particle absolute bottom-20 right-20 text-9xl" style={{animationDelay: '2s'}} />
          <FaPhone className="particle absolute top-1/2 left-1/3 text-8xl" style={{animationDelay: '4s'}} />
        </div>

        <div className="container mx-auto w-full text-center relative z-10 px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Kontaktirajte nas
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 drop-shadow-md leading-relaxed">
              Imate pitanja ili prijedloge? Slobodno nam se obratite - tu smo za Vas i spremi da vam pomognemo!
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <div className="w-full">
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kontakt informacije */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Naše informacije</h2>

              {/* Email */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-500 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-blue-500 rounded-xl text-white text-2xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                    <a 
                      href="mailto:nvopomozi@gmail.me"
                      className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                    >
                      nvopomozi@gmail.me
                    </a>
                    <p className="text-gray-600 text-sm mt-2">Odgovori u roku od 24h</p>
                  </div>
                </div>
              </div>

              {/* Telefon */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-500 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-green-500 rounded-xl text-white text-2xl">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Telefon</h3>
                    <a 
                      href="tel:+38263434490"
                      className="text-green-600 hover:text-green-700 font-semibold text-lg"
                    >
                      063 434 490
                    </a>
                    <p className="text-gray-600 text-sm mt-2">Pozovite nas bilo kada</p>
                  </div>
                </div>
              </div>

              {/* Adresa */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border-l-4 border-orange-500 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-orange-500 rounded-xl text-white text-2xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Lokacija</h3>
                    <p className="text-gray-700 font-semibold">Potkrajačka 140</p>
                    <p className="text-gray-700 font-semibold">Potkrajci, Bijelo Polje</p>
                    <p className="text-gray-600 text-sm mt-2">Crna Gora</p>
                  </div>
                </div>
              </div>

              {/* Društvene mreže */}
              <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-primary">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Pratite nas</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/Pomozi.Me/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-2xl text-white hover:scale-110 transition-all"
                  >
                    <FaFacebook />
                  </a>
                  <a 
                    href="https://www.instagram.com/pomozi.me/?hl=en" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-pink-600 to-orange-500 rounded-full flex items-center justify-center text-2xl text-white hover:scale-110 transition-all"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@nvo.pomozi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-2xl text-white hover:scale-110 transition-all"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>

            {/* Kontakt forma */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover-lift">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Pošalji poruku</h2>

              {success && (
                <div className="bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-3 animate-fade-in">
                  <FaCheckCircle className="text-2xl" />
                  <span className="font-semibold">Poruka je uspješno poslana! Hvala vam.</span>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-lg mb-6 flex items-center gap-3 animate-fade-in">
                  <FaTimesCircle className="text-2xl" />
                  <span className="font-semibold">Greška pri slanju. Pokušajte ponovo.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Ime */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ime i prezime</label>
                  <input
                    type="text"
                    name="ime"
                    value={formData.ime}
                    onChange={handleChange}
                    placeholder="Unesite vaše ime"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Unesite vaš email"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon (opciono)</label>
                  <input
                    type="tel"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    placeholder="Unesite vaš telefon"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Poruka */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Poruka</label>
                  <textarea
                    name="poruka"
                    value={formData.poruka}
                    onChange={handleChange}
                    placeholder="Unesite vašu poruku..."
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit dugme */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Slanje..." : "Pošalji poruku"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
