import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-neutral-950 text-white'>

        <div className='container mx-auto p-3'>


             <div className='grid grid-cols-3'>

                <div className=' col-span-1'>

                    <p className='pt-4  text-amber-700 font-extrabold text-2xl'>Open to fix</p>
                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam magni beatae culpa, blanditiis quo, illum tenetur obcaecati perspiciatis qui rerum aliquid sit eius excepturi aut modi reprehenderit laborum quis aliquam.</p>

                </div>

             </div>

        </div>


    </div>
  )
}

export default Footer