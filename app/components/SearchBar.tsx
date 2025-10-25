'use client'

import { useState } from 'react'
import { Search, Filter, RotateCw } from 'lucide-react'
import { FilterOptions } from '../types/hackathon'

interface SearchBarProps {
  onSearch: (filters: FilterOptions) => void
  onRefresh: () => void
  isRefreshing: boolean
}

export default function SearchBar({ onSearch, onRefresh, isRefreshing }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<FilterOptions>({
    mode: 'all',
    category: 'all',
    skillLevel: 'all',
    search: '',
    sortBy: 'date'
  })

  const handleSearch = (newSearchTerm?: string) => {
    const searchValue = newSearchTerm !== undefined ? newSearchTerm : searchTerm
    const newFilters = { ...filters, search: searchValue }
    setFilters(newFilters)
    onSearch(newFilters)
  }

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onSearch(newFilters)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              handleSearch(e.target.value)
            }}
            placeholder="Search hackathons by name, location, or description..."
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-primary-500 dark:focus:border-primary-400 focus:outline-none transition-all duration-300 text-lg"
          />
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`px-6 py-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-2 font-medium ${
            showFilters
              ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
              : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-400'
          }`}
        >
          <Filter className="w-5 h-5" />
          <span className="hidden sm:inline">Filters</span>
        </button>
        
        <button
          onClick={onRefresh}
          disabled={isRefreshing}
          className="px-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RotateCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 space-y-4 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mode
              </label>
              <select
                value={filters.mode}
                onChange={(e) => handleFilterChange('mode', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary-500 focus:outline-none transition-colors"
              >
                <option value="all">All Modes</option>
                <option value="online">Online</option>
                <option value="offline">In-Person</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary-500 focus:outline-none transition-colors"
              >
                <option value="all">All Categories</option>
                <option value="ai">AI/ML</option>
                <option value="blockchain">Blockchain</option>
                <option value="healthcare">Healthcare</option>
                <option value="fintech">FinTech</option>
                <option value="gaming">Gaming</option>
                <option value="iot">IoT</option>
                <option value="education">Education</option>
                <option value="climate">Climate</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Skill Level
              </label>
              <select
                value={filters.skillLevel}
                onChange={(e) => handleFilterChange('skillLevel', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary-500 focus:outline-none transition-colors"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sort By
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary-500 focus:outline-none transition-colors"
              >
                <option value="date">Start Date</option>
                <option value="prize">Prize Amount</option>
                <option value="recent">Recently Added</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
