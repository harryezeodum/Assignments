import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function September() {
    const context = useContext(MovieContext);

    return (
        <div>
            <h2 id="sep" className="home--month">SEPTEMBER 2024</h2>
            <h3>September 6 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Beetlejuice+2&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Beetlejuice 2</strong></span></ Link>
            <h3>September 13 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Transformers+One&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Transformers One</strong></span></ Link>
            <h3>September 20 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Wild+Robot&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The Wild Robot</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Wolfs&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Wolfs</strong></span></ Link>
            <h3>September 27 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=SAW+XI&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>SAW XI</strong></span></ Link>
        </div>
    )
}
export default September