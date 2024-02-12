"use client"
import React, { useState,useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTab from './ProjectTab'
import {motion,useInView} from 'framer-motion'

const Project_data=[
    {
        id:1,
        title:"E commerce using only HTML, CSS ,JS",
        description:"API fetching, Add to cart",
        image: "/projects/ecomm.png",
        tag:["All", "Web"],
        gitUrl:"/",
        PreviewUrl:"/"
    },
    {
        id:2,
        title:"Password Generator React.js",
        description:"used to generate different typeof pass",
        image: "/projects/password.png",
        tag:["All", "Web"],
        gitUrl:"/",
        PreviewUrl:"/"
    },
    {
        id:3,
        title:"weather App using only HTML, CSS ,JS",
        description:"API fetching, accurate weather data",
        image: "/projects/weather.png",
        tag:["All", "Web"],
        gitUrl:"/",
        PreviewUrl:"/"
    },
    {
        id:4,
        title:"E commerce using React.js",
        description:"API fetching, Add to cart, context, dynamic product detail",
        image: "/projects/reactEcomm.png",
        tag:["All", "Web"],
        gitUrl:"/",
        PreviewUrl:"/"
    },
]

export default function ProjectSections() {
    const [tag, setTag]=useState("All");
    const projectref= useRef(null);
    const isInView=useInView(projectref,{once:true});

    const handleTag=(newTag)=>{
        setTag(newTag)
    }

    const filteredPro=Project_data.filter((project)=>
        project.tag.includes(tag)
    );

    const CardVariants={
      initial:{y:50, opacity:0},
      animate:{y:0, opacity:1},
    }
    const scrollToProjectSection = () => {
      if (projectRef.current) {
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <div >
      <h2>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTab onClick={handleTag} isSelected={tag==="All"} name="All"/>
        <ProjectTab onClick={handleTag} isSelected={tag==="Web"} name="Web"/>
      </div>
      <ul ref={projectref} id='Projects' className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
        {filteredPro.map((project, index)=>
        <motion.li 
        variants={CardVariants} 
        key={index} initial="initial" 
        animate={isInView ? "animate" : "initial"}
        transition={{duration:0.3, delay:index * 0.4}}
        >
          <ProjectCard key={project.id} title={project.title} description={project.description} imgURL={project.image} gitUrl={project.gitUrl} PreviewUrl={project.PreviewUrl}/>
        </motion.li>
        )}
      </ul>
    </div>
  )
}
