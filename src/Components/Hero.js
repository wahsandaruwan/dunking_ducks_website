import heroImage from "../images/hero-img.gif"
import LargeButton from "./LargeButton"

const Hero = () => {
    return (
        <>
            <div className="section hero-section">
                <div className="hero-sub-content">
                    <LargeButton clsName="hero-btn" btnTxt="Join Discord" btnUrl="https://discordapp.com" />
                </div>
                <div className="hero-main-content">
                    <div className="hero-img">
                        <img src={heroImage} alt="" />
                    </div>
                    <h1 className="hero-txt">
                        Welcome to DunkingDucks!
                    </h1>
                </div>
                <div className="hero-sub-content">
                    <LargeButton clsName="hero-btn" btnTxt="More Details" btnUrl="https://discordapp.com" />
                </div>
            </div>
        </>
    )
}

export default Hero