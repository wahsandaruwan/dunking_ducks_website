import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"

const Member = ({ image, name, position, facebook, twitter, instagram, linkedin }) => {
    return (
        <>
            <div className="team-member">
                <div className="member-img">
                    <img src={image} alt="" />
                </div>
                <div className="member-details">
                    <p className="member-name">{name}</p>
                    <p className="member-position">{position}</p>
                </div>
                <div className="social-links">
                    <a className="so-btn" href={facebook}><FaFacebookSquare /></a>
                    <a className="so-btn" href={twitter}><FaTwitterSquare /></a>
                    <a className="so-btn" href={instagram}><FaInstagramSquare /></a>
                    <a className="so-btn" href={linkedin}><FaLinkedin /></a>
                </div>
            </div>
        </>
    )
}

export default Member