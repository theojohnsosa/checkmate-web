"use client"

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
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
    </>
  )
}

export default Header