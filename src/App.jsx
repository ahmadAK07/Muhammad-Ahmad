import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

function App() {
   
   return(
    <div style={{minHeight: "1000px"}}>
    <Navbar/>
    <div style={{height: "110px"}}></div>
    <Hero/>  
    <Skills/>  
    <Projects/>  
    <About/>  
    <Contact/>
    </div>
   )
}

export default App
