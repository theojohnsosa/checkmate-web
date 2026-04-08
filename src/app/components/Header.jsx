"use client"

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

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
      <header className='flex items-center justify-between w-full h-[60px] py-[15px] px-[20px] bg-[#F8F8F8] border-b-[1px] border-[#CCCCCC] mb-[20px]'>
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
          <Link href={'/download'} className='flex items-center bg-[#7DA183] w-[120px] h-[40px] py-[13px] px-[22px] font-semibold text-white rounded-md hover:bg-[#A4DBAE] transition-colors'>Download</Link>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <Image 
              src={'menu.svg'}
              alt='Hamburger Menu'
              width={22}
              height={22}
            />
        </button>
      </header>
      {menuOpen && (
        <div className='fixed top-0 right-0 h-full w-70 bg-[#F2F0EF] border-l border-[#E0E0E0] z-2 shadow-lg flex flex-col'>
          <button onClick={() => setMenuOpen(true)}>
            <Image 
              src={'menu.svg'}
              alt='Hamburger Menu'
              width={22}
              height={22}
            />
          </button>
        </div>
      )}
    </>
  )
}

export default Header