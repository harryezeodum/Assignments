import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Contact from "./components/Contact";
import { Routes, Route, Navigate } from "react-router";
import About from "./components/About";
import Confirmation from "./components/Confirmation";

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieDetails" element={<MovieDetails />} />
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    </>
  )
}

export default App
