"use client"

import React from 'react'
import Image from 'next/image'

import { useState, useEffect } from 'react'

const termsContent = [
  {
    title: "1. Welcome to Checkmate",
    body: "By using this app, you agree to follow these Terms of Service. This app is designed to help teachers track student attendance and motivate students to maintain good attendance through the streak tracking feature.",
    note: { label: "Important:", text: "This app is only for National University MOA (NU MOA) students and faculty. If you don't have a valid NU MOA account, you cannot use this app." }
  },
  {
    title: "2. What This App Does",
    body: "Checkmate helps make attendance tracking easier for everyone:",
    subsections: [
      { label: "For Teachers:", text: "Create classes, generate class codes, and track student attendance in one place." },
      { label: "For Students:", text: "Join your classes, see your attendance records, and track your attendance streak to stay motivated." },
    ],
    footer: "The app only tracks attendance—nothing more, nothing less."
  },
  {
    title: "3. Who Can Use This App",
    bullets: [
      "You must be a current student or faculty member at NU MOA (senior high school to college level)",
      "You must be at least 13 years old",
      "If you're under 18, your parent or guardian should be aware that you're using this app",
      "You must use a valid NU MOA school email and student/faculty number to create your account",
      "You're responsible for keeping your login information private and secure"
    ]
  },
  {
    title: "4. How to Use This App",
    subsections: [
      { label: "Teachers:", bullets: ["Create classes and manage them", "Generate class codes for students to join", "Add or remove students from your classes", "View and manage attendance records for your students", "Only you can see your students' attendance data"] },
      { label: "Students:", bullets: ["Join classes using the class code (your teacher must add you first)", "Mark yourself present during class", "View only your own attendance records and streak", "See your monthly attendance streak tracker (like GitHub contributions)"] }
    ]
  },
  {
    title: "5. Your Account & Information",
    body: "When you sign up, we collect:",
    bullets: ["Your first name and last name", "Your NU MOA school email", "Your student/faculty school number", "Your department/course"],
    footer: "Keep your password safe. You're responsible for everything that happens in your account. If something looks wrong or if someone else is using your account, tell us immediately."
  },
  {
    title: "6. Your Data & Privacy",
    bullets: ["Your attendance data is stored securely and only used for tracking purposes"],
    subsections: [
      { label: "Students:", text: "You can only see your own attendance and streak. Teachers can see their students' attendance." },
      { label: "Teachers:", text: "You can only see the attendance of students in your classes." }
    ],
    footer: "We won't share your data with anyone outside of NU MOA. If your account is deleted or the school year ends, we'll delete your data according to the NU MOA data retention policies."
  },
  {
    title: "7. Rules for Using This App",
    subsections: [
      { label: "Don't do these things:", bullets: ["Try to hack or break into the app", "Use someone else's account", "Try to see other students' private attendance or streak data", "Pretend to be a teacher or student you're not", "Use the app for anything other than attendance tracking", "Send spam or inappropriate messages through the app", "Spread false information", "Try to download or steal the app's code"] },
      { label: "If you're a teacher:", bullets: ["Make sure the attendance records you enter are accurate", "Only add students to your classes if they're actually in your class", "Keep attendance data confidential"] },
      { label: "If you're a student:", bullets: ["Only mark yourself present if you're actually in class", "Don't share your login info with other students", "Don't try to access classes you're not added to"] }
    ]
  },
  {
    title: "8. The Streak Tracker Feature",
    body: "The streak tracker is designed to motivate you to maintain good attendance. Here's how it works:",
    bullets: ["Every time you're marked present, your streak counter goes up", "Your streak resets if you're absent or don't attend class", "You can see your monthly attendance history in a visual box (similar to GitHub's contribution tracker)", "Only you can see your own streak—your classmates can't see it"],
    footer: "This is just for motivation. Your actual grade and academic standing depend on your institution's attendance policy."
  },
  {
    title: "9. What We're NOT Responsible For",
    bullets: ["If the app goes down or has bugs (we'll try our best to fix it quickly)", "If you lose your password or account access", "If you enter wrong attendance information by accident", "If you share your login info and someone else uses your account", "Problems with your phone or internet connection"]
  },
  {
    title: "10. What Happens If You Break the Rules",
    subsections: [
      { label: "If you violate these terms:", bullets: ["We can suspend or delete your account", "You might lose access to the app", "Your school might take additional action"] }
    ],
    footer: "If we think you're being dishonest about attendance, we'll tell your teacher or school administrator."
  },
  {
    title: "11. We Can Change These Terms",
    body: "We might update these Terms of Service sometimes. If we make big changes, we'll let you know. If you keep using the app after the change, it means you accept the new terms."
  },
  {
    title: "12. Technical Stuff You Should Know",
    bullets: ["This app works on Android devices", "You need an internet connection to use it", "Make sure your phone meets the minimum requirements (check the app store listing)", "You're responsible for keeping your device working"]
  },
  {
    title: "13. This is a School Project",
    body: "This app was built as a school project. It's not a professional product from a big company. While we take your data seriously, understand that this is a learning experience and the app might have limitations."
  },
  {
    title: "14. Settling Disagreements",
    subsections: [
      { label: "If you have a problem or complaint:", numbered: ["Try talking to us about it first", "Contact your school's IT department or administration.", "If needed, disputes will be handled according to NU MOA's policies"] }
    ]
  },
  {
    title: "15. If Something is Invalid",
    body: "If any part of these terms is found to be invalid or unenforceable, the rest of the terms still apply."
  },
  {
    title: "16. The Whole Agreement",
    body: "These Terms of Service, along with NU MOA's privacy policies, make up the entire agreement between you and us about using this app."
  },
  {
    title: "17. Questions?",
    body: "If you have questions about this app or these terms, contact:",
    bullets: ["Your Teacher (for class-related issues)", "Your School's IT Department (for technical or account issues)", "Checkmate Team – checkmate.team@gmail.com (for app-related questions)"]
  },
  {
    title: "18. You Agree to These Terms",
    subsections: [
      { label: "By using this app, you confirm that:", bullets: ["You've read and understood these Terms of Service", "You're authorized to use an NU MOA account", "You agree to follow all these rules", "If you don't agree, please don't use the app"] }
    ]
  }
]

