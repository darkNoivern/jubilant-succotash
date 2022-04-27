import React from 'react'
import '../styles/hero.css'

const Hero = () => {
    return (
        <>
            <div className="sub-section flexy">
                <div className="row hero-section mx-0 mouserat">
                    <div className="col col-12 custom-pink hero-desc text-200 mb-1">
                        Hi my name is
                    </div>
                    <div className="col col-12 hero-desc big-text text-100 mb-1">
                        Mahadev Karmakar
                    </div>
                    <div className="col col-12 hero-desc big-text text-300 mb-2">
                        I'm a Front-End Developer
                    </div>
                    <div className="col col-12 hero-desc text-300 mb-3">
                        I’m a front-end developer specializing in building (and occasionally
                        designing) exceptional digital experiences. Currently, I’m focused on
                        building responsive full-stack web applications.
                    </div>
                    <div className="col col-12 hero-desc">
                        <button className='ui inverted grey button mouserat'>View Work<i class="arrow right icon"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero