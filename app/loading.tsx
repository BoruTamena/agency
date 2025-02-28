"use client"

import React, { useEffect, useState } from 'react'
import Logo from './container/logo'



const Loading = () => {

const [load, setLoading] = useState<boolean>(true);


useEffect(()=>{
  const timer = setTimeout(() => setLoading(true), 5000); // 1 second delay
  return () => clearTimeout(timer);
},[])

 

  
  return (
   <>
    {
      load && 
      <div className='container mx-auto flex flex-col items-center justify-center w-full h-screen'>

        <Logo/>
         <p className='text-amber-900 font-bold  mt-1'>Loading...</p>
    </div>
    }
  
   </>
  )
}


export default Loading