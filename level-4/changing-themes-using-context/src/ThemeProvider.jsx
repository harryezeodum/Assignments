import React, { useState } from "react";

const Theme = React.createContext();

function ThemeProvider(props) {
    const [color, setColor] = useState("light");

    function toggleTheme() {
        setColor(prevColor => prevColor === "light" ? "dark" : "light");
    }
    function onChangeToggleTheme() {
        setColor(prevColor => prevColor === "light" ? "dark" : "light");
    }

    return (
        <>
            <Theme.Provider value={{
                color: color,
                toggleTheme: toggleTheme,
                onChangeToggleTheme: onChangeToggleTheme
            }}
            >
                {props.children}
            </Theme.Provider>
        </>
    )
}
export { Theme, ThemeProvider }