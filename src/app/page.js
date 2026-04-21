"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

const faqs = [
  {
    question: "What is Checkmate?",
    answer: "Checkmate is an attendance tracking application designed to help educators and students manage classroom attendance efficiently. It provides real-time insights into attendance patterns and helps maintain accurate records."
  },
  {
    question: "Who is Checkmate for?",
    answer: "Checkmate is built for teachers and students. Teachers can create classes, manage attendance sessions, and monitor real-time check-ins, while students can join classes, mark their attendance, and track their own history and streaks."
  },
  {
    question: "Is Checkmate free to use?",
    answer: "Checkmate is completely free to use. It was built and developed as a school project, and is open source — meaning other developers are welcome to use it as a template, contribute to it, or build on top of it. You can find the full source code on GitHub."
  },
  {
    question: "What devices does Checkmate support?",
    answer: "Checkmate is available as a native Android app (API Level 21+), which covers most Android phones and tablets running Android 5.0 Lollipop and above. A web version is also available via the landing page."
  },
  {
    question: "Is my data safe?",
    answer: "Yes. Checkmate uses Firebase Authentication for secure sign-in and Firebase Firestore for cloud data storage — both of which are backed by Google's security infrastructure. Your attendance records and account information are protected at every step"
  },
  {
    question: "How can I get in touch or request support?",
    answer: "You can open an issue directly on the Checkmate GitHub repository at github.com/theojohnsosa/checkmate/issues for bug reports, feature requests, or general questions."
  },
]

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-col w-full bg-white px-[24px] py-[18px] rounded-xl shadow-sm cursor-pointer transition-all duration-200 ${isOpen ? 'border border-[#7DA183]' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className='flex items-center justify-between w-full'>
          <h1 className='font-medium text-base'>{question}</h1>
          <Image className={`transition-transform duration-200 flex-shrink-0 ml-[12px] ${isOpen ? 'rotate-180' : ''}`}
            src={'arrow-down.svg'}
            alt='Arrow Down'
            width={20}
            height={20} />
        </div>
        {isOpen && (
          <p className='mt-[14px] text-[#9CA3AF] text-[15px] leading-relaxed'>{answer}</p>
        )}
      </div>
    </>
  )
}

