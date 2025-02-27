"use client"

import React from 'react'
import Logo from './container/logo'



const loading = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center w-full h-screen'>

        <Logo/>
       <p>loading...</p>
    </div>
  )
}


export default loading