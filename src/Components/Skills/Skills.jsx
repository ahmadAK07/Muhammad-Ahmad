import React, { useEffect, useState, useRef } from 'react';

const Skills = () => {
  const [skillData, setSkillData] = useState([
    { name: "HTML", experience: 100 },
    { name: "CSS", experience: 80 },
    { name: "JS", experience: 60 },
    { name: "Bootstrap", experience: 70 },
    { name: "Tailwind CSS", experience: 60 },
    { name: "jQuery", experience: 60 },
    { name: "React", experience: 90 },
    { name: "Node", experience: 80 },
    { name: "ExpressJS", experience: 70 },
    { name: "MongoDB", experience: 50 }
  ]);

  // Set initial experience values to 20
  const initialSkillData = skillData.map(skill => ({ ...skill, experience: 20 }));
  const [displayedSkills, setDisplayedSkills] = useState(initialSkillData);

  const skillsContainerRef = useRef(null);

  const incrementExperience = () => {
    const interval = setInterval(() => {
      setDisplayedSkills(prevSkills => {
        const updatedSkills = prevSkills.map((skill, index) => {
          const targetExperience = skillData[index].experience;
          if (skill.experience < targetExperience) {
            return { ...skill, experience: skill.experience + 1 };
          } else {
            return skill;
          }
        });

        // Stop the interval when all skills reach their target experience
        if (updatedSkills.every(skill => skill.experience >= skillData.find(s => s.name === skill.name).experience)) {
          clearInterval(interval);
        }

        return updatedSkills;
      });
    }, 25); // Speed of the increment (in milliseconds)
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        incrementExperience();
        observer.disconnect(); // Disconnect the observer after the function has been triggered
      }
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    if (skillsContainerRef.current) {
      observer.observe(skillsContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='container skills-container ' id='skills' ref={skillsContainerRef}>
      <h1 className='display-2 roboto-semibold'>SKILLS</h1>
      <div style={{ width: "100%" }}>
        {displayedSkills.map((skill, i) => (
          <div className="range-container" key={i}>
            <h5 className='display-4 roboto-semibold'>{skill.name}</h5>
            <div className='range-container__bar'>
              <p style={{ backgroundColor: `${skill.color}`, width: `${skill.experience}%` }} className='roboto-normal' data-color="green">{skill.experience}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
