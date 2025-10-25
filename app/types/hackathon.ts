export interface Hackathon {
  id: string
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  mode: 'online' | 'offline' | 'hybrid'
  category: string[]
  skillLevel: 'beginner' | 'intermediate' | 'advanced' | 'all'
  prizes: string
  prizeAmount?: number
  registrationUrl: string
  imageUrl?: string
  organizer: string
  participants?: number
  source: string
  scrapedAt: string
}

export interface FilterOptions {
  mode: string
  category: string
  skillLevel: string
  search: string
  sortBy: 'date' | 'prize' | 'recent'
}
