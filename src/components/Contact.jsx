import React from 'react'
import '../styles/contact.css'

const Contact = () => {
    return (
        <>
            <div className="sub-section flexy">
                <div className="row hero-section mx-0 mouserat">
                    <div className="col col-12 text-100 mb-3">
                        <div className="skills-header">
                            Contact
                        </div>
                    </div>
                    <div className="col col-12 text-300 mb-5">// Fill the form below or shoot up with an email at : virizion624@gmail.com</div>
                    <div className="col text-300 col-12">
                        <form method='POST' action='https://getform.io/f/82439f65-d46a-4b7f-9b30-cc11431123f2'>
                            <input
                                placeholder='Name'
                                className='form-control mouserat bg-300 text-dark mb-3'
                                type="text"
                            />
                            <input
                                placeholder='E-Mail'
                                className='form-control mouserat bg-300 text-dark mb-3'
                                type="text"
                            />
                            <textarea
                                placeholder='Message'
                                className='form-control mouserat bg-300 text-dark mb-3'
                                type="text"
                            />
                        <div className='d-flex justify-content-center align-items-center'>
                            <button className='ui inverted grey button'>Let's Collaborate</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact