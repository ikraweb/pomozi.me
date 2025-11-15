
"use client"
import { FaHeart, FaHandsHelping, FaUsers, FaBalanceScale, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"
import Link from "next/link"


export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero sekcija sa about.jpg background */}
      <section 
        className="relative bg-cover bg-center text-white py-32 overflow-hidden w-full h-85"
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        {/* Crni overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
          }}
        ></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <FaHeart className="particle absolute top-20 left-10 text-red-200 text-3xl opacity-30" />
          <FaHeart className="particle absolute top-40 right-20 text-orange-200 text-2xl opacity-20" style={{animationDelay: "2s"}} />
          <FaHandsHelping className="particle absolute bottom-32 left-1/4 text-yellow-200 text-4xl opacity-25" style={{animationDelay: "4s"}} />
          <FaUsers className="particle absolute top-1/3 right-1/4 text-red-300 text-3xl opacity-20" style={{animationDelay: "6s"}} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up drop-shadow-2xl">
            Zajedno <span className="text-yellow-300">mijenjamo</span> živote
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95 drop-shadow-lg">
            Pomozi.me je mjesto gdje ljubav prema ljudima postaje stvarnost.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <FaHeart className="text-5xl animate-pulse text-red-300 drop-shadow-lg" />
            <FaHandsHelping className="text-5xl text-yellow-300 drop-shadow-lg" />
            <FaUsers className="text-5xl text-orange-200 drop-shadow-lg" />
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-10 max-w-6xl">
        {/* Statistika kartica */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="card-gradient text-center hover-lift animate-fade-in-up">
            <div className="text-5xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-gray-600 font-semibold">Pomognute osobe</div>
          </div>
          <div className="card-gradient text-center hover-lift animate-fade-in-up" style={{animationDelay: "0.1s"}}>
            <div className="text-5xl font-bold text-secondary mb-2">2021</div>
            <div className="text-gray-600 font-semibold">Godina osnivanja</div>
          </div>
          <div className="card-gradient text-center hover-lift animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            <div className="text-5xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-600 font-semibold">Realizovane akcije</div>
          </div>
        </div>

        {/* Priča sekcija */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 hover-lift">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <FaHeart className="text-4xl text-red-500 animate-heartbeat" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Naša priča</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Udruženje <span className="font-bold text-primary">Pomozi.me</span> je neprofitna humanitarna organizacija koja svojim djelovanjem pomaže
                ugroženim ljudima na području cijele Crne Gore, ali i šire. Pomoć u zadovoljavanju osnovnih ljudskih
                potreba timovi Pomozi.me pružaju jetimima, starim i iznemoglim licima, samohranim majkama,
                porodicama bez stalnih primanja, djeci bez oba roditelja, osobama sa invaliditetom, oboljelima,
                migrantima...
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border-l-4 border-primary mb-6">
                <p className="text-gray-800 font-semibold text-lg">
                  Od svog osnivanja 2021. godine do danas, Udruženje Pomozi.me pomoglo je preko 10,000 osoba kroz
                  različite projekte i humanitarne akcije.
                </p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Za socijalno ugrožene kategorije društva prikupljamo i obezbjeđujemo materijalnu pomoć, hranu,
                lijekove, higijenske proizvode, obuću, odjeću, namještaj, bijelu tehniku, kao i druge potrepštine, novčano
                pomažemo u liječenju teško oboljelih osoba, te pomažemo i u stambenom zbrinjavanju ljudi u izuzetno
                teškom materijalnom stanju, klanje kurbana za Bajram i Akika za novorodjenčad.
              </p>

              <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-500">
                <p className="text-gray-800 font-semibold text-xl italic">
                  "Cilj nam je da budemo humani i potičemo druge na humanost, solidarnost i saradnju."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vrijednosti sekcija */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Vrijednosti koje nas vode
            </h2>
            <p className="text-gray-600 text-lg">Ono u što vjerujemo i kako djelujemo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group hover-lift">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
                <FaBalanceScale className="text-5xl mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">Transparentnost</h3>
                <p className="text-blue-50 leading-relaxed">
                  Sve naše akcije su javne i transparentne. Vjerujemo da povjerenje
                  gradimo kroz otvorenost i iskrenost.
                </p>
              </div>
            </div>

            <div className="group hover-lift">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-lg">
                <FaHandsHelping className="text-5xl mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">Odgovornost</h3>
                <p className="text-green-50 leading-relaxed">
                  Odgovorni smo prema svakom donatoru i svakoj osobi kojoj pomažemo.
                  Svaki gest brižljivo planiramo i realizujemo.
                </p>
              </div>
            </div>

            <div className="group hover-lift">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
                <FaUsers className="text-5xl mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">Solidarnost</h3>
                <p className="text-purple-50 leading-relaxed">
                  Vjerujemo u snagu zajednice. Zajedno možemo postići više nego
                  što bi svako od nas mogao sam.
                </p>
              </div>
            </div>

            <div className="group hover-lift">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-lg">
                <FaHeart className="text-5xl mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">Efikasnost</h3>
                <p className="text-orange-50 leading-relaxed">
                Svaka donacija ide direktno do onih kojima je najpotrebnije. Bez
                  nepotrebnih troškova, sa maksimalnim uticajem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tim sekcija */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-16 hover-lift">
          <div className="flex items-center gap-3 mb-6">
            <FaUsers className="text-4xl text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Naš tim</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Naš tim čine posvećeni volonteri i profesionalci koji dijele istu viziju - 
            svijet u kome niko nije prepušten sam sebi. Zajedno radimo na realizaciji 
            humanitarnih projekata koji mijenjaju živote.
          </p>
          <p className="text-gray-600 italic">
            Svaki član našeg tima donosi jedinstvenu energiju, ljubav prema ljudima
            i želju da napravi razliku u zajednici.
          </p>
        </div>

        {/* Društvene mreže */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 hover-lift">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Pratite naš rad
          </h2>
          <p className="text-center text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Budite u toku sa svim našim aktivnostima, novim apelima i pričama sa terena.
            Zapratite nas na društvenim mrežama i saznajte prvi kako vaša podrška mijenja živote.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://www.facebook.com/Pomozi.Me/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2 hover-scale"
            >
              <FaFacebook className="text-xl" />
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/pomozi.me/?hl=en" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg flex items-center gap-2 hover-scale"
            >
              <FaInstagram className="text-xl" />
              Instagram
            </a>
            <a 
              href="https://www.tiktok.com/@nvo.pomozi" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg flex items-center gap-2 hover-scale"
            >
              <FaTiktok className="text-xl" />
              TikTok
            </a>
          </div>
        </div>

        {/* Poziv na akciju */}
        <div className="bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl mb-16 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <FaHeart className="absolute top-10 left-10 text-8xl animate-pulse" />
            <FaHeart className="absolute bottom-10 right-10 text-6xl animate-pulse" style={{animationDelay: "1s"}} />
          </div>

          <div className="relative z-10">
            <FaHeart className="text-6xl mx-auto mb-6 animate-heartbeat" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Budite dio nečeg većeg
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
              Bilo da želite da donirate, volontirate ili jednostavno širite riječ o našem radu, 
              svaki doprinos je važan i mijenja nečiji život.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/doniraj"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover-scale"
              >
                Doniraj sada
              </Link>
              <Link 
                href="/kontakt"
                className="bg-yellow-400 text-gray-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-xl hover-scale"
              >
                Kontaktiraj nas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
