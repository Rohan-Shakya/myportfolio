import React from 'react';
import "../stylesheets/components/skills/mySkills.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Navigation, Pagination} from "swiper";
import "swiper/css/navigation";
import ReactSkill from "./skillsPages/ReactSkill";
import VueSkill from "./skillsPages/VueSkill";
import ScrumSkill from "./skillsPages/ScrumSkill";


function MySkills() {
    return (
        <div id="skills" className="myskills__continer">
            <SwiperSlide>
                <Swiper
                    className="mySwiper2 swiper-h"
                    direction={"horizontal"}
                    spaceBetween={0}
                    speed={900}
                    mousewheel={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination, Navigation]}
                >
                    <SwiperSlide>
                        <ReactSkill/>
                    </SwiperSlide>
                    <SwiperSlide><VueSkill/></SwiperSlide>
                    <SwiperSlide>
                        <ScrumSkill/>
                    </SwiperSlide>
                </Swiper>
            </SwiperSlide>
        </div>
    );
}

export default MySkills;
