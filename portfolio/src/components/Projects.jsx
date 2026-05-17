// Projects.jsx - Showcases your personal/college projects
// Each project card has a title, description, tech used, and links

import React from 'react'

// Project data — edit this array to add your own projects
const projects = [
  {
    id: 1,
    title: 'Weather App',
    description:
      'A simple weather app that shows current weather for any city using the OpenWeather API. Users can search by city name and see temperature, humidity, and wind speed.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    github: 'https://github.com/aryan-sharma/weather-app',
    live: '#',
    emoji: '🌤️',
    tag: 'JavaScript Project',
  },
  {
    id: 2,
    title: 'Task Manager',
    description:
      'A to-do list app built with React. You can add tasks, mark them as done, filter by status, and delete them. I built this to learn React hooks like useState.',
    tech: ['React', 'CSS', 'localStorage'],
    github: 'https://github.com/aryan-sharma/task-manager',
    live: '#',
    emoji: '✅',
    tag: 'React Project',
  },
  {
    id: 3,
    title: 'College Event Website',
    description:
      'A static website I made for our college tech fest. It had a homepage, event schedule, team section, and a registration form. Built with pure HTML and CSS.',
    tech: ['HTML', 'CSS', 'Responsive Design'],
    github: 'https://github.com/aryan-sharma/techfest-site',
    live: '#',
    emoji: '🎉',
    tag: 'Team Project',
  },
]

// A single project card component
// It receives one project object as a prop
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Top: emoji + tag */}
      <div className="project-card__top">
        <span className="project-card__emoji">{project.emoji}</span>
        <span className="project-card__tag">{project.tag}</span>
      </div>

      {/* Project title */}
      <h3 className="project-card__title">{project.title}</h3>

      {/* Description */}
      <p className="project-card__desc">{project.description}</p>

      {/* Tech badges */}
      <div className="project-card__tech">
        {project.tech.map((t) => (
          <span key={t} className="project-card__badge">{t}</span>
        ))}
      </div>

      {/* Links: GitHub and Live Demo */}
      <div className="project-card__links">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-card__link"
        >
          GitHub ↗
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="project-card__link project-card__link--primary"
        >
          Live Demo ↗
        </a>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">

        <h2 className="section__title">My Projects</h2>
        <p className="section__subtitle">Things I've built while learning</p>

        {/* Render a card for each project */}
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Link to GitHub profile */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://github.com/aryan-sharma"
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline"
          >
            See More on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
