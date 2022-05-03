// Inbuilt Modules
import { useEffect } from "react";
// Icons
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
// Scroll Animation
import Aos from "aos"
import "aos/dist/aos.css"

const Member = ({ image, name, position, facebook, twitter, instagram, linkedin }) => {
    // Global Animations
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div data-aos="flip-left" className="team-member">
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