import { NextRequest, NextResponse } from 'next/server'
import { scrapeAllSources } from '../../utils/scrapers'

let cachedHackathons: any[] = []
let lastScrapeTime = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export async function GET(request: NextRequest) {
  try {
    const now = Date.now()
    
    // Scrape if cache is empty or expired
    if (cachedHackathons.length === 0 || now - lastScrapeTime > CACHE_DURATION) {
      console.log('Scraping hackathons...')
      cachedHackathons = await scrapeAllSources()
      lastScrapeTime = now
    }
    
    const searchParams = request.nextUrl.searchParams
    const mode = searchParams.get('mode')
    const category = searchParams.get('category')
    const skillLevel = searchParams.get('skillLevel')
    const search = searchParams.get('search')
    const sortBy = searchParams.get('sortBy') || 'date'
    
    let filtered = [...cachedHackathons]
    
    // Apply filters
    if (mode && mode !== 'all') {
      filtered = filtered.filter(h => h.mode === mode)
    }
    
    if (category && category !== 'all') {
      filtered = filtered.filter(h => h.category.some((c: string) => 
        c.toLowerCase().includes(category.toLowerCase())
      ))
    }
    
    if (skillLevel && skillLevel !== 'all') {
      filtered = filtered.filter(h => h.skillLevel === skillLevel || h.skillLevel === 'all')
    }
    
    if (search) {
      const searchLower = search.toLowerCase()
      filtered = filtered.filter(h => 
        h.name.toLowerCase().includes(searchLower) ||
        h.description.toLowerCase().includes(searchLower) ||
        h.location.toLowerCase().includes(searchLower)
      )
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'prize':
          return (b.prizeAmount || 0) - (a.prizeAmount || 0)
        case 'recent':
          return new Date(b.scrapedAt).getTime() - new Date(a.scrapedAt).getTime()
        case 'date':
        default:
          return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      }
    })
    
    return NextResponse.json({
      success: true,
      count: filtered.length,
      total: cachedHackathons.length,
      hackathons: filtered,
      lastUpdated: new Date(lastScrapeTime).toISOString()
    })
    
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch hackathons' },
      { status: 500 }
    )
  }
}

export async function POST() {
  try {
    console.log('Force refreshing hackathons...')
    cachedHackathons = await scrapeAllSources()
    lastScrapeTime = Date.now()
    
    return NextResponse.json({
      success: true,
      count: cachedHackathons.length,
      message: 'Hackathons refreshed successfully'
    })
  } catch (error) {
    console.error('Refresh Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to refresh hackathons' },
      { status: 500 }
    )
  }
}
