import React, {memo} from "react";
// Import Swiper React components
import {Swiper} from "swiper/react";
import "../stylesheets/components/UI/SwiperSlider.scss"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Mousewheel, Pagination} from "swiper";

type Props = {
    children : React.ReactNode
}

const SwiperSlider = ({children}:Props) => {

    return (
        <>
            <Swiper
                direction={"vertical"}
                effect={"coverflow"}
                slidesPerView={1}
                spaceBetween={30}
                speed={1500}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlider>
                    {children}
                </SwiperSlider>
            </Swiper>
        </>
    );
}

export default memo(SwiperSlider);
