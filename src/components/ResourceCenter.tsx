'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, ExternalLink, Calendar, Award, Beaker, Database, ArrowRight, ChevronRight, Download } from 'lucide-react'

interface ResearchPaperProps {
  year: string
  authors: string
  journal: string
  title: string
  summary: string
  link: string
  slidesUrl?: string
  index: number
  isHighlight?: boolean
}

function ResearchPaper({ year, authors, journal, title, summary, link, slidesUrl, index, isHighlight = false }: ResearchPaperProps) {
  const handleClick = () => {
    if (link) window.open(link, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={link ? 'group cursor-pointer' : 'group cursor-default'}
      onClick={handleClick}
    >
      <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl flex flex-col h-full ${
        isHighlight 
          ? 'bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200 hover:border-blue-300' 
          : 'bg-white border-slate-200 hover:border-blue-300'
      }`}>
        {/* Highlight Badge */}
        {isHighlight && (
          <div className="absolute -top-3 left-6">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
              Featured Study
            </div>
          </div>
        )}

        {/* Header Row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <FileText size={20} className="text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-blue-600">{year}</div>
              <div className="text-xs text-slate-500">{authors.split(',')[0] + ' et al.'}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Database size={14} />
            <span className="uppercase tracking-wide font-medium">{journal}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors text-lg line-clamp-2 flex-1">
          {title}
        </h3>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div className="text-xs text-slate-500">
            {authors.length > 50 ? authors.substring(0, 50) + '...' : authors}
          </div>
          <div className="flex items-center gap-2">
            {slidesUrl && (
              <a
                href={slidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors"
              >
                <Download size={14} />
                <span>Slides</span>
              </a>
            )}
            {link ? (
              <div className="flex items-center space-x-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View</span>
                <ChevronRight size={16} />
              </div>
            ) : (
              <div className="bg-slate-200 text-slate-500 px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Coming Soon
              </div>
            )}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )
}

export function ResourceCenter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })


  const researchPapers = [
    {
      year: "Ep. 1",
      authors: "The Cortisol Reports",
      journal: "CME Video Series",
      title: "Breaking Ground: 2025 Milestones in Cushing Syndrome and Looking Forward to 2026",
      summary: "Episode 1 – Breaking Ground: 2025 Milestones in Cushing Syndrome and Looking Forward to 2026",
      link: "https://reachmd.com/programs/cme/breaking-ground-2025-milestones-in-cushing-syndrome-and-looking-forward-to-2026/50059/",
      slidesUrl: "https://cdn.reachmd.com/uploads/50059_Final_Downloadable_Slides.pdf",
      isHighlight: true
    },
    {
      year: "Ep. 2",
      authors: "The Cortisol Reports",
      journal: "CME Video Series",
      title: "Applying Advances in Practice: Case-Based Look at Selecting Therapy for Cushing Syndrome",
      summary: "Episode 2 – Applying Advances in Practice: Case-Based Look at Selecting Therapy for Cushing Syndrome",
      link: "",
      slidesUrl: "https://cdn.reachmd.com/uploads/50063_Downloadable_Slides.pdf",
      isHighlight: false
    },
    {
      year: "Ep. 3",
      authors: "The Cortisol Reports",
      journal: "CME Video Series",
      title: "Continuing the Search: New Data on Hypercortisolism Prevalence in Difficult-to-Control Metabolic Conditions",
      summary: "Episode 3 – Continuing the Search: New Data on Hypercortisolism Prevalence in Difficult-to-Control Metabolic Conditions",
      link: "",
      slidesUrl: "https://cdn.reachmd.com/uploads/50066_Downloadable_Slides.pdf",
      isHighlight: false
    },
    {
      year: "",
      authors: "The Cortisol Reports",
      journal: "CME Resource",
      title: "Cushing's at the Core",
      summary: "A focused resource exploring the core principles of Cushing's syndrome.",
      link: "",
      slidesUrl: "https://cdn.reachmd.com/uploads/39896_Grand%20Rounds%20Nation%20Enduring%20Slides.pdf",
      isHighlight: false
    }
  ]

  return (
    <section ref={ref} id="resource-center" className="py-16 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4s"></div>
        
        {/* Scientific Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #0066CC 2px, transparent 2px), radial-gradient(circle at 75% 75%, #00A6B8 2px, transparent 2px)`,
            backgroundSize: '50px 50px, 80px 80px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Resource{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Center
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Access the full episode library of The Cortisol Reports – a CME video series designed to help clinicians navigate the latest advances in hypercortisolism screening, diagnosis, and treatment.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 items-stretch">
          {researchPapers.map((paper, index) => (
            <ResearchPaper key={index} {...paper} index={index} />
          ))}
        </div>


      </div>
    </section>
  )
} 