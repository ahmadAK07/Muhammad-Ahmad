import React, { useState } from 'react'
import { TiThMenuOutline } from "react-icons/ti";
export default function Navbar() {
  let [navHeight, setNavHeight] = useState("calc(100vh - 80px)");
  let handleToggler = ()=>{
    if(navHeight == "calc(100vh - 80px)"){
      setNavHeight("0px");
    }else{
      setNavHeight("calc(100vh - 80px)");
    }
  }
  return (
    <>
          <div className='' style={{position: "fixed", top: 0, left: 0,width: "100%",zIndex:9999}}>
      <div className='bg-galss'>
      <div style={{height: "80px"}}  className="container navbar px-30">
              <div className="navbar__logo">
                   <img  src="/Images/bg-less (2).png" alt="" />
              </div>
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
      </div>
    </>
  )
}
