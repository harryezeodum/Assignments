import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function August() {
    const context = useContext(MovieContext);

    return (
        <div>
            <h2 id="aug" className="home--month">AUGUST 2024</h2>
            <h3>August 2 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Harold+and+the+Purple+Crayon&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Harold and the Purple Crayon</strong></span></ Link>
            <h3>August 9 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Borderlands&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Borderlands</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Speak+No+Evil&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Speak No Evil</strong></span></ Link>
            <h3>August 16 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Alien%3A+Romulus&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Alien: Romulus</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Horizon%3A+An+American+Saga&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Horizon: An American Saga Part 2</strong></span></ Link>
            <h3>August 22 (Thursday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Late+Night+with+the+Devil&y=2023&plot=full")} to="/moviedetails"><span className="home--titles">Late Night with the Devil</span></Link>
            <h3>August 30 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Kraven+the+Hunter&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Kraven the Hunter</strong></span></ Link>
        </div>
    )
}
export default August