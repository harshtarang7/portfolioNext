"use client"
import Image from "next/image";
import Header from "./Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectCard from "./components/ProjectCard";
import ProjectSections from "./components/ProjectSections";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";


export default function Home() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  
  return (
   <>
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Header/>
     
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      <AboutSection/>
      <ProjectSections/>
      <EmailSection/>
      </div>
     <Footer/>
     <button className="fixed bottom-[20%] left-10 text-2xl bg-gray-800 text-white py-2 px-4 rounded-md" onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowAltCircleUp}/>
    </button>
    </main>
   </>
  );
}
