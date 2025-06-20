import React from 'react'
import profile from '../assets/profile.png'

function Hero() {
    return (
        <section className="hero">
            <img src={profile} className='hero-image' />


            <h2>Hi, I'm Dheeraj Malik</h2>
            <p>Full Stack Developer | Passionate Fresher</p>
            <a href="/Dheeraj_Malik_Resume.pdf" download className="btn">Download Resume</a>
        </section>
    )
}

export default Hero
