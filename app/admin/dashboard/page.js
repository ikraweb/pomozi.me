"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAlert } from "@/components/useAlert"
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("aktivne")
  const [actions, setActions] = useState([])
  const [partners, setPartners] = useState([])
    const [loading, setLoading] = useState(true)
const router = useRouter()
  const { showAlert, AlertComponent } = useAlert()
  useEffect(() => {
    // PRVO - provjeri auth PRIJE nego što učitaš data
    checkAuth().then((authed) => {
      if (authed) {
        loadData()
      }
    })
  }, [])

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/check-auth")
      const data = await res.json()

      if (!data.authenticated) {
        // ODMAH redirect - ništa se ne prikazuje
        router.push("/admin")
        return false
      }
      
      return true
    } catch (error) {
      router.push("/admin")
      return false
    }
  }

  const loadData = async () => {
    try {
      const res = await fetch("/api/admin/data")
      const data = await res.json()
      setActions(data.actions || [])
      setPartners(data.partners || [])
    } catch (error) {
      console.error("Data load error:", error)
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl text-gray-600">Učitavanje...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Admin Panel - Pomozi.me</h1>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all"
          >
            Odjavi se
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 border-b">
          <button
            onClick={() => setActiveTab("aktivne")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "aktivne"
                ? "text-primary border-b-4 border-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            Aktivne akcije
          </button>
          <button
            onClick={() => setActiveTab("zavrsene")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "zavrsene"
                ? "text-primary border-b-4 border-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            Završene akcije
          </button>
          <button
            onClick={() => setActiveTab("partneri")}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === "partneri"
                ? "text-primary border-b-4 border-primary"
                : "text-gray-600 hover:text-primary"
            }`}
          >
            Prijatelji organizacije
          </button>
        </div>

        {activeTab === "aktivne" && (
          <ActiveActionsSection 
            actions={actions.filter(a => !a.completed)} 
            onUpdate={loadData} 
          />
        )}
        {activeTab === "zavrsene" && (
          <CompletedActionsSection 
            actions={actions.filter(a => a.completed)} 
            onUpdate={loadData} 
          />
        )}
        {activeTab === "partneri" && (
          <PartnersSection partners={partners} onUpdate={loadData} />
        )}
      </div>
    </div>
  )
}

function ActiveActionsSection({ actions, onUpdate }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Aktivne akcije ({actions.length})</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          + Nova akcija
        </button>
      </div>

      {showForm && (
        <ActionForm 
          onSubmit={onUpdate} 
          onCancel={() => setShowForm(false)} 
          completed={false}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {actions.map((action) => (
          <ActionCard key={action.id} action={action} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  )
}

function CompletedActionsSection({ actions, onUpdate }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Završene akcije ({actions.length})</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          + Nova završena akcija
        </button>
      </div>

      {showForm && (
        <ActionForm 
          onSubmit={onUpdate} 
          onCancel={() => setShowForm(false)} 
          completed={true}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actions.map((action) => (
          <ActionCard key={action.id} action={action} onUpdate={onUpdate} completed />
        ))}
      </div>
    </div>
  )
}

function PartnersSection({ partners, onUpdate }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Prijatelji organizacije ({partners.length})</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          + Novi partner
        </button>
      </div>

      {showForm && (
        <PartnerForm onSubmit={onUpdate} onCancel={() => setShowForm(false)} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  )
}

function ActionCard({ action, onUpdate, completed = false }) {
  const [showEditForm, setShowEditForm] = useState(false)

  const handleDelete = async () => {
    if (!confirm("Da li ste sigurni da želite obrisati ovu akciju?")) return

    await fetch("/api/admin/actions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: action.id, completed: action.completed })
    })
    onUpdate()
  }

  if (showEditForm) {
    return (
      <div className="col-span-full">
        <ActionForm
          action={action}
          onSubmit={() => {
            setShowEditForm(false)
            onUpdate()
          }}
          onCancel={() => setShowEditForm(false)}
          completed={completed}
          isEdit={true}
        />
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={action.mainImage} alt={action.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="font-bold text-lg mb-2">{action.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{action.shortDescription}</p>
      <div className="flex justify-between items-center mb-3">
        <span className={`text-sm font-semibold ${completed ? "text-gray-600" : "text-primary"}`}>
          {action.collected}€ / {action.goal}€
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setShowEditForm(true)}
          className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 text-sm font-semibold"
        >
          Izmijeni
        </button>
        <button 
          onClick={handleDelete} 
          className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 text-sm font-semibold"
        >
          Obriši
        </button>
      </div>
    </div>
  )
}

function ActionForm({ action, onSubmit, onCancel, completed = false, isEdit = false }) {
  const [formData, setFormData] = useState(
    action || {
      title: "",
      shortDescription: "",
      fullDescription: "",
      goal: "",
      collected: "",
      mainImage: "",
      gallery: [],
      urgent: false
    }
  )
  const [uploading, setUploading] = useState(false)
  const [uploadCount, setUploadCount] = useState(0)

  const handleMultiImageUpload = async (e) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    setUploadCount(0)
    const uploadedUrls = []
    const filesArray = Array.from(files)

    for (let i = 0; i < filesArray.length; i++) {
      const file = filesArray[i]
      const uploadFormData = new FormData()
      uploadFormData.append("file", file)

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: uploadFormData
        })
        const data = await res.json()
        
        if (data.success) {
          uploadedUrls.push(data.url)
          setUploadCount(i + 1)
        }
      } catch (error) {
        console.error("Upload error:", error)
      }
    }

    if (uploadedUrls.length > 0) {
      setFormData({
        ...formData, 
        mainImage: uploadedUrls[0],
        gallery: uploadedUrls
      })
    }

    setUploading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const method = isEdit ? "PUT" : "POST"
    const body = isEdit 
      ? JSON.stringify({ ...formData, id: action.id, completed: action.completed })
      : JSON.stringify({ ...formData, completed })

    const res = await fetch("/api/admin/actions", {
      method,
      headers: { "Content-Type": "application/json" },
      body
    })

    if (res.ok) {
      alert(isEdit ? "Akcija izmijenjena!" : "Akcija dodana!")
      onSubmit()
      onCancel()
    } else {
      alert("Greška")
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">
        {isEdit ? "Izmijeni akciju" : (completed ? "Nova završena akcija" : "Nova aktivna akcija")}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Naslov</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Kratak opis</label>
          <textarea
            value={formData.shortDescription}
            onChange={(e) => setFormData({...formData, shortDescription: e.target.value})}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
            rows="2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Detaljan opis</label>
          <textarea
            value={formData.fullDescription}
            onChange={(e) => setFormData({...formData, fullDescription: e.target.value})}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
            rows="4"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Cilj (€)</label>
            <input
              type="number"
              value={formData.goal}
              onChange={(e) => setFormData({...formData, goal: e.target.value})}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Prikupljeno (€)</label>
            <input
              type="number"
              value={formData.collected}
              onChange={(e) => setFormData({...formData, collected: e.target.value})}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            {isEdit ? "Dodaj nove slike (opciono)" : "Slike akcije - MOŽETE IZABRATI VIŠE SLIKA ODJEDNOM"}
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleMultiImageUpload}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg cursor-pointer"
          />
          {uploading && (
            <p className="text-sm text-primary mt-2 font-semibold">
              Upload u toku... ({uploadCount} slika)
            </p>
          )}
          {formData.gallery.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold mb-2">
                {isEdit ? "Trenutne slike" : `Uploadovano ${formData.gallery.length} slika`}:
              </p>
              <div className="grid grid-cols-4 gap-2">
                {formData.gallery.map((url, idx) => (
                  <div key={idx} className="relative">
                    <img 
                      src={url} 
                      alt={`Slika ${idx + 1}`} 
                      className="h-24 w-full object-cover rounded-lg border-2 border-primary" 
                    />
                    <span className="absolute top-1 right-1 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {!completed && (
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={formData.urgent}
              onChange={(e) => setFormData({...formData, urgent: e.target.checked})}
              className="w-5 h-5"
            />
            <label className="ml-2 text-sm font-semibold">Hitna akcija</label>
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={uploading || !formData.mainImage}
            className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? "Upload u toku..." : (isEdit ? "Sačuvaj izmjene" : "Dodaj akciju")}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-400"
          >
            Otkaži
          </button>
        </div>
      </form>
    </div>
  )
}

function PartnerCard({ partner, onUpdate }) {
  const handleDelete = async () => {
    if (!confirm("Da li ste sigurni?")) return
    await fetch("/api/admin/partners", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: partner.id })
    })
    onUpdate()
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={partner.logo} alt={partner.name} className="w-full h-32 object-contain mb-4" />
      <h3 className="font-bold text-center mb-2">{partner.name}</h3>
      <button 
        onClick={handleDelete} 
        className="w-full text-red-500 text-sm font-semibold"
      >
        Obriši
      </button>
    </div>
  )
}

function PartnerForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({ name: "", logo: "" })
  const [uploading, setUploading] = useState(false)

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const uploadFormData = new FormData()
    uploadFormData.append("file", file)

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: uploadFormData
      })
      const data = await res.json()
      
      if (data.success) {
        setFormData({...formData, logo: data.url})
      }
    } catch (error) {
      alert("Greška")
    }
    setUploading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch("/api/admin/partners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    onSubmit()
    onCancel()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 max-w-2xl">
      <h3 className="text-xl font-bold mb-4">Novi partner</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Naziv</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
          />
          {uploading && <p className="text-sm text-primary mt-2">Upload...</p>}
          {formData.logo && <img src={formData.logo} alt="Preview" className="mt-2 h-24" />}
        </div>

        <div className="flex gap-4">
          <button 
            type="submit" 
            disabled={uploading} 
            className="flex-1 bg-primary text-white py-3 rounded-lg font-bold"
          >
            Dodaj
          </button>
          <button 
            type="button" 
            onClick={onCancel} 
            className="flex-1 bg-gray-300 py-3 rounded-lg font-bold"
          >
            Otkaži
          </button>
        </div>
      </form>
    </div>
  )
}
