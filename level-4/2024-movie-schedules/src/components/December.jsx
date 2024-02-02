import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function December() {
    const context = useContext(MovieContext);

    return (
        <div>
            <h2 id="dec" className="home--month">DECEMBER 2024</h2>
            <h3>December 13 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Lord+of+the+Rings&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The Lord of the Rings: The War of the Rohirrim</strong></span></ Link>
            <h3>December 13 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Mufasa&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Mufasa: The Lion King</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Sonic+the+Hedgehog+3&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Sonic the Hedgehog 3</strong></span></ Link>
            <h3>December 25 (Wednesday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Nosferatu&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Nosferatu</strong></span></ Link>
        </div>
    )
}
export default December