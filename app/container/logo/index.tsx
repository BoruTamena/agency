"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/" className='font-bold text-xl mr-10  flex space-x-2 items-center'>
    <Image width={30} height={20} src="/OpenToFix.svg" alt="LOGO" className=' rounded-md'/>
    <p className='uppercase'>opento <span className='text-amber-600 text-xl'>fix</span></p>
    </Link>

  )
}

export default Logo