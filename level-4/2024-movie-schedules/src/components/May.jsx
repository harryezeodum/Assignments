import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function May() {
    const context = useContext(MovieContext);

    return (
        <div>
            <h1 id="may--title" className="home--month">Summer 2024</h1>
            <h2 id="may" className="home--month">MAY 2024</h2>
            <h3>May 3 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Fall+Guy&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The Fall Guy</strong></span></Link> 
            <h3>May 10 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Back+to+Black&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Back to Black</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Horrorscope&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Horrorscope</strong></span></Link>
            <h3>May 17 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=IF&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>IF - Imaginary Friends</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Strangers%3A+Chapter+1&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The Strangers: Chapter 1</strong></span></Link>
            <h3>May 24 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Furiosa%3A+A+Mad+Max+Saga&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Furiosa: A Mad Max Saga</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Kingdom+of+the+Planet+of+the+Apes&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Kingdom of the Planet of the Apes</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Garfield+Movie&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The Garfield Movie</strong></span></Link>
            <h3>May 31 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=1992&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">1992</span></Link>
        </div>
    )
}
export default May

