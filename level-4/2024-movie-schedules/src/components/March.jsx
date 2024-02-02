import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./MovieContextProvider";

function March() {
    const context = useContext(MovieContext);
    return (
        <div>
            <h2 id="mar" className="home--month">MARCH 2024</h2>
            <h3>March 1 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Dune&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Dune</strong></span></ Link> (IMAX) <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Spaceman&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Spaceman</span></Link> (Netflix)
            <h3>March 7 (Thursday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Ricky+Stanicky&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Ricky Stanicky</span></Link>
            <h3>March 8 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Imaginary&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Imaginary</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Imaginary&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Kung Fu Panda 4</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Imaginary&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Rayman's Big Movie</strong></span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Damsel&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Damsel</span></Link> (Netflix) <br/> <br/>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Love+Lies+Bleeding&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Love Lies Bleeding</span></Link>
            <h3>March 15 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=The+American+Society+of+Magical+Negroes&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>The American Society of Magical Negroes</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=DogMan&y=2023&plot=full")} to="/moviedetails"><span className="home--titles">DogMan</span></Link>
            <h3>March 21 (Thursday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Arthur+the+King&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Arthur the King</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Road+House&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Road House</span></Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=sleeping+Dogs&y=2024&plot=full")} to="/moviedetails"><span className="home--titles">Sleeping Dogs</span></Link>
            <h3>March 22 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Ghostbusters&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Ghostbusters: Frozen Empire</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Femme&y=2023&plot=full")} to="/moviedetails"><span className="home--titles">Femme</span></Link>
            <h3>March 29 (Friday)</h3>
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Godzilla+x+Kong&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Godzilla x Kong: The New Empire</strong></span></ Link> <br /> <br />
            <Link onClick={() => context.movieData("http://www.omdbapi.com/?t=Mickey+17&y=2024&plot=full")} to="/moviedetails"><span className="home--titles"><strong>Mickey 17</strong></span></Link>
        </div>
    )
}
export default March