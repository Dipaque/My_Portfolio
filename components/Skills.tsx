import React from 'react'
import Title from './Title'

const Skills = () => {

    const skills = [
        {
        title:"Frontend",
        content:["Javascript","React.js","Next.js","Redux"]
        },{
            title:"Backend",
            content:["Node.js","Express.js","MongoDB","PostgreSQL"]
        },{
            title:"Deployment",
            content:["AWS","Vercel","Netlify"]
        },{
            title:"Softskill",
            content:["Effective communication","Collabration","Commitments","Leadership"]
        }]

  return (
    <div className='mt-12 '>
        <Title title='Skills' />
        <div className='grid grid-cols-4'>

        
            {
                skills.map((skill,i:number)=>(
                    <div className=' md:col-span-2 lg:col-span-1 col-span-4 mt-8' key={i}>
            <h4 className='font-bold md:text-3xl text-black-1 text-xl'>{skill.title}</h4>
            <ul className='flex flex-col items-start justify-center md:text-lg gap-1 mt-5 text-gray-600 text-base'>
            {
                skill.content.map((content,i)=>(
                <li key={i}>{content}</li>
            ))
        }
        </ul>
        </div>
                ))
                
            }
        
        </div>

    </div>
  )
}

export default Skills