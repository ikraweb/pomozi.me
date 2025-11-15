import { activeActions, completedActions } from "@/data/actions"

export default async function sitemap() {
  const baseUrl = "https://pomozi.me"

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/aktivne-akcije`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/uspjesne-akcije`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/o-nama`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/doniraj`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ]

  const activeActionPages = activeActions.map((action) => ({
    url: `${baseUrl}/aktivne-akcije/${action.id}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }))

  const completedActionPages = completedActions.map((action) => ({
    url: `${baseUrl}/uspjesne-akcije/${action.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...activeActionPages, ...completedActionPages]
}
