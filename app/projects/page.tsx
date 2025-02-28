"use client"
import React, { Suspense } from 'react'
import ProjectForm from '../container/projects/form'
import NavBar from '../container/nav_bar'
import Loading from '../loading'



const page = () => {



  return (
    <Suspense fallback={<Loading/>}>
    <NavBar/>
    <ProjectForm/>
        
    
    </Suspense>
    
  
  )
}

export default page