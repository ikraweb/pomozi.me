"use client"
import Link from 'next/link'
import ImageSlider from '@/components/ImageSlider'
import ProgressBar from '@/components/ProgressBar'
import { completedActions } from '@/data/actions'
import { notFound } from 'next/navigation'

export default async function CompletedActionDetailPage({ params }) {
const resolvedParams = await params
const action = completedActions.find(a => a.id === parseInt(resolvedParams.id))
  if (!action) notFound()

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Link href="/uspjesne-akcije" className="inline-flex items-center text-primary hover:underline mb-8">
          ← Nazad na uspješne akcije
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="text-white py-4 px-8" style={{ backgroundColor: "#00ee57" }}>
            <p className="text-center text-lg font-semibold">✓ Ova akcija je uspješno završena</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div><ImageSlider images={action.gallery} /></div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{action.title}</h1>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">{action.fullDescription}</p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Rezultati akcije</h3>
                <ProgressBar collected={action.collected} goal={action.goal} isCompleted={true} />
                <p className="mt-4 text-gray-600">Hvala svima koji su učestvovali! 🎉</p>
              </div>
<Link
  href="/uspjesne-akcije"
  className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold text-lg text-white hover:shadow-lg transition-all shadow-lg"
  style={{
    background: "#00cb2f",
    backgroundColor: "#00cb2f"
  }}
  onMouseEnter={(e) => e.target.style.opacity = "0.9"}
  onMouseLeave={(e) => e.target.style.opacity = "1"}
>
Pogledaj aktivne akcije</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
