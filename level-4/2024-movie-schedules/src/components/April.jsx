import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function April() {
    const context = useContext(MovieContext);
    return (
        <div>
            <h2 id="apr" className="home--month">APRIL 2024</h2>
            <h3>April 5 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+First+Omen&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The First Omen</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Monkey+Man&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Monkey Man</strong></span></ Link>
            <h3>April 11 (Thursday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Housekeeping+for+Beginners&y=2023&plot=full")} to="/moviedetails"><span className="home--titles">Housekeeping for Beginners</span></Link>
            <h3>April 12 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Sting&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Sting</span></Link>
            <h3>April 19 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Ministry+of+Ungentlemanly+Warfare&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The Ministry of Ungentlemanly Warfare</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Rebel+Moon+-+Part+Two%3A+The+Scargiver&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Rebel Moon - Part Two: The Scargiver</span></Link>
            <h3>April 25 (Thursday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Immaculate&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Immaculate</span></Link>
            <h3>April 26 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Civil+War&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Civil War</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Challengers&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Challengers</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Feeling+that+the+time+for+Doing+Something+Has+Passed+&plot=full")} to="/moviedetails"><span className="home--titles">The Feeling that the time for Doing Something Has Passed</span></Link>
        </div>
    )
}
export default April