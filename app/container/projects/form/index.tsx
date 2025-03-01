"use client"
import React from 'react'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import ProjectFormSchema from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import FormFields from './constant'


const ProjectForm = () => {
    const form = useForm<z.infer<typeof ProjectFormSchema>>({
        resolver: zodResolver(ProjectFormSchema),
        defaultValues: {
            title: "",
            project_type:"",
            description:"",
        }
    })

    const onSubmit = (values: z.infer<typeof ProjectFormSchema>) => {
        console.log(values)
    }

    return (
        <div className='container mx-auto md:w-[50%] '>
            {/* Ensure `form` is passed to Form if it's required */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="  flex flex-col items-center">
                   {
                    FormFields.map((item,index)=> <div key={index} className='w-full'>       
                   {
                    item.type=="text" && 
                    <FormField  
                        control={form.control}
                        name={item.name=="title"?"title":item.name=="project_type"?"project_type":"description"}
                        render={({ field }) => (
                        <FormItem className=' w-full p-2  mt-10'>
                            <FormLabel className='text-2xl text-amber-900 capitalize outline-2 outline-amber-500 font-bold'>{item.title}</FormLabel>
                            <FormDescription className='text-xl text-amber-950 '>
                                {item.description}
                            </FormDescription>
                            <FormControl>

                            <Input type="text"
                             className=" mt-24 p-7 outline-1 text-amber-950 "
                             placeholder={item.description} {...field} />
                             
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        )}
                    />
                
                }
                </div>
                )
                   }
                    <button type="submit" className='bg-black text-amber-600 p-2 text-center w-full rounded-md font-bold mb-10'>Submit</button>
                
                </form>
            </Form>
        </div>
    )
}

export default ProjectForm
