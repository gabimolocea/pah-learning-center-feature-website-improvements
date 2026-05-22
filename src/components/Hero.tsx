'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const assetPrefix = process.env.ASSET_PREFIX || '';
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Sophisticated Background Patterns */}
      <div className="absolute inset-0">
        {/* Medical Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-blue-300/20 h-full" />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-b border-blue-300/20 w-full" />
            ))}
          </div>
        </div>

        {/* Animated Molecular Structures */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 opacity-20"
        >
          <div className="relative w-32 h-32">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-3 h-3 bg-teal-400 rounded-full -translate-y-1/2" />
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2" />
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-blue-300 rounded-full -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>

        {/* Dynamic Gradient Overlays */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(0, 102, 204, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 80% 20%, rgba(0, 166, 184, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 40% 70%, rgba(0, 212, 229, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 20% 30%, rgba(0, 102, 204, 0.3) 0%, transparent 60%)"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
      </div>



      {/* Main Content */}
      <div className="relative z-10 flex items-center py-10 lg:py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left space-y-4 sm:space-y-8">


            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="heading-font text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-shadow-md">
                The Cortisol Reports
              </h1>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
              className="text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed max-w-xl"
            >
              The hypercortisolism landscape continues to rapidly evolve, producing a CALL-TO-ACTION for HCPs to stay up-to-date and implement advances in practice.
            </motion.p>



            {/* CTA Button & Achievement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center gap-4 pt-4"
            >
              <button 
                onClick={() => document.getElementById('educational-activities')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Explore Activities
              </button>
            </motion.div>
          </div>

          {/* Visual Element Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Impact Image */}
              <div className="relative rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src={`${assetPrefix}/hero-image.jpeg`}
                  alt="The Cortisol Reports"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>






            </div>
          </motion.div>
        </div>
      </div>


    </section>
  )
} 