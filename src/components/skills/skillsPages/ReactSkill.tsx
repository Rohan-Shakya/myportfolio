import React from 'react';
import "../../stylesheets/components/skills/SkillsPages/ReactSkills.scss"
import {ReactJs} from "@icons-pack/react-simple-icons"
import Card from "../../UI/Card";

function ReactSkill() {
    return (<div className={"react__skill-container"}>
            <h1>React.js <ReactJs color='#61DAFB' size={44}/></h1>
            <div className="row">
                <Card>
                    <div className="content">
                        <h3>Background & Story</h3>
                        <p>
                            I started learning React in 2019, when I had to code one of my school Project. I was making
                            a homework sharing website for my friends.
                        </p>
                        <br/>
                        <p>Then I discovered these cool effects I could do with it and made me want to learn it.</p>
                        <br/>
                        <p>I also recently made this website completely in React.js ! 😊</p>
                    </div>
                </Card>

                <div className="stats">
                    <Card>
                        <div className={"reviews"}>
                            <p><span className={"bold"}>4.9</span> out of <span className={"bold"}>5</span></p>
                            <p>Service Rating in Linked in!</p>
                            <a href="https://www.linkedin.com/services/page/14028730a0545635b6" target="_blank"
                               rel="noopener noreferrer">Link to Linked-in
                                Service</a>
                        </div>
                    </Card>

                    <Card>
                        <div className="">
                            <h4>Learned from: Udemy, Youtube</h4>
                            <h4>Confidence: Confident </h4>
                            <h4>Usage: Very Often </h4>
                        </div>
                    </Card>
                </div>
            </div>

        </div>);
}

export default ReactSkill;
