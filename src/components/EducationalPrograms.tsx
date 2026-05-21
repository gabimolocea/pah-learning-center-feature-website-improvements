'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Award, ExternalLink, Calendar, Clock, Stethoscope, Play, AlertTriangle } from 'lucide-react'
import Image from 'next/image'

interface Activity {
  title: string
  credits?: string
  segmentId: string
  link?: string
  thumbnail: string
  expirationDate?: string
  publishDate?: string
  comingSoon?: boolean
}

function isExpiringSoon(expirationDate?: string) {
  if (!expirationDate) return false
  const expDate = new Date(expirationDate)
  const threeMonthsFromNow = new Date()
  threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3)
  return expDate <= threeMonthsFromNow
}

function FeaturedCard({ activity, index }: { activity: Activity; index: number }) {
  const assetPrefix = process.env.ASSET_PREFIX || ''
  const expiring = isExpiringSoon(activity.expirationDate)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group cursor-pointer mb-6 sm:mb-8"
    >
      <div
        onClick={() => !activity.comingSoon && activity.link && window.open(activity.link, '_blank')}
        className={`bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border flex flex-col sm:flex-row relative ${
          activity.comingSoon
            ? 'border-slate-200 opacity-80 cursor-default'
            : 'hover:shadow-xl hover:border-blue-300 cursor-pointer border-slate-200'
        }`}
      >
        {/* Featured Badge */}
        <div className="absolute top-3 left-3 z-20">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
            Featured
          </div>
        </div>

        {/* Coming Soon Tag */}
        {activity.comingSoon && (
          <div className="absolute top-3 right-3 z-20">
            <div className="bg-slate-600 text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Coming Soon
            </div>
          </div>
        )}

        {/* Expiring Soon Tag */}
        {!activity.comingSoon && expiring && (
          <div className="absolute top-3 right-3 z-20">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg flex items-center space-x-1">
              <AlertTriangle size={12} />
              <span>Expiring Soon</span>
            </div>
          </div>
        )}

        {/* Thumbnail */}
        <div className="relative h-52 sm:h-auto sm:w-72 lg:w-96 flex-shrink-0 overflow-hidden">
          <Image
            src={`${assetPrefix}/${activity.thumbnail}`}
            alt={activity.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/20 to-transparent" />
          {!activity.comingSoon && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-xl">
                <Play size={16} fill="currentColor" />
                <span>Start Learning</span>
                <ExternalLink size={14} />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 flex flex-col justify-center flex-1">
          <div className="flex items-center space-x-2 text-blue-600 mb-4">
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <Stethoscope size={14} />
            </div>
            <span className="text-xs font-medium">CME Activity</span>
          </div>

          <h3 className="font-bold text-slate-900 text-lg sm:text-2xl leading-tight mb-4 group-hover:text-blue-600 transition-colors">
            {activity.title}
          </h3>

          <div className="flex items-center gap-6 text-sm mt-auto">
            {activity.credits ? (
              <div className="flex items-center space-x-1 text-amber-600">
                <Award size={16} />
                <span className="font-semibold">{activity.credits} Credit{activity.credits !== '1.00' ? 's' : ''}</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1 text-slate-400">
                <Clock size={14} />
                <span className="text-xs italic">Credits TBD</span>
              </div>
            )}
            {activity.publishDate && activity.comingSoon && (
              <div className="flex items-center space-x-1 text-slate-500">
                <Calendar size={14} />
                <span className="text-xs">Est. {activity.publishDate}</span>
              </div>
            )}
            {activity.expirationDate && !activity.comingSoon && (
              <div className="flex items-center space-x-1 text-slate-500">
                <Calendar size={14} />
                <span className="text-xs">Expires {activity.expirationDate}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ActivityCard({ activity, index }: { activity: Activity; index: number }) {
  const assetPrefix = process.env.ASSET_PREFIX || ''
  const expiring = isExpiringSoon(activity.expirationDate)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <div
        onClick={() => !activity.comingSoon && activity.link && window.open(activity.link, '_blank')}
        className={`bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border h-full flex flex-col relative ${
          activity.comingSoon
            ? 'border-slate-200 opacity-80 cursor-default'
            : 'hover:shadow-xl hover:border-blue-300 group-hover:scale-[1.02] cursor-pointer border-slate-200'
        }`}
      >
        {activity.comingSoon && (
          <div className="absolute top-3 left-3 z-20">
            <div className="bg-slate-600 text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Coming Soon
            </div>
          </div>
        )}

        {!activity.comingSoon && expiring && (
          <div className="absolute top-3 right-3 z-20">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg flex items-center space-x-1">
              <AlertTriangle size={12} />
              <span>Expiring Soon</span>
            </div>
          </div>
        )}

        <div className="relative h-32 sm:h-48 overflow-hidden">
          <Image
            src={`${assetPrefix}/${activity.thumbnail}`}
            alt={activity.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {!activity.comingSoon && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-xl">
                <Play size={16} fill="currentColor" />
                <span>Start Learning</span>
                <ExternalLink size={14} />
              </div>
            </div>
          )}
        </div>

        <div className="p-3 sm:p-6 flex-1 flex flex-col">
          <div className="flex items-center space-x-2 text-blue-600 mb-3">
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <Stethoscope size={14} />
            </div>
            <span className="text-xs font-medium hidden sm:inline">CME Activity</span>
            <span className="text-xs font-medium sm:hidden">CME</span>
          </div>

          <h3 className="font-bold text-slate-900 text-sm sm:text-lg leading-tight mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors line-clamp-3">
            {activity.title}
          </h3>

          <div className="flex items-center justify-between text-xs sm:text-sm mt-auto">
            {activity.credits ? (
              <div className="flex items-center space-x-1 text-amber-600">
                <Award size={16} />
                <span className="font-semibold">{activity.credits} Credit{activity.credits !== '1.00' ? 's' : ''}</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1 text-slate-400">
                <Clock size={14} />
                <span className="text-xs italic">Credits TBD</span>
              </div>
            )}
            {activity.publishDate && activity.comingSoon && (
              <div className="flex items-center space-x-1 text-slate-500">
                <Calendar size={14} />
                <span className="text-xs">Est. {activity.publishDate}</span>
              </div>
            )}
            {activity.expirationDate && !activity.comingSoon && (
              <div className="flex items-center space-x-1 text-slate-500">
                <Calendar size={14} />
                <span className="text-xs">Expires {activity.expirationDate}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function EducationalPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const activities: Activity[] = [
    {
      title: "Breaking Ground: 2025 Milestones in Cushing Syndrome and Looking Forward to 2026",
      credits: "0.25",
      segmentId: "50059",
      thumbnail: "random/image-1.png",
      expirationDate: "03/06/2027",
      link: "https://reachmd.com/programs/cme/breaking-ground-2025-milestones-in-cushing-syndrome-and-looking-forward-to-2026/50059/"
    },
    {
      title: "Applying Advances in Practice: Case-Based Look at Selecting Therapy for Cushing Syndrome",
      credits: "0.25",
      segmentId: "50063",
      thumbnail: "random/image-2.png",
      expirationDate: "03/13/2027",
      link: "https://reachmd.com/programs/cme/applying-advances-in-practice-case-based-look-at-selecting-therapy-for-cushing-syndrome/50063/"
    },
    {
      title: "Continuing the Search: New Data on Hypercortisolism Prevalence in Difficult-to-Control Metabolic Conditions",
      segmentId: "50066",
      thumbnail: "random/image-3.png",
      credits: "0.25",
      publishDate: "05/15/2026",
      expirationDate: "05/15/2027",
      link: "https://reachmd.com/programs/cme/continuing-the-search-new-data-on-hypercortisolism-prevalence-in-difficult-to-control-metabolic-conditions/50066/"
    },
    {
      title: "Title to Be Announced",
      segmentId: "50069",
      thumbnail: "act4.png",
      publishDate: "06/09/2026",
      comingSoon: true
    },
    {
      title: "Title to Be Announced",
      segmentId: "50073",
      thumbnail: "act5.png",
      comingSoon: true
    },
    {
      title: "Title to Be Announced",
      segmentId: "50076",
      thumbnail: "act6.png",
      comingSoon: true
    },
    {
      title: "Title to Be Announced",
      segmentId: "50079",
      thumbnail: "act7.png",
      comingSoon: true
    }
  ]

  // Pick a random featured index on client only (avoids SSR hydration mismatch)
  const [featuredIndex, setFeaturedIndex] = useState(0)
  useEffect(() => {
    setFeaturedIndex(Math.floor(Math.random() * activities.length))
  }, [])
  const featuredActivity = activities[featuredIndex]
  const gridActivities = activities.filter((_, i) => i !== featuredIndex)

  return (
    <section ref={ref} id="educational-activities" className="pt-0 pb-4 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden -mt-4">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-3s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="heading-font text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Educational{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Activities
            </span>
          </h2>
        </motion.div>

        {/* Featured Card */}
        <FeaturedCard activity={featuredActivity} index={0} />

        {/* 2×3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {gridActivities.map((activity, index) => (
            <ActivityCard key={activity.segmentId} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}


