'use client'

import { Hero } from './Hero'
import { VideoIntroduction } from './VideoIntroduction'
import { EducationalPrograms } from './EducationalPrograms'
import { ResourceCenter } from './ResourceCenter'
import { ProgramOverview } from './ProgramOverview'
import { Faculty } from './Faculty'
import { Footer } from './Footer'
import { Header } from './Header'

export function PasswordProtectedApp() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16"> {/* Add back padding for fixed header */}
        <Hero />
        <EducationalPrograms />
        <ProgramOverview />
        <ResourceCenter />
        <Faculty />
        <Footer />
      </div>
    </main>
  )
} 