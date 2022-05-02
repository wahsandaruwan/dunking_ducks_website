import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"

const NavBar = () => {
    const [clicked, setClicked] = useState(false)
    console.log(clicked)
    return (
        <>
            <nav className="nav-bar">
                <div className="logo">
                    <img src="/assets/logo.png" alt="" />
                </div>
                <ul className={`menu ${clicked ? "show-menu" : ""}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Roadmap</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Team</a></li>
                </ul>
                <a className="menu-toggle-btn" onClick={() => setClicked(!clicked)}>{clicked ? <FaTimes /> : <GiHamburgerMenu />}</a>
            </nav>
        </>
    )
}

export default NavBar