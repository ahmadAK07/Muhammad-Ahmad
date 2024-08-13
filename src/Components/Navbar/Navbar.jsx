import React, { useState } from 'react'
import { TiThMenuOutline } from "react-icons/ti";
export default function Navbar() {
  let [navHeight, setNavHeight] = useState("0px");
  let handleToggler = ()=>{
    if(navHeight == "calc(100vh - 80px)"){
      setNavHeight("0px");
      document.body.style.overflow = "";
    }else{
      setNavHeight("calc(100vh - 80px)");
      document.body.style.overflow = "hidden";
    }
  }
  return (
    <>
          <div className='' style={{position: "fixed", top: 0, left: 0,width: "100%",zIndex:9999}}>
      <div className='bg-galss'>
      <div style={{height: "80px"}}  className="container navbar px-30">
             <a href="#">
             <div className="navbar__logo">
                   <img  src="/Images/bg-less (2).png" alt="" />
              </div>
             </a>
              <ul   className='nav-list'>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <button className='btn nav-toggler' onClick={handleToggler}> <TiThMenuOutline /> </button>
        </div>
      </div>
        <ul   className='sub-nav-list bg-galss' style={{height: navHeight}}>
                <li>
                  <a onClick={handleToggler} href="#skills">Skills</a>
                </li>
                <li>
                  <a onClick={handleToggler} href="#about">About</a>
                </li>
                <li>
                  <a onClick={handleToggler} href="#projects">Projects</a>
                </li>
                <li>
                  <a onClick={handleToggler} href="#contact">Contact</a>
                </li>
              </ul>
      </div>
    </>
  )
}
