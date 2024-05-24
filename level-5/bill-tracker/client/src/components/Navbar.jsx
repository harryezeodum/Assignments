import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContextProvider";

function Navbar() {
    const userContext = useContext(UserContext);

    return (
        <nav className="nav">
            {!userContext.isLoggedIn && !userContext.userState.token && <Link to="/">
                <h2 className="nav-title">Home</h2>
            </Link>}

            {userContext.isLoggedIn && userContext.userState.user.isAdmin && <Link to="/allbilltrackers">
                <h2 className="nav-title">All Bill Trackers</h2>
            </Link>}

            {userContext.isLoggedIn && !userContext.userState.user.isAdmin && <Link to="/userbilltracker">
                <h2 className="nav-title">My Bill Trackers</h2>
            </Link>}

            {userContext.isLoggedIn && <Link to="">
                <h2 className="nav-title" onClick={userContext.logout}>Logout</h2>
            </Link>}

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