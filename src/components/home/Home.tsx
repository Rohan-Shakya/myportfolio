import React from "react";
import "../stylesheets/components/home.scss";
import Social from "./Social";
import Data from "./Data";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <Social />
        <div className="home__content grid">
          <motion.div
            drag
            dragConstraints={{ left: 30, right: 40, top:20 , bottom:10 }}
            dragElastic={0.7}
            className="home__img"
          ></motion.div>
          <Data />
        </div>
      </div>
    </section>
  );
}

export default Home;
