import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <main className='flex flex-col items-center w-full min-h-screen bg-[#F8F8F8] px-[20px] gap-[100px]'>

        {/* Hero Section */}
        <div className='relative flex flex-col items-center justify-center w-full h-fit bg-gradient-to-b from-[#7DA183] to-[#315136] rounded-2xl overflow-hidden shadow-2xl'>
          <Image className='w-full h-full object-cover rounded-2xl absolute inset-0 z-0'
            src='background-texture.svg'
            alt='Background Texture'
            width={1200}
            height={1031} />
          <div className='flex flex-col items-center justify-center w-fit h-fit gap-[30px] pt-[80px] relative z-10'>
            <p className='flex items-center bg-[#E3E6E3] w-[140px] h-[40px] py-[10px] px-[32px] rounded-full font-medium'>Education</p>
            <h1 className='font-semibold text-[60px] leading-[80%] text-center text-white'>Mark present. Move forward.<br />No more messy sheets</h1>
            <p className='text-white text-center text-[#D9D9D9]'>Mark attendance in seconds, spot patterns instantly, and keep everything<br />in one place – no spreadsheets, no clipboards, no hassle.</p>
            <Link className='flex items-center justify-center gap-[6px] w-[150px] h-[40px] py-[10px] px-[22px] bg-[#7DA183] shadow-md font-semibold text-white rounded-md hover:shadow-lg hover:bg-[#A4DBAE] transition-colors mb-[40px]'
              href={'/'}>
              See Semo
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

        {/* Features Section */}
        <div className='flex flex-col items-center justify-center w-full h-fit'>
          <div className='flex flex-col gap-[10px] text-center mb-[60px]'>
            <h1 className='font-semibold text-[40px] leading-[100%]'>Everything Checkmate<br />Does For You</h1>
            <p>Built for every side of the classroom – teachers who<br />need control, students who need clarity.</p>
          </div>
          <div className='grid grid-cols-3 gap-[20px] w-[1198px]'>
            <div className='flex flex-col justify-between w-full h-full rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136] px-[24px] pb-[24px] pt-[74px] gap-[24px]'>
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
            <div className='flex flex-col justify-between w-full h-full rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136] px-[24px] pt-[24px] gap-[24px]'>
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
            <div className='flex flex-col justify-between w-full h-full rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136] px-[24px] pb-[24px] pt-[74px] gap-[24px]'>
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
            <div className='w-full h-[440px] rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136]'></div>
            <div className='w-full h-[440px] rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136]'></div>
            <div className='w-full h-[440px] rounded-2xl shadow-lg bg-gradient-to-b from-[#7DA183] to-[#315136]'></div>
          </div>
        </div>

      </main>
    </>
  )
}

export default page