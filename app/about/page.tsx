import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import DottedGlobe from '@/components/DottedGlobe';
const Stack = dynamic(()=>import('@/components/About/Stack'));



const Page = () => {
  
  return (
    <main >
      <section className='text-5xl xl:text-7xl font-bold mt-20 '>
                <span className='text-black-1'>About me</span>
                <span className='text-purple-1'>. </span>
                <div className='text-gray-600 md:text-2xl text-base font-normal  mt-8 md:border-l-[12px] border-l-[6px] border-purple-1 ps-5'>A Full Stack Developer passionate about learning new technologies, writing clean code, and solving problems. I enjoy building applications and am always ready to collaborate on freelance projects to share my skills and grow together.</div>
        </section>
        <section className='mt-12 grid grid-cols-3'>
          <div className='md:col-span-1  col-span-3'>
            <h5 className='font-bold text-2xl'>My Stack.</h5>
            <Suspense fallback={<>Loading..</>}>
            <Stack />
            </Suspense>
          </div>
          <div className='md:col-span-2 md:ms-9 w-full col-span-3 max-sm:mt-12'>
          <h5 className='font-bold text-2xl'>My Special Place.</h5>
          <div className='bg-[#b8b8b8]  border-[#b8b8b8]  h-[385px] cursor-grab
            border-2 rounded-2xl flex items-center justify-center mt-5 text-[15px]  overflow-hidden'>
              <Suspense fallback={<>Loading...</>}>
          <DottedGlobe />
              </Suspense>
          </div>
          </div>
        </section>
        <section className='mt-20 mb-12'>
          <Footer />
        </section>
     </main> 
  )
}

export default Page