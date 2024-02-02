import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function June() {
    const context = useContext(MovieContext);

    return (
        <div>
            <h2 id="jun" className="home--month">JUNE 2024</h2>
            <h3>June 7 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Ballerina&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Ballerina</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Karate+Kid&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Karate Kid</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Watchers&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The Watchers</strong></span></Link>
            <h3>June 14 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Bad+Boys+4&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Bad Boys 4</strong></span></Link>
            <h3>June 21 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Bikeriders&y=2023&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The Bikeriders</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=It+Ends+with+Us&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>It Ends with Us</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Firebrand&y=2023&plot=full")} to="/moviedetails"><span className="home--titles">Firebrand</span></Link> (Theaters)
            <h3>June 28 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Horizon%3A+An+American+Saga&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Horizon: An American Saga Part 1</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=A+Quiet+Place%3A+Day+One&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>A Quiet Place: Day One</strong></span></Link>
        </div>
    )
}
export default June