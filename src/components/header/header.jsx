import {React, useState} from 'react';
import "./header.scss"
import GrowingCircleAnimation from "../Animations/GrowingCircleAnimation";

const Header = (props) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (<header className="header">
        <nav className="nav container"><a href="src/components/header/header#portfolio" className="nav__logo">Aditya</a>
            <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="src/components/header/header#home" className="nav__links">
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="src/components/header/header#about" className="nav__links">
                            <i className="uil uil-user nav__icon"> </i>About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="src/components/header/header#skills" className="nav__links">
                            <i className="uil uil-puzzle-piece nav__icon"> </i>Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="src/components/header/header#services" className="nav__links">
                            <i className="uil uil-briefcase nav__icon"> </i>Works
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="src/components/header/header#portfolio" className="nav__links">
                            <i className="uil uil-scenery nav__icon"> </i>Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="src/components/header/header#contact" className="nav__links">
                            <i className="uil uil-message nav__icon"> </i>Contact
                        </a>
                    </li>

                    <GrowingCircleAnimation />
                </ul>

                <i className="uil uil-times nav__close" onClick={() => setToggleMenu(!toggleMenu)}></i>

            </div>
            <div className="nav__toggle" onClick={() => setToggleMenu(!toggleMenu)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>);
}

export default Header;
