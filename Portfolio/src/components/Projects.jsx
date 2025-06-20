import React from 'react'

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>Time Management</h3>
        <p>Built an advanced time management tool with Pomodoro timer, AI assistant, and Google Calendar sync. Led a team of 3 and ensured smooth collaboration.</p>
        <p><a href="https://fanciful-elf-ed4c09.netlify.app" target="_blank">Live Demo</a> | <a href="https://github.com/Dheerajmlk/Frontend-fanatics" target="_blank">GitHub Repo</a></p>
      </div>

      <div className="project-card">
        <h3>Medi-track</h3>
        <p>Medication management app with reminders, auth, and medicine tracking. Adapted design based on feedback from mentors and users.</p>
        <p><a href="https://meditrack-frontend.vercel.app" target="_blank">Live Demo</a> | <a href="https://github.com/Dheerajmlk/MediTrack/tree/main/MEDITRACK" target="_blank">GitHub Repo</a></p>
      </div>

      <div className="project-card">
        <h3>Financial-Time-Machine</h3>
        <p>Financial summary tool using React and zustand with Firebase integration. Managed end-to-end from planning to deployment.</p>
        <p><a href="https://financial-time-machine-six.vercel.app" target="_blank">Live Demo</a> | <a href="https://github.com/Dheerajmlk/Financial-Time-Machine/tree/main/Finance" target="_blank">GitHub Repo</a></p>
      </div>
    </section>
  )
}

export default Projects