const privacyContent = [
  {
    title: "1. Welcome to Checkmate",
    body: "Your privacy is important to us. This Privacy Policy explains what information we collect when you use the NU MOA Attendance Tracker app, how we use it, and how we protect it.",
    note: { label: "Important:", text: "This app is only for National University MOA (NU MOA) users. NU MOA is responsible for verifying user eligibility and age requirements." }
  },
  {
    title: "2. What Information We Collect",
    body: "When you create an account and use the app, we collect the following information:",
    subsections: [
      { label: "During Account Creation:", bullets: ["Your NU MOA school email", "Your student or faculty number", "Your full name", "Your department or course", "Your role (student or teacher)"] },
      { label: "While Using the App:", subsections: [
        { label: "For Students:", text: "Attendance records (present/late/absent), attendance streak data" },
        { label: "For Teachers:", text: "Classes you create, generated class codes, added students you input, class details" },
        { label: "For Both:", text: "Login activity and app usage patterns" }
      ]},
      { label: "We Do Not Collect:", bullets: ["Your password (it's encrypted and we can't see it)", "Location data", "Photos or biometric data", "Browsing history outside the app", "Tracking cookies or analytics"] }
    ]
  },
  {
    title: "3. How We Can Use Your Information",
    body: "We use the information you provide for these purposes only:",
    subsections: [
      { label: "To provide the service:", text: "Creating and managing your account, tracking attendance, displaying your streak" },
      { label: "For teachers:", text: "Managing your classes and student attendance records" },
      { label: "For students:", text: "Showing you your attendance and streak data" },
      { label: "Account management:", text: "Creating accounts and approving them (Super Admin)" },
      { label: "To improve the app:", text: "Understanding what features work well and fixing bugs" }
    ]
  },
  {
    title: "4. Who Can Access Your Information",
    subsections: [
      { label: "Students:", bullets: ["You can see your own attendance records and streak", "Your teachers can see your attendance in classes they teach", "Super Admin can see your account creation details when reviewing account approvals"] },
      { label: "Teachers:", bullets: ["You can see attendance records of students in your classes", "Your students cannot see your information", "Super Admin can see your account creation details when reviewing account approvals"] },
      { label: "Super Admin:", bullets: ["Can view all account creation details for approval/rejection purposes", "Can see account information but not necessarily all attendance records"] }
    ]
  },
  {
    title: "5. Data Storage & Security",
    subsections: [
      { label: "Where Your Data is Stored:", bullets: ["All information is stored using Firebase in secure cloud databases", "Everything is stored on servers, not on your phone"] },
      { label: "How We Protect It:", bullets: ["Data is encrypted during transmission and at rest", "Access is restricted based on your role (student, teacher, or super admin)", "Only authorized users can access the app", "Your password is encrypted and we cannot view it"] },
      { label: "What We Can't Guarantee:", bullets: ["No system is 100% secure. While we do our best to protect your data, we cannot guarantee complete protection against all security threats", "If there's a data breach, we will work with NU MOA to address the issue and notify affected users"] }
    ]
  },
  {
    title: "6. Data Retention",
    subsections: [
      { label: "Current Implementation:", bullets: ["Data is stored indefinitely in our database once it's created", "There is currently no automatic deletion"] },
      { label: "Future Plans:", bullets: ["Accounts will only be usable for the current school year", "New accounts will be created by Super Admin each school year", "Details about data deletion after a school year will be communicated in a future update"] }
    ]
  },
  {
    title: "7. Third-Party Services",
    body: "We use Firebase Firestore to store and manage your data. Firebase is a service by Google and has its own privacy practices. By using this app, you acknowledge that your data may be processed by Firebase according to their terms. We do not share your data with any other third-party services or companies."
  },
  {
    title: "8. NU MOA & School Administration",
    bullets: ["This app is separate from NU MOA's main systems", "NU MOA administration does not have automatic access to app data", "Only Super Admin, teachers, and students have access to the app", "NU MOA handles age verification and account eligibility (out of scope for this app)"]
  },
  {
    title: "9. Your Rights & Choices",
    subsections: [
      { label: "You Have the Right to:", bullets: ["Know what data we collect about you", "Request access to your personal information", "Ask questions about how your data is used", "Report privacy concerns"] },
      { label: "You Cannot Currently:", bullets: ["Delete your account or data (this feature will be added in the future)", "Opt-out of data collection (it's necessary to use the app)"] }
    ]
  },
  {
    title: "10. Data Breach Response",
    subsections: [
      { label: "If we discover that your data has been compromised or accessed without authorization:", bullets: ["We will work to secure the data immediately", "We will notify you and NU MOA about the breach", "We will take steps to prevent it from happening again", "We will be transparent about what happened and what data was affected"] }
    ]
  },
  {
    title: "11. Account Approval Process",
    subsections: [
      { label: "When you create a new account:", numbered: ["Your account creation details are submitted for Super Admin review", "Super Admin reviews your information (school email, student/teacher number, department, etc.)", "Super Admin approves or rejects your account", "Once approved, you can access the app's features", "Your account creation details remain in our system for record-keeping"] }
    ]
  },
  {
    title: "12. Changes to This Privacy Policy",
    body: "We may update this Privacy Policy sometimes. If we make changes, we'll let you know. Continued use of the app means you accept the updated policy."
  },
  {
    title: "13. This is a School Project",
    body: "This app was created as a school project. While we take your privacy seriously, understand that this is a learning project and may have limitations compared to professional applications."
  },
  {
    title: "14. Questions & Concerns",
    subsections: [
      { label: "If you have questions about your privacy or how we handle your data:", bullets: ["Contact your teacher or school's IT department", "Contact NU MOA's administration", "Contact the Checkmate Team"] }
    ],
    footer: "If you believe your data has been misused or your privacy has been violated, please report it immediately to your teacher or NU MOA's administration."
  },
  {
    title: "15. Summary",
    subsections: [
      { label: "In short:", bullets: ["We collect only what's necessary to run the app", "We keep your data secure", "Teachers see their students' attendance", "Students see only their own information", "Super Admin sees account details for approval", "Your data stays with us and isn't shared with others", "You have rights regarding your information"] }
    ]
  }
]

