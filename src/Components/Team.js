import Member from "./Member"
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
                        teamData.map((member, index) => {
                            return (
                                <Member image={member.image} name={member.name} position={member.position} facebook={member.facebook} twitter={member.twitter} instagram={member.instagram} linkedin={member.linkedin} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Team