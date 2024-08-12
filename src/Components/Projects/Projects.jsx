import React from 'react'

const Projects = () => {
  let projects = [
    {
      img: "./Images/project-1.png",
      name: "Portfolio",
      color: "slateblue"
    },
    {
      img: "./Images/project-2.png",
      name: "Home Service",
      color: "rgb(250 204 21)",
      url: "https://tailwindcss-second.vercel.app/" 
    },
    {
      img: "./Images/project-3.png",
      name: "Tech Service",
      url: "https://nice-page-three.vercel.app/",
      color: "red"
    },
    {
      img: "./Images/project-4.png",
      name: "bookme",
      color: "#1476d1",
      url: "https://bookme-delta.vercel.app/"
    },
    {
      img: "./Images/project-1.png",
      name: "Portfolio",
      color: "slateblue"
    },
    {
      img: "./Images/project-2.png",
      name: "Home Service",
      color: "rgb(250 204 21)",
      url: "https://tailwindcss-second.vercel.app/" 
    }
  ]
  return (
    <div id='projects' className='container project-container'>
      <h1 className='display-2 roboto-semibold'>Projects</h1>
       <div className=''>
         {projects.map((item, i)=>(
            <div kkey={i} className='project-card'>
            <a href={item.url} target='_blank'>
            <img className='project-card__img' src={item.img} alt="" />
            <h6 className='project-card__title display-2 roboto-semibold' style={{color: `${item.color}`}}>{item.name}</h6>
            </a>
         </div>
         ))}

       </div>
    </div>
  )
}

export default Projects
