import React from "react";
import Pet from "./Pet";

function Friend(props) {
    const petNames = props.pet.map((pet, index) => <Pet key={index} name={pet.name} breed={pet.breed}/>)
    return (
        <ul>
            <li>
                <div>
                    <h3>Name: {props.name}</h3>
                    <h3>Age: {props.age}</h3>
                    <h3>Pets: </h3>
                    {petNames} <hr/>
                </div>
            </li>
        </ul>
    )
}
export default Friend