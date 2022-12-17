import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GrowingCircleAnimation from "./components/Animations/GrowingCircleAnimation";
import React, {useContext} from "react";
import {ThemeContext} from "./contexts/ThemeContext";
import AboutMe from "./components/about/AboutMe";
import SwiperSlider from "./components/UI/SwiperSlider";
import {SwiperSlide} from "swiper/react";
import MySkills from "./components/skills/MySkills";

function App() {
    const ctx = useContext(ThemeContext);
    return (
        <>
            <GrowingCircleAnimation isDark={ctx.isDark}/>
            <Header/>
            <main className="main">
                <SwiperSlider>
                    <SwiperSlide> <Home/></SwiperSlide>
                    <SwiperSlide> <AboutMe/></SwiperSlide>
                    <SwiperSlide> <MySkills /></SwiperSlide>
                </SwiperSlider>
            </main>
        </>
    );
}

export default App;
