// Skills.jsx - Shows all your technical skills grouped by category
// Each skill has a name and a proficiency level shown as a simple progress bar

import React from 'react'

// Skills data grouped by category
// Proficiency is from 0 to 100 (percentage for the bar width)
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML & CSS',   level: 85 },
      { name: 'JavaScript',   level: 70 },
      { name: 'React',        level: 60 },
      { name: 'Tailwind CSS', level: 55 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 65 },
      { name: 'VS Code',      level: 90 },
      { name: 'Figma (basic)',level: 45 },
      { name: 'C++',          level: 70 },
    ],
  },
  {
    category: 'Backend (Learning)',
    skills: [
      { name: 'Node.js',      level: 35 },
      { name: 'Express.js',   level: 30 },
      { name: 'MongoDB',      level: 25 },
      { name: 'REST APIs',    level: 40 },
    ],
  },
]

// A single skill bar component
// name = skill name, level = 0–100
function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__percent">{level}%</span>
      </div>
      <div className="skill-bar__track">
        {/* The width is set inline using the level prop */}
        <div
          className="skill-bar__fill"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="skills section section--alt">
      <div className="container">

        <h2 className="section__title">My Skills</h2>
        <p className="section__subtitle">Technologies I've worked with so far</p>

        {/* Loop through each category and render its skill bars */}
        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="skills__category">
              <h3 className="skills__category-title">{cat.category}</h3>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
