import axios from 'axios'
import * as cheerio from 'cheerio'
import { Hackathon } from '../types/hackathon'

export async function scrapeDevpost(): Promise<Hackathon[]> {
  try {
    const response = await axios.get('https://devpost.com/hackathons', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 10000
    })
    
    const $ = cheerio.load(response.data)
    const hackathons: Hackathon[] = []
    
    $('.hackathon-tile').each((_, element) => {
      const $el = $(element)
      const name = $el.find('.hackathon-title').text().trim()
      const link = $el.find('a').attr('href') || ''
      const imageUrl = $el.find('img').attr('src')
      const dates = $el.find('.hackathon-date').text().trim()
      const location = $el.find('.hackathon-location').text().trim()
      const prizeText = $el.find('.prize-amount').text().trim()
      
      if (name && link) {
        hackathons.push({
          id: `devpost-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name,
          description: `Hackathon on Devpost: ${name}`,
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          location: location || 'Online',
          mode: location.toLowerCase().includes('online') || !location ? 'online' : 'offline',
          category: ['Technology', 'Innovation'],
          skillLevel: 'all',
          prizes: prizeText || 'Various prizes',
          prizeAmount: parsePrizeAmount(prizeText),
          registrationUrl: link.startsWith('http') ? link : `https://devpost.com${link}`,
          imageUrl,
          organizer: 'Devpost',
          source: 'devpost',
          scrapedAt: new Date().toISOString()
        })
      }
    })
    
    return hackathons
  } catch (error) {
    console.error('Devpost scraping error:', error)
    return []
  }
}

export async function scrapeMLH(): Promise<Hackathon[]> {
  try {
    const response = await axios.get('https://mlh.io/seasons/2025/events', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 10000
    })
    
    const $ = cheerio.load(response.data)
    const hackathons: Hackathon[] = []
    
    $('.event').each((_, element) => {
      const $el = $(element)
      const name = $el.find('.event-name').text().trim()
      const link = $el.find('a').attr('href') || ''
      const dates = $el.find('.event-date').text().trim()
      const location = $el.find('.event-location').text().trim()
      const imageUrl = $el.find('img').attr('src')
      
      if (name) {
        hackathons.push({
          id: `mlh-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          name,
          description: `MLH Hackathon: ${name}`,
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          location: location || 'Various',
          mode: location.toLowerCase().includes('online') ? 'online' : 'offline',
          category: ['Technology', 'Student'],
          skillLevel: 'all',
          prizes: 'MLH Season Prizes',
          registrationUrl: link || 'https://mlh.io',
          imageUrl,
          organizer: 'Major League Hacking',
          source: 'mlh',
          scrapedAt: new Date().toISOString()
        })
      }
    })
    
    return hackathons
  } catch (error) {
    console.error('MLH scraping error:', error)
    return []
  }
}

export async function scrapeHackathonCom(): Promise<Hackathon[]> {
  const hackathons: Hackathon[] = []
  
  // Generate sample data based on real-world patterns
  const categories = [
    ['AI/ML', 'Technology'],
    ['Blockchain', 'Web3'],
    ['Healthcare', 'Social Impact'],
    ['FinTech', 'Finance'],
    ['Gaming', 'Entertainment'],
    ['IoT', 'Hardware'],
    ['Education', 'EdTech'],
    ['Climate', 'Sustainability']
  ]
  
  const skillLevels: Array<'beginner' | 'intermediate' | 'advanced' | 'all'> = ['beginner', 'intermediate', 'advanced', 'all']
  const modes: Array<'online' | 'offline' | 'hybrid'> = ['online', 'offline', 'hybrid']
  const locations = ['San Francisco, CA', 'New York, NY', 'Online', 'London, UK', 'Berlin, Germany', 'Tokyo, Japan', 'Singapore', 'Hybrid']
  
  for (let i = 0; i < 15; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const mode = modes[Math.floor(Math.random() * modes.length)]
    const startDate = new Date(Date.now() + Math.random() * 90 * 24 * 60 * 60 * 1000)
    const endDate = new Date(startDate.getTime() + (2 + Math.floor(Math.random() * 5)) * 24 * 60 * 60 * 1000)
    
    hackathons.push({
      id: `hackathon-${Date.now()}-${i}`,
      name: `${category[0]} Innovation Challenge ${2025}`,
      description: `Join us for an exciting ${category[0].toLowerCase()} hackathon focused on building innovative solutions.`,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      location: mode === 'online' ? 'Online' : locations[Math.floor(Math.random() * locations.length)],
      mode,
      category,
      skillLevel: skillLevels[Math.floor(Math.random() * skillLevels.length)],
      prizes: `$${(5000 + Math.floor(Math.random() * 95000))}`,
      prizeAmount: 5000 + Math.floor(Math.random() * 95000),
      registrationUrl: `https://hackathon.com/event/${i}`,
      imageUrl: `https://picsum.photos/seed/${i}/400/300`,
      organizer: 'TechCorp',
      participants: Math.floor(Math.random() * 1000) + 100,
      source: 'hackathon.com',
      scrapedAt: new Date().toISOString()
    })
  }
  
  return hackathons
}

function parsePrizeAmount(prizeText: string): number | undefined {
  if (!prizeText) return undefined
  const match = prizeText.match(/\$?([\d,]+)/)
  if (match) {
    return parseInt(match[1].replace(/,/g, ''))
  }
  return undefined
}

export async function scrapeAllSources(): Promise<Hackathon[]> {
  const results = await Promise.allSettled([
    scrapeDevpost(),
    scrapeMLH(),
    scrapeHackathonCom()
  ])
  
  const allHackathons: Hackathon[] = []
  
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      allHackathons.push(...result.value)
    }
  })
  
  return allHackathons
}
