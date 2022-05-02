// Custom Component
import Member from "./Member"
// Data
import teamData from "../data/teamData.json"

const Team = () => {
    return (
        <>
            <div className="section team-section">
                <h1 className="section-title">
                    Out Team!
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