import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function February() {
    const context = useContext(MovieContext);
    return (
        <div>
            <h2 id="feb" className="home--month">FEBRUARY 2024</h2>
            <h3>February 2 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Argylle&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Argylle</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Bosco&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Bosco</span></Link> (Peacock) <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Departing+Seniors&plot=full")} to="/moviedetails"><span className="home--titles">Departing Seniors</span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=How+to+Have+Sex&plot=full")} to="/moviedetails"><span className="home--titles">How to Have Sex</span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Orion+and+the+Dark&plot=full")} to="/moviedetails"><span className="home--titles">Orion and the Dark</span></Link>
            <h3>February 9 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Lisa+Frankenstein&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Lisa Frankenstein</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Drift&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Drift</span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Upgraded&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Upgraded</span></Link>
            <h3>February 14 (Wednesday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Madame+Web&y=2024")} to="/moviedetails"><span className="home--titles"><strong>Madame Web</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=What+About+Love&y=2024")} to="/moviedetails"><span className="home--titles"><strong>What About Love</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Players&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Players</span></Link> (Netflix)
            <h3>February 16 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Land+of+Bad&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Land of Bad</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Lights+Out&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Lights Out</span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=No+Way+Up&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">No Way Up</span></Link>
            <h3>February 23 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Drive-Away+Dolls&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Drive-Away Dolls</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Ordinary+Angels&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Ordinary Angels</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=About+Dry+Grasses&plot=full")} to="/moviedetails"><span className="home--titles">About Dry Grasses</span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Io+Capitano&plot=full")} to="/moviedetails"><span className="home--titles">Io Capitano</span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Wicked+Little+Letters&y=2023&plot=full")} to="/moviedetails"><span className="home--titles">Wicked Little Letters</span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Red+Right+Hand&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Red Right Hand</span></Link> <br /> <br />
        </div>
    )
}
export default February