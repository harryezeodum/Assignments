import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function November() {
    const context = useContext(MovieContext);

    return (
        <div>
            <h2 id="nov" className="home--month">NOVEMBER 2024</h2>
            <h3>November 8 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Amateur&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The Amateur</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Venom+&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Venom Sequel</strong></span></ Link>
            <h3>November 15 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Alto+Knights&y=2024")} to="/moviedetails"><span className="home--titles"><strong>Alto Knights</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Red+One&y=2024")} to="/moviedetails"><span className="home--titles"><strong>Red One</strong></span></ Link>
            <h3>November 22 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Gladiator+2&y=2024")} to="/moviedetails"><span className="home--titles"><strong>Gladiator 2</strong></span></ Link> 
            <h3>November 27 (Wednesday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Wicked&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Wicked</strong></span></ Link> 
        </div>
    )
}
export default November