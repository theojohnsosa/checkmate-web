"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

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
            <Link className='font-medium text-white mb-[10px] hover:underline' href={'/terms-of-service'}>Terms of Service</Link>
            <Link className='font-medium text-white mb-[10px] hover:underline' href={'/privacy-policy'}>Privacy Policy</Link>
            <Link className='font-medium text-white mb-[10px] hover:underline' href={'/cookies-settings'}>Cookies Settings</Link>
          </div>
        </div>
        <h1 className='font-normal text-[#D9D9D9] text-center'>© Checkmate 2026. All rights reserved.</h1>
      </footer>

      {modalType && (
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
    </>
  )
}

export default Footer