function renderSection(section, idx) {
  return (
    <div key={idx} className='mb-[24px]'>
      <h3 className='text-[16px] font-semibold text-white mb-[8px]'>{section.title}</h3>
      {section.body && <p className='text-[14px] text-[#CCCCCC] leading-relaxed mb-[8px]'>{section.body}</p>}
      {section.note && (
        <div className='pl-[16px] mb-[8px]'>
          <p className='text-[14px] font-semibold text-white mb-[4px]'>{section.note.label}</p>
          <p className='text-[14px] text-[#CCCCCC] leading-relaxed pl-[16px]'>{section.note.text}</p>
        </div>
      )}
      {section.bullets && (
        <ul className='pl-[16px] mb-[8px]'>
          {section.bullets.map((b, i) => (
            <li key={i} className='text-[14px] text-[#CCCCCC] leading-relaxed mb-[4px] flex gap-[8px]'>
              <span className='text-[#7DA183] mt-[2px] flex-shrink-0'>•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {section.subsections && section.subsections.map((sub, si) => (
        <div key={si} className='pl-[16px] mb-[8px]'>
          <p className='text-[14px] font-semibold text-white mb-[4px]'>{sub.label}</p>
          {sub.text && <p className='text-[14px] text-[#CCCCCC] leading-relaxed pl-[16px] mb-[4px]'>{sub.text}</p>}
          {sub.bullets && (
            <ul className='pl-[16px]'>
              {sub.bullets.map((b, bi) => (
                <li key={bi} className='text-[14px] text-[#CCCCCC] leading-relaxed mb-[3px] flex gap-[8px]'>
                  <span className='text-[#7DA183] mt-[2px] flex-shrink-0'>•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {sub.numbered && (
            <ol className='pl-[16px]'>
              {sub.numbered.map((b, bi) => (
                <li key={bi} className='text-[14px] text-[#CCCCCC] leading-relaxed mb-[3px] flex gap-[8px]'>
                  <span className='text-[#7DA183] flex-shrink-0 font-medium'>{bi + 1}.</span>
                  <span>{b}</span>
                </li>
              ))}
            </ol>
          )}
          {sub.subsections && sub.subsections.map((ss, ssi) => (
            <div key={ssi} className='pl-[16px] mb-[4px]'>
              <p className='text-[14px] font-semibold text-white mb-[2px]'>{ss.label}</p>
              {ss.text && <p className='text-[14px] text-[#CCCCCC] leading-relaxed pl-[16px]'>{ss.text}</p>}
            </div>
          ))}
        </div>
      ))}
      {section.footer && <p className='text-[14px] text-[#CCCCCC] leading-relaxed mt-[8px] pl-[16px]'>{section.footer}</p>}
    </div>
  )
}

const LegalModal = ({ type, onClose }) => {
  const isTerms = type === 'terms-of-service'
  const title = isTerms ? 'Terms of Service' : 'Privacy Policy'
  const subtitle = isTerms ? 'Rules and conditions for using the app' : 'Details about your data and privacy rights'
  const content = isTerms ? termsContent : privacyContent
  const lastUpdated = 'February 2, 2026'

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className='fixed inset-0 bg-black/60 z-[200] flex items-end sm:items-center justify-center'
      onClick={onClose}
    >
      <div
        className='bg-[#141414] w-full sm:max-w-[640px] sm:mx-[20px] sm:rounded-2xl rounded-t-2xl flex flex-col overflow-hidden shadow-2xl'
        style={{ maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex items-start justify-between px-[28px] pt-[28px] pb-[20px] border-b border-white/10 flex-shrink-0'>
          <div>
            <h2 className='text-[22px] font-bold text-white leading-tight'>{title}</h2>
            <p className='text-[13px] text-[#828282] mt-[4px]'>{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className='ml-[16px] mt-[2px] flex-shrink-0 w-[32px] h-[32px] rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center'
            aria-label='Close'
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M13 1L1 13" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className='overflow-y-auto px-[28px] py-[24px] flex-1'>
          {content.map((section, idx) => renderSection(section, idx))}

          <div className='border-t border-white/10 pt-[20px] mt-[8px]'>
            <p className='text-[14px] font-semibold text-white mb-[4px]'>End of {title}</p>
            <p className='text-[12px] text-[#828282] mb-[2px]'>Last Updated: {lastUpdated}</p>
            <p className='text-[12px] text-[#828282]'>Thank you for using Checkmate!</p>
          </div>
        </div>

        <div className='px-[28px] pb-[28px] pt-[16px] flex-shrink-0 border-t border-white/10 bg-[#141414]'>
          <button
            onClick={onClose}
            className='w-full h-[48px] bg-[#7DA183] hover:bg-[#A4DBAE] text-white hover:text-black font-semibold rounded-xl transition-colors text-[15px]'
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  const [copied, setCopied] = useState(false)
  const [modalType, setModalType] = useState(null)

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('theojohnsosa@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy: ', error)
    }
  }

  return (
    <>
      <footer className='flex flex-col md:flex-row justify-between w-full h-fit py-[60px] px-[50px] bg-[#7DA183]'>
        <div className='flex flex-col'>
          <h3 className='font-medium text-[#D9D9D9] mb-[10px]'>Contact Us</h3>
          <h1 className='font-semibold text-[40px] leading-[40px] text-white mb-[20px]'>Let's Discuss Your Vision.<br />Book a Call Now.</h1>
          <button className='flex items-center justify-center gap-[6px] w-[150px] h-[40px] py-[10px] px-[22px] bg-white text-[#7DA183] shadow-md font-semibold rounded-md hover:shadow-lg hover:bg-[#A4DBAE] transition-colors mb-[40px] hover:text-black' onClick={() => setModalType('book-a-call')}>
            Book a Call
          </button>
          <h3 className='font-medium text-[#D9D9D9] mb-[10px] md:mb-[20px]'>Or email us at</h3>
          <button
            onClick={handleCopyEmail}
            className='flex items-center justify-center gap-[6px] w-fit h-[40px] py-[10px] px-[22px] bg-white text-[#7DA183] shadow-md font-semibold rounded-md hover:shadow-lg hover:bg-[#A4DBAE] transition-colors mb-[50px] md:mb-[40px] hover:text-black'
          >
            {copied ? 'Copied!' : 'theojohnsosa@gmail.com'}
            {copied
              ? <span className='text-[#7DA183] text-[16px]'>✓</span>
              : <Image src={'copy.svg'} alt='Copy Icon' width={16} height={16} />
            }
          </button>
        </div>
        <div className='flex flex-row gap-[60px] mb-[50px] md:mb-[0px]'>
          <div className='flex flex-col'>
            <h3 className='font-medium text-[#D9D9D9] mb-[20px]'>Quick Links</h3>
            <button className='font-medium text-white mb-[10px] hover:underline text-left' onClick={() => handleNavClick('home')}>Home</button>
            <button className='font-medium text-white mb-[10px] hover:underline text-left' onClick={() => handleNavClick('features')}>Features</button>
            <button className='font-medium text-white mb-[10px] hover:underline text-left' onClick={() => handleNavClick('about')}>About</button>
            <button className='font-medium text-white mb-[10px] hover:underline text-left' onClick={() => handleNavClick('faqs')}>Faqs</button>
            <button className='font-medium text-white mb-[10px] hover:underline text-left'>Download</button>
            <button className='font-medium text-white hover:underline text-left'>Book a Call</button>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-medium text-[#D9D9D9] mb-[20px]'>Information</h3>
            <button
              className='font-medium text-white mb-[10px] hover:underline text-left'
              onClick={() => setModalType('terms-of-service')}
            >
              Terms of Service
            </button>
            <button
              className='font-medium text-white mb-[10px] hover:underline text-left'
              onClick={() => setModalType('privacy-policy')}
            >
              Privacy Policy
            </button>
          </div>
        </div>
        <h1 className='font-normal text-[#D9D9D9] text-center'>© Checkmate 2026. All rights reserved.</h1>
      </footer>

      {modalType === 'book-a-call' && (
        <div className='fixed inset-0 bg-black/50 z-[200] flex items-center justify-center px-[20px]' onClick={() => setModalType(null)}>
          <div className='bg-white rounded-2xl shadow-xl w-full max-w-[400px] p-[32px] flex flex-col items-center gap-[16px]' onClick={(e) => e.stopPropagation()}>
            <div className='bg-[#FFF3CD] p-[14px] rounded-full'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div className='flex flex-col items-center gap-[6px] text-center'>
              <h2 className='font-semibold text-[20px]'>Action Currently Unavailable</h2>
              <p className='text-[#9CA3AF] text-[14px] leading-relaxed'>
                This action is currently unavailable, but you can clone the GitHub repository to try the prototype locally.
              </p>
            </div>
            <button onClick={() => setModalType(null)} className='w-full mt-[8px] bg-[#7DA183] text-white font-semibold py-[10px] rounded-lg hover:bg-[#A4DBAE] transition-colors cursor-pointer'>Got it</button>
          </div>
        </div>
      )}

      {(modalType === 'terms-of-service' || modalType === 'privacy-policy') && (
        <LegalModal type={modalType} onClose={() => setModalType(null)} />
      )}
    </>
  )
}

export default Footer