import heroImage from "../images/hero-img.gif"

const Hero = () => {
    return (
        <>
            <div className="section hero-section">
                <div className="hero-sub-content">
                    <a href="#" className="btn-discord">Join Discord</a>
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
                    <a href="#" className="btn-start">More Details</a>
                </div>
            </div>
        </>
    )
}

export default Hero