import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL('https://pomozi.me'),
  title: "Pomozi.me - Humanitarna Organizacija",
  description: "Neprofitna humanitarna organizacija posvećena pomaganju ljudi u potrebi širom Crne Gore. Svaka donacija donosi nadu i svjetlost u nečiji život.",
  keywords: "humanitarna organizacija, Crna Gora, donacije, pomoć, NVO Pomozi",
  authors: [{ name: "Pomozi.me" }],
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'sr_ME',
    url: 'https://pomozi.me',
    siteName: 'Pomozi.me',
    title: 'Pomozi.me - Humanitarna Organizacija',
    description: 'Pomaganje ljudi u potrebi širom Crne Gore. Svaka donacija donosi nadu i svjetlost u nečiji život.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Pomozi.me - Humanitarna Organizacija',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pomozi.me - Humanitarna Organizacija',
    description: 'Pomaganje ljudi u potrebi širom Crne Gore. Svaka donacija donosi nadu.',
    images: ['/images/logo.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
