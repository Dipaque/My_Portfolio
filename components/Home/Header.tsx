
"use client";
import React, { useState } from 'react'
import PageRoutes from '../PageRoutes'
import Contacts from '../Contacts';

const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  const navs = [{title:"Home",path:"/"},{title:"Projects",path:"/projects"},{title:"About",path:"/about"}];
   
  return (
    <>
    <div className='flex flex-row items-center justify-between lg:p-5 '>
        <a href='/' className='font-semibold text-[16px]  text-black-1'>
        DeepakR
        <span className='font-bold text-[22px] text-[#6e06f2]'>.</span>
        </a>
        <button className="relative group md:hidden " >
        <div
      onClick={() => setIsOpen(!isOpen)}
      className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 cursor-pointer ${
        isOpen ? "ring-4 ring-opacity-100" : "ring-opacity-0"
      } duration-200`}
    >
      <div
        className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}
      >
        <div
          className={`bg-gray-500 h-[2px] w-7 transform transition-all duration-300 origin-left ${
            isOpen ? "rotate-[42deg]" : "rotate-0"
          }`}
        ></div>
        <div
          className={`bg-gray-500 h-[2px] w-7 transform transition-all duration-300 origin-left ${
            isOpen ? "-rotate-[42deg]" : "rotate-0"
          }`}
        ></div>
      </div>
    </div>
      </button>
        <span className='hidden md:block'>
        <PageRoutes navs={navs} />
        </span>
       <Contacts onHeader={true}/>
    </div>
    {
      isOpen && <PageRoutes isSm={true} navs={navs}/>
    }
    </>
  )
}

export default Header