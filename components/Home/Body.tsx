"use client";
import Image from 'next/image'
import React from 'react'
import ProfilePic from "@/assets/linkedinprofilepic.jpg"
import { Button } from '../ui/button'
import Contacts from '../Contacts'
import {  usePathname } from 'next/navigation'
import GetInTouch from '../GetInTouch'

const Body = () => {

    const pathName = usePathname()

  return (
    <div className='lg:mt-20 md:grid md:grid-flow-col sm:grid sm:grid-flow-row sm:mt-10 mt-16 '>
        <section className='md:grid-cols-4 xl:grid-cols-6 sm:grid-rows-6'>
            {
                pathName==="/contact"?<GetInTouch />:
                <>
                <p className='text-lg lg:text-2xl text-gray-600'>Hey, I'm Deepak 👋🏻</p>
            <p className='text-5xl lg:text-5xl xl:text-8xl font-bold mt-2 '>
               <span className='text-purple-1'>Full</span>
               <span className='text-black-1'>stack</span>
            </p>
            <p className='text-5xl lg:text-5xl xl:text-8xl  font-bold mb-5 text-black-1'>
                Developer<span className='text-purple-1'>.</span>
            </p>
            <p className='mt-5 text-lg lg:text-2xl sm:w-3/5 text-gray-600'>I'm a fullstack developer from India, I'll help you build beautiful websites and applications your users will love.</p>
            <Contacts />
            </>
            }
            
        </section>
        <div className='md:grid-cols-4 xl:grid-cols-6 sm:grid-rows-6 mt-6 flex items-center justify-center md:flex-none '>
            <div className='border-[0.5px] border-purple-1 rounded-full p-8 h-[270px] w-[270px]  sm:mx-auto sm:mt-5 sm:p-3 lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px] xl:p-8 s'>
                <Image src={ProfilePic} className='rounded-full ' alt='profile' />
            </div>
        </div>
    </div>
  )
}

export default Body