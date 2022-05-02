import Step from "./Step"
import roadMapData from "../data/roadMapData.json"

const RoadMap = () => {
    return (
        <>
            <div className="section roadmap-section">
                <h1 className="section-title">
                    Road Map!
                </h1>
                <div className="roadmap-content">
                    {
                        roadMapData.map((item, index) => {
                            return (
                                <>
                                    <div className="event" key={index}>
                                        <p className="step-no">{item.stepNo}</p>
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