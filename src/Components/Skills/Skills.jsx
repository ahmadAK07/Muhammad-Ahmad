import React from 'react'

const Skills = () => {
    let skillDAta = [
        {
            name: "HTML",
            experience: 100
        },
        {
            name: "CSS",
            experience: 80
        },
        {
            name: "JS",
            experience: 60
        },
        {
            name: "Bootstrap",
            experience: 70
        },
        {
                name: "Tailwind CSS",
                experience: 60
        },
        {
                name: "jQuery",
                experience: 60
        },
        {
                name: "React",
                experience: 90
        },
        {
                name: "Node",
                experience: 80
        },
        {
                name: "ExpressJS",
                experience: 70
        },
        {
                name: "MongoDB",
                experience: 50
        }
    ]
  return (
    <div className='container skills-container ' id='skills'>
      <h1 className='display-2 roboto-semibold'>SKILLS</h1>
      <div  style={{width:"100%"}}>
        {skillDAta.map((skill, i)=>(
              <div className="range-container">
              <h5 className='display-4 roboto-semibold'>{skill.name}</h5>
              <div className='range-container__bar'>
                   <p style={{backgroundColor: `${skill.color}`,width: `${skill.experience}%`}} className='roboto-normal' data-color="green">{skill.experience}%</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
