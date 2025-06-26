import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Masai School',
      period: '2024 - Present',
      description: 'Developing full-stack applications using modern technologies. Working on collaborative projects and learning industry best practices.',
      achievements: [
        'Built multiple responsive web applications',
        'Collaborated with cross-functional teams',
        'Implemented REST APIs and database solutions'
      ]
    },
    {
      title: 'Software Development Student',
      company: 'Masai School',
      period: '2024 - 2025',
      description: 'Intensive software development program focusing on practical skills and real-world projects.',
      achievements: [
        'Completed Construct Week projects',
        'Mastered modern web technologies',
        'Developed problem-solving skills'
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Experience
        </motion.h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                marginBottom: '3rem'
              }}
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '20px',
                  top: '60px',
                  width: '2px',
                  height: '100px',
                  background: 'var(--primary-color)',
                  opacity: 0.3
                }} />
              )}
              
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '20px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--primary-color)',
                border: '3px solid var(--bg-primary)',
                zIndex: 1
              }} />
              
              <div className="card" style={{ marginLeft: '50px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: 'var(--primary-color)',
                      marginBottom: '0.25rem'
                    }}>
                      {exp.title}
                    </h3>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      color: 'var(--text-primary)'
                    }}>
                      {exp.company}
                    </h4>
                  </div>
                  <span style={{
                    background: 'var(--bg-secondary)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: 'var(--text-secondary)'
                  }}>
                    {exp.period}
                  </span>
                </div>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {exp.description}
                </p>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0
                }}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} style={{
                      color: 'var(--text-secondary)',
                      marginBottom: '0.5rem',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--primary-color)'
                      }}>
                        ✓
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
