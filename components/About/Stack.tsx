import Image from 'next/image'
import React from 'react'
import PurpleHeart from '@/assets/purple-heart.svg';


const Stack = () => {
  return (
    <div className='bg-[#b8b8b8] border-[#b8b8b8] border-2 rounded-2xl mt-5 ps-3 pt-10 pb-10 text-[15px] overflow-hidden overflow-x-scroll'>
              <div className='flex flex-row items-center justify-between gap-3 flex-nowrap'>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1'>Next.js</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>Responsive Design</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2  border-black-1 p-2 rounded-xl text-white bg-black-1'>React.js</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
              </div>
              <div className='flex flex-row items-center justify-between gap-3 flex-nowrap mt-6'>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>Javascript Proficiency</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>Tailwind CSS</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2  border-black-1 p-2 rounded-xl text-white bg-black-1'>React.js</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
              </div>
              <div className='flex flex-row items-center justify-between gap-3 flex-nowrap mt-6'>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>React Redux</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>Express.js</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2  border-black-1 p-2 rounded-xl text-white bg-black-1'>Node.js</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
              </div>
              <div className='flex flex-row items-center justify-between gap-3 flex-nowrap mt-6'>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>MongoDB</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2  border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>Firebase Firestore</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>PostgreSQL</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
              </div>
              <div className='flex flex-row items-center justify-between gap-3 flex-nowrap mt-6'>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>Data Structures and Algorithms</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                <span className='border-2 border-black-1 p-2 rounded-xl text-white bg-black-1 text-nowrap'>Problem solving</span>
                <Image src={PurpleHeart} height={25} width={25} alt='purple-heart' />
                
              </div>
            </div>
  )
}

export default Stack