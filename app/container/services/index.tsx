import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import ServiceList from './constant'
import { ArrowRight } from 'lucide-react'

const ServiceSection = () => {
  return (
    <>
      <div className=' container mx-auto flex flex-row justify-between items-center'>
        <p className='text-amber-500 capitalize text-2xl font-bold text-center pt-6'>services</p>
        <ArrowRight/>
      </div>
      <p className=' container mx-auto font-medium  '>How can we help ? you pick it </p>
      <p className=' container mx-auto font-normal pb-16'>We have an industry experience that can change your ideas  </p>
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
