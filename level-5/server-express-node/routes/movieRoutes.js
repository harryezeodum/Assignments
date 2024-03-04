const express = require("express");
const movieRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const movies = [
    {
        title: "Spiderman",
        genre: "Marvel",
        year: 2023,
        _id: uuidv4()
    },
    {
        title: "Superman",
        genre: "Marvel",
        year: 2018,
        _id: uuidv4()
    },
    {
        title: "Fear",
        genre: "Horror",
        year: 2024,
        _id: uuidv4()
    },
    {
        title: "Unfaithful",
        genre: "Drama",
        year: 2020,
        _id: uuidv4()
    }
];

movieRouter.route("/")
    .get((req, res) => {
        res.send(movies);
    })
    .post((req, res) => {
        const newMovie = req.body;
        newMovie._id = uuidv4();
        movies.push(newMovie);
        res.send(newMovie);
    })

movieRouter.route("/:movieId")
    .get((req, res) => {
        const movieId = req.params.movieId;
        const foundMovie = movies.find(movie => movie._id === movieId);
        res.send(foundMovie);
    })

    .put((req, res) => {
        const movieId = req.params.movieId;
        const updatedMovie = req.body;
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        if (movieIndex !== -1) {
            const updated = Object.assign(movies[movieIndex], updatedMovie);
            res.send(updated);
        } else {
            res.status(404).send("Movie not found");
        }
        
    })

    .delete((req, res) => {
        const movieId = req.params.movieId;
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        movies.splice(movieIndex, 1);
        res.send("Successfully deleted the Movie");
    })

movieRouter.route("/search/genre")
    .get((req, res) => {
        console.log(req)
        const genre = req.query.genre;
        const foundMovie = movies.filter(movie => movie.genre.toLowerCase() === genre);
        res.send(foundMovie);
    })

movieRouter.route("/search/year")
    .get((req, res) => {
        const year = req.query.year;
        const foundMovie = movies.filter(movie => movie.year === parseInt(year));
        res.send(foundMovie);
    })

module.exports = movieRouter