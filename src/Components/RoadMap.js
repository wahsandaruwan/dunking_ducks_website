// Custom Component
import Step from "./Step"
// Data
import roadMapData from "../data/roadMapData.json"
// Typewriter
import TypeWriterEffect from "react-typewriter-effect"

const RoadMap = () => {
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
                                    <div className="event" key={index}>
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