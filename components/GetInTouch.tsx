import React from 'react'
import Title from './Title'
import { HiOutlineMail, HiOutlineMailOpen, HiOutlinePhone } from 'react-icons/hi'

const GetInTouch = () => {
  return (
    <div className='text-gray-600'>
        <Title title='Get In Touch' />
        <p className='mt-5 text-medium lg:text-2xl lg:w-3/5 text-lg '>Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.</p>
        <div className='flex flex-col items-start gap-2 mt-5 text-lg '>
            {/* Add icons for email and phone */}
            <div className='flex items-center gap-4 text-base lg:text-lg'>
              <div className='border-[1px] border-black-1 rounded-full h-10 w-10 p-2 flex items-center justify-center'>
                <HiOutlineMail size={23} />
              </div>
              <a href='mailto:rajadeepak1989@gmail.com' >rajadeepak1989@gmail.com</a > 
               </div> 
               <div className='flex items-center gap-4 mt-2 text-base lg:text-lg'>
              <div className='border-[1px] border-black-1 rounded-full h-10 w-10 p-2 flex items-center justify-center'>
                <HiOutlinePhone size={23} />
              </div>
             <a href='tel:8248754223'>  +91 8248754223</a>
               </div> 
        </div>

    </div>
  )
}

export default GetInTouch