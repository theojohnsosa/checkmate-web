"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <main className='flex flex-col items-center w-full px-[20px] min-h-screen bg-[#F8F8F8] gap-[70px] md:gap-[100px]'>
        <div className='relative flex flex-col items-center justify-center w-full h-fit bg-gradient-to-b from-[#7DA183] to-[#315136] rounded-2xl overflow-hidden shadow-2xl'>
          <Image className='w-full h-full object-cover rounded-2xl absolute inset-0 z-0'
            src='background-texture.svg'
            alt='Background Texture'
            width={1200}
            height={1031} />
          <div className='flex flex-col items-center justify-center w-fit h-fit gap-[20px] md:gap-[30px] pt-[80px] relative z-10'>
            <p className='flex items-center justify-center bg-[#E3E6E3] w-[107px] md:w-[140px] h-[30px] md:h-[40px] py-[10px] px-[32px] text-[12px] md:text-[16px] rounded-full font-medium'>Education</p>
            <h1 className='font-semibold text-[50px] md:text-[60px] leading-[85%] text-center text-white w-100 md:w-fit'>Mark present. Move forward.<br />No more messy sheets</h1>
            <p className='text-white text-center text-[#D9D9D9] text-[14px] md:text-normal'>Mark attendance in seconds, spot patterns instantly, and keep everything<br />in one place – no spreadsheets, no clipboards, no hassle.</p>
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
        <div className='flex flex-col items-center justify-center w-full h-fit'>
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
        <div className='flex flex-col items-center justify-center w-full h-fit bg-[#7DA183] py-[40px] rounded-xl'>
          <div className='flex flex-col gap-[10px] text-center mb-[60px]'>
            <h1 className='font-semibold text-[36px] md:text-[40px] text-white leading-[100%]'>The Story Behind<br />Checkmate</h1>
            <p className='text-white text-[14px] md:text-[16px]'>Checkmate didn't come from a boardroom – it came from a classroom.<br />Built by people who knew there had to be a better way.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-[20px] w-fit'>
            <div className='w-[368] h-fit p-[30px] bg-white rounded-xl'>
              <div className='flex flex-row items-center gap-[14px] mb-[20px]'>
                <div className='bg-[#7DA183] p-[10px] rounded-xl'>
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
            <div className='w-[368] h-fit p-[30px] bg-white rounded-xl'>
              <div className='flex flex-row items-center gap-[14px] mb-[20px]'>
                <div className='bg-[#7DA183] p-[10px] rounded-xl'>
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
            <div className='w-[368] h-fit p-[30px] bg-white rounded-xl'>
              <div className='flex flex-row items-center gap-[14px] mb-[20px]'>
                <div className='bg-[#7DA183] p-[10px] rounded-xl'>
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
        <div className='flex flex-col items-center justify-center w-full h-fit mb-[100px]'>
          <div className='flex flex-col gap-[10px] text-center mb-[30px]'>
            <h1 className='font-semibold text-[40px] leading-[100%]'>All You Need To Know<br />About Checkmate</h1>
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
          <div className='flex flex-col items-center w-[400px] md:w-[800px] h-fit gap-[10px] md:gap-[20px]'>
            <div className='flex items-center justify-between w-full h-[60px] bg-white px-[24px] rounded-xl shadow-sm'>
              <h1 className='font-medium text-base'>What is Checkmate?</h1>
              <Image src={'arrow-down.svg'} alt='Arrow Down' width={20} height={20} />
            </div>
            <div className='flex items-center justify-between w-full h-[60px] bg-white px-[24px] rounded-xl shadow-md'>
              <h1 className='font-medium text-base'>Who is Checkmate for?</h1>
              <Image src={'arrow-down.svg'} alt='Arrow Down' width={20} height={20} />
            </div>
            <div className='flex items-center justify-between w-full h-[60px] bg-white px-[24px] rounded-xl shadow-md'>
              <h1 className='font-medium text-base'>Is Checkmate free to use?</h1>
              <Image src={'arrow-down.svg'} alt='Arrow Down' width={20} height={20} />
            </div>
            <div className='flex items-center justify-between w-full h-[60px] bg-white px-[24px] rounded-xl shadow-md'>
              <h1 className='font-medium text-base'>What devices does Checkmate support?</h1>
              <Image src={'arrow-down.svg'} alt='Arrow Down' width={20} height={20} />
            </div>
            <div className='flex items-center justify-between w-full h-[60px] bg-white px-[24px] rounded-xl shadow-md'>
              <h1 className='font-medium text-base'>Is my data safe?</h1>
              <Image src={'arrow-down.svg'} alt='Arrow Down' width={20} height={20} />
            </div>
            <div className='flex items-center justify-between w-full h-[60px] bg-white px-[24px] rounded-xl shadow-md'>
              <h1 className='font-medium text-base'>How can I get in touch or request support?</h1>
              <Image src={'arrow-down.svg'} alt='Arrow Down' width={20} height={20} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default page