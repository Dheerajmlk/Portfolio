import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: `linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)`,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Animation */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 20% 50%, var(--primary-color)20 0%, transparent 50%),
                     radial-gradient(circle at 80% 20%, var(--accent-color)20 0%, transparent 50%),
                     radial-gradient(circle at 40% 80%, var(--secondary-color)20 0%, transparent 50%)`,
        animation: 'pulse 4s ease-in-out infinite alternate'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '4rem',
              fontWeight: '700',
              marginBottom: '1rem',
              background: `linear-gradient(135deg, var(--primary-color), var(--accent-color))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Dheeraj Malik
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: '2rem',
              fontWeight: '500',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}
          >
            Full Stack Developer | Passionate Fresher
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}
          >
            Crafting innovative solutions with modern technologies. 
            Passionate about creating scalable, efficient software that makes a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
            <a
  href="/Dheeraj_Malik_Resume.pdf"
  className="btn-secondary"
  target="_blank"
  rel="noopener noreferrer"
>
  Download Resume
</a>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
