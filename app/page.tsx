'use client'

import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import HackathonCard from './components/HackathonCard'
import LoadingSkeleton from './components/LoadingSkeleton'
import { Hackathon, FilterOptions } from './types/hackathon'
import { AlertCircle, TrendingUp } from 'lucide-react'
import axios from 'axios'

export default function Home() {
  const [hackathons, setHackathons] = useState<Hackathon[]>([])
  const [filteredHackathons, setFilteredHackathons] = useState<Hackathon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<string>('')
  const [stats, setStats] = useState({ total: 0, online: 0, offline: 0, hybrid: 0 })

  const fetchHackathons = async (filters?: Partial<FilterOptions>) => {
    try {
      const params = new URLSearchParams()
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value && value !== 'all') {
            params.append(key, value)
          }
        })
      }

      const response = await axios.get(`/api/hackathons?${params.toString()}`)
      
      if (response.data.success) {
        setHackathons(response.data.hackathons)
        setFilteredHackathons(response.data.hackathons)
        setLastUpdated(response.data.lastUpdated)
        
        // Calculate stats
        const total = response.data.hackathons.length
        const online = response.data.hackathons.filter((h: Hackathon) => h.mode === 'online').length
        const offline = response.data.hackathons.filter((h: Hackathon) => h.mode === 'offline').length
        const hybrid = response.data.hackathons.filter((h: Hackathon) => h.mode === 'hybrid').length
        setStats({ total, online, offline, hybrid })
        
        setError(null)
      } else {
        setError('Failed to fetch hackathons')
      }
    } catch (err) {
      console.error('Error fetching hackathons:', err)
      setError('Failed to load hackathons. Please try again.')
    } finally {
      setLoading(false)
      setIsRefreshing(false)
    }
  }

  useEffect(() => {
    fetchHackathons()
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(() => {
      fetchHackathons()
    }, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  const handleSearch = (filters: FilterOptions) => {
    fetchHackathons(filters)
  }

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      await axios.post('/api/hackathons')
      await fetchHackathons()
    } catch (err) {
      console.error('Error refreshing:', err)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Discover Hackathons
              <span className="block text-primary-100 mt-2">In Real-Time</span>
            </h1>
            <p className="text-xl text-primary-50 max-w-2xl mx-auto">
              Find and track the best hackathons worldwide. Real-time updates, comprehensive filtering, and instant notifications.
            </p>
            <div className="flex items-center justify-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold">{stats.total}</div>
                <div className="text-sm text-primary-100">Total Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{stats.online}</div>
                <div className="text-sm text-primary-100">Online</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{stats.offline}</div>
                <div className="text-sm text-primary-100">In-Person</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{stats.hybrid}</div>
                <div className="text-sm text-primary-100">Hybrid</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <SearchBar onSearch={handleSearch} onRefresh={handleRefresh} isRefreshing={isRefreshing} />
      </section>

      {/* Live Updates Indicator */}
      {lastUpdated && (
        <div className="container mx-auto px-4 mt-6">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Last updated: {new Date(lastUpdated).toLocaleString()}</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
        </div>
      )}

      {/* Results Section */}
      <section className="container mx-auto px-4 py-12">
        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-8 text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-red-700 dark:text-red-400 mb-2">
              Error Loading Hackathons
            </h3>
            <p className="text-red-600 dark:text-red-300">{error}</p>
            <button
              onClick={handleRefresh}
              className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : filteredHackathons.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No Hackathons Found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filters or search terms
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {filteredHackathons.length} Hackathon{filteredHackathons.length !== 1 ? 's' : ''} Found
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHackathons.map((hackathon) => (
                <HackathonCard key={hackathon.id} hackathon={hackathon} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
