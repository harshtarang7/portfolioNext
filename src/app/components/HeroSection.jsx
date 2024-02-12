"use client"
import React from "react";
import Image from'next/image'
import {motion} from 'framer-motion'
import resume from '../../../public/Resume.pdf'

import { TypeAnimation } from 'react-type-animation';


export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div 
        initial={{opacity:0 , scale:0.5}} 
        animate={{opacity:1 , scale:1}} 
        transition={{duration:0.5}} 
        className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-600">Hi There,</h1>
          <h1 className="text-white lg:text-6xl text-4xl sm:text-5xl  font-bold ">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">I&apos;m </span> 
            
           <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Tarang Harsh',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a Front-End Developer',
        1000,
       
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
            I am into Web Development{" "}
          </p>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-200 text-white">Hire Me</button>
            {/* to download cv */}
            <a href={resume} download="resume">
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to bg-pink-400 hover:bg-slate-800 text-white  mt-3 "> 
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span> </button>
            </a>
          </div>
        </motion.div>

        <motion.div 
        initial={{opacity:0 , scale:0.5}} 
        animate={{opacity:1 , scale:1}} 
        transition={{duration:0.5}}  className="col-span-5 place-self-center mt-4 lg:mt-0 ">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative shadow-[0_35px_35px_rgba(250,250,250,0.5)">
            <Image src={require('../../../public/tarangHarsh.png')}
             width={240} 
             height={250} 
             alt="mypic"
             className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 drop-shadow-[0_0px_15px_rgba(173,216,240,0.2)]"
             />
            </div>
            
        </motion.div>
      </div>
    </section>
  );
}
