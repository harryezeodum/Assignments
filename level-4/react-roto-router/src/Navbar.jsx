import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="./">
                <h4 className="navbar--home">Home</h4>
            </Link>

            <Link to="/about">
                <h4>About</h4>
            </Link>

            <Link to="/services">
                <h4>Services</h4>
            </Link>
        </nav>
    )
}

export default Navbar