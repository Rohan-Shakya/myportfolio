import React from 'react';

function Social(props) {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/art__tiwari/" className="home__social-icon" target="_blank">
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/aditya-raj-tiwari/" className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://github.com/Aditya-Raj-Tiwari" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    );
}

export default Social;
