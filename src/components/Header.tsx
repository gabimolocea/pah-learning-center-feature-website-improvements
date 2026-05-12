'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Award } from 'lucide-react'

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header height (h-20 = 80px)
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const assetPrefix = process.env.ASSET_PREFIX || '';


  const navigationItems = [
    { id: 'educational-activities', label: 'Activities' },
    { id: 'resource-center', label: 'Resources' },
    { id: 'faculty', label: 'Faculty' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-xl"
    >
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center h-20 relative">
          {/* Logo - Far Left with extra margin */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="flex items-center absolute left-4"
          >
                                    <Image
                          src={`${assetPrefix}/glc.png`}
                          alt="Global Learning Collaborative"
                          width={120}
                          height={36}
                          className="h-6 sm:h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                          priority
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        />
          </motion.div>

          {/* Navigation Tabs - Perfectly Centered */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="hidden md:flex items-center space-x-4 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2"
          >
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                onClick={() => scrollToSection(item.id)}
                className="px-2 py-2 text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-teal-700 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>

          {/* Mobile Menu Button - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="md:hidden absolute right-4"
          >
            <button className="p-2 text-slate-800 hover:text-slate-900 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-0.5 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 origin-left"
      />
    </motion.header>
  )
} 