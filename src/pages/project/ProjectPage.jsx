import React, { useEffect, useState } from 'react'
// import Fade from "react-reveal/Fade"
import {Fade} from "react-awesome-reveal"

import Blast from "../../components/BlastAnimation/Blast"
import Project from '../../components/projects/Project'
import { projects } from './index'

import './projectpage.scss'

const ProjectPage = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    return (
        <section className='section__projects section__padding'>
            <div className='fake-big'>Projects</div>
            <h2 aria-label='My Projects' className='section__projects-title'>
                <Blast letterClass={letterClass}
                    arrayStr={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't','s',]}
                    indexLetter={12}
                />
            </h2>
            <div className='section__projects-description'>
                <Fade bottom>
                    <p>  Here are some selected and challenging personal projects that I have
                        worked on so far which enabled me to level up my skills to a
                        fascinating point that makes me feel confident in tackling more
                        difficult challenges.
                    </p>
                </Fade>
            </div>

            <div className="section__projects-wrapper">
                {projects.map((project, index) => {
                    return <Project {...project} key={index} />
                }
                )}
            </div>
        </section>
    )
}

export default ProjectPage