import React from 'react'
const Contacts = dynamic(()=>import('./Contacts'))
const PageRoutes = dynamic(()=>import('./PageRoutes'))
import myResume from "@/assets/Deepak_Resume.png"

import { LuDownload, LuGithub, LuInstagram, LuLinkedin, } from 'react-icons/lu';
import dynamic from 'next/dynamic'
import Link from 'next/link';

const Footer = () => {
    const navs = [{title:"Home",path:"/"},{title:"Projects",path:"/projects"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}];

  return (
    <footer>
    <section className="mt-24 mb-16 md:flex md:flex-row md:items-center md:justify-between flex flex-col items-center justify-center gap-12">
      <PageRoutes navs={navs} />
      <ul className='flex items-center gap-6'>
        <li>
          <a download={"Deepak_Resume"} href={myResume.src}>
            <LuDownload size={25} className='text-gray-600' />
            </a>
        </li>
        <li>
          <Link  href={"https://www.linkedin.com/in/deepak-r-b4b520215/"}>
            <LuLinkedin size={25} className='text-gray-600' />
          </Link>
        </li>
        <li>
          <Link  href={"https://github.com/Dipaque"}>
            <LuGithub size={25} className='text-gray-600' />
          </Link>
        </li>
    </ul>
    </section>
    <section className="md:flex md:flex-row md:items-center md:justify-between mb-6 flex flex-col items-center justify-center gap-6">
    <div className='max-sm:flex flex-col items-center justify-center '>
    <span className="text-gray-600 font-semibold text-2xl">Interested in working together <span className="text-purple-1">?</span></span>
    <Contacts />
    </div>
    <div className="flex flex-col items-end gap-2 text-gray-600">
    &copy; {new Date().getFullYear()} All Rights reserved.
    <span>Made with 💜 by Deepak R</span>
    </div>
    </section>
</footer>
  )
}

export default Footer