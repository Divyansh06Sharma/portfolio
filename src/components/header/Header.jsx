import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Blast from '../BlastAnimation/Blast'
import '../BlastAnimation/blast.scss'
// import Logo from '../logoAnimation/Logo'
import Logo from '../logoAnimation/Logo'

import './header.scss'

const nameArray = ['D', 'i', 'v', 'y', 'a', 'n', 's', 'h']
const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
const Header = () => {
    // const {setLetterClass} =useState("text-animate")
    // const letterClass = "text-animate"
    const [letterClass, setLetterClass]=useState("text-animate")
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    })
    return (
        <section className="section-1 header__container section__padding">
            {/* {console.log(letterClass)} */}
            <main className="intro-page">
                <h1>
                    <span className={`${letterClass} _2`}>H</span>
                    <span className={`${letterClass} _3`}>i</span>
                    <span className={`${letterClass} _4`}>,</span>
                    <br />
                    <span className={`${letterClass} _5`}>I</span>
                    <span className={`${letterClass} _6`}>'</span>
                    <span className={`${letterClass} _7`}>m</span>
                    {' '}
                    <Blast letterClass={letterClass} arrayStr={nameArray} indexLetter={14} /> <br />
                    <Blast letterClass={letterClass} arrayStr={jobArray} indexLetter={22} />
                </h1>
                <p className="text-desc"> WEB DEVELOPER </p>
                <Link to={'/contact'} className="contact-button">
                    <div>   
                        <span className="bg switch__bg"></span>
                        <span className="base switch__border-color"></span>
                        <span className="text">Contact Me</span>
                    </div>
                </Link>
                <Logo />
            </main>
           
        </section> 
    )




}

export default Header