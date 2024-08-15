import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  let aboutInfo = "I am Muhammad Ahmad, a dedicated web developer with 2 years of experience in building and maintaining responsive websites. I am proficient in front-end technologies such as HTML, CSS, JavaScript, and frameworks like React, which I use to create intuitive and dynamic user interfaces. My work emphasizes clean, efficient code, ensuring that websites not only look great but also perform seamlessly across devices. With a strong foundation in web development principles and a keen eye for detail, I am committed to delivering high-quality web solutions that meet client needs and industry standards. Whether working on individual projects or as part of a team, I consistently demonstrate a passion for coding and a desire to keep learning and growing in the ever-evolving field of web development.";
  
  const [text, setText] = useState(aboutInfo.split(" "));
  const aboutContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll('span');
          const batchSize = 20; // Number of spans to animate at once
  
          // Loop through spans in batches
          for (let i = 0; i < spans.length; i += batchSize) {
            const batch = Array.from(spans).slice(i, i + batchSize);
            const delay = (i / batchSize) * 200; // 1 second delay after each batch
  
            // Apply the bright-text class to each span in the batch after the calculated delay
            setTimeout(() => {
              batch.forEach(span => span.classList.add('bright-text'));
            }, delay);
          }
        }
      });
    }, { threshold: 0.2 });
  
    if (aboutContainerRef.current) {
      observer.observe(aboutContainerRef.current);
    }
  
    return () => {
      if (aboutContainerRef.current) {
        observer.unobserve(aboutContainerRef.current);
      }
    };
  }, []);
  
  

  return (
    <div id='about'>
      <div  className="container about-container">
        <h1 className='display-1 roboto-semibold'>About Us</h1>
        <p ref={aboutContainerRef} className='about-info poppins-normal'>
          {text.map((txt, i) => (
            <span key={i}> {txt} </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default About;
