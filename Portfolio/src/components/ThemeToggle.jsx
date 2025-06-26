import React from 'react'

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle