import React, { useContext } from "react";
import { Theme } from "./ThemeProvider";

function Navbar() {
    const context = useContext(Theme)
    return (
        <>
            <div className={`${context.color}-navbar`}>
                <ul className="ul">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    )
}
export default Navbar