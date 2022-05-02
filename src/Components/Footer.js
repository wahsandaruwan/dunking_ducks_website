import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa"
import LargeButton from "./LargeButton"

const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <div className="discord">
                    <LargeButton clsName="main-btn" btnTxt="Join Discord" btnUrl="https://discordapp.com" />
                </div>
                <div className="social-links">
                    <a className="so-btn" href="https://www.facebook.com"><FaFacebookSquare /></a>
                    <a className="so-btn" href="https://www.twitter.com"><FaTwitterSquare /></a>
                    <a className="so-btn" href="https://www.instagram.com"><FaInstagramSquare /></a>
                    <a className="so-btn" href="https://www.linkedin.com"><FaLinkedin /></a>
                </div>
                <div className="credit">
                    <p className="company">DunkingDucks All Rights Reserved : Copyright &copy; 2022</p>
                    <p className="thanks">Thank you for your Support!</p>
                </div>
            </div>
        </>
    )
}

export default Footer