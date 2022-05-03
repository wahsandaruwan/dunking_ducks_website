// Custom Component
import Member from "./Member"
// Data
import teamData from "../data/teamData.json"
// Typewriter
import TypeWriterEffect from "react-typewriter-effect"

const Team = () => {
    return (
        <>
            <div className="section team-section" id="team">
                <h1 className="section-title">
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: "Dancing Script",
                            fontSize: "3rem",
                            textAlign: "center"
                        }}
                        startDelay={100}
                        cursorColor="#ffffff"
                        text="Our Team!"
                        typeSpeed={100}
                    />
                </h1>
                <div className="team-content">
                    {
                        teamData.map((item, index) => {
                            return (
                                <Member image={item.image} name={item.name} position={item.position} facebook={item.facebook} twitter={item.twitter} instagram={item.instagram} linkedin={item.linkedin} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Team