import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Time Management',
      description: 'Built Pomodoro timer, Google Calendar sync, AI assistant for enhanced productivity.',
      tech: ['JavaScript', 'Git', 'HTML5', 'CSS3'],
      liveLink: 'https://fanciful-elf-ed4c09.netlify.app',
      githubLink: 'https://github.com/Dheerajmlk/Frontend-fanatics',
      icon: '⏰'
    },
    {
      title: 'Medi-track',
      description: 'Comprehensive medication app with reminders, tracking, and authentication system.',
      tech: ['JavaScript', 'Responsive Web Design', 'CSS3', 'HTML5'],
      liveLink: 'https://meditrack-frontend.vercel.app',
      githubLink: 'https://github.com/Dheerajmlk/MediTrack/tree/main/MEDITRACK',
      icon: '💊'
    },
    {
      title: 'Financial Time Machine',
      description: 'Advanced financial tool providing summaries, tracking projections with modern UI.',
      tech: ['JavaScript', 'React', 'zustand'],
      liveLink: 'https://financial-time-machine-six.vercel.app',
      githubLink: 'https://github.com/Dheerajmlk/Financial-Time-Machine/tree/main/Finance',
      icon: '💰'
    }
  ];

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{
                fontSize: '3rem',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                {project.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--primary-color)'
              }}>
                {project.title}
              </h3>
              
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                flex: 1,
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: 'var(--primary-color)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <a
                  href={project.liveLink}
                  className="btn-primary"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontSize: '0.875rem'
                  }}
                  target="_blank" rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  className="btn-secondary"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontSize: '0.875rem'
                  }}
                  target="_blank" rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
