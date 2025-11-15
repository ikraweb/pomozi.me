import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Pomozi.me - Humanitarna Organizacija | Crna Gora",
  description: "Neprofitna humanitarna organizacija posvećena pomaganju ljudi u potrebi širom Crne Gore. Svaka donacija donosi nadu i svjetlost u nečiji život.",
  keywords: "humanitarna organizacija, Crna Gora, donacije, pomoć, NVO Pomozi",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Pomozi.me - Humanitarna Organizacija",
    description: "Pomaganje ljudi u potrebi širom Crne Gore",
    url: "https://pomozi.me",
    siteName: "Pomozi.me",
    images: [{ url: "/og-image.jpg" }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body className="bg-white">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
