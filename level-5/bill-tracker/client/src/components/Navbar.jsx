import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/">
                <h2 className="nav-title">Home</h2>
            </Link>

            <Link to="/allbilltrackers">
                <h2 className="nav-title">All Bill Trackers</h2>
            </Link>

            <Link to="/aboutus">
                <h2 className="nav-title">About us</h2>
            </Link>

            <Link to="/contact">
                <h2 className="nav-title">Contact us</h2>
            </Link>
        </nav>
    )
}
export default Navbar;