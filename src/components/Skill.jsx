import React from 'react'
import SkillCard from './SkillCard'


const skillItem = [
  {
    imgSrc: '/images/DaVinci_Resolve_Studio.svg',
    label: 'Davinci Resolve',
    desc: ' Motion Graphics, Color Grading and Simple VFX'
  },
  {
    imgSrc: '/images/Adobe Premeire Pro.svg',
    label: 'Adobe Premiere Pro',
    desc: 'Sound Design , Pacing and Mood Setting'
  },
  {
    imgSrc: '/images/adobe-photoshop-icon.svg',
    label: 'Adobe Photoshop',
    desc: 'Photo Editing'
  },
  {
    imgSrc: '/images/Adobe After Effects.svg',
    label: 'Adobe After Effects',
    desc: 'Motion Graphics'
  },
]

const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2">
          Essential Tools I use:
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Here are some of the essential tools I use in my projects:
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr)) ]
">
          {
            skillItem.map(({imgSrc , label , desc} , key) => (
              <SkillCard 
              key={key}
              imgSrc={imgSrc}
              label={label}   
              desc={desc}
              />
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Skill