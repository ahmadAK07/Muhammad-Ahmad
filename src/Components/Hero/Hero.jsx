import React from 'react'

const Hero = () => {
  return (
    <div className="container home-hero">
    <div className='home-hero__content'>
        <div className=''>
        <h1 className='display-1 roboto-semibold' style={{textTransform: "uppercase"}}>I'M MUHAMMAD</h1>
        <h1 className='display-1 roboto-semibold' style={{textTransform: "uppercase"}}>AHMAD</h1>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed expedita est culpa labore nihil!</p>
        <button className='home-hero__btn btn poppins-normal'>Contact Me</button>
        </div>
    </div>
    <div className='home-hero__avatar'>
    <div className="image-outer-container">
    <div className="image-inner-container">
      <img
        src="/Images/portfolio (3).jpg"
        className="main-image"
        alt="Muhammad Ahmad"
      />
    </div>
  </div>
    </div>
</div>
  )
}

export default Hero
