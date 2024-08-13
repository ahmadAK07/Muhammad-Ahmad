import React, { useState } from 'react'

const About = () => {
  let aboutInfo = "I am Muhammad Ahmad, a dedicated web developer with 2 years of experience in building and maintaining responsive websites. I am proficient in front-end technologies such as HTML, CSS, JavaScript, and frameworks like React, which I use to create intuitive and dynamic user interfaces. My work emphasizes clean, efficient code, ensuring that websites not only look great but also perform seamlessly across devices. With a strong foundation in web development principles and a keen eye for detail, I am committed to delivering high-quality web solutions that meet client needs and industry standards. Whether working on individual projects or as part of a team, I consistently demonstrate a passion for coding and a desire to keep learning and growing in the ever-evolving field of web development."
  let [text, setText] = useState(aboutInfo.split(" "));
  console.log(text);
  return (
    <div id='about' >
       <div className="container about-container">
           <h1 className='display-1 roboto-semibold'>About Us</h1>
           <p className='about-info poppins-normal'>
           {text.map((txt, i)=>(
            <span key={i}> {txt}</span>
           ))}
           </p>
       </div>
    </div>
  )
}

export default About
