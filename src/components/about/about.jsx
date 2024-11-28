import React from 'react'
import "./about.css";
import Me from '../../assets/me-about.webp';
import {BsAward} from 'react-icons/bs';
import {AiOutlineFolderOpen} from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div className='about__me-image'>
            <img src= {Me} alt='about' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>
          <p>
          A passionate self-taught full-stack developer with expertise in React.js, Node.js, and MongoDB, 
          I thrive on building innovative, user-centric applications. With a proven track record of delivering impactful projects like Bhojan-Bliss, MoWeb, and DevCompiler,
           I combine technical proficiency with a commitment to continuous learning. 
           I aim to contribute to cutting-edge solutions while growing professionally. 
           Ready to bring dedication, creativity, and problem-solving skills to your team.


          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>

        </div>

      </div>

    </section>
  )
}

export default About