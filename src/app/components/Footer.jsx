import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className='flex flex-col md:flex-row justify-between w-full h-fit py-[60px] px-[50px] bg-[#7DA183]'>
        <div className='flex flex-col'>
          <h3 className='font-medium text-[#D9D9D9] mb-[10px]'>Contact Us</h3>
          <h1 className='font-semibold text-[40px] leading-[40px] text-white mb-[20px]'>Let's Discuss Your Vision.<br />Book a Call Now.</h1>
          <Link className='flex items-center justify-center gap-[6px] w-[150px] h-[40px] py-[10px] px-[22px] bg-white text-[#7DA183] shadow-md font-semibold rounded-md hover:shadow-lg hover:bg-[#A4DBAE] transition-colors mb-[40px] hover:text-black'
              href={'/'}>
              Book a Call
            </Link>
            <h3 className='font-medium text-[#D9D9D9] mb-[10px] md:mb-[20px]'>Or email us at</h3>
            <Link className='flex items-center justify-center gap-[6px] w-fit h-[40px] py-[10px] px-[22px] bg-white text-[#7DA183] shadow-md font-semibold rounded-md hover:shadow-lg hover:bg-[#A4DBAE] transition-colors mb-[50px] md:mb-[40px] hover:text-black'
              href={'/'}>
              theojohnsosa@gmail.com
            <Image
              src={'copy.svg'}
              alt='Copy Icon'
              width={16}
              height={16} />
            </Link>
        </div>
        <div className='flex flex-row gap-[60px] mb-[50px] md:mb-[0px]'>
          <div className='flex flex-col'>
            <h3 className='font-medium text-[#D9D9D9] mb-[20px]'>Quick Links</h3>
            <Link className='font-medium text-white mb-[10px] hover:underline' href={'/'}>Home</Link>
            <Link className='font-medium text-white mb-[10px] hover:underline' href={'/features'}>Features</Link>
            <Link className='font-medium text-white mb-[10px] hover:underline' href={'/about'}>About</Link>
            <Link className='font-medium text-white mb-[10px] hover:underline' href={'/faqs'}>Faqs</Link>
            <Link className='font-medium text-white mb-[10px] hover:underline' href={'/faqs'}>Download</Link>
            <Link className='font-medium text-white hover:underline' href={'/faqs'}>Book a Call</Link>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-medium text-[#D9D9D9] mb-[20px]'>Information</h3>
            <Link className='font-medium text-white mb-[10px] hover:underline' href={'/terms-of-service'}>Terms of Service</Link>
            <Link className='font-medium text-white mb-[10px] hover:underline' href={'/privacy-policy'}>Privacy Policy</Link>
            <Link className='font-medium text-white mb-[10px] hover:underline' href={'/cookies-settings'}>Cookies Settings</Link>
          </div>
        </div>
        <h1 className='font-normal text-[#D9D9D9] text-center'>© Checkmate 2026. All rights reserved.</h1>
      </footer>
    </>
  )
}

export default Footer