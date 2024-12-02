"use client";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const PageRoutes = ({ navs, isSm }: { navs: any[], isSm?: boolean }) => {
  const pathName = usePathname();
  return (
    <>
      {
        isSm ?  <ul className='flex flex-col items-start md:gap-7 gap-4   '>
        {
          navs.map((nav, i) => {
            const isActive = nav.path === pathName
            return (
              <Link href={nav.path} className={cn('text-gray-600 font-semibold  text-[17px] transform transition-all duration-300 ease-in-out ', { "text-purple-1": isActive })} key={i}>{nav.title}</Link >
            )
          })
        }
      </ul> : <ul className='flex items-center md:gap-7 gap-4 '>
          {
            navs.map((nav, i) => {
              const isActive = nav.path === pathName
              return (
                <Link href={nav.path} className={cn('text-gray-600 font-semibold  text-[17px] ', { "text-purple-1": isActive })} key={i}>{nav.title}</Link >
              )
            })
          }
        </ul>
      }
    </>

  )
}

export default PageRoutes