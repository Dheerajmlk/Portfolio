
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                My Journey
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Seasoned Software Developer with a proven track record in designing and implementing innovative solutions.
                Skilled in multiple programming languages and frameworks, with strong problem-solving abilities.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Experienced in collaborating with cross-functional teams to deliver high-quality, efficient software products.
                Committed to continuous learning and driving impactful, scalable technology solutions across diverse projects.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                🎓 Education
              </h3>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Masai, Bengaluru</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Software Development (Jun 2025)</p>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Maharshi Dayanand University</h4>
                <p style={{ color: 'var(--text-secondary)' }}>BCom (Jun 2022)</p>
              </div>
            </div>
            
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                📜 Certifications
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Masai School - Construct Week Project
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
