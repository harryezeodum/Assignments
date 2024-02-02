import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function October() {
    const context = useContext(MovieContext);

    return (
        <div>
            <h2 id="oct" className="home--month">OCTOBER 2024</h2>
            <h3>October 4 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Joker%3A+Folie+a+Deux&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Joker: Folie a Deux</strong></span></ Link>
            <h3>October 18 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Smile+2&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Smile 2</strong></span></ Link>
            <h3>October 25 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Terrifier+3&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Terrifier 3</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Wolf+Man&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Wolf Man</strong></span></ Link>
        </div>
    )
}
export default October