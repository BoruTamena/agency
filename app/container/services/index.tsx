import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import ServiceList from './constant'
import { ArrowRight, IndentIncreaseIcon } from 'lucide-react'

const ServiceSection = () => {
  return (
    <>
      <div className=' container mx-auto flex flex-row justify-between items-center'>
        <p className='text-amber-500 capitalize text-3xl md:text-6xl font-extrabold text-center pt-6'>services</p>
        <ArrowRight/>
      </div>
      <p className=' container mx-auto font-normal text-amber-900  text-2xl md:text-5xl capitalize'>How can we help ? you pick it </p>
      <p className=' container mx-auto font-semibold pb-16 text-primary text-xl'>We have an industry experience that can turn table to your favor  </p>
      {/* Zigzag layout using flex */}
      <div className='container mx-auto grid grid-cols-12 gap-6 '>
        {ServiceList.map((item, index) => (
          <Card 
            key={index} 
            className={` col-span-12 md:col-span-3 p-4  -skew-12  shadow-none border-amber-600 outline-amber-200 ${
              index % 2 === 0 ? 'md:mt-10' : 'md:mb-10' // Zigzag effect
            }  `}
          >
            <CardHeader>
               <IndentIncreaseIcon className=' bg-neutral-800 text-amber-200 rounded-md'/>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <p>{item.overview}</p>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

export default ServiceSection
