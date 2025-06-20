import React from 'react'

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <h3>Technical Skills</h3>
      <ul>
        <li>HTML5, CSS3, JavaScript</li>
        <li>React, Redux, Node.js, Express.js</li>
        <li>MongoDB, RESTful APIs</li>
        <li>Git, Responsive Web Design</li>
      </ul>

      <h3>Soft Skills</h3>
      <ul>
        <li>Adaptability</li>
        <li>Time Management</li>
        <li>Teamwork</li>
        <li>Effective Communication</li>
      </ul>

      <h3>GitHub</h3>
      <p>
        Explore my code and contributions on{' '}
        <a href="https://github.com/Dheerajmlk" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>.
      </p>

      <img
        src="https://github-readme-stats.vercel.app/api?username=Dheerajmlk&show_icons=true&theme=default"
        alt="Dheeraj Malik GitHub Stats"
        style={{ width: '100%', maxWidth: '500px', marginTop: '1rem' }}
      />
    </section>
  )
}

export default Skills
