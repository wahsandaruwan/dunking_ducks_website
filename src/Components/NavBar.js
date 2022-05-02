const NavBar = () => {
    return (
        <>
            <nav className="nav-bar">
                <div className="logo">
                    <img src="/assets/logo.png" alt="" />
                </div>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Roadmap</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Team</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar