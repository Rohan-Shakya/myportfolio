import React from 'react';
import "./home.scss"
import Social from "./Social";
import Data from "./Data"

function Home(props) {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>
                    <div className="home__img"></div>
                    <Data/>
                </div>
            </div>
        </section>
    );
}

export default Home;
