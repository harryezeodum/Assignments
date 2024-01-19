import React, {useContext} from "react";
import { Theme } from "./ThemeProvider";

function Footer() {
    const context = useContext(Theme);
    return (
        <>
            <div>
                <small className={`${context.color}-footer`}> @The amazing Footer</small>
            </div>
        </>
    )
}
export default Footer