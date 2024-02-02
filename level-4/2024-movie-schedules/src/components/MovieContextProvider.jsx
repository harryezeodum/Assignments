import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const MovieContext = React.createContext();

function MovieContextProvider(props) {
    const [data, setData] = useState({});
    const [formSubmit, setFormSubmit] = useState([]);
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        comments: ""
    })
    const navigate = useNavigate();

    function formChanges(event) {
        const { name, value } = event.target;
        setForm(prevForm => {
            return {
                ...prevForm, [name]: value
            }
        });
    }

    function formSubmits(event) {
        event.preventDefault();
        setFormSubmit(prev => {
            return [
                ...prev, form
            ]
        })

        setForm({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            comments: ""
        })
       

        navigate("/confirmation");
    }

    function movieData(movie) {
        axios.get(`${movie}&apikey=c2d5f863`)
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    }

    return (
        <MovieContext.Provider value={{
            movieData,
            data,
            form,
            formChanges,
            formSubmits,
            formSubmit
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}
export { MovieContext, MovieContextProvider }