"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import Project2 from "@/assets/2.png"
import Bg1 from "@/assets/ProjectBG-2.jpeg"
import Bg2 from "@/assets/ProjectBG-1.jpeg"
import Bg3 from "@/assets/ProjectBG-3.jpeg"
import pro1 from "@/assets/project-2.png"
import pro2 from "@/assets/project-4.png"
import pro3 from "@/assets/ml linkedin post.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { EffectCreative } from 'swiper/modules';
import Footer from '@/components/Footer';
import Project from '@/components/Project';

const Page = () => {
    
  return (
    <div>
        <section className='text-5xl xl:text-7xl font-bold mt-24 '>
                <span className='text-black-1'>My </span>
                <span className='text-purple-1'>Best </span>
                <span className='text-black-1'>Creations.</span>
                <p className='text-gray-600 md:text-2xl text-lg font-normal md:w-3/5 md:mt-8 mt-5'>Designing and Developing Robust , Scalable and Stylish Web Applications</p>
        </section>
        <section className='mx-auto md:mt-8 mb-36 mt-5'>
        <Project />     
        </section>
       <div className='mt-36'>
       <Footer />
       </div>
    </div>
  )
}

export default Page