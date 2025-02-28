"use client "
import React from 'react'
import NavBar from '../container/nav_bar'
import { Workflow } from 'lucide-react'

import Link from 'next/link'
import Footer from '../container/footer'



const page = () => {

  const approach=[
    {
      title:"Understanding Your Needs ",
      desc:"We analyze your business requirements.",
     

    },
    {
      title:"Crafting a Tailored Solution",
      desc:"We design a system that fits your goals",  
    },

    {
      title:"Development & Testing",
      desc:" Quality-driven, iterative development process.",  
    },
   
  ]
  return (
    <>
    
    <NavBar/>
    <div className=' bg-yellow-100'>


    {/* About */}
    <section className='container mx-auto p-3 md:p-0  md:w-[70%]'>
      <div className="flex flex-col justify-items-center">
        <p className=' text-amber-700 font-bold capitalize text-3xl md:text-5xl mt-4'>about us </p>
        <p className='text-4xl md:text-5xl font-extrabold uppercase text-pretty mt-5'>Empowering Businesses with Innovative Software Solutions</p>
        {/* <p className='p-2 text-xl text-pretty capitalize '> Thanks for your interest in our company! We specialize in fullstack development, API integration, web solutions, and IT consulting to drive your success.</p> */}

         <div className='flex flex-col md:flex-row justify-between space-y-3 md:space-y-0  md:space-x-3 relative -bottom-20'>
          <div  className=' bg-gradient-to-tl from-amber-50 to-amber-950 p-3 rounded-md shadow-md '>
            <p className='text-7xl font-black text-center text-white '>20 <span className='text-amber-800 '>{"+"}</span> </p> 
            <p className='text-amber-400 text-3xl font-extrabold uppercase text-wrap text-center'>OnGoing Projects</p>
          </div>
          <div  className='bg-slate-50 p-3 rounded-md'>
            <p className='text-7xl font-black text-center '>20 <span className='text-amber-800'>{"+"}</span> </p> 
            <p className='text-amber-400 text-3xl font-extrabold uppercase text-wrap text-center'>Completed Projects</p>
          </div>
          <div  className='bg-slate-50 p-3 rounded-md'>
            <p className='text-7xl font-black text-center '>20 <span className='text-amber-800'>{"+"}</span> </p> 
            <p className='text-amber-400 text-3xl font-extrabold uppercase text-wrap text-center'>Completed Projects</p>
          </div> 
          </div>
     
      </div>
    </section>    
    </div>


    <section className='container mx-auto  mt-32 p-3 md:p-0'>

      <p className='capitalize text-3xl font-bold pt-4'>who are we </p>

      <div className='grid grid-cols-12 gap-2  '>

        <div className=' col-span-12 md:col-span-6 '>
          <p className="text-xl font-medium text-balance capitalize mt-3">
            At <strong>opentofix</strong>, we are passionate about crafting cutting-edge digital solutions tailored to your needs. 
            Our team of experienced developers and consultants works closely with businesses to transform ideas into reality.
         </p>
        </div>

        <div className=' col-span-12 md:col-span-6'>

          {
            approach.map((item,index)=><div key={index} className=' mt-1 p-2 bg-amber-100 rounded-md'>
                <Workflow/>
                <p className='text-xl font-bold'>{item.title}</p>
                <p>{item.desc}</p>
              </div>)
          }
          
        </div>
        
      </div>
    </section>

    <section className=' bg-gradient-to-r from-amber-400 to-amber-600 container mx-auto mt-10 mb-10 md:rounded-md p-10 '>

     <p className='text-black font-black text-3xl uppercase'> Our Vision</p>

     <p className='text-black text-2xl capitalize font-medium mb-5 mt-3'>To empower businesses with technology-driven solutions that create lasting impact.</p>

      <Link href="/contact" className='p-4 bg-black text-amber-50 rounded-md  text-center w-[70px] capitalize hover:bg-amber-950'>Get In touch </Link>
    
    </section>

    <Footer/>
    </>
   
  )
}

export default page 