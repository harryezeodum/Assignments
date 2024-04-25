import React, { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [cars, setCars] = useState([]);

  const listOfCars = cars.map((car, index) => {
    return [
      <li key={index}>
      <h3>Make: {car.make}</h3>
      <h3>Model: {car.model}</h3>
      <h3>Year: {car.year}</h3>
    </li>
    ]
    
  });

  useEffect(() => {
    axios.get("/api/cars")
      .then(response => setCars(response.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <ol>
        {listOfCars}
      </ol>
    </>
  )
}

export default App
