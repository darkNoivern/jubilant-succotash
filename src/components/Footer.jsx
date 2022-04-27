import React from 'react'
import '../styles/footer.css'
import { IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const LogoButton = styled(IconButton)({
    fontSize: '1.2rem',
    border: '2px solid #8892b0',
    color: '#8892b0',
});

const Footer = () => {
    return (
        <>
            <div className="sub-footer-section flexy">
                <div className="row footer-section mx-0 mouserat">
                    <div className="col col-12 hero-desc text-200 mb-4 d-flex justify-content-evenly align-items-center">
                        <LogoButton><FacebookIcon /></LogoButton>
                        <LogoButton><TwitterIcon /></LogoButton>
                        <LogoButton><LinkedInIcon /></LogoButton>
                        <LogoButton><LocalFireDepartmentIcon /></LogoButton>
                    </div>
                    <div className='flexy text-300'>
                        © Copyright 2023 Portfolio
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer