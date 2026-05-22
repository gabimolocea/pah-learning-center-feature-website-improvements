'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Users, Activity } from 'lucide-react'
import Image from 'next/image'



export function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })



  return (
    <section ref={ref} id="associated-diseases" className="py-16 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      </div>

            {/* This section now only serves as a spacer/divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="h-20"></div>
      </div>
    </section>
  )
} 