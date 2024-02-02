import React, { useContext, useEffect } from "react";
import { MovieContext } from "./MovieContextProvider";
import { useNavigate } from "react-router-dom";

function MovieDetails() {
    const context = useContext(MovieContext);
    const navigate = useNavigate();

    function backButton() {
        navigate(-1);
    }
 
    useEffect(() => {
        if (Object.keys(context.data).length === 0) {
            navigate('/');
        }
    }, []);
    console.log(Object.keys(context.data));


    return (
        <div className="movie-detail">
            <button className="backButton" onClick={backButton}>Back</button>
            <div className="movieDetails">
                <img src={context.data.Poster} alt="No image available" width="300px" height="300px" /> <br /> <br />
                <span><strong>Title: </strong></span> <span>{context.data.Title}</span> <br /> <br />
                <span><strong>Year: </strong></span> <span>{context.data.Year}</span> <br /> <br />
                <span><strong>Actors: </strong></span> <span>{context.data.Actors}</span> <br /> <br />
                <span><strong>Rated: </strong></span> <span>{context.data.Rated}</span> <br /> <br />
                <span><strong>Released: </strong></span> <span>{context.data.Released}</span> <br /> <br />
                <span><strong>Runtime: </strong></span> <span>{context.data.Runtime}</span> <br /> <br />
                <span><strong>Genre: </strong></span> <span>{context.data.Genre}</span> <br /> <br />
                <span><strong>Directors: </strong></span> <span>{context.data.Director}</span> <br /> <br />
                <span><strong>Writers: </strong></span> <span>{context.data.Writer}</span> <br /> <br />
                <span><strong>Plot: </strong></span> <span>{context.data.Plot}</span> <br /> <br />
                <span><strong>Language: </strong></span> <span>{context.data.Language}</span> <br /> <br />
                <span><strong>Country: </strong></span> <span>{context.data.Country}</span> <br /> <br />

            </div>
        </div>
    )
}
export default MovieDetails