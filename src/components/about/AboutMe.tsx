import React, {useState} from 'react';
import "../stylesheets/components/aboutme/aboutme.scss"
import CardLarge from "../UI/CardLarge";
import CodeSec from "../UI/CodeSec";
import my_data from "../../data/about_me.json"
import AboutMePage from "../../data/about_me.types"


const my_datas: AboutMePage = my_data.aboutMePage;

export const AboutMe: React.FC = () => {
    const [active, setActive] = useState<'python' | 'js' | 'java'>("python");

    return (
        <div id="about" className="about__container">
            <h1>Well here is a thing or two about me: </h1>
            <CardLarge>
                {/*header for the card*/}
                <div className="about-card__header">
                    <div className="back__front-icons">
                        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24"
                             stroke="black"
                             strokeWidth="1"
                             data-view-component="true">
                            <path fillRule="evenodd"
                                  d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"></path>
                        </svg>
                        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24"
                             data-view-component="true"
                             stroke="black"
                             strokeWidth="1">
                            <path fillRule="evenodd"
                                  d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"></path>
                        </svg>
                    </div>

                    <div
                        className="card__header-bar">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true">
                            <path fillRule="evenodd"
                                  d="M4 4v2h-.25A1.75 1.75 0 002 7.75v5.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-5.5A1.75 1.75 0 0012.25 6H12V4a4 4 0 10-8 0zm6.5 2V4a2.5 2.5 0 00-5 0v2h5zM12 7.5h.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25H12z"></path>
                        </svg>
                        <div className="px-2 px-md-8 text-truncate">Aditya-Raj-Tiwari.my.skills</div>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                             data-view-component="true">
                            <path fillRule="evenodd"
                                  d="M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z"></path>
                        </svg>
                    </div>
                    <div className="card__header-add">
                        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24"
                             data-view-component="true" className="octicon octicon-plus color-fg-muted">
                            <path fillRule="evenodd" stroke="black"
                                  strokeWidth="1"
                                  d="M11.75 4.5a.75.75 0 01.75.75V11h5.75a.75.75 0 010 1.5H12.5v5.75a.75.75 0 01-1.5 0V12.5H5.25a.75.75 0 010-1.5H11V5.25a.75.75 0 01.75-.75z"></path>
                        </svg>
                    </div>


                </div>
                <hr/>
                {/*content section*/}
                <div className="about-card__content">
                    <div className="content-sec__left">
                        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24"
                             data-view-component="true" className="octicon octicon-three-bars color-fg-muted">
                            <path fillRule="evenodd"
                                  d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
                        </svg>
                        <hr/>
                    </div>
                    {/*dynamic description goes here*/}
                    <div className={"content-sec__desc"}>
                        <h3>
                            {my_datas[active as keyof AboutMePage].title}
                        </h3>
                        {my_datas[active as keyof AboutMePage].description}

                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className={"link"}>See my Github <span className={"stats"}>Stats</span>
                            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24"
                                 data-view-component="true"
                                 stroke="black"
                                 strokeWidth="1">
                                <path fillRule="evenodd"
                                      d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"></path>
                            </svg>

                        </a>
                    </div>
                    {/*end dynamic description*/}
                    <div className={"content-sec__files"}>
                        <CodeSec my_data={my_datas} active={active} setActive={setActive}/>
                    </div>
                </div>


            </CardLarge>
        </div>
    );
}

export default AboutMe;
