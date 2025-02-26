"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GitPullRequestArrow,  RouteIcon, Workflow } from 'lucide-react'
import React from 'react'

const ApproachList=[
    {
        title:"Project request",
        description:"You send a project request by sending your project idea",
        icon:GitPullRequestArrow,
    },
    {
        title:"We build",
        description:"We build a free project proposal and send it back to you ",
        icon:Workflow,
    },
    {
        title:"Refine ",
        description:"we develope and implement the project with a CI/CD approach",
        icon: RouteIcon,
    }
]
const Approach = () => {
  return (
    <div className='grid grid-cols-12'>


    {
        ApproachList.map((item,index)=><Card key={index} className=' col-span-12 md:col-span-4 bg-inherit border-none shadow-none'>

            <div className='flex flex-row space-x-3 items-center'>

                <div className=' col-span-1 bg-amber-200 h-auto p-3 rounded-md'>
                    <item.icon/>
                </div>
                <div className='col-span-10'>
                    <CardHeader>
                        <CardTitle className='text-white '>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            <p className='font-semibold '>{item.description}</p>
                        </CardDescription>
                    </CardContent>
                </div>

            </div>

        </Card>)
    }
        
    </div>
  )
}

export default Approach