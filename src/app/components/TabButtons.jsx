import React from 'react'
import {motion} from 'framer-motion'

const variants={
  default:{width:0},
  active:{width: "calc(100% - 0.75rem)"}
};

export default function TabButtons({active, selectTab, children}) {

    const buttonClasses=active
     ? "text-white" 
     : "text-[#ADB7BE] "

  return (
    <>
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
        <motion.div 
        className='h-1 bg-yellow-400 mt-2 mr-3'
        animate={active? "active" : "default"} 
        variants={variants}>

        </motion.div>
        </button>
                    
    </>
  )
}
