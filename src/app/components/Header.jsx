"use client"

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return (
    <>
      <header className='flex items-center justify-between w-full h-[60px] py-[15px] px-[20px] bg-[#F8F8F8] border-b-[1px] border-[#CCCCCC] mb-[20px] sticky top-0 z-50 shadow-lg'>
        <div className='w-fit h-fit'>
          <Link href={'/'}>
            <Image
            src={'/header-logo.svg'}
            alt='Checkmate Logo'
            width={110}
            height={30} />
          </Link>
        </div>
        <div className='w-fit h-fit'>
          <nav className='flex gap-[20px] hidden md:flex'>
            <Link href={'/'} className='font-semibold'>Home</Link>
            <Link href={'/features'} className='hover:font-semibold hover:underline'>Features</Link>
            <Link href={'/about'} className='hover:font-semibold hover:underline'>About</Link>
            <Link href={'/faqs'} className='hover:font-semibold hover:underline'>Faqs</Link>
          </nav>
        </div>
        <div className='items-center gap-[20px] hidden md:flex'>
          <Link href={'/login'} className='hover:font-semibold'>Login</Link>
          <button onClick={() => setShowModal(true)} className='flex items-center bg-[#7DA183] w-[120px] h-[40px] py-[13px] px-[22px] font-semibold text-white rounded-md hover:bg-[#A4DBAE] transition-colors'>Download</button>
        </div>
        <button className="md:hidden hover:cursor-pointer" onClick={() => setMenuOpen(true)}>
            <Image 
              src={'menu.svg'}
              alt='Hamburger Menu'
              width={22}
              height={22}
            />
        </button>
      </header>
      {menuOpen && (
        <div className='fixed top-0 right-0 h-full w-70 bg-[#F2F0EF] border-l border-[#E0E0E0] z-100 shadow-lg flex flex-col py-[20px] px-[20px]'>
          <button className='flex justify-end hover:cursor-pointer' onClick={() => setMenuOpen(false)}>
            <Image 
              src={'close.svg'}
              alt='Close'
              width={22}
              height={22}
            />
          </button>
          <Image className='flex mt-[40px]' 
            src={'sidebar-logo.svg'}
            alt='Checkmate Logo'
            width={160}
            height={46} />
          <div className='flex flex-col mt-[50px] leading-[50px]'>
            <Link href='/' className={pathname === '/' ? 'text-[40px] font-semibold' : 'text-[40px] text-[#CCC3C3] hover:text-[#777777] hover:font-medium transition-colors'}>HOME</Link>
            <Link href='/features' className={pathname === '/features' ? 'text-[40px] font-semibold' : 'text-[40px] text-[#CCC3C3] hover:text-[#777777] hover:font-medium transition-colors'}>FEATURES</Link>
            <Link href='/about' className={pathname === '/about' ? 'text-[40px] font-semibold' : 'text-[40px] text-[#CCC3C3] hover:text-[#777777] hover:font-medium transition-colors'}>ABOUT</Link>
            <Link href='/faqs' className={pathname === '/faqs' ? 'text-[40px] font-semibold' : 'text-[40px] text-[#CCC3C3] hover:text-[#777777] hover:font-medium transition-colors'}>FAQS</Link>
          </div>
          <div className='flex flex-col items-center justify-center gap-[10px] mt-auto'>
            <p className='text-black'>View source code <span className='text-[#006EF4] underline'><Link href={'https://github.com/theojohnsosa/checkmate'}>here</Link></span></p>
            <Link href={'/'} className='flex items-center justify-center bg-white text-[#7DA183] border-[2px] border-[#7DA183] rounded-lg py-[10px] px-[60px] font-semibold w-full hover:bg-[#7DA183] hover:text-white hover:shadow-lg transition-colors'>Download</Link>
            <Link href={'/'} className='flex items-center justify-center bg-[#7DA183] text-white rounded-lg py-[10px] px-[60px] font-semibold w-full hover:bg-white hover:text-[#7DA183] hover:border-[#7DA183] hover:shadow-lg hover:bg-[#A4DBAE] transition-colors'>Get Started</Link>
          </div>
        </div>
      )}

      {showModal && (
        <div className='fixed inset-0 bg-black/50 z-[200] flex items-center justify-center px-[20px]' onClick={() => setShowModal(false)}>
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
              <p className='text-[#9CA3AF] text-[14px] leading-relaxed'>The download isn't available just yet. Check back soon or visit the GitHub repository to get the source code directly.</p>
            </div>
            <button onClick={() => setShowModal(false)} className='w-full mt-[8px] bg-[#7DA183] text-white font-semibold py-[10px] rounded-lg hover:bg-[#A4DBAE] transition-colors cursor-pointer'> Got it</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Header