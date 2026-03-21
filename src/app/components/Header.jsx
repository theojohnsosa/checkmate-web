import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
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
          <nav className='flex gap-[20px]'>
            <Link href={'/'} className='font-semibold'>Home</Link>
            <Link href={'/features'} className='hover:font-semibold hover:underline'>Features</Link>
            <Link href={'/about'} className='hover:font-semibold hover:underline'>About</Link>
            <Link href={'/faqs'} className='hover:font-semibold hover:underline'>Faqs</Link>
          </nav>
        </div>
        <div className='flex items-center gap-[20px]'>
          <Link href={'/login'} className='hover:font-semibold'>Login</Link>
          <Link href={'/download'} className='flex items-center bg-[#7DA183] w-[120px] h-[40px] py-[13px] px-[22px] font-semibold text-white rounded-md hover:bg-[#A4DBAE] transition-colors'>Download</Link>
        </div>
      </header>
    </>
  )
}

export default Header