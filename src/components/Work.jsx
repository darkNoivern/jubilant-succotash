import React from 'react'
import '../styles/work.css'
import srima from '../assets/srima.png'
import cryptozenin from '../assets/cryptozenin.png'
import weatherjs from '../assets/weatherjs.png'
import pokedex from '../assets/pokedex.png'
import cupidify from '../assets/cupidify.png'

const Work = () => {
    return (
        <>
            <div className="sub-section flexy py-5">
                <div className="row mx-0 mouserat skill-section">
                    <div className="col col-12 text-100 mb-3">
                        <div className="skills-header">
                            Work
                        </div>
                    </div>
                    <div className="col col-12 text-300 mb-5">// These are some of my recent projects I've worked upon</div>

                    <div className="col col-lg-4 col-sm-6 col-12 flexy mb-3">
                        <div className="card p-3 work-card img-overlay">
                            <div className="normal-card">
                                <img className='work-img' src={cryptozenin} alt="" />
                                <div className="header text-100 text-center mt-4 project-name">CryptoZenin</div>
                            </div>
                            <div className="overlay d-flex justify-content-evenly align-items-center">
                                <a href="https://cryptozenin.herokuapp.com/" target='_blank' className='ui inverted button grey mx-0'>
                                    Demo<i class="quote right icon"></i>
                                </a>
                                <a href="https://github.com/darkNoivern/cryptozenin" target='_blank' className='ui inverted button grey mx-0'>{`<Code />`}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col col-lg-4 col-sm-6 col-12 flexy mb-3">
                        <div className="card p-3 work-card img-overlay">
                            <div className="normal-card">
                                <img className='work-img' src={srima} alt="" />
                                <div className="header text-100 text-center mt-4">Youtube Page</div>
                            </div>
                            <div className="overlay d-flex justify-content-evenly align-items-center">
                                <a href="https://csb-2leoo.netlify.app/" target="_blank" className='ui inverted button grey mx-0'>Demo
                                    <i class="quote right icon"></i></a>
                                <a href='https://codesandbox.io/s/sharp-yonath-2leoo' target='_blank' className='ui inverted button grey mx-0'>{`<Code />`}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col col-lg-4 col-sm-6 col-12 flexy mb-3">
                        <div className="card p-3 work-card img-overlay">
                            <div className="normal-card">
                                <img className='work-img' src={weatherjs} alt="" />
                                <div className="header text-100 text-center mt-4">WeatherJs</div>
                            </div>
                            <div className="overlay d-flex justify-content-evenly align-items-center">
                                <a href="https://csb-3hwgh.netlify.app/" target="_blank" className='ui inverted button grey mx-0'>Demo
                                    <i class="quote right icon"></i></a>
                                <a href='https://codesandbox.io/s/romantic-spence-3hwgh' target="_blank" className='ui inverted button grey mx-0'>{`<Code />`}</a>
                            </div>
                        </div>
                    </div>


                    <div className="col col-lg-4 col-sm-6 col-12 flexy mb-3">
                        <div className="card p-3 work-card img-overlay">
                            <div className="normal-card">
                                <img className='work-img' src={pokedex} alt="" />
                                <div className="header text-100 text-center mt-4">Pokedex</div>
                            </div>
                            <div className="overlay d-flex justify-content-evenly align-items-center">
                                <a href='https://csb-g7fx4.netlify.app/' target="_blank" className='ui inverted button grey mx-0'>Demo
                                    <i class="quote right icon"></i></a>
                                <a href="https://codesandbox.io/s/crimson-glade-g7fx4" target="_blank" className='ui inverted button grey mx-0'>{`<Code />`}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col col-lg-4 col-sm-6 col-12 flexy mb-3">
                        <div className="card p-3 work-card img-overlay">
                            <div className="normal-card">
                                <img className='work-img' src={cupidify} alt="" />
                                <div className="header text-100 text-center mt-4">CupidiΦ</div>
                            </div>
                            <div className="overlay d-flex justify-content-evenly align-items-center">
                                <a href="https://cupidify.herokuapp.com/" target="_blank" className='ui inverted button grey mx-0'>Demo
                                    <i class="quote right icon"></i></a>
                                <a href="https://github.com/darkNoivern/supreme-octo-waddle" target="_blank" className='ui inverted button grey mx-0'>{`<Code />`}</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Work