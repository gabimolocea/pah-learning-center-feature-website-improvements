'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full h-full max-w-4xl mx-4 bg-white rounded-lg shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">About ReachMD</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  ReachMD is the nation&apos;s largest learning platform for physicians and other healthcare professionals. We are passionate about <strong>healthcare education</strong> and delivering the absolute best learning experience. Our ethos is to help our learners stay current, and that&apos;s why we developed a broadcast network that delivers award-winning content any time, any place, and on any device. The ReachMD medical broadcast network is accessible anywhere you are − online, on mobile, and in your automobile.
                </p>
                
                <p>
                  ReachMD&apos;s peer-to-peer content is the trusted source for certified education, editorial content, and industry-related features. Programs are consumed in short, easy-to-absorb formats.
                </p>
                
                <p>
                  We make it easy to find our 24/7 streaming content and podcast library:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Online</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>ReachMD</li>
                      <li>iHeartRadio</li>
                      <li>TuneIn</li>
                      <li>iTunes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mobile Apps</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>ReachMD</li>
                      <li>iHeartRadio</li>
                      <li>TuneIn</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Automobile</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Connect a smart phone to the car audio system and listen through the mobile apps of ReachMD, iHeartRadio, or Tunein</li>
                      <li>Locate the ReachMD station in automobile dashboards that integrate iHeartRadio and Tunein</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  Registration is free on ReachMD, and registered users have an even greater experience through customized content pages, customized emails, and customized eNewsletters that focus on their specific interests.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">FAQs</h3>
                
                <p>
                  Everything you want to know about ReachMD − it&apos;s all here. But if you still have a question, just give us a call or shoot over an email. We&apos;ll do our best to get you the answers you need.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">What makes you the nation&apos;s largest learning platform for physicians and other healthcare professionals?</h4>
                    <p>
                      Our content is delivered through a broadcast network that includes websites, mobile apps, and internet radio. Programming is delivered both on demand and through 24/7 streaming on ReachMD, iHeartRadio, Tunein, and iTunes digital platforms. In addition, we have partnerships with more than 25 medical societies and medical centers who partner with ReachMD to bring our content to their members daily. ReachMD and our collective partners make us the largest learning platform nationwide.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Is there a fee to register or to access ReachMD content?</h4>
                    <p>
                      No, there is no fee to register and all content on ReachMD is complimentary.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">What types of content do you offer?</h4>
                    <p className="mb-3">We offer three types of educational content:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Certified Education</strong> is produced by our CME partners (accredited providers).</li>
                      <li><strong>Editorial Education</strong> is produced by the ReachMD medical team and by its educational partners such as medical societies and medical centers of excellence.</li>
                      <li><strong>Industry Features</strong> are produced by healthcare industry interests (including pharmaceutical, biotech, device, and diagnostic interests).</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">How is your content navigation organized?</h4>
                    <p className="mb-3">We&apos;ve worked hard to make the learning experience easy. Users can quickly sift through areas of interest by accessing one of four key areas on the navigation bar:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Clinical Practice</strong> segments content by specialty area, such as oncology, endocrinology, cardiology, and many more.</li>
                      <li><strong>Medical Interest</strong> showcases content related to the practice of medicine and general interest, such as the business of medicine, medical ethics, book club, health IT, and much more.</li>
                      <li><strong>CME/CE</strong> provides content that is certified for credit by one of our many education partners, including The Johns Hopkins University School of Medicine, MD Anderson Cancer Center, Penn State Hershey College of Medicine, and many more.</li>
                      <li><strong>Industry Features</strong> showcases content that is industry-product focused, offering insights and clinical data from industry on key considerations and usage of products and devices.</li>
                    </ul>
                    <p className="mt-3 mb-3">We also offer two additional resources for our users:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Meetings</strong> offers a resource of worldwide medical meetings to help our learners plan and manage their lifelong learning endeavors.</li>
                      <li><strong>Careers</strong> provides a robust search tool to explore career opportunities in partnership with Health Jobs Nationwide.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">What media formats do you offer?</h4>
                    <p>
                      That&apos;s a key benefit of ReachMD -- we have media formats that appeal to all learning styles including audio, video, and print. You&apos;re in control of the format that plays.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Will I receive emails once I register?</h4>
                    <p>
                      Immediately after registering, you will receive a welcome email from ReachMD that explains how to access your profile and the preferences center. You will receive one daily email from us with highlights of what is on air that day, as well as our featured program of the day. You can adjust which emails you receive from us by logging into your account and changing your options under the preferences center.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">How do I customize my experience?</h4>
                    <p>
                      You can easily adjust which emails you receive and which content appears on landing pages that you view. Your profile helps us determine the specific information that displays in these areas. By logging in and completing your profile, we can better customize the experience for you.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">How does <span className="underline">cme/ce</span> work on ReachMD?</h4>
                    <p className="mb-3">
                      CME/CE activities are located under the CME/CE tab on the primary navigation bar and on our mobile app. Our on air programming for CME/CE is scheduled at certain times during the week and all day Saturday and Sunday. Participating in CME/CE is easy:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Take the pre-test</strong> (skip this step if you have listened to the activity on the radio)</li>
                      <li><strong>Participate in the activity</strong></li>
                      <li><strong>Take the post-test</strong></li>
                      <li><strong>Your CME/CE</strong> certificate is provided immediately upon completion, and we retain all your certificates on file. You can access your certificates under the credits tab within your profile page.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">How do I listen to ReachMD in my car?</h4>
                    <p>
                      There are two ways to listen to ReachMD in your car. If your Internet-enabled car carries iHeartRadio and/or Tunein radio stations, you can listen to ReachMD on those two stations. Just search for ReachMD and you&apos;ll find our 24/7 streaming content and podcasts. You can plug a smart phone into your car&apos;s audio system using USB or an audio jack cable and listen using the ReachMD mobile app or the apps available from iHeartRadio and Tunein.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">What are some of the key features of ReachMD?</h4>
                    <p className="mb-3">
                      Our favorite part of education is making it engaging. We designed features that ensure learners stay interested in the content and can easily customize their own experience.
                    </p>
                    <ul className="list-disc pl-6 space-y-4">
                      <li>
                        <strong>Playlists</strong> offer the unique ability for learners to add specific episodes to their own Playlists that they access anytime, anywhere from our Media Player. Each user&apos;s Media Player contains his or her selected podcasts, whether used online or on mobile. Users also can add other people&apos;s Playlists to their Media Player. For example, if they like a Playlist on women&apos;s health offered by Omnia Education, they can add that to their Media Player. If they create their own Playlist on cardiology, for example, and want to share it with a colleague, they can easily do that. The Media Player allows for &quot;follows me&quot; content -- if you start on the web and pick up later on the mobile app, the Media Player remembers where you left off.
                      </li>
                      <li>
                        <strong>Peer™</strong> is a social networking feature on ReachMD. Peers are other learners with whom you can connect inside the ReachMD community. Peers have the ability to join Groups to join discussions, pose questions, and learn from each other. We invite everyone to become a Peer of ReachMD and Be part of the knowledge.™
                      </li>
                      <li>
                        <strong>Customized learning</strong> makes education relevant to our learners, and we encourage everyone to customize their experience. Registered users who provide basic information about profession, specialty, and areas of interest will experience a customized homepage, customized landing pages, and customized emails and eNewsletters. It&apos;s the smartest way to experience relevant content on ReachMD.
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Who are your guests and hosts?</h4>
                    <p>
                      ReachMD is a peer-to-peer platform. Our guests and hosts hail from the most prestigious centers of excellence across the world. Each guest and host is thoroughly vetted for medical knowledge, publication history, relevancy to the topic area, and experience with broadcast platforms. Since 2006, more than 6,000 physicians, pharmacists, nurses, and other healthcare professionals who are recognized as thought leaders and experts in their respective fields, have served as ReachMD guests and hosts have participated in ReachMD&apos;s learning network.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Where are you located, and how long have you been in business?</h4>
                    <p>
                      ReachMD is located in Fort Washington, PA. It was founded in 2006 by medical professionals and broadcast experts and enjoyed five years of growth and expansion from its original Chicago location. In late 2011, US HealthConnect Inc. acquired ReachMD and relocated the offices and studios to Fort Washington. Much of the original ReachMD team remains today and we have greatly expanded our leadership, editorial, technology, customer service, and education teams.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Where are the ReachMD recording and production studios?</h4>
                    <p>
                      ReachMD has its primary studios in Fort Washington, PA. Worldwide, we have a network of studios we utilize to ensure top-quality audio and video recordings and productions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 