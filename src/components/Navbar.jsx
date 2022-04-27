import React from 'react'
import { Link } from 'react-scroll';
import '../styles/navbar.css';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-violet text-yellow">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand custom-pink py-2 text-200"
                        to="section1"
                        smooth={true}
                        duration={500}
                    >
                        spryzen<LocalFireDepartmentIcon />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 header">
                            <li>
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="skills"
                                    smooth={true}
                                    duration={500}
                                >
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="work"
                                    smooth={true}
                                    duration={500}
                                >
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    activeClass="active"
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar