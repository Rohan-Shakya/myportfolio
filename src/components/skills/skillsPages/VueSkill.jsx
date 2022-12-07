import {React, useState} from 'react';
import {Vuedotjs} from "@icons-pack/react-simple-icons";
import Card from "../../UI/Card";
import "../../stylesheets/components/skills/SkillsPages/VueSkills.scss"
import myWorkImage from "../../../assets/work.webp"

function VueSkill() {
    const [popPic, setPopPic] = useState("");

    return (
        <div className={"vue__skill-container"}>
            <h1>Vue.js <Vuedotjs color='#42b883' size={44}/></h1>
            <div className="row">
                <Card>
                    <div className="content">
                        <h3>Background & Story</h3>
                        <p>
                            I use Vue.js in my current temporary Project(work). I use vue.js along with Laravel to make
                            the ecommerce website.
                        </p>
                        <br/>
                        <p>In my work I have implemented several concepts like Filters, Basket, Sliders, Category Pages
                            with Items, Product Pages, etc</p>
                        <br/>
                        <p>You can see my work in the website -> <a onMouseEnter={() => setPopPic("show")}
                                                                    onMouseLeave={() => setPopPic("")}
                                                                    href="https://www.morgenland-teppiche.de" rel="my Work noreferrer" target="_blank">Ecommerce Website
                            Link</a></p>
                    </div>

                    <Card className={"work-card " + popPic}>
                        <h3>A glimpse of the website</h3>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={myWorkImage} alt="my work image"/>
                    </Card>
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
                            <h4>- Learned from: Udemy, Youtube, Work experience, Linda(Certificate)</h4>
                            <h4>- Confidence: Confident </h4>
                            <h4>- Usage: Very Often </h4>

                        </div>
                    </Card>
                </div>
            </div>

        </div>
    );
}

export default VueSkill;
