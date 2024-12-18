"use client";
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const Contacts = ({onHeader}:{onHeader?:boolean}) => {
  const router = useRouter();
  return (
    <>
    {
      onHeader? <span  onClick={()=>router.push("/contact")}  className='bg-black-1 p-2 rounded-full w-10 h-10 md:block hidden cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#FCFCFD" d="M8 9.25a.75.75 0 0 0 0 1.5v-1.5zm8 1.5a.75.75 0 0 0 0-1.5v1.5zm-8 2.5a.75.75 0 0 0 0 1.5v-1.5zm4 1.5a.75.75 0 0 0 0-1.5v1.5zm-1-11h2v-1.5h-2v1.5zM2.75 17v-5h-1.5v5h1.5zM13 20.25H6v1.5h7v-1.5zM1.25 17A4.75 4.75 0 0 0 6 21.75v-1.5A3.25 3.25 0 0 1 2.75 17h-1.5zm20-5A8.25 8.25 0 0 1 13 20.25v1.5A9.75 9.75 0 0 0 22.75 12h-1.5zM13 3.75A8.25 8.25 0 0 1 21.25 12h1.5A9.75 9.75 0 0 0 13 2.25v1.5zm-2-1.5A9.75 9.75 0 0 0 1.25 12h1.5A8.25 8.25 0 0 1 11 3.75v-1.5zm-3 8.5h8v-1.5H8v1.5zm0 4h4v-1.5H8v1.5z"/></svg>
      </span>:
    <div className='mt-5 flex items-center justify-start gap-2'>
                <Button type='button' onClick={()=>router.push("/contact")} className='bg-purple-1 text-white rounded-md hover:bg-purple-500' size={"default"}>Get In Touch</Button>
                <Button type='button' variant={"outline"} onClick={()=>router.push("/projects")} className='rounded-md border-black-1 hover:bg-black-1 hover:text-white' size={"default"}>Browse Projects</Button>
    </div>
    }
    </>
  )
}

export default Contacts