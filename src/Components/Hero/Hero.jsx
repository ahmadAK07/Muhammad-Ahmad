import React, { useState } from 'react';

const Hero = () => {
  const [clipPathPosition, setClipPathPosition] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    const outerContainer = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - outerContainer.left) / outerContainer.width) * 100;
    const y = ((e.clientY - outerContainer.top) / outerContainer.height) * 100;

    setClipPathPosition({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div className="container home-hero">
      <div className='home-hero__content'>
        <div>
          <h1 className='display-1 roboto-semibold' style={{ textTransform: "uppercase" }}>I'M MUHAMMAD</h1>
          <h1 className='display-1 roboto-semibold' style={{ textTransform: "uppercase" }}>AHMAD</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed expedita est culpa labore nihil!</p>
          <a href="#contact"><button className='home-hero__btn btn poppins-normal'>Contact Me</button></a>
        </div>
      </div>
      <div className='home-hero__avatar'>
        <div className="image-outer-container" onMouseMove={handleMouseMove}>
          <div
            className="image-inner-container"
            style={{
              '--x': clipPathPosition.x,
              '--y': clipPathPosition.y,
            }}
          >
            <img
              src="/Images/portfolio (3).jpg"
              className="main-image"
              alt="Muhammad Ahmad"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
