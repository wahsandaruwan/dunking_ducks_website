import logo from "../images/logo.png"

const NavBar = () => {
    return (
        <>
            <nav className="nav-bar">
                <div className="logo">
                    {/* Crypto<span>Hub</span> */}
                    <img src={logo} alt="" />
                </div>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar