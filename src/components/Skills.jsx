import React from 'react'
import '../styles/skills.css'
import html from '../images/html.png'
import css from '../images/css.png'
import firebase from '../images/firebase.png'
import github from '../images/github.png'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
import Tilt from 'react-vanilla-tilt'

const Skills = () => {
    return (
        <>
            <div className="sub-section flexy py-5">
                <div className="row mx-0 mouserat skill-section">
                    <div className="col col-12 text-100 mb-3"><div className="skills-header">

                    Experience</div>
                    </div>
                    <div className="col col-12 text-300 mb-5">// These are the technologies I've worked with</div>
                
                    <div className="col col-lg-4 col-sm-6 col-12 flexy">
                        <Tilt className="card skills-card">
                            <div className="image"><img src={html} alt="" /></div>
                            <div className="header text-100 text-center mt-4">HTML</div>
                        </Tilt>
                    </div>
                    <div className="col col-lg-4 col-sm-6 col-12 flexy">
                        <Tilt className="card skills-card">
                            <div className="image"><img src={css} alt="" /></div>
                            <div className="header text-100 text-center mt-4">CSS</div>
                        </Tilt>
                    </div>
                    <div className="col col-lg-4 col-sm-6 col-12 flexy">
                        <Tilt className="card skills-card">
                            <div className="image"><img src={javascript} alt="" /></div>
                            <div className="header text-100 text-center mt-4">Javascript</div>
                        </Tilt>
                    </div>
                    <div className="col col-lg-4 col-sm-6 col-12 flexy">
                        <Tilt className="card skills-card">
                            <div className="image"><img src={github} alt="" /></div>
                            <div className="header text-100 text-center mt-4">Github</div>
                        </Tilt>
                    </div>
                    <div className="col col-lg-4 col-sm-6 col-12 flexy">
                        <Tilt className="card skills-card">
                            <div className="image"><img src={firebase} alt="" /></div>
                            <div className="header text-100 text-center mt-4">Firebase</div>
                        </Tilt>
                    </div>
                    
                    <div className="col col-lg-4 col-sm-6 col-12 flexy">
                        <Tilt className="card skills-card">
                            <div className="image"><img src={react} alt="" /></div>
                            <div className="header text-100 text-center mt-4">React</div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills