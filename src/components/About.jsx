import React from 'react'
import '../styles/about.css'

const About = () => {
    return (
        <>
            <div className="sub-section flexy">
                <div className="row hero-section mx-0 mouserat">
                    <div className="col col-sm-6 col-12 text-100 mb-4 sp-text d-flex justify-content-sm-end justify-content-center">
                    <div className="about-heading">About</div>
                    </div>
                    <div className="col col-sm-6 col-12"></div>
                    <div className="col col-sm-6 col-12 mb-3 text-100 sp-text">
                        Hi. I'm Mahadev, nice to meet you. Please take a look around.
                    </div>
                    <div className="col col-sm-6 text-300 col-12">
                        I am passionate about building excellent software that improves
                        the lives of those around me. I specialize in creating software
                        for clients ranging from individuals and small-businesses all the
                        way to large enterprise corporations. What would you do if you had
                        a software expert available at your fingertips?
                    </div>
                </div>
            </div>
        </>
    )
}

export default About