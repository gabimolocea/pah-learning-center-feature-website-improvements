'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ProgramOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="w-full bg-[#e5e7eb]" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg text-slate-700 leading-relaxed"
        >
          In the complex and quickly-evolving hypercortisolism landscape, it can be quite difficult for busy clinicians – particularly those who often see all-comer patient populations – to stay abreast with the latest prevalence data and advances in screening, diagnosis, and treatment. The prevalence of hypercortisolism in patients with complex metabolic conditions has been found to be larger than previously documented, establishing a call to action in the HCP community to identify this underlying condition. With so many moving parts in these real-life scenarios, the issue of clinical uncertainty is nearly unavoidable. Subsequently, the review of clinical cases can assist clinicians in elucidating the clinical nuances in where and how to apply advances in practice. This educational initiative will address identified practice gaps and educational needs through extensive discussion of updated, guideline- and evidence-based strategies for screening, diagnosis, referral, and medical management of hypercortisolism.
        </motion.p>
      </div>
    </section>
  )
}
