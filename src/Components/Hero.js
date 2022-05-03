// Custom Component
import LargeButton from "./LargeButton"
// Typewriter
import TypeWriterEffect from "react-typewriter-effect"

const Hero = () => {
    return (
        <>
            <div className="section hero-section" id="hero">
                <div className="hero-sub-content left">
                    <LargeButton clsName="main-btn" btnTxt="Join Discord" btnUrl="https://discordapp.com" />
                </div>
                <div className="hero-main-content">
                    <div className="hero-img">
                        <img src="/assets/hero-img.gif" alt="" />
                    </div>
                    <h1 className="hero-txt">
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: "Dancing Script",
                                fontSize: "4rem",
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