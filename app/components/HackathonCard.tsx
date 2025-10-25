'use client'

import { Hackathon } from '../types/hackathon'
import { Calendar, MapPin, Trophy, Users, ExternalLink, Wifi, Building, Globe } from 'lucide-react'
import { format } from 'date-fns'

interface HackathonCardProps {
  hackathon: Hackathon
}

export default function HackathonCard({ hackathon }: HackathonCardProps) {
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy')
    } catch {
      return dateString
    }
  }

  const getModeIcon = () => {
    switch (hackathon.mode) {
      case 'online':
        return <Wifi className="w-4 h-4" />
      case 'offline':
        return <Building className="w-4 h-4" />
      case 'hybrid':
        return <Globe className="w-4 h-4" />
    }
  }

  const getSkillLevelColor = () => {
    switch (hackathon.skillLevel) {
      case 'beginner':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
      case 'advanced':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
      default:
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-slide-up">
      {hackathon.imageUrl && (
        <div className="h-48 overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600">
          <img
            src={hackathon.imageUrl}
            alt={hackathon.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      )}
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {hackathon.name}
          </h3>
          <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
            hackathon.mode === 'online' 
              ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
              : hackathon.mode === 'offline'
              ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
              : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
          }`}>
            {getModeIcon()}
            <span className="capitalize">{hackathon.mode}</span>
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
          {hackathon.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4 text-primary-500" />
            <span>{formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4 text-primary-500" />
            <span className="line-clamp-1">{hackathon.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Trophy className="w-4 h-4 text-primary-500" />
            <span className="font-semibold text-primary-600 dark:text-primary-400">{hackathon.prizes}</span>
          </div>
          
          {hackathon.participants && (
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Users className="w-4 h-4 text-primary-500" />
              <span>{hackathon.participants.toLocaleString()} participants</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {hackathon.category.map((cat, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
            >
              {cat}
            </span>
          ))}
          <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getSkillLevelColor()}`}>
            {hackathon.skillLevel}
          </span>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={hackathon.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <span>Register Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
          <span>Source: {hackathon.source}</span>
          <span>Organizer: {hackathon.organizer}</span>
        </div>
      </div>
    </div>
  )
}
