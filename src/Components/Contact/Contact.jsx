import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
const Contact = () => {
  return (
    <div id='contact' >
       <div className="container contact-container">
       <h1 className='display-1 roboto-semibold'>Contact Us</h1>
       <div className=''>
            <div className='contact-left'>
              <h3 className='display-2 kanit-semibold contact-left__title' >Social</h3>
              <div>
                 <a href="#" className='contact-left__social'>
                 <FaFacebookF />
                 </a>
                 <a href="#" className='contact-left__social'>
                 <FaXTwitter />
                 </a>
                 <a href="#" className='contact-left__social'>
                 <FaSquareInstagram />
                 </a>

              </div>
              <div>
              <a href="#" className='contact-left__social'>
                 <SiGmail />
                 </a>
                 <a href="#" className='contact-left__social'>
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
