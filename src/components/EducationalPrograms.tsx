'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink, Calendar, Clock, Users, Stethoscope, Play, BookOpen, AlertTriangle, FileText, Activity, Heart } from 'lucide-react'
import Image from 'next/image'

interface ActivityCardProps {
  title: string
  credits?: string
  segmentId: string
  link?: string
  thumbnail: string
  expirationDate?: string
  publishDate?: string
  comingSoon?: boolean
  index: number
}

function ActivityCard({ title, credits, segmentId, link, thumbnail, expirationDate, publishDate, comingSoon, index }: ActivityCardProps) {
  // Check if expiring soon (within 3 months)
  const isExpiringSoon = () => {
    if (!expirationDate) return false
    const expDate = new Date(expirationDate)
    const threeMonthsFromNow = new Date()
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3)
    return expDate <= threeMonthsFromNow
  };
  const assetPrefix = process.env.ASSET_PREFIX || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group cursor-pointer"
    >
      <div 
        onClick={() => !comingSoon && link && window.open(link, '_blank')}
        className={`bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden border h-full flex flex-col relative ${
          comingSoon
            ? 'border-slate-200 opacity-80 cursor-default'
            : 'hover:shadow-xl hover:border-blue-300 group-hover:scale-[1.02] cursor-pointer border-slate-200'
        }`}
      >
        {/* Coming Soon Tag */}
        {comingSoon && (
          <div className="absolute top-3 left-3 z-20">
            <div className="bg-slate-600 text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Coming Soon
            </div>
          </div>
        )}

        {/* Expiring Soon Tag */}
        {!comingSoon && expirationDate && isExpiringSoon() && (
          <div className="absolute top-3 right-3 z-20">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg flex items-center space-x-1">
              <AlertTriangle size={12} />
              <span>Expiring Soon</span>
            </div>
          </div>
        )}

        {/* Thumbnail */}
        <div className="relative h-32 sm:h-48 overflow-hidden">
          <Image
            src={`${assetPrefix}/${thumbnail}`}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Play Button Overlay */}
          {!comingSoon && (
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
        <div className="p-3 sm:p-6 flex-1 flex flex-col">
          {/* Header Info */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 text-blue-600">
              <div className="p-1.5 bg-blue-100 rounded-lg">
                <Stethoscope size={14} />
              </div>
              <span className="text-xs font-medium hidden sm:inline">CME Activity</span>
              <span className="text-xs font-medium sm:hidden">CME</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-slate-900 text-sm sm:text-lg leading-tight mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors line-clamp-3">
            {title}
          </h3>

          {/* Credits and Expiration / Publish Date */}
          <div className="flex items-center justify-between text-xs sm:text-sm mt-auto">
            {credits ? (
              <div className="flex items-center space-x-1 text-amber-600">
                <Award size={16} />
                <span className="font-semibold">{credits} Credit{credits !== '1.00' ? 's' : ''}</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1 text-slate-400">
                <Clock size={14} />
                <span className="text-xs italic">Credits TBD</span>
              </div>
            )}
            {publishDate && comingSoon && (
              <div className="flex items-center space-x-1 text-slate-500">
                <Calendar size={14} />
                <span className="text-xs">Est. {publishDate}</span>
              </div>
            )}
            {expirationDate && !comingSoon && (
              <div className="flex items-center space-x-1 text-slate-500">
                <Calendar size={14} />
                <span className="text-xs">Expires {expirationDate}</span>
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

  const activities = [
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
      publishDate: "05/15/2026",
      comingSoon: true
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
    }
  ]
 const assetPrefix = process.env.ASSET_PREFIX || '';
  return (
    <section ref={ref} id="educational-activities" className="pt-0 pb-4 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden -mt-4">
      {/* Background Elements */}
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
          className="text-center mb-1"
        >
          <h2 className="heading-font text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Educational{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Activities
            </span>
          </h2>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {activities.map((activity, index) => (
            <div key={index}>
              <ActivityCard {...activity} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
} 