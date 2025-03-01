"use client "
import React from 'react'
import NavBar from '../container/nav_bar'
import {PackageCheckIcon, TestTubeDiagonal, Workflow } from 'lucide-react'

import Link from 'next/link'
import Footer from '../container/footer'




const page = () => {

  const approach=[
    {
      title:"Understanding Your Needs ",
      desc:"We analyze your business requirements.",
      icon:Workflow

    },
    {
      title:"Crafting a Tailored Solution",
      desc:"We design a system that fits your goals",  
      icon:PackageCheckIcon
    },

    {
      title:"Development & Testing",
      desc:" Quality-driven, iterative development process.",  
      icon:TestTubeDiagonal
    },
   
  ]
  return (
    <>
    
    <NavBar/>
    <div className=' bg-yellow-100'>


    {/* About */}
    <section className='container mx-auto p-3  md:p-0   pb-10 md:pb-0'>
      <div className="flex flex-col justify-items-center ">
        <p className=' text-amber-950 font-bold capitalize text-2xl md:text-xl md:mt-10 mt-3'>about us </p>
        <p className='text-3xl md:text-5xl font-bold  text-balance hyphens-auto mt-1 mb-5 md:mb-0  md:w-[70%]'> <span className='text-amber-600 font-extrabold'>Empowering </span>Businesses with Innovative <span className='text-amber-600'>Software Solutions</span></p>
        {/* <p className='p-2 text-xl text-pretty capitalize '> Thanks for your interest in our company! We specialize in fullstack development, API integration, web solutions, and IT consulting to drive your success.</p> */}

         <div className='md:bg-gradient-to-tl md:from-amber-200 md:to-amber-400 md:rounded-md md:shadow-md flex flex-row md:justify-around   md:space-y-0  md:space-x-3 relative   md:-bottom-20'>
          <div  className='p-2 md:p-6  -ml-4 '>
            <p className='md:text-7xl text-3xl font-black text-center  '>10 <span className='text-amber-800 '>{"+"}</span> </p> 
            <p className='text-amber-950 md:text-xl font-extrabold uppercase text-wrap text-center'>OnGoing Projects</p>
          </div>
          <div  className=' p-2 md:p-6 '>
            <p className='md:text-7xl text-3xl font-black text-center '>20 <span className='text-amber-800'>{"+"}</span> </p> 
            <p className='text-amber-950 md:text-xl font-extrabold uppercase text-wrap text-center'>Completed Projects</p>
          </div>
          <div  className=' p-2  md:p-6 '>
            <p className='md:text-7xl text-3xl font-black text-center '>3 <span className='text-amber-800'>{"+"}</span> </p> 
            <p className='text-amber-950 md:text-xl font-extrabold uppercase text-wrap text-center'>Incoming Projects</p>
          </div> 
          </div>
     
      </div>
    </section>    
    </div>

{/* 
    <section className='container mx-auto mt-10  md:mt-32 p-3 md:p-0'>

      <p className='capitalize text-3xl font-bold pt-4 text-amber-600'>who are we </p>

      <div className='grid grid-cols-12 gap-2 md:gap-10  '>

        <div className=' col-span-12 md:col-span-6 '>
          <p className="text-xl font-medium text-justify tracking-normal hyphens-auto capitalize mt-3">
            At <strong>opentofix</strong>, we are passionate about crafting cutting-edge digital solutions tailored to your needs. 
            Our team of experienced developers and consultants works closely with businesses to transform ideas into reality.
         </p>
        </div>

        <div className=' col-span-12 md:col-span-6'>

          {
            approach.map((item,index)=><div key={index} className=' mt-1 p-2 bg-amber-100 rounded-md'>
                
                <div className='bg-black/25 p-2 rounded-md w-11'>
                    <Workflow/>
                </div>
                
                <p className='text-xl font-bold mt-2 uppercase'>{item.title}</p>
                <p className='text-[15px]'>{item.desc}</p>
              </div>)
          }
          
        </div>
        
      </div>
    </section> */}

<section className='container mx-auto mt-10 md:mt-32 p-3 md:p-0'>

<p className='capitalize text-3xl font-bold pt-4 text-amber-600'>who are we</p>

<div className='grid grid-cols-12 gap-2 md:gap-10'>

  <div className='col-span-12 md:col-span-6 max-w-prose'>
    <p className="text-xl font-medium text-justify text-balance leading-relaxed tracking-normal hyphens-auto capitalize mt-3">
      At <strong>opentofix</strong>, we are passionate about crafting cutting-edge digital solutions tailored to your needs. 
      Our team of experienced developers and consultants works closely with businesses to transform ideas into reality.
    </p>
  </div>

  <div className='col-span-12 md:col-span-6'>
    {
      approach.map((item, index) => (
        <div key={index} className='mt-1 p-2 bg-amber-100 rounded-md'>

          <div className='bg-amber-50 p-2 rounded-md w-11'>
            <item.icon/>
          </div>

          <p className='text-xl font-bold mt-2 uppercase'>{item.title}</p>
          <p className='text-[15px]'>{item.desc}</p>
        </div>
      ))
    }
  </div>

</div>
</section>


    <section className=' bg-gradient-to-r from-amber-400 to-amber-600 container mx-auto mt-10 mb-10 md:rounded-md p-10 text '>

     <p className='text-black font-black text-3xl uppercase'> Our Vision</p>

     <p className='text-black text-2xl capitalize font-medium mb-5 mt-3'>To empower businesses with technology-driven solutions that create lasting impact.</p>

      <Link href="/contact" className='p-4 bg-black text-amber-50 rounded-md  text-center w-[70px] capitalize hover:bg-amber-950'>Get In touch </Link>
    
    </section>

    <Footer/>
    </>
   
  )
}

export default page 