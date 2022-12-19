import React, {useState} from "react";
import {motion, Variants} from "framer-motion";
import "../stylesheets/components/portfolio/portfolio.scss"
import BubbleAnimation from "../UI/BubbleAnimation";

const Morgenland_PIC = require("../../assets/morgenland_ref.png")
const TUM_PIC = require("../../assets/tum_bubble.webp")

const Education = () => {
    const [showBubbleTum, setShowBubbleTum] = useState<boolean>(false);
    const [showBubbleUdemy, setshowBubbleUdemy] = useState<boolean>(false);

    const cardVariants: Variants = {
        offscreen: {
            y: -150, x: -500, opacity: 0.5
        }, onscreen: {
            y: -50, x: 0, opacity: 1, transition: {
                type: "spring", bounce: 0.4, duration: 2.8,
            }
        }
    };

    const childrenVariantFlyRight: Variants = {
        offscreen: {opacity: 0, x: -90}, onscreen: {
            opacity: 1, x: 0, transition: {
                type: "spring", bounce: 0.7, duration: 2.8,
            }
        }
    };


    return (<div className="portfolio__container">
        <motion.div className="inner_card" variants={cardVariants}>
            <h1><a href="https://drive.google.com/file/d/10yYMTWtVxAPK-s-hleNWNDYBCd7u3Gfv/view?usp=sharing" target="_blank" rel="noreferrer">
                Portfolio
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 24 24" fill="none"
                     stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/>
                </svg>
            </a>
            </h1>
        </motion.div>
        <motion.div className={"motion_box"} initial="offscreen"
                    whileInView="onscreen"
                    transition={{staggerChildren: 1}}
                    viewport={{once: true, amount: 0.8}}>

            <motion.h3 onHoverStart={() => setShowBubbleTum(true)} onHoverEnd={() => setShowBubbleTum(false)}
                       whileHover={{scale: 1.2, x: 90, y: 120}} whileTap={{scale: 0.8}} className="child"
                       variants={childrenVariantFlyRight}>
                🎓 Studies :
                <h6>Technical University of Munich</h6>
                {showBubbleTum && <><p>-Bachelors of Computer Science</p>
                    <p>-Currently in Third Semester</p>
                    <p>-GPA : 2.3</p>
                    <p>-Software project on React.js for restaurant order system</p>
                    <p>-Current Obsession : Rechnerarchitektur & Databases</p>
                    <h6>HighSchool : LRI</h6>
                    <p>-Software project : Django based Cms system</p>
                    <p>-Honors: Leadership Award 2018, Laxman Rajbanshi Scholarship</p>
                    <p>-School Prefect</p>
                    <h6>Studienkolleg Hamburg with GPA: 1.5</h6>
                    <h6>Language Skill:</h6>
                    <p>-German: C1 Level</p>
                    <p>-English: Native</p>
                    <p>-Nepali: Native</p>
                    <p>-Hindi: Fluent</p>
                </>}
            </motion.h3>
            <motion.h3 onHoverStart={() => setshowBubbleUdemy(true)} onHoverEnd={() => setshowBubbleUdemy(false)}
                       whileHover={{scale: 1.2}} whileTap={{scale: 0.8}} className="child"
                       variants={childrenVariantFlyRight}>
                💼 Work Experience:
                <h6>Morgenland Teppiche</h6>
                <p>2 years of working Experience</p>
                {showBubbleUdemy && <>
                    <p>-including 6 months of internship</p>
                    <p>-Worked with Vue.js and TWIG</p>
                    <p>-Worked with plenty Markets</p>
                    <p>-Used Monday.com for scrum management system</p>
                    <p>-Team Work: Team of 5 people 2 UI designers & 2 Programmers</p>
                    <p>-Github</p>
                    <h6>Developed new features such as:</h6>
                    <p>1.Shopping Guide</p>
                    <p>2.Filter Lead</p>
                    <p>3.Multiselect feature for Filter</p>
                    <p>4.And Many more design ideas</p>
                </>}
            </motion.h3>
            <BubbleAnimation
                imageUrl={TUM_PIC}
                show={showBubbleTum} className={'top__left'}/>
            <BubbleAnimation show={showBubbleTum} className={'center'}>
            </BubbleAnimation>
            <BubbleAnimation  imageUrl="https://mediatum.ub.tum.de/image/1692322.jpg" show={showBubbleTum} className={'top__right'}>
            </BubbleAnimation>

            <BubbleAnimation show={showBubbleUdemy} className={'center'}>
            </BubbleAnimation>
            <BubbleAnimation show={showBubbleUdemy} className={'top__right'}
                             imageUrl={Morgenland_PIC}>
            </BubbleAnimation>

        </motion.div>
    </div>)
}

export default Education