const page = () => {

  return (
    <>
      <main className='flex flex-col items-center w-full px-[20px] min-h-screen bg-[#F8F8F8] gap-[70px] md:gap-[100px]'>

        <div id='home' className='relative flex flex-col items-center justify-center w-full h-fit bg-gradient-to-b from-[#7DA183] to-[#315136] rounded-2xl overflow-hidden shadow-2xl'>
          <Image className='w-full h-full object-cover rounded-2xl absolute inset-0 z-0'
            src='background-texture.svg'
            alt='Background Texture'
            width={1200}
            height={1031} />
          <div className='flex flex-col items-center justify-center w-full h-fit gap-[20px] md:gap-[30px] pt-[80px] px-[24px] md:px-[40px] relative z-10'>
            <p className='flex items-center justify-center bg-[#E3E6E3] w-[107px] md:w-[140px] h-[30px] md:h-[40px] py-[10px] px-[32px] text-[12px] md:text-[16px] rounded-full font-medium'>Education</p>
            <h1 className='font-semibold text-[40px] sm:text-[50px] md:text-[60px] leading-[90%] text-center text-white w-full max-w-[700px]'>Mark present. Move forward. No more messy sheets</h1>
            <p className='text-white text-center text-[14px] md:text-base max-w-[480px]'>Mark attendance in seconds, spot patterns instantly, and keep everything in one place – no spreadsheets, no clipboards, no hassle.</p>
            <Link className='flex items-center justify-center gap-[6px] w-[150px] h-[40px] py-[10px] px-[22px] bg-[#7DA183] shadow-md font-semibold text-white rounded-md hover:shadow-lg hover:bg-[#A4DBAE] transition-colors mb-[40px]'
              href={'/'}>
              See Demo
              <Image
                src={'arrow.svg'}
                alt='Right Arrow'
                width={16}
                height={16} />
            </Link>
            <Image
              src={'hero-image.svg'}
              alt='Checkmate Mockup'
              width={1120}
              height={529} />
          </div>
        </div>

        <div id='features' className='scroll-mt-[80px] flex flex-col items-center justify-center w-full h-fit'>
          <div className='flex flex-col gap-[10px] text-center mb-[30px] md:mb-[60px]'>
            <h1 className='font-semibold text-[36px] md:text-[40px] leading-[100%]'>Everything Checkmate<br />Does For You</h1>
            <p className='text-[14px] md:text-[16px]'>Built for every side of the classroom – teachers who<br />need control, students who need clarity.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-[20px] w-full'>
            <div className='flex flex-col justify-between w-full rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136] px-[24px] pb-[24px] pt-[74px] gap-[24px]'>
              <Image className='mx-auto'
                src={'attendance-streak.svg'}
                alt='Mockup'
                width={300}
                height={232} />
              <div className='flex flex-col'>
                <h1 className='font-semibold text-[24px] text-white mb-[4px]'>Attendance Streak</h1>
                <p className='text-[#D9D9D9]'>Keep your streak alive – every on-time check-in counts toward your record.</p>
              </div>
            </div>
            <div className='flex flex-col justify-between w-full rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136] px-[24px] pt-[24px] gap-[24px]'>
              <div className='flex flex-col'>
                <h1 className='font-semibold text-[24px] text-white mb-[4px]'>Class Creation</h1>
                <p className='text-[#D9D9D9]'>Set up your class in seconds and let students join instantly – no complicated setup, no back-and-forth.</p>
              </div>
              <Image className='mx-auto'
                src={'class-creation.svg'}
                alt='Mockup'
                width={207}
                height={343} />
            </div>
            <div className='flex flex-col justify-between w-full rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136] px-[24px] pb-[24px] pt-[74px] gap-[24px]'>
              <Image className='mx-auto'
                src={'seat-plan.svg'}
                alt='Mockup'
                width={300}
                height={232} />
              <div className='flex flex-col'>
                <h1 className='font-semibold text-[24px] text-white mb-[4px]'>Seat Plan</h1>
                <p className='text-[#D9D9D9]'>Assign seats, know exactly who's where, and make every session more organized.</p>
              </div>
            </div>
            <div className='flex flex-col justify-between w-full rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136] px-[24px] pt-[74px] pb-[24px] gap-[24px]'>
              <Image className='mx-auto'
                src={'false-attendance.svg'}
                alt='Mockup'
                width={303}
                height={232} />
              <div className='flex flex-col'>
                <h1 className='font-semibold text-[24px] text-white mb-[4px]'>False Attendance</h1>
                <p className='text-[#D9D9D9]'>Flags suspicious check-ins so teachers always know attendance is accurate and honest.</p>
              </div>
            </div>
            <div className='flex flex-col justify-between w-full rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136] px-[24px] pt-[24px] gap-[24px]'>
              <div className='flex flex-col'>
                <h1 className='font-semibold text-[24px] text-white mb-[4px]'>Early Bird Leaderboards</h1>
                <p className='text-[#D9D9D9]'>See who's consistently showing up early – a little friendly competition never hurt anyone.</p>
              </div>
              <Image className='mx-auto'
                src={'leaderboards.svg'}
                alt='Mockup'
                width={207}
                height={343} />
            </div>
            <div className='flex flex-col justify-between w-full rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136] px-[24px] pt-[74px] pb-[24px] gap-[24px]'>
              <Image className='mx-auto'
                src={'class-management.svg'}
                alt='Mockup'
                width={305}
                height={243} />
              <div className='flex flex-col'>
                <h1 className='font-semibold text-[24px] text-white mb-[4px]'>Class Management</h1>
                <p className='text-[#D9D9D9]'>View, edit, and organize all your classes in one place – everything under control, always.</p>
              </div>
            </div>
          </div>
        </div>

        <div id='about' className='scroll-mt-[80px] flex flex-col items-center justify-center w-full h-fit bg-[#7DA183] py-[40px] px-[20px] md:px-[40px] rounded-xl'>
          <div className='flex flex-col gap-[10px] text-center mb-[40px] md:mb-[60px]'>
            <h1 className='font-semibold text-[36px] md:text-[40px] text-white leading-[100%]'>The Story Behind<br />Checkmate</h1>
            <p className='text-white text-[14px] md:text-[16px]'>Checkmate didn't come from a boardroom – it came from a classroom.<br className='hidden md:block' />Built by people who knew there had to be a better way.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full'>
            <div className='w-full h-fit p-[30px] bg-white rounded-xl'>
              <div className='flex flex-row items-center gap-[14px] mb-[20px]'>
                <div className='bg-[#7DA183] p-[10px] rounded-xl flex-shrink-0'>
                  <Image
                    src={'problem.svg'}
                    alt='Alert'
                    width={40}
                    height={40}
                  />
                </div>
                <h1 className='font-medium text-[20px]'>The Problem</h1>
              </div>
              <p>Classrooms were drowning in clipboards and spreadsheets. Teachers wasted precious minutes on roll call. Students found ways to slip through the cracks. Something had to change.</p>
            </div>
            <div className='w-full h-fit p-[30px] bg-white rounded-xl'>
              <div className='flex flex-row items-center gap-[14px] mb-[20px]'>
                <div className='bg-[#7DA183] p-[10px] rounded-xl flex-shrink-0'>
                  <Image
                    src={'idea.svg'}
                    alt='Idea'
                    width={40}
                    height={40}
                  />
                </div>
                <h1 className='font-medium text-[20px]'>The Idea</h1>
              </div>
              <p>What if attendance could track itself? What if students were actually motivated to show up on time? Checkmate was born from those questions — built by students who lived the problem firsthand.</p>
            </div>
            <div className='w-full h-fit p-[30px] bg-white rounded-xl'>
              <div className='flex flex-row items-center gap-[14px] mb-[20px]'>
                <div className='bg-[#7DA183] p-[10px] rounded-xl flex-shrink-0'>
                  <Image
                    src={'mission.svg'}
                    alt='Mission'
                    width={40}
                    height={40}
                  />
                </div>
                <h1 className='font-medium text-[20px]'>The Mission</h1>
              </div>
              <p>Today, Checkmate is a platform built for both teachers and students. Less busywork, more accountability, and a smarter classroom experience — one check-in at a time.</p>
            </div>
          </div>
        </div>

        <div id='faqs' className='scroll-mt-[80px] flex flex-col items-center justify-center w-full h-fit mb-[100px]'>
          <div className='flex flex-col gap-[10px] text-center mb-[30px] px-[10px]'>
            <h1 className='font-semibold text-[32px] md:text-[40px] leading-[100%]'>All You Need To Know<br />About Checkmate</h1>
            <p>Frequently Asked Questions</p>
          </div>
          <div className='flex flex-row items-center justify-center gap-[20px]'>
            <Link className='flex items-center justify-center w-[150px] h-[40px] py-[10px] px-[20px] bg-[#7DA183] shadow-md font-semibold text-white rounded-md hover:shadow-lg hover:bg-[#A4DBAE] transition-colors mb-[40px]'
              href={'/'}>
              Get started
            </Link>
            <Link className='flex items-center justify-center w-[150px] h-[40px] py-[10px] px-[20px] bg-[#FFFFFF] border border-[#7DA183] shadow-md font-semibold text-black rounded-md hover:shadow-lg hover:bg-[#A4DBAE] transition-colors mb-[40px]'
              href={'/'}>
              Book a Call
            </Link>
          </div>
          <div className='flex flex-col items-center w-full md:w-[800px] h-fit gap-[10px] md:gap-[20px]'>
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

      </main>
    </>
  )
}

export default page