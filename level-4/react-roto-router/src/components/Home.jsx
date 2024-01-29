import React from "react";
import sample from "../images/sample.png";


function Home() {
    return (
        <div className="homepage">
            <h2>My Plumbing Services</h2>
            <p>24-Hour Plumber Available Today</p>
            <p>Call Now: <span>(800) 456-2312</span></p>
            <img src={sample} className="homepage--img" />
        </div>
    )
}
export default Home