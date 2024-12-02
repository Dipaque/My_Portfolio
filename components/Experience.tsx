import React from 'react'
import Title from './Title'
import PurpleTick from "@/assets/purple-tick.svg"
import Image from 'next/image'
const Experience = () => {
  const contents = ["Developed and shipped higly interactive ERP's","Played a key role in designing and implementing scalable and user-friendly solutions for managing employee data, tracking time, and monitoring project progress.","Successfully developed a Leave Tracker and Timesheet application during my internship for internal use, which is still actively utilized by the organization, demonstrating the long-term impact of my work.","Collaborated with cross-functional teams to gather requirements, resolve bugs, and implement feature updates to ensure seamless user experiences."]
  return (
    <div className='mt-36'>
        <Title title='Experience' />
        <div className='flex items-start justify-start flex-row mt-8 gap-4'>
            <span className='text-purple-1 text-xl border-l-4 border-purple-1 ps-6 p-2 hidden md:block'>Support Studio Technologies</span>
            <div className='md:ms-20'>
                <span className='text-black-1 text-xl'>Fullstack Engineer </span>
                <span className='text-purple-1 text-xl'>@ Support Studio Technologies</span>
                <div className='text-sm text-gray-600 mt-3'>October 2023 - Present</div>
                <ul className='md:ms-14 mt-8 text-gray-600 lg:text-lg text-base   '>
                  {
                    contents.map((content:string,i:number)=>(
                      <li className='mt-4 mb-4 lg:flex-none max-sm:flex max-sm:items-start max-sm:justify-start max-sm:gap-2' key={i}> <Image src={PurpleTick.src} className='hidden max-sm:block' height={25} width={25}  alt='tick' /> {content}</li>
                    ))
                  }
                   

                </ul>
            </div>

        </div>
    </div>
  )
}

export default Experience