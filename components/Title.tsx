import React from 'react'

const Title = ({title}:{title:string}) => {
  return (
    <h1 className='font-bold lg:text-6xl text-black-1 mt-12 text-5xl'>{title}<span className='text-purple-1'>.</span></h1>
  )
}

export default Title