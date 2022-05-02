// Inbuilt Modules
import { useState } from "react"
// Icons
import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"
// Scroll
import { Link } from "react-scroll"

const NavBar = () => {
    // Navigation Menu State
    const [clicked, setClicked] = useState(false)

    return (
        <>
            <nav className="nav-bar">
                <div className="logo">
                    <img src="/assets/logo.png" alt="" />
                </div>
                <ul className={`menu ${clicked ? "show-menu" : ""}`}>
                    <li><Link activeClass="active" className="menu-link" to="hero" spy={true} smooth={true} offset={0}>Home</Link></li>
                    <li><Link activeClass="active" className="menu-link" to="about" spy={true} smooth={true} offset={0}>About</Link></li>
                    <li><Link activeClass="active" className="menu-link" to="roadmap" spy={true} smooth={true} offset={0}>Roadmap</Link></li>
                    <li><Link activeClass="active" className="menu-link" to="faq" spy={true} smooth={true} offset={0}>FAQ</Link></li>
                    <li><Link activeClass="active" className="menu-link" to="team" spy={true} smooth={true} offset={0}>Team</Link></li>
                </ul>
                <a className="menu-toggle-btn" onClick={() => setClicked(!clicked)}>{clicked ? <FaTimes /> : <GiHamburgerMenu />}</a>
            </nav>
        </>
    )
}

export default NavBar