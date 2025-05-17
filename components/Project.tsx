import React from 'react'
import Title from './Title'
import Image from 'next/image'
import Bg1 from "@/assets/ProjectBG-2.jpeg"
import Bg2 from "@/assets/projectBG-1.jpeg"
import Bg3 from "@/assets/ProjectBG-3.jpeg"
import Bg4 from "@/assets/ProjectBG-4.jpeg"
import pro1 from "@/assets/Spotify.webp"
import pro2 from "@/assets/project-5.png"
import pro3 from "@/assets/ml linkedin post.png"
import pro4 from "@/assets/project-3.png"

const Project = () => {
  return (
    <div className='mt-36'>
        <Title title='Projects' />

        <div className='grid grid-cols-5 gap-6 mt-8 w-full'>
            <div className='lg:col-span-2 w-full col-span-5'>
            <div className='rounded-3xl flex items-center justify-center ' style={{backgroundImage:`url('${Bg4.src}')`, backgroundSize: "cover",
        backgroundPosition: "center",
        height: "67%",
        width: "100%",}}>
                <Image src={pro4} className='rounded-3xl ' height={250} alt='fleetapp' />
                </div>
                <span className='flex items-center justify-start mt-8 gap-2'>
                <h3 className='font-bold md:text-2xl text-black-1 text-lg '>Sync Tunes</h3>
                <a href='https://sync-tunes.vercel.app/' className='h-5 w-5 rounded-full border-purple-1 border-2 cursor-pointer hover:bg-purple-1'  />
                </span>
                
                <p className='md:text-lg text-base text-gray-600  mt-5 font-medium'>A music jam app where people can listen same music with thier friends and family with realtime synchronization.</p>
            </div>
            <div className='lg:col-span-3 w-full col-span-5 max-sm:mt-12'>
                <div className='rounded-3xl flex items-center justify-center ' style={{backgroundImage:`url('${Bg3.src}')`, backgroundSize: "cover",
        backgroundPosition: "center",
        height: "67%",
        width: "100%",}}>
                <Image src={pro1} className='rounded-3xl ' height={340} width={340} alt='fleetapp' />
                </div>
                <span className='flex items-center justify-start mt-8 gap-2'>
                <h3 className='font-bold md:text-2xl text-black-1 text-lg '>Music Recommendation System </h3>
                <a href='https://bk-travelsapp.onrender.com/' className='h-5 w-5 rounded-full border-purple-1 border-2 cursor-pointer hover:bg-purple-1' />
                </span>
            <p className='md:text-lg text-base text-gray-600  mt-5 font-medium'>A content-based music recommendation system that suggests similar songs using Spotify’s Top 100 Songs of 2023.
Built with Python and KNN, it uses audio features like danceability and energy for personalized recommendations.
</p>
            </div>
            <div className='lg:col-span-3 w-full lg:mt-12 mt-24 col-span-5 '>
        <div className='rounded-3xl flex items-center justify-center' style={{backgroundImage:`url('${Bg2.src}')`, backgroundSize: "cover",
        backgroundPosition: "center",
        height: "67%",
        width: "100%",}}>
                <Image src={pro2} className='rounded-3xl  ' height={500} width={500} alt='fleetapp' />
                </div>
                <span className='flex items-center justify-start mt-8 gap-2'>
                <h3 className='font-bold md:text-2xl text-black-1 text-lg '>Chitti </h3>
                <a href='https://llma-chatbot.vercel.app/' className='h-5 w-5 rounded-full border-purple-1 border-2 cursor-pointer hover:bg-purple-1' />
                </span>
                <p className='md:text-lg text-base text-gray-600  mt-5 font-medium'>Developed an AI-powered chatbot using the LLaMA 3.2 8B model in Next.js, integrated with Qdrant vector database for efficient knowledge retrieval. Implemented RAG to enhance responses with contextually relevant information and improving accuracy and relevance.</p>
            </div>
            <div className='lg:col-span-2 w-full lg:mt-12 mt-24 col-span-5'>
                <div className='rounded-3xl flex items-center justify-center ' style={{backgroundImage:`url('${Bg1.src}')`, backgroundSize: "cover",
        backgroundPosition: "center",
        height: "67%",
        width: "100%",}}>
                <Image src={pro3} className='rounded-3xl ' height={300} width={300} alt='fleetapp' />
                </div>
                <span className='flex items-center justify-start mt-8 gap-2'>
                <h3 className='font-bold md:text-2xl text-black-1 text-lg '>Salary Prediction Algorithm</h3>
                <div className='h-5 w-5 rounded-full border-purple-1 border-2 cursor-pointer hover:bg-purple-1' />
                </span>
                <p className='md:text-lg text-base text-gray-600  mt-5 font-medium'>A Salary prediction algorithm based on experience which achieved a performance metric with an impressive R² score of 0.93.</p>
            </div>
        </div>
         

        </div>
  )
}

export default Project