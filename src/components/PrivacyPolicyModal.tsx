'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
              <h2 className="text-2xl font-bold text-gray-900">ReachMD.com Privacy Policy</h2>
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
                  The ReachMD.com website (&quot;Site&quot;), as well as the ReachMD mobile applications (&quot;Apps&quot;), are owned and operated by U.S. HealthConnect, Inc. doing business as ReachMD (&quot;ReachMD&quot; or &quot;us&quot; or &quot;we&quot; or &quot;our&quot;). This privacy policy (&quot;Policy&quot;) governs the manner in which we collect, use, maintain and disclose information collected from users (&quot;User&quot; or &quot;you&quot;) of the Site, Apps and any other website or mobile app where this Policy is posted or published, or if you interact with us through social media, by phone, in writing, in person or through any other interactions you may have with ReachMD (all of which will be referred to collectively, together with the Site and Apps, as the &quot;Services&quot;). This Policy also explains how you can exercise certain rights you may have in connection with your privacy and the information we collect from you.
                </p>
                
                <p>
                  This Policy only applies to the Services identified above, and does not apply to information which you may send us by other means. Other sites, apps and other online locations, including any social media platforms or services you may use to interact with ReachMD, may have their own privacy policies or notices which apply instead of this Policy, and you should consult those accordingly.
                </p>
                
                <p>
                  The Services are intended for users sixteen (16) years of age or older. If you are not 16 years of age or older, you are <strong>NOT</strong> permitted to access or use the Services. If you learn that anyone younger than 16 has unlawfully provided us with personal data, please contact us, and we will take steps to delete such information.
                </p>
                
                <p>
                  This Policy is effective as of April 15, 2024
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Changes to this Policy</h3>
                
                <p>
                  We reserve the right, at our sole discretion, to modify or revise this Policy at any time by posting an updated Policy to our Site and Apps and update the Policy&apos;s effective date. You acknowledge and agree that it is your responsibility to review this Policy periodically and become aware of modifications. Your continued use of the Services after any changes are posted to this Policy signifies your acceptance of the amended Policy.
                </p>
                
                <p>
                  If any changes to this Policy substantially affect how ReachMD treats or handles personal data that has already been collected by ReachMD, we will notify you by email (if ReachMD has a valid email address to use) and give you thirty (30) days to opt-in to the changes as they pertain to your information. If you do not opt-in, your information will continue to be used in a manner that is consistent with the version of this Policy under which it was collected.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Collection of Personal Data</h3>
                
                <p>
                  Personal data (&quot;Personal Data&quot;) is generally defined as information that, by itself or in combination with other information, may be able to identify you or could reasonably be associated with you, your household or your accounts.
                </p>
                
                <p>
                  We may collect Personal Data from Users who voluntarily provide such information in a variety of ways on or through the Services. For example, Users may provide, be asked for, or allow us to collect Personal Data including:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information</strong> such as your name, practice name, phone number, email address or mailing address; social media (linking)</li>
                  <li><strong>Communications Information</strong> such as any recorded communications you have with us through email, our online customer service chat bot or over the phone for quality assurance purposes;</li>
                  <li><strong>Professional Information</strong> like your practice name, office address, other business information or national provider identifier (NPI) number, area of expertise, and the professional education courses and other resources you use, attend or participate in through the Services; educational interests, state license number, medical school and year of graduation, and to the extent that you apply for an open position on our Site your resume and professional work experience;</li>
                  <li><strong>Log-in Information</strong> like your username and password when you log onto your account on our Site;</li>
                  <li><strong>Device and Activity Information</strong> which may include your IP address and your activity when visiting our Site including the different webpages, articles, or videos you viewed or links you clicked (please see the &quot;Device Information and Cookies&quot; section below for further information);</li>
                  <li><strong>Purchase and Attendance Information</strong> such as which education or training courses or events you purchased and/or completed through our Site or your use of the Services; and/or</li>
                  <li><strong>Payment Information</strong> including your credit/debit card number or other financial information.</li>
                </ul>
                
                <p>
                  Additionally, ReachMD may collect inferences about ReachMD content we think may be of interest to you based on your apparent preferences from the categories of professional information we collect about you.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Personal Data Sources</h3>
                
                <p>The voluntarily provided Personal Data summarized above is collected from you whenever you:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>visit or use our Services;</li>
                  <li>register an account on or through the Services;</li>
                  <li>register for an event;</li>
                  <li>subscribe to a newsletter;</li>
                  <li>respond to a survey;</li>
                  <li>fill out a form;</li>
                  <li>order training services or materials;</li>
                  <li>create a username and password (or security question and answer); and/or</li>
                  <li>seek information in connection with other activities, services, features or resources we make available on or through the Services.</li>
                </ul>
                
                <p>
                  ReachMD may collect some of your contact information and professional information from pharmaceutical companies that provide us with physician level data (PLD), which we then use to track the content you listen to and/or view on or through the Services. The pharmaceutical companies that provide us with your PLD may receive professional information about any ReachMD courses you attend or other Services you use as a result of this process. This exchange of PLD and other professional information may result in you receiving advertising content that is based on the ReachMD content you listen to and/or view, and other Services you use.
                </p>
                
                <p>
                  ReachMD generally will not ask you to provide any sensitive data, such as your religious beliefs, citizenship status, sexual orientation, or your race or ethnicity, but you may be able to voluntarily provide such sensitive data in any content that you may upload or post on or through the Services. To the extent you include any sensitive data in content you voluntarily make available through the Services, you hereby acknowledge and agree that such data may be processed by ReachMD as necessary to provide the Services in accordance with your instructions.
                </p>
                
                <p>
                  We may also collect your IP address, Device ID, and other information in an automated manner through the use of cookies as described, below. We will collect any other Personal Data from Users only if they voluntarily submit such information to us.
                </p>
                
                <p>
                  We will not collect additional categories of Personal Data or use the Personal Data we collected for materially different, unrelated, or incompatible purposes without providing you notice and obtaining your consent to the new processing activities. If you do not opt-in, your information will continue to be used in a manner that is consistent with the version of this Policy under which it was collected, or the information will be deleted.
                </p>
                
                <p>
                  Users can always refuse to supply Personal Data, except that doing so may prevent Users from engaging in certain activities or content related to the Services.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Online Tracking Technologies</h3>
                
                <h4 className="text-lg font-semibold text-gray-900 italic">Device information, cookies, and other online tracking tools</h4>
                
                <p>
                  There are other areas of the Services where Personal Data or other information may be collected from you in an automated manner. When you visit or use certain Services, for example, we may automatically collect certain Device Information about your computer, browser or device that includes information about your web browser, such as your IP address, time zone, and some of the cookie identifiers that are installed on your device. ReachMD will treat such device information as Personal Data to the extent such device information is reasonably capable of identifying a particular individual.
                </p>
                
                <p>
                  The Services may use &quot;cookies&quot; to enhance the User&apos;s experience. For example, cookies are placed on your hard drive when you visit the Site for record-keeping purposes to better understand how Users interact with the Services, optimize response times, remember what language you prefer, and sometimes to track authentication information to prevent unauthorized access to Users&apos; accounts. A User may choose to set their web browser or mobile device to refuse or disable cookies. If cookies are blocked by Users, some parts of our Services may not function properly.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 italic">Google Analytics</h4>
                
                <p>
                  ReachMD may also use third-party service providers which collect and aggregate information to analyze how Users move around the Services, in order to optimize the performance of the Services. For example, the Services may use Google Analytics, which is a web analytics service that uses online tracking tools to analyze how you use aspects of the Services. The information collected by these cookies about your use of the Services (including page views, scrolls, videos or links that were clicked, a unique client ID attributable to your device and browser information, your approximate age, gender, interests, language settings on your device or browser, and approximate location metadata derived from your IP address (city, state, and country)) is transmitted to and stored on a Google server in the United States. Google uses this information to assess your use of the Services, providing reports on data such as how often you visit, what pages you view when you visit, and what other websites you visited prior to visiting or using our Services, for example. Google may transfer this information to third parties, if required by law or if third parties process the information on behalf of Google.
                </p>
                
                <p>
                  View an overview of Google&apos;s data privacy practices for Google Analytics at https://support.google.com/analytics/answer/6004245. For more information on Google&apos;s privacy practices generally, please review Google&apos;s privacy policy at https://policies.google.com/privacy. To opt-out of being tracked by Google Analytics, you may be able to download and install the Google Analytics Opt-out Browser Add-on at https://tools.google.com/dlpage/gaoptout. These Google services may also cause you to receive personalized ads based on your browsing behavior. You may be able to opt-out of receiving these personalized ads by using the settings at https://adssettings.google.com/
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 italic">Other third-party online tools</h4>
                
                <p>
                  Our Services include other third-party online tools that are used to connect our Site to our pages on social media platforms as well as for data analytics and targeted advertising purposes. By using these third-party online tools, information about your use of the applicable platform, your device, and your activity on the Site (including which webpages and videos you may have viewed) may be shared with such third parties. You may be able to opt out of being tracked through these online tools by following the directions noted in the table below.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Third Party Source / Data Recipient</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">How to Manage Privacy Settings</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">More Information</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Facebook</td>
                        <td className="border border-gray-300 px-4 py-2">Go to interest based ads settings or Meta privacy control center</td>
                        <td className="border border-gray-300 px-4 py-2">Facebook&apos;s Privacy Policy and Meta Cookie Policy</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Instagram</td>
                        <td className="border border-gray-300 px-4 py-2">Go to privacy settings or Meta privacy control center</td>
                        <td className="border border-gray-300 px-4 py-2">Instagram&apos;s Privacy Policy and Meta Cookie Policy</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">X (formerly Twitter)</td>
                        <td className="border border-gray-300 px-4 py-2">Go to privacy settings</td>
                        <td className="border border-gray-300 px-4 py-2">X Privacy Policy</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">YouTube</td>
                        <td className="border border-gray-300 px-4 py-2">Go to YouTube privacy controls</td>
                        <td className="border border-gray-300 px-4 py-2">YouTube Privacy Guidelines and Google Privacy Policy</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">LinkedIn</td>
                        <td className="border border-gray-300 px-4 py-2">Go to LinkedIn&apos;s advertising preferences</td>
                        <td className="border border-gray-300 px-4 py-2">LinkedIn&apos;s Privacy Policy and Cookie Policy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 italic">Identification of site visitors through audience identification tool</h4>
                
                <p>
                  We use an audience identification tool for our Services, which allows us to show you ads that are more relevant to you. The Network may use Data to identify particular visitors to the Site or Apps and show these individuals ads relevant to their interests. When Personal Data is in our possession or the Network&apos;s possession, when you visit or use our Services.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 italic">Mobile Data Collection</h4>
                
                <p>
                  Through the app, we may obtain your location data, your device identifier, your mobile device&apos;s operating system type, your mobile carrier, and your geolocation (your location while you are using the app). This information may be used and shared with third parties for advertising purposes. Depending on your device, you may be able to opt-out using the Digital Advertising Alliance&apos;s free mobile application AppChoices for each device you use (for more information, see https://youradchoices.com/appchoices). ReachMD cannot guarantee that these industry-provided opt-out tools will work properly on all mobile devices and operating systems.
                </p>
                
                <p>
                  To protect against the collection and use of Personal Data for online behavioral advertising purposes, or to opt-out of this type of advertising for participating companies, you may visit the DAA Webchoices tool (http://www.aboutads.info/choices) or the NAI Opt-Out page (http://www.networkadvertising.org/managing/opt_out.asp). You may also be able to download the DAA AppChoices tool at www.aboutads.info/appchoices for opting out of interest-based mobile app advertising. You can also configure your web browser settings to send a &quot;Do Not Track&quot; request; however, we currently do not respond to such requests. Please keep in mind that without cookies, you may not have access to certain features on our Services, including access to your profile/account and certain personalized content. The Network provides an opt-out mechanism to unsubscribe from the Network&apos;s emails and from ReachMD&apos;s use of the Network&apos;s tools to track and analyze your visits to and use of our Services.
                </p>
                
                <p>
                  Standard data and other fees may be charged by your mobile phone carrier when using any mobile app, so please be aware of such fees.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">How We Use Collected Information</h3>
                
                <p>We may collect and use Users&apos; Personal Data for the following purposes:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                  <li><strong>To prevent unauthorized access to and use of the Services:</strong> Your registration information will be used to safeguard your account.</li>
                  <li><strong>To enroll in an event:</strong> We may use order information to process the enrollment of Users in a meeting or event.</li>
                  <li><strong>To personalize User experience:</strong> We may use information to provide Users with tailored content based on ReachMD courses you attend or other Services you use, and we may use information in the aggregate to understand how our Users as a group use the Services.</li>
                  <li><strong>To process any forms you complete and submit through the Services:</strong> We will use such submitted information for the purposes described in connection with any specific form the User completes.</li>
                  <li><strong>To send training services or materials:</strong> If a User submits an order or request for such training services or materials, we will use the submitted information to send these to the User.</li>
                  <li><strong>To perform internal operations related to the Services:</strong> We may use your Personal Data for fraud prevention, to troubleshoot software issues and operational problems, conducting data analysis and testing; and to conduct data analysis and testing;</li>
                  <li><strong>To run our day-to-day business:</strong> We may use your Personal Data to run our day-to-day business including to facilitate corporate or other business transactions, to comply with legal, law enforcement, and/or regulatory requirements or requests, to exercise our legal rights, and for document retention and storage purposes.</li>
                  <li><strong>To send periodic emails or mail:</strong> We may use the email address and postal addresses to send Users information and updates based on the information Users provide us. We may also use email or mail to respond to User inquiries, questions, and/or other requests. A User will receive emails or mail which may include company news, updates, related product or service information, as well as information from third parties with whom we or our affiliated entities do business.</li>
                  <li><strong>To provide to you customized advertisements:</strong> We may use your device and activity information to provide you with customized advertisements about our course and event offerings that may be of interest to you.</li>
                </ul>
                
                <p>
                  By providing to ReachMD the Personal Data and other information referenced above, you agree that ReachMD may use the Personal Data and other information in accordance with the terms of this policy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Sharing Your Personal Information</h3>
                
                <p>
                  We may share certain portions of Personal Data and other information with third-party service providers to help us operate the Services, our business, or to administer activities on our behalf. This may include sharing your:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Professional Information with a search service to help us look up your NPI number, or with pharmaceutical companies and providers of advertising services in connection with the exchange of your PLD as described above;</li>
                  <li>Device Information with our content delivery vendor to provide content on or through the Services, and with analytics service providers with whom we have contractually committed to provide data for analytical purposes; and/or</li>
                  <li>Payment information to our credit card or other payment processors to facilitate purchases made through our Services;</li>
                  <li>Contact Information with our email and shipping vendors for the purpose of sending out newsletters, surveys, or marketing materials from ReachMD.</li>
                  <li>Communications Information with our service providers in order to facilitate the chat service, to the extent that you may use our customer service chat bot;</li>
                  <li>Any Personal Data to our IT service and data storage providers to store our information and provide IT support and maintenance services; and/or</li>
                  <li>Any Personal Data to our affiliates to fulfill any of the processing activities described in this Policy.</li>
                </ul>
                
                <p>
                  We may share your information with these third parties unless you have specifically requested to be removed from our database and ReachMD has no other legal obligation to retain your information and process it as necessary to fulfill contractual obligations or for other legitimate business purposes.
                </p>
                
                <p>
                  We participate in the Healthcare Communications Network℠ which is owned and operated by IQVIA. Participation in the Healthcare Communications Network provides us with tools to better understand and analyze who is using our Services, and to personalize User experiences through the Services. We share certain of your Personal Data with the operators of the Healthcare Communications Network. This information includes your email address, your name, your NPI number and other information we obtain when you register to use the Services, or visit the Healthcare Communications Network. HealthCare Communications Network will use this information primarily to send you emails with information specifically tailored to your medical interest. You will receive an email providing you with a mechanism to unsubscribe from the Network&apos;s emails and from ReachMD&apos;s use of the Network&apos;s tools to track and analyze your visits to and use of our Services.
                </p>
                
                <p>
                  By registering for and using our Services, you agree to the terms of this Policy and to the Healthcare Communications Network privacy policy. That policy can be found at https://hcn.health/privacy-policy/.
                </p>
                
                <p>
                  If ReachMD is involved in a merger, acquisition or asset sale, your Personal Data may be transferred.
                </p>
                
                <p>
                  As described in the &quot;Online Tracking Technologies&quot; section, above, the Services may allow you to share information, including Personal Data, with other third-party services and social networking websites, such as Twitter, Facebook, Instagram and LinkedIn when you click on the respective social media button on our Site. We do not share your Personal Data with these social media providers unless you direct the Services to do so. Their use of the information will be governed by their privacy policies, and you may be able to modify your privacy settings with these entities. Links to the respective social media policies and information on how you may opt out of certain sharing that occurs through these social media services are located in the &quot;Other Third-Party Online Tools&quot; section, above. Please consult these third parties&apos; privacy policies before using their platforms to make sure you are comfortable with the level of sharing.
                </p>
                
                <p>
                  Other than what is referenced above, the Personal Data and other information collected from you is not shared with nor sold to any person or entity outside of ReachMD. ReachMD does not knowingly collect or sell the Personal Information of minors under 16 years of age.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Disclosures for Investigation and Regulatory Purposes</h3>
                
                <p>
                  We may share User information with governmental agencies or other companies assisting us in fraud prevention or investigation if we: (1) reasonably believe we are permitted or required to do so by law; (2) are investigating actual or potential fraud or unauthorized transactions; or (3) believe that a User&apos;s actions violate our Terms and Condition of Use or threaten the rights, property or safety of our company, our Users, or others. We may also disclose User information if required or requested by law enforcement or a governmental body, to the extent permitted under applicable law.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Your Choices Regarding Your Personal Data</h3>
                
                <p>
                  Your provision of Personal Data and other information to ReachMD means you agree that we may collect, use and disclose your information according to the terms of this Policy. If you do not agree with these terms, please do not provide any Personal Data. However, certain Services can only be offered if you provide your Personal Data to ReachMD.
                </p>
                
                <p>
                  In connection with ReachMD&apos;s collection and use of your Personal Data, and depending on where you reside, you may have a right to:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Confirm whether ReachMD has collected and is processing your Personal Data and, if so, you may have a right to request access to or correction of your Personal Data;</li>
                  <li>Obtain a copy of Personal Data that ReachMD maintains about you in a portable and readily usable format, if technically feasible, that would allow you to transfer such Personal Data to another service or provider, where the applicable processing is carried out by automated means;</li>
                  <li>Opt-out of any processing of your Personal Data for the purposes of, as applicable and subject to contractual and legal restrictions, (1) targeted advertising based on your browsing behavior before and after you visit or use the Services, (2) any sale of your Personal Data, or (3) any profiling of you or automated decision-making processes based on collected Personal Data in a way that would produce legal ramifications or similarly significant real-world effects on you, or (4) with respect to sensitive Personal Data (if applicable), inferring characteristics about you, subject to certain conditions;</li>
                  <li>Request details on the specific pieces of Personal Data that ReachMD has collected about you;</li>
                  <li>Request that ReachMD delete or properly dispose of copies of Personal Data it has collected about you, subject to contractual and legal restrictions; and not be discriminated against, in terms of the quality and prices offered in connection with our Services, because you exercised these rights regarding the collection, use and sharing of your Personal Data; and.</li>
                  <li>Submit an appeal to a regulatory authority if we reject your request to exercise any of these rights (if applicable).</li>
                </ul>
                
                <h4 className="text-lg font-semibold text-gray-900 italic">How to Exercise Your Rights</h4>
                
                <p>
                  If you would like to request the ability to access, review, edit, delete or have us otherwise dispose of any copies of the Personal Data ReachMD collected from you, if you would like to opt-out of receiving further information, if you want to limit what Personal Data ReachMD shares, if you otherwise wish ReachMD to stop using your Personal Data in the manners specified in this Policy, or if you would like to exercise the above rights in any other way (subject to any applicable legal exceptions), please contact us at info@reachmd.com or by calling us at 1-866-390-9909 (Toll-Free).
                </p>
                
                <p>
                  You may grant an authorized agent written permission to submit requests regarding your Personal Information, but we may deny authorized agent requests absent proof that you authorized such agent to act on your behalf, or if we are unable to verify your identity.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 italic">Verifying Your Identity</h4>
                
                <p>
                  ReachMD is required to verify the identity of any person or entity that requests the disclosure or deletion of Personal Data. Making a verifiable consumer request does not require you to create an account with us, but if you have a password-protected account, we will use our existing authentication procedures to verify your identity. For most other requests, ReachMD will ask you to provide information that matches at least two pieces of Personal Data we store about you before responding to your request. If you would like to request the specific pieces of your Personal Data that ReachMD has collected, or if you would like us to delete highly sensitive information, you will need to match at least three pieces of information we store about you, and you must provide a signed declaration under penalty of perjury that you are the consumer whose Personal Data you are requesting. We will only use Personal Data provided in a verifiable consumer request to verify the requestor&apos;s identity or authority to make the request.
                </p>
                
                <p>
                  We cannot respond to your request or provide you with Personal Data if we cannot verify your identity or authority to make the request and confirm the Personal Data relates to you. Under such circumstances, ReachMD may follow up with you for additional information as reasonably necessary to authenticate your request. Subject to applicable legal requirements, if ReachMD refuses to act on a request you make based on the rights listed at the beginning of this section, you may have a right to submit an appeal by contacting us using the same method as when you made the initial request. In the event ReachMD must deny your appeal, we will provide a way for you to forward your complaint to the appropriate legal authorities.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 italic">Data Deletion Considerations</h4>
                
                <p>
                  Any removal of information or content by ReachMD does not ensure or guarantee complete or comprehensive removal in all places. The content or information may have been shared or reposted by other parties, or federal or state law may require maintenance of the content or information. ReachMD will do its best to accommodate your request to delete Personal Data we collected from you, but we cannot guarantee we can remove all Personal Data from the specified uses. If the request relates to information that ReachMD needs to make the Services function properly for you, you may not be able to use the Services properly moving forward.
                </p>
                
                <p>
                  ReachMD reserves the right to maintain proper records as required by law, or for otherwise legitimate business purposes to the extent permitted by law, even if such records contain your Personal Data.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 italic">How to Exercise Your Opt Out Rights / Do Not Track</h4>
                
                <p>
                  As previously described above, when you visit and interact with the Services, certain third parties may get access to certain information about you as referenced above, such as your device information, professional information and PLD, for the purpose of providing you online advertising personalized to your interests based on your browsing behavior. To the extent any of this sharing or third-party access may be considered a &quot;sale&quot; of your Personal Data under applicable privacy laws and regulations or if you otherwise have the right to opt-out of sharing for targeted advertising purposes, you may exercise choices regarding such sharing or third-party access by clicking here, or by using the email address or toll-free phone number provided in the previous paragraph.
                </p>
                
                <p>
                  Some browsers have a &quot;Do Not Track&quot; feature that lets you tell websites that you do not want to have your online activities tracked. Our Services do not currently respond to browser &quot;Do Not Track&quot; signals, but we honor similar technical requests sent by a User&apos;s browser or other device settings. To learn more about other ways to possibly opt-out of certain kinds of tracking that could result in you receiving targeted advertising based on your behavior online, you can visit the Network Advertising Initiative&apos;s opt-out page (http://www.networkadvertising.org/choices/) or the Digital Advertising Alliance&apos;s opt-out page (http://www.aboutads.info/choices/).
                </p>
                
                <p>
                  Options you select through these third-party services are browser- and device-specific, and there is no guarantee that these industry-provided opt-out tools will prevent all targeted advertising. As noted previously in this Policy, it is possible that third parties may collect or receive information through the Services. Since it is possible that some of these third parties may respond differently than ReachMD to &quot;do not track&quot; requests, you should consult the applicable privacy policies of those third parties for that information.
                </p>
                
                <p>
                  If you would like to opt-out of receiving further promotional emails from ReachMD, please follow the opt-out instructions at the bottom of the email or send ReachMD a detailed message at info@reachmd.com.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">How We Protect Your Information</h3>
                
                <p>
                  As to Personal Data we collect, ReachMD&apos;s Services use, implement and maintain industry standard security measures to protect against unauthorized access, alteration, disclosure or destruction of your Personal Data and other data stored on or through our Services, both in storage and in transmission.
                </p>
                
                <p>
                  However, while ReachMD takes the protection of your Personal Data seriously, you should exercise discretion in what information you disclose and/or transmit online, including on or through any of our online Services. No data transmission over the internet can be assured to be completely secure, as any transmitted information may be intercepted by others before it reaches ReachMD. As a result, ReachMD does not ensure or warrant the security of any information that you transmit to us, and you do so at your own risk. If you are concerned about sending information to ReachMD over the internet, please send the information by mail or call us to make other arrangements. ReachMD is not responsible for the security of information sent over the internet.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">How Long We Keep Your Personal Data</h3>
                
                <p>
                  ReachMD retains collected information for a reasonable amount of time in order to fulfill the stated purpose for why the information was collected or for other legitimate purposes such as ensuring security of our data and systems, complying with our legal obligations, complying with tax, audit, or other books and record policies, resolving disputes, conducting internal investigations, and enforcing our agreements or other legal rights. Due to the different purposes for retaining your Personal Data, the actual retention timeframes may vary depending on the type of Personal Data we collect from you and the purposes for which we use your Personal Data. ReachMD reserves the right to maintain proper business records as required by law, or for otherwise legitimate business purposes to the extent permitted by law, even if such records contain your Personal Data. If ReachMD determines that collected information is no longer needed, it will delete such information or anonymize the information so that it can no longer be attributed to you. Our collection times will be consistent with applicable law.
                </p>
                
                <p>
                  Please note that residual copies of your Personal Data may be removed from backup systems subject to our backup data retention schedule.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">How We Handle E.U. Data</h3>
                
                <p>
                  If you are a User residing within the European Economic Area (the &quot;EEA,&quot; which includes the 27 European Union Member States, Iceland, Norway and Liechtenstein), Switzerland or the United Kingdom (collectively, the &quot;EU&quot;), then ReachMD handles your Personal Data according to the terms of this Policy, unless the exceptions in this section apply, pursuant to the General Data Protection Regulation (&quot;GDPR&quot;).
                </p>
                
                <p>
                  ReachMD will collect, process and use your Personal Data as described in this Policy and for the purposes set forth in this Policy. With the exception of uses for which we have obtained your consent, your Personal Data is processed in support of legitimate interests as described in this Policy.
                </p>
                
                <p>
                  ReachMD&apos;s Services may use &quot;cookies&quot; to enhance the User&apos;s experience. If you are a User residing within the EU, you can find out more about cookies and how to manage them by viewing and exercising the options available to you in our Cookie Policy, which can be found at: https://reachmd.com/pages/cookie-policy/. GDPR gives Users in the EU certain rights with respect to their Personal Data. EU Users have the following rights:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>the right to request details on the Personal Data we hold about you at any time;</li>
                  <li>the right to update and correct any inaccurate Personal Data ReachMD holds about you;</li>
                  <li>the right to withdraw any consent for marketing activities or processing of Personal Data that you might have provided to ReachMD;</li>
                  <li>the right to request erasure of Personal Data;</li>
                  <li>the right to request restriction of ReachMD&apos;s processing of your Personal Data;</li>
                  <li>the right to object at any time to ReachMD&apos;s processing of Personal Data concerning you; and</li>
                  <li>the right to request the portability of Personal Data that you have provided to ReachMD.</li>
                </ul>
                
                <p>
                  If you would like to review, edit or delete any of the Personal Data ReachMD collected from you, if you wish ReachMD to stop using your Personal Data in the manners specified in this Policy, or if you would like to exercise the rights listed above in any other way, please contact us at privacy@ushealthconnect.com.
                </p>
                
                <p>
                  Under the GDPR, Users in the EU also have the right to lodge a complaint about ReachMD&apos;s processing of your Personal Data with a supervisory authority. In particular, such Users may lodge a complaint in the Member State where the User lives or works or where the alleged violation took place. You can contact us to make your request using the information in the &quot;Contact Us&quot; section below.
                </p>
                
                <p>
                  To protect your Personal Data, ReachMD&apos;s Services use appropriate technical and organizational security measures to protect against unauthorized access, alteration, disclosure or destruction of your Personal Data and other information stored on our servers.
                </p>
                
                <p>
                  We will generally retain Personal Data we collect for as long as reasonably necessary to fulfill the purpose for which it was collected, unless: (i) a longer retention period is required by law and/or other legal obligations or similar obligations applicable to ReachMD&apos;s business operations; (ii) for preserving, resolving, defending or enforcing our legal/contractual rights; or (iii) needed to maintain adequate and accurate business and financial records. We will delete Personal Data when it is no longer necessary for the stated purpose for which it was originally collected, unless a longer retention period is required or permitted by law.
                </p>
                
                <p>
                  Other than as expressly stated in this Policy, ReachMD does not currently transfer Personal Data outside of the United States. However, if Personal Data is transferred outside of the United States, we will ensure that there are appropriate safeguards in place to protect your Personal Data. Some countries may have data protection laws that are different (and potentially not as protective) as the laws of your own country. In certain situations, courts, law enforcement agencies, regulatory agencies or security authorities in other countries may be entitled to access your Personal Data. ReachMD may use third party companies to process or store this data on ReachMD&apos;s behalf. The individuals and organizations that receive Personal Data as a result of international transfers out of the EU are obligated to use and protect your Personal Data in accordance with requirements under applicable laws, including the GDPR.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">International Use & Transfers</h3>
                
                <p>
                  If you are a User located outside of the United States, you are responsible for complying with any local laws regarding use of the Services and any related data collection. You also agree and acknowledge that by providing any information on or through the Services, including Personal Data, that such information will be transmitted to, and stored in, the United States.
                </p>
                
                <p className="italic">
                  If you are visiting from the EU or other regions with laws governing the collection, use and transfer of Personal Data across international borders, please note that you are agreeing to the transfer of your information to the United States. By providing your information, you consent to any transfer and processing in accordance with this Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Third-Party Links</h3>
                
                <p>
                  The Services may contain links to external online locations, including those embedded in third-party advertisements or sponsor information, which are not controlled by ReachMD. ReachMD is not responsible for the privacy practices and data collection policies for such third-party services. Additionally, we are not responsible for the data processing practices of the internet browser service you choose to use when accessing our Site. You should consult the privacy policies of any third-party services before using or going to their websites or apps.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Your Acceptance of These Terms</h3>
                
                <p>
                  By using our Services, you signify your acceptance of this Policy. If you do not agree to this Policy, please do not use our Services. Your continued use of the Services following the posting of changes to this Policy will be deemed your acceptance of those changes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Terms and Conditions of Use</h3>
                
                <p>
                  The Terms and Conditions of Use for the Services are incorporated by reference into this Policy. The Terms and Conditions of Use can be found here.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Information on Our Services</h3>
                
                <p>
                  Need some information or assistance? We&apos;re close by, just reach out and we will get back to you as soon as possible.
                </p>
                
                <p>
                  <strong>EMAIL:</strong> info@reachmd.com
                </p>
                
                <p>
                  <strong>PHONE:</strong> 215.358.0555
                </p>
                
                <p>
                  <strong>MAIL:</strong> 1301 Virginia Drive, Ste 300, Fort Washington, PA 19034
                </p>
                
                <p>
                  ReachMD intends to strictly enforce this Policy. If you believe there has been some violation of this Policy, please contact ReachMD.
                </p>
                
                <p>
                  This Policy is effective as of April 15, 2024
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 