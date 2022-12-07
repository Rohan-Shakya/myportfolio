import {useContext, useState} from 'react';
import "../stylesheets/components/header.scss"
import DarkModeToggle from "./DarkModeToggle"
import {ThemeContext} from "../../contexts/ThemeContext";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const ctx = useContext(ThemeContext);


    return (<header className="header">
        <nav className={`nav container sticky__nav`}>
            <div className="darkIcon">
                <DarkModeToggle onClickMethod={ctx.setIsDark} isDark={ctx.isDark}/>
            </div>

            <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href={"#home"} className="nav__links">
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href={"#about"} className="nav__links">
                            <i className="uil uil-user nav__icon"> </i>About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href={"#skills"} className="nav__links">
                            <i className="uil uil-puzzle-piece nav__icon"> </i>Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="src/components/header/Header.jsx" className="nav__links">
                            <i className="uil uil-briefcase nav__icon"> </i>Works
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="src/components/header/Header.jsx" className="nav__links">
                            <i className="uil uil-scenery nav__icon"> </i>Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="src/components/header/Header.jsx" className="nav__links">
                            <i className="uil uil-message nav__icon icon-tilted"> </i>Contact
                        </a>
                    </li>


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
