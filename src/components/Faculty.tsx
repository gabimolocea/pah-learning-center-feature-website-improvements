'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Users } from 'lucide-react'
import Image from 'next/image'

const assetPrefix = process.env.ASSET_PREFIX || '';

interface FacultyCardProps {
  name: string
  credentials: string
  image?: string
  profileUrl?: string
  index: number
}

function FacultyCard({ name, credentials, image, profileUrl, index }: FacultyCardProps) {
  const cardContent = (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 p-4 transition-all duration-200 hover:shadow-xl hover:border-blue-300 h-full flex flex-col">
      {/* Profile Photo */}
      <div className="flex flex-col items-center text-center flex-1">
        <div className="relative w-16 h-16 mb-3">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center overflow-hidden border-3 border-white shadow-md">
            {image ? (
              <Image
                src={`${assetPrefix}/headshot/${image}`}
                alt={name}
                width={64}
                height={64}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <User className="w-8 h-8 text-slate-400" />
            )}
          </div>
        </div>
        
        {/* Name & Credentials */}
        <h3 className="heading-font font-semibold text-slate-900 text-sm text-center leading-tight mb-1">
          {name}
        </h3>
        <div className="text-xs font-medium text-blue-600 text-center">
          {credentials}
        </div>
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.01 }}
      className="h-full"
    >
      {profileUrl ? (
        <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="h-full block">
          {cardContent}
        </a>
      ) : cardContent}
    </motion.div>
  )
}

export function Faculty() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const facultyMembers = [
    { name: "Deepak Bhatt", credentials: "MD, MPH, MBA, FACC, FAHA", image: "deepak-bhatt.jpg", profileUrl: "https://reachmd.com/profiles/deepak-bhatt-md-mph-mba-facc-faha/LD0N44/" },
    { name: "Amir H. Hamrahian", credentials: "MD", image: "Amir-Hamrahian.jpg", profileUrl: "https://reachmd.com/profiles/amir-h-hamrahian-md/LaX2ze/" },
    { name: "Lewis S. Blevins, Jr", credentials: "MD", image: "Lewis-Blevins.jpg", profileUrl: "https://reachmd.com/profiles/lewis-s-blevins-jr-md/L8JbnV/" },
    { name: "James W. Suliburk", credentials: "MD, FACS", image: "James-Suliburk.jpg", profileUrl: "https://reachmd.com/profiles/james-w-suliburk-md-facs/jM4PlN/" },
    { name: "Christian Mende", credentials: "MD, FACP, FACN, FASN, FASH, FAHA", image: "christian-mende.png", profileUrl: "https://reachmd.com/profiles/christian-mende-md-facp-facn-fasn-fash-faha/LxB5KQ/" }
  ]

  return (
    <section ref={ref} id="faculty" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"
        />
        
        {/* Medical grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full" />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-b border-white/20 w-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >

          
          <h2 className="heading-font text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Distinguished{' '}
            <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
              Faculty
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-blue-100 leading-relaxed">
              Our distinguished multidisciplinary faculty brings together renowned clinicians and thought leaders with deep expertise in hypercortisolism, Cushing syndrome, and complex metabolic conditions.
            </p>
            

          </div>
        </motion.div>



        {/* Faculty Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {facultyMembers.map((faculty, index) => (
            <FacultyCard key={index} {...faculty} index={index} />
          ))}
        </div>


      </div>
    </section>
  )
}