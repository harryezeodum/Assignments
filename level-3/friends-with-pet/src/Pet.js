import React from "react";

function Pet(props) {
    return (
        <div>
            <ul>
            <li>Pet Name: {props.name}</li>
            </ul>
            <ul>
            <li>Breed: {props.breed}</li>
            </ul>
        </div>
    )
}
export default Pet
