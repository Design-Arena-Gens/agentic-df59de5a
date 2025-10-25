# 🚀 HackathonHub - Real-Time Hackathon Discovery Platform

A modern, real-time hackathon scraping and discovery platform built with Next.js 14, featuring live updates, comprehensive filtering, and a beautiful dark/light mode UI.

## 🌐 Live Demo

**Visit the live application:** [https://agentic-df59de5a.vercel.app](https://agentic-df59de5a.vercel.app)

## ✨ Features

### Core Functionality
- **Real-Time Hackathon Scraping**: Automatically scrapes hackathon data from multiple sources (Devpost, MLH, and more)
- **Live Updates**: Real-time data refresh every 5 minutes with manual refresh option
- **Advanced Search**: Instant search across hackathon names, locations, and descriptions
- **Comprehensive Filtering**: Filter by mode (online/offline/hybrid), category, skill level, and sort options
- **Card-Based Layout**: Beautiful, responsive card design showcasing hackathon details

### User Experience
- **Dark/Light Mode**: Seamless theme toggle with localStorage persistence
- **Mobile-First Design**: Fully responsive across all devices
- **Smooth Animations**: Subtle transitions and animations using Framer Motion
- **Loading States**: Elegant skeleton loaders during data fetching
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### Design System
- **Primary Colors**: Vibrant teal (primary-500 to primary-700)
- **Secondary Colors**: Neutral grays for optimal legibility
- **Typography**: Roboto and Open Sans for clear visual hierarchy
- **Modern UI**: Glass-morphism effects, gradients, and hover animations

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Date Handling**: date-fns

### Backend
- **API Routes**: Next.js API Routes
- **Web Scraping**: Cheerio + Axios
- **Real-Time**: Socket.IO (WebSocket support)
- **Scheduling**: Node-cron for automated scraping

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   ├── hackathons/
│   │   │   └── route.ts          # Hackathon API endpoints
│   │   └── socket/
│   │       └── route.ts          # WebSocket endpoint
│   ├── components/
│   │   ├── Header.tsx            # Navigation header with theme toggle
│   │   ├── SearchBar.tsx         # Search and filter interface
│   │   ├── HackathonCard.tsx     # Individual hackathon card
│   │   └── LoadingSkeleton.tsx   # Loading state component
│   ├── types/
│   │   └── hackathon.ts          # TypeScript interfaces
│   ├── utils/
│   │   └── scrapers.ts           # Web scraping logic
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── public/                        # Static assets
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── tailwind.config.js             # Tailwind config
├── next.config.js                 # Next.js config
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hackathon-scraper
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features Breakdown

### Search & Filter System
- **Real-time search**: Instant filtering as you type
- **Mode filters**: Online, In-Person, Hybrid
- **Category filters**: AI/ML, Blockchain, Healthcare, FinTech, Gaming, IoT, Education, Climate
- **Skill levels**: Beginner, Intermediate, Advanced, All Levels
- **Sort options**: Start Date, Prize Amount, Recently Added

### Hackathon Cards Display
Each card shows:
- Hackathon name and description
- Start and end dates
- Location and mode (with visual indicators)
- Prize amounts
- Participant count
- Category tags
- Skill level badges
- Direct registration link
- Source information

### Theme System
- Automatic system preference detection
- Manual toggle with persistent storage
- Smooth color transitions
- Full dark mode support across all components

### Real-Time Updates
- Automatic data refresh every 5 minutes
- Manual refresh button
- Live update indicator with timestamp
- WebSocket-ready architecture for future enhancements

## 🌐 API Endpoints

### GET `/api/hackathons`
Fetch hackathons with optional filters:
- `mode`: online | offline | hybrid
- `category`: ai | blockchain | healthcare | etc.
- `skillLevel`: beginner | intermediate | advanced
- `search`: search term
- `sortBy`: date | prize | recent

**Response:**
```json
{
  "success": true,
  "count": 15,
  "total": 15,
  "hackathons": [...],
  "lastUpdated": "2025-10-25T11:35:18.000Z"
}
```

### POST `/api/hackathons`
Force refresh hackathon data

**Response:**
```json
{
  "success": true,
  "count": 15,
  "message": "Hackathons refreshed successfully"
}
```

## 🔍 Scraping Methodology

The platform scrapes hackathon data from multiple sources:

1. **Devpost**: Scrapes active hackathons from Devpost platform
2. **MLH (Major League Hacking)**: Fetches season events
3. **Synthetic Data Generation**: Creates realistic sample data for demonstration

**Scraping Strategy:**
- Ethical scraping with user-agent headers
- Timeout handling (10s per request)
- Error resilience with fallbacks
- Data normalization and validation
- 5-minute cache to reduce load

## 🎯 Future Enhancements

- [ ] User authentication and saved searches
- [ ] Email notifications for new hackathons
- [ ] Calendar integration
- [ ] Team formation features
- [ ] Hackathon recommendations based on interests
- [ ] Advanced analytics and insights
- [ ] More data sources
- [ ] Full WebSocket real-time sync

## 🐛 Known Issues

- Some external sites may block scraping attempts (fallback data provided)
- Image loading may fail for some sources (graceful degradation implemented)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for beautiful icons
- Vercel for hosting

---

**Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS**

**Live URL**: [https://agentic-df59de5a.vercel.app](https://agentic-df59de5a.vercel.app)