import React from "react";
import { useNavigate } from "react-router";

function About() {
    const navigate = useNavigate();
    
    function backButton() {
        navigate(-1);
    }

    return (
        <div className="about">
            <button className="backButton" onClick={backButton}>Back</button>
            <h1 className="about--title">About US</h1>
            <div className="about--text">
Welcome to 2024 New Movies Schedule, your ultimate destination for all things cinema! We take pride in being the go-to platform for movie enthusiasts seeking the latest information on new releases and their schedules. Our user-friendly website is meticulously designed to provide a seamless and immersive experience for anyone looking to stay up-to-date with the world of film. <br /> <br />

At 2024 New Movies Schedule, we understand the importance of comprehensive movie details. Our database showcases a plethora of information, including titles, years, ratings, genres, release dates, directors, runtimes, plots, languages, countries, writers, and actors. Whether you're a casual moviegoer or a dedicated cinephile, our platform offers a one-stop solution to fulfill your curiosity about the latest releases and their intricate details. <br /> <br />

We believe that a love for movies transcends boundaries, and our website reflects this by presenting information in a clear and organized manner. Navigate through our user-friendly interface to discover not only the hottest new releases but also a treasure trove of cinematic knowledge. Stay tuned with us to plan your movie nights, explore diverse genres, and dive deep into the world of filmmaking. 2024 New Movies Schedule is not just a website; it's your cinematic companion, bringing the magic of the silver screen directly to your fingertips. Join us in celebrating the art of storytelling through film!</div>
        </div>
    )
}
export default About