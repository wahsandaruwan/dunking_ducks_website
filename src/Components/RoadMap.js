// Inbuilt Modules
import { useEffect } from "react";
// Custom Component
import Step from "./Step"
// Data
import roadMapData from "../data/roadMapData.json"
// Typewriter
import TypeWriterEffect from "react-typewriter-effect"
// Scroll Animation
import Aos from "aos"
import "aos/dist/aos.css"

const RoadMap = () => {
    // Global Animations
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div className="section roadmap-section" id="roadmap">
                <h1 className="section-title">
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: "Dancing Script",
                            fontSize: "3rem",
                            textAlign: "center"
                        }}
                        startDelay={100}
                        cursorColor="#ffffff"
                        text="Road Map!"
                        typeSpeed={100}
                    />
                </h1>
                <div className="roadmap-content">
                    {
                        roadMapData.map((item, index) => {
                            return (
                                <>
                                    <div data-aos="flip-up" className="event" key={index}>
                                        <Step stepName={item.stepName} stepDetails={item.stepDetails} />
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default RoadMap