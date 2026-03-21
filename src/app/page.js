import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <main className='flex flex-col items-center w-full min-h-screen bg-[#F8F8F8] px-[20px]'>
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
      </main>
    </>
  )
}

export default page