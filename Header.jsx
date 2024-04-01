const Header = () => {
    return (
        <nav className="navbar">
            <h1>EC</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Experiences</a>
                <a href="/">Projects</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#3b69de",
                    borderRadius: "8px"

                }}>Resume</a>
            </div>
        </nav>
    )
}

export default Header;