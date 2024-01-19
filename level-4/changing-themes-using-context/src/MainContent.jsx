import React, { useContext } from "react";
import { Theme } from "./ThemeProvider";

function MainContent(props) {
    const context = useContext(Theme);
    return (
        <div className={`${context.color}-maincontent`}>
            <label htmlFor="theme"> Pick a theme</label>
            <select id="theme" onChange={context.onChangeToggleTheme} className="dropdown">
                <option>Light</option>
                <option>Dark</option>
            </select>
            <h2 className={`${context.color}-maincontext-text`}>Click the button to toggle the {context.color} theme</h2>
            <div><button onClick={context.toggleTheme} className={`${context.color}-button`}>Toggle Theme</button></div>
        </div>
    )
}
export default MainContent