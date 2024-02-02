import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
                <h3 className="nav">Home</h3>
            </Link>

            <Link to="/about">
                <h3 className="nav">About</h3>
            </Link>

            <Link to="/contact">
                <h3 className="nav">Contact</h3>
            </Link>
        </nav>
    )
}
export default Navbar