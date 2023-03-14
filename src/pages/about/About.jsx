import React, { useEffect, useState } from 'react'
import myCV from '../../assets/images/myCV.jpeg'
// import Reveal from "react-reveal/Reveal"
// import Fade from "react-reveal/Fade"
import {Reveal, Fade} from "react-awesome-reveal"

import Cards from '../../components/skillsCards/Cards'
import Blast from "../../components/BlastAnimation/Blast"

import "./about.scss"

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  })
  return <>
    <Reveal>
      <div className='fake-big'>About</div>
      <div className='section-about-wrapper section__padding'>
        <article className='section-about-description'>
          <div>
            <h2 aria-label='About and Skills'>
              <Blast letterClass={letterClass} arrayStr={["A", "b", "o", "u", "t", " ", "&", " ", "S", "k", "i", "l", "l", "s"]} indexLetter={15} />
            </h2>
            <Fade left>
              <p>
                I’m an ambitious Front-End Developer who’s passionate
                about coding and looking for a role in an IT company
                with the opportunity to work with the latest technologies
                on challenging and diverse projects.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                I’m form Mandsaur, currently pursuing my Bachelor’s Degree
                at Indore Institute of Science and Technology. I’m a fresher
                who loves to building cool UI and dynamic webpages with amazing
                animations. I also love to reach out to new opportunities across
                the globe that can enhance my skills and get the opportunity to
                collaborate with other programmers
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Some interesting things about me, I’m a Gym addict and loves
                to play Basketball and Football so I’m always ready for any challenges
                that come in my way. Here’s My Resume below for more details
              </p>
            </Fade>
            <Fade left >
              <a href="https://drive.google.com/file/d/1Z2tWq9RNwzLWdFAPv6hBD0TVlHzrgiFe/view?usp=share_link" target="_blank" download className='contact-button submit-button'>
                <div>
                  <span className='bg switch__bg'></span>
                  <span className='base switch__border-color'></span>
                  <span className='text'> Download Resume</span>
                </div>
              </a>

            </Fade>
          </div>
        </article>
        <Cards />
      </div>
    </Reveal>
  </>
}

export default About