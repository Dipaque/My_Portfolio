import Image from 'next/image'
import React from 'react'
import PurpleHeart from '@/assets/purple-heart.svg';
import Marquee from "react-fast-marquee";


const Stack = () => {
  return (
    <div className='bg-[#b8b8b8] border-[#b8b8b8] border-2 rounded-2xl mt-5 ps-3 pt-10 pb-10 text-[15px] overflow-hidden  whitespace-nowrap'>
                <div className='flex flex-row items-center gap-3 flex-nowrap animate-marquee'>
    {/* Duplicate Content */}
    {[...Array(2)].map((_, i) => (
      <React.Fragment key={i}>
        <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
        <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1'>Next.js</span>
        <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
        <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1'>Responsive Design</span>
        <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
        <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1'>React.js</span>
      </React.Fragment>
    ))}
  </div>
  <Marquee autoFill={true} loop={0} className='mt-5  -ms-2 h-full !p-3 !flex !flex-row !items-center !justify-center !gap-3' direction='right'>
  <Image src={PurpleHeart} className='ms-3' height={25} width={25} alt="purple-heart" />
        <span className="border-2 ms-3 border-black-1 p-2 rounded-xl text-white bg-black-1">Javascript Proficiency</span>
        <Image src={PurpleHeart} height={25} width={25} className='ms-3' alt="purple-heart" />
        <span className="border-2 ms-3 border-black-1 p-2 rounded-xl text-white bg-black-1">Tailwind CSS</span>
        <Image src={PurpleHeart} height={25} width={25} className='ms-3' alt="purple-heart" />
        <span className="border-2 ms-3 border-black-1 p-2 rounded-xl text-white bg-black-1">Bootstrap</span>
  </Marquee>

              <div className='flex flex-row items-center justify-between gap-3 flex-nowrap mt-6 animate-marquee'>
              {[...Array(2)].map((_, i) => (
      <React.Fragment key={i}>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>React Redux</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>Express.js</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2  border-black-1 p-2 rounded-xl text-white bg-black-1'>Node.js</span>
                </React.Fragment>
    ))}
              </div>
              <Marquee autoFill={true} loop={0} className='mt-6  -ms-2 h-full !p-3 !flex !flex-row !items-center !justify-center !gap-3' direction='right'>
                <Image src={PurpleHeart} className='ms-3' height={25} width={25} alt='purple-heart' />
                <span className='border-2 ms-3 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>MongoDB</span>
                <Image src={PurpleHeart} className='ms-3' height={25} width={25} alt='purple-heart' />
                <span className='border-2 ms-3 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>Firebase Firestore</span>
                <Image src={PurpleHeart} className='ms-3' height={25} width={25} alt='purple-heart' />
                <span className='border-2 ms-3  border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>PostgreSQL</span>
              </Marquee>
              <div className='flex flex-row items-center justify-between gap-3 flex-nowrap mt-5 animate-marquee'>
              {[...Array(2)].map((_, i) => (
      <React.Fragment key={i}>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>Data Structures and Algorithms</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>Problem solving</span>
                </React.Fragment>
    ))}
              </div>
            </div>
  )
}

export default Stack