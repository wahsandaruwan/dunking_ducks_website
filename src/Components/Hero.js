// Inbuilt Modules
import { useEffect } from "react";
// Custom Component
import LargeButton from "./LargeButton"
import BgAnimation from "./BgAnimation"
// Typewriter
import TypeWriterEffect from "react-typewriter-effect"
// Scroll Animation
import Aos from "aos"
import "aos/dist/aos.css"

const Hero = () => {
    // Global Animations
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div className="section hero-section" id="hero">
                <BgAnimation />
                <div className="hero-sub-content left">
                    <LargeButton clsName="main-btn" btnTxt="Join Discord" btnUrl="https://discordapp.com" />
                </div>
                <div className="hero-main-content">
                    <div data-aos="zoom-in" className="hero-img">
                        <img src="/assets/hero-img.gif" alt="" />
                    </div>
                    <h1 className="hero-txt">
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: "Dancing Script",
                                fontSize: "3.5rem",
                                textAlign: "center"
                            }}
                            startDelay={100}
                            cursorColor="#ffffff"
                            text="Welcome to Dunking Ducks!"
                            typeSpeed={100}
                        />
                    </h1>
                </div>
                <div className="hero-sub-content right">
                    <LargeButton clsName="main-btn" btnTxt="More Details" btnUrl="https://discordapp.com" />
                </div>
            </div>
        </>
    )
}

export default Hero