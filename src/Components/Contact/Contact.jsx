import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
const Contact = () => {
  const [clipPathPosition, setClipPathPosition] = useState({ x: '40%', y: '40%' });

  const handleMouseMove = (e) => {
    const outerContainer = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - outerContainer.left) / outerContainer.width) * 100;
    const y = ((e.clientY - outerContainer.top) / outerContainer.height) * 100;

    setClipPathPosition({ x: `${x}%`, y: `${y}%` });
  };
  return (
    <div id='contact' >
       <div className="container contact-container">
       <h1 className='display-1 roboto-semibold'>Contact Us</h1>
       <div className=''>
            <div className='contact-left'
            onMouseMove={handleMouseMove}
            style={{
              '--x': clipPathPosition.x,
              '--y': clipPathPosition.y,
            }}
            >
              <h3 className='display-2 kanit-semibold contact-left__title' >Social</h3>
              <div>
                 <a href="https://www.facebook.com/profile.php?id=100047829339926&mibextid=ZbWKwL" target='_blank' className='contact-left__social'>
                 <FaFacebookF />
                 </a>
                 <a href="https://x.com/AKAhmad46233855?t=t1PNlKJXYTWWB29FTSLT_w&s=09" target="_blank" className='contact-left__social'>
                 <FaXTwitter />
                 </a>
                 <a href="https://www.instagram.com/muhammadahmadamin512?igsh=MThjNXM5cXdicGhyMw==" target='_blank' className='contact-left__social'>
                 <FaSquareInstagram />
                 </a>

              </div>
              <div>
              <a href="mailto:example@gmail.com" target='_blank' className='contact-left__social'>
                 <SiGmail />
                 </a>
                 <a href="https://wa.me/923083530865" target='_blank' className='contact-left__social'>
                 <IoLogoWhatsapp />
                 </a>

              </div>
            </div>
            <div className='contact-right'>
              <input type="text" className='contact-right__gmail roboto-semibold' placeholder='Email'/>
              <textarea className='contact-right__text roboto-semibold' placeholder='Write a Message...'></textarea>
              <button className='contact-right__btn btn'>SUBMIT</button>
            </div>
       </div>
       </div>
    </div>
  )
}

export default Contact
