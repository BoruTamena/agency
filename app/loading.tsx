"use client"

import React, { useState } from 'react'
import Logo from './container/logo'



const Loading = () => {

const [load, setLoading] = useState<boolean>(true);


  setTimeout(()=>{
    setLoading(false)
  },5000)

  
  return (
   <>
    {
      load && 
      <div className='container mx-auto flex flex-col items-center justify-center w-full h-screen'>

        <Logo/>
       <p>loading...</p>
    </div>
    }
  
   </>
  )
}


export default Loading