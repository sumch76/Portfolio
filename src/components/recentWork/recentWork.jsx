import React from 'react';
import "./recentWork.css";
import IMG1 from '../../assets/project1.png';
import IMG2 from '../../assets/project2.png';
import IMG3 from '../../assets/project3.png';
import IMG4 from '../../assets/project4.png'; // Import the new image
import IMG5 from '../../assets/project5.png'; // Import the new image
import IMG6 from '../../assets/project6.png';
import IMG7 from '../../assets/project7.png';

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'MoWeb',
    github: 'https://github.com/sumch76/moweb',
    demo: 'https://moweb-eight.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Random Password Generator',
    github: 'https://github.com/sumch76/Random_password_generator',
    demo: 'https://random-password-generator-lilac.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Obys-Agency-Clone',
    github: 'https://github.com/sumch76/obys-agency-clone',
    demo: 'https://sumch76.github.io/obys-agency-clone/'
  },
  {
    id: 4,
    image: IMG4, // Use the new image
    title: 'Razorpay Clone',
    github: 'https://github.com/sumch76/razorpayy',
    demo: 'https://sumitrazorpayclone.netlify.app/'
  },
  {
    id:5,
    image: IMG5,
    title: 'Bhojan-Bliss A Food App',
    github: 'https://github.com/sumch76/A-Food-App-BhojanBliss',
    demo: 'https://a-food-app-bhojan-bliss.vercel.app/'
  },
  {
  id:6,
  image:IMG6,
  title:'Training-Schedule-Management',
  github:'https://github.com/sumch76/training-schedule-management/tree/main/Project_Files',
  demo:'https://github.com/sumch76/training-schedule-management/tree/main/Project_Files'
  },
  {
  id:7,
  image:IMG7,
  title:'Personal Portfolio',
  github:'https://github.com/sumch76/Portfolio',
  demo:'https://portfolio-eight-delta-73.vercel.app/'
  },

];

const RecentWork = () => {
  return (
    <section id='recentWork'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container recentWork__container'>
        {
          projects.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='recentWork__item'>
                <div className='recentWork__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='recentWork__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default RecentWork;
