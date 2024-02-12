import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons'

export default function ProjectCard({imgURL, title, description, gitUrl, PreviewUrl}) {

    const CardStyle={
        backgroundImage:`url(${imgURL})`,
        backgroundSize:'cover',
        height:'200px',
    };

  return (
    <div>
      <div className='h-52 md:h-72 rounded-t-xl relative group' 
      style={CardStyle}>
        <div className='overlay  items-center justify-center absolute top-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
           
           <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-[#aDB7BE] hover:border-white group/link'>
             <FontAwesomeIcon icon={faCode} className='h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE] cursor-pointer hover:text-white group-hover/link:text-white'/>
           </Link> 

           <Link href={PreviewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#aDB7BE] hover:border-white'>
             <FontAwesomeIcon icon={faEye} className='h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:border-white'/>
           </Link> 
          
        </div>
      </div>
      <div className='text-white pt-3 rounded-b-xl bg-[#181818] py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}
