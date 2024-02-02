import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function July() {
    const context = useContext(MovieContext);

    return (
        <div>
            <h2 id="jul" className="home--month">JULY 2024</h2>
            <h3>July 3 (Wednesday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Despicable+Me+4&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Despicable Me 4</strong></span></Link>
            <h3>July 12 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Project+Artemis&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Project Artemis</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Longlegs&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Longlegs</span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Touch&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Touch</span></Link>
            <h3>July 19 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Twisters&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Twisters</strong></span></Link>
            <h3>July 26 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Deadpool+3&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Deadpool 3</strong></span></Link>
        </div>
    )
}
export default July