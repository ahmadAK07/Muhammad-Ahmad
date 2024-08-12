import { useState } from 'react'
import { FaAnglesUp } from "react-icons/fa6";
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

function App() {
   let handleBackToTop = ()=>{
      window.scrollTo(0, 0);
   }
   return(
    <div style={{minHeight: "1000px"}}>
    <Navbar/>
    <div style={{height: "110px"}}></div>
    <Hero/>  
    <Skills/>  
    <Projects/>  
    <About/>  
    <Contact/>
    <button className='backToTop' onClick={handleBackToTop}> <FaAnglesUp /> </button>
    </div>
   )
}

export default App
