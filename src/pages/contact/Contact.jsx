import React, { useState, useRef, useEffect } from 'react'
import { BsExclamationLg, BsPatchCheckFill, BsTranslate } from "react-icons/bs"
// import Fade from "react-reveal/Fade"
import {Fade, Reveal} from "react-awesome-reveal"
// import Reveal from "react-reveal"

import Blast from "../../components/BlastAnimation/Blast"
import Map from "../../components/map/Map"

import emailjs from '@emailjs/browser'

import './contact.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000);
    }, [])
    const [validInpt, setValidInpt] = useState({
        name: '',
        message: '',
        email: '',
        subject: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValidInpt((preValue) => {
            return { ...preValue, [name]: value }
        })
    }
    const emailRef = useRef(null)
    const TextAreaRef = useRef(null)
    const MessageRef = useRef(null)
    const form = useRef(null)

    const setError = (inputRef) => {
        if (inputRef.current.parentElement.classList.contains('success')) {
            inputRef.current.parentElement.classList.remove('success')
        } else {
            inputRef.current.parentElement.classList.add('error')
        }
    }
    const setSuccess = (inputRef) => {
        if (inputRef.current.parentElement.classList.contains('error')) {
            inputRef.current.parentElement.classList.remove('error')
        } else {
            inputRef.current.parentElement.classList.add('success')
        }
    }
    const showMessage = (message) => {
        const divContent = document.createElement("div")
        divContent.textContent = message
        divContent.classList.add("div-content")
        MessageRef.current.prepend(divContent)

        MessageRef.current.style.transform = `translateX(${0}%)`

        setTimeout(() => {
            divContent.classList.add("hide")
        
        
           divContent.addEventListener("transitionend" , () => {
            divContent.remove()
           })

           emailRef.current.parentElement.classList.remove("error")
           emailRef.current.parentElement.classList.remove("success")

           
           TextAreaRef.current.parentElement.classList.remove("error")
           TextAreaRef.current.parentElement.classList.remove("success")
        },5000)
    }

    const onSubmit = (e) => {
        // e.preventDefault()
        e.preventDefault();
        const { email, message } = validInpt
        if (!email && !message) {
            console.log("error")
            setError(emailRef)
            setError(TextAreaRef)
            showMessage("Please! fill in the required input")
        }
        else {
            console.log("sending mail")
            emailjs.sendForm('service_uqtz0w1', 'template_d2ebn92', form.current, 'TV0QYpQJYUHBgONHm',)
            setSuccess(emailRef)
            setSuccess(TextAreaRef)
            showMessage("Message sent successfully")

            setValidInpt({
                name: "",
                message: "",
                subject: "",
                email: "",
            })
        }
        // console.log("working")
    }
    return (
        <>
            <section className='contact-section'>
                <div className='fake-big'>@</div>
                <form ref={form} className="contact-form" onSubmit={onSubmit}>
                    <div>
                        <h2 className='contact__heading'>
                            <Blast letterClass={letterClass} arrayStr={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]} indexLetter={12} />
                        </h2>
                        <Fade bottom>
                            <p>
                                I’m interested in freelance opportunities and I am always ready
                                to build projects at anytime, if you have any job offer for me,
                                you could use the form below to react out to me.
                            </p>
                        </Fade>
                    </div>
                    <Fade bottom >
                        <div className='input-wrapper'>
                            <div className='form-input-group'>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder='Name'
                                    value={validInpt.name}
                                    autoComplete="false"
                                    onChange={handleChange}
                                />
                                <span className="switch__bg"></span>
                            </div>
                            <div className='form-input-group '>
                                <input
                                    type="mail"
                                    name='email'
                                    placeholder='Email'
                                    value={validInpt.email}
                                    autoComplete="false"
                                    onChange={handleChange}
                                    ref={emailRef}
                                />
                                <span className="switch__bg"></span>
                                <BsExclamationLg className="exclamation" />
                                <BsPatchCheckFill className="checkCircle" />
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='form-input-group'>
                            <input
                                type="text"
                                name='subject'
                                placeholder='Subject'
                                value={validInpt.subject}
                                autoComplete="false"
                                onChange={handleChange}
                            />
                            <span className="switch__bg"></span>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='form-input-group'>
                            <textarea
                                autoComplete='false'
                                ref={TextAreaRef}
                                type="text"
                                placeholder='Message'
                                name='message'
                                value={validInpt.message}
                                onChange={handleChange}
                            />
                            <span className='switch-bg'>
                                <BsExclamationLg className="exclamation" />
                                <BsPatchCheckFill className="checkCircle" />
                            </span>
                        </div>
                    </Fade>
                    <Fade left>
                        <button type="submit" className="contact-button submit-button">
                            <div>
                                <span className="bg switch__bg"></span>
                                <span className="base switch__border-color"></span>
                                <span className="text">Send Message </span>
                            </div>
                        </button>
                    </Fade>
                    <Reveal bottom>
                        <footer className='footer'>
                            <p>copyright All Right Reserved Divyansh - 2022</p>
                        </footer>
                    </Reveal>
                </form>
                <div className='google-map'>
                    <Map />
                </div>
                <div className='message' ref={MessageRef}></div>
            </section>
        </>
    )
}

export default Contact