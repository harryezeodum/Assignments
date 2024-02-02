import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function January() {
    const context = useContext(MovieContext);
    return (
        <div>
            <h2 id="jan" className="home--month">JANUARY 2024</h2>
            <h3>January 1 (Monday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=One+Life&y=2023&plot=full")} to="/moviedetails"><span className="home--titles"><strong>One Life</strong></span></Link>
            <h3>January 3 (Wednesday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Self+Reliance&plot=full")} to="/moviedetails"><span className="home--titles">Self Reliance</span></Link>
            <h3>January 4 (Thursday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=society+of+the+snow&plot=full")} to="/moviedetails"><span className="home--titles">Society of the Snow </span></Link> (Netflix)
            <h3>January 5 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Memory&y=2023&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Memory</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Memory&y=2023&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Night Swim</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+bricklayer&plot=full")} to="/moviedetails"><span className="home--titles">The Bricklayer</span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Good+Grief&y=2023&plot=full")} to="/moviedetails"><span className="home--titles">Good Grief</span></Link> (Netflix) <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=He+went+that+way&y=2023&plot=full")} to="/moviedetails"><span className="home--titles">He went that way</span></Link>
            <h3>January 12 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Beekeeper&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The Beekeeper</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Book+of+Clarence&y=2023&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The Book of Clarence</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Mean+girls&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Mean Girls</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Lift&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Lift</span></Link> (Netflix) <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Role+play&y=2023&plot=full")} to="/moviedetails"><span className="home--titles">Role Play</span></Link>
            <h3>January 19 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+End+We+Start+From&y=2023&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The End We Start From</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Founders+Day&y=2023&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Founders Day</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=I.S.S.&y=2023&plot=full")} to="/moviedetails"><span className="home--titles"><strong>I.S.S.</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Origin&y=2023&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Origin</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Kitchen&y=2023&plot=full")} to="/moviedetails"><span className="home--titles">The Kitchen</span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Sunrise&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Sunrise</span></Link> (Theaters) <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Which+Brings+Me+To+You&y=2023&plot=full")} to="/moviedetails"><span className="home--titles">Which Brings Me To You</span></Link>
            <h3>January 26 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Miller's+Girl&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Miller's Girl</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Badland+Hunters&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Badland Hunters</span></Link> (Netflix) <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+Underdoggs&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">The Underdoggs</span></Link> (Prime Video) <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=American+Star&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">American Star</span></Link>
        </div>
    )
}
export default